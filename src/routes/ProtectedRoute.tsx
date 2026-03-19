import { Navigate } from "react-router-dom";
import { useAppStore } from "../store/storeApp";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
    const isAuth = useAppStore((state) => state.isLoggedIn);
    if (!isAuth) {
        return <Navigate to="/" replace />;
    }
    return children;
}
