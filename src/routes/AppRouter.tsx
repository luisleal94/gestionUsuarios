import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import { ProtectedRoute } from "./ProtectedRoute"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route 
            path="/dashboard"
            element={
                <ProtectedRoute >
                    <Dashboard />
                </ProtectedRoute>
            }/>
    </Routes>
  )
}
