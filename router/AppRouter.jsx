import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../src/auth/pages/LoginPage"
import { HeroesRoutes } from "../src/heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            <Route path="*" element ={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />
        </Routes>
    </>
  )
}
