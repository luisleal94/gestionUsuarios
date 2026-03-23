import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"
import './index.css'
import { useAppStore } from "./store/storeApp"
import { useEffect } from "react"
export const App = () => {
  const { modoOscuro } = useAppStore();
  useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modoOscuro]);

  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
