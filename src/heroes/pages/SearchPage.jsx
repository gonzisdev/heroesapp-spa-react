import { HeroCard } from "../components/HeroCard"
import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { getHeroesByName } from "../helpers/getHeroesByName"

export const SearchPage = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const { q = "" } = queryString.parse(location.search)
	const heroes = getHeroesByName(q)

	const { searchText, onInputChange } = useForm({
		searchText: q,
	})

	const onSearchSubmit = (e) => {
		e.preventDefault()
		// if (searchText.trim().length <= 1) return
		navigate(`?q=${searchText}`)
	}

	return (
		<>
			<h1>Búsqueda</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type="text"
							name="searchText"
							className="form-control"
							placeholder="Find your hero"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button
							type="submit"
							className="btn mt-2 btn-block btn-outline-primary"
						>
							Search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{q === "" ? (
						<div className="alert alert-primary">Search a hero</div>
					) :  (heroes.length === 0 &&
						<div className="alert alert-danger">
							No hero with <b>{q}</b>
						</div>
					)}
					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	)
}
