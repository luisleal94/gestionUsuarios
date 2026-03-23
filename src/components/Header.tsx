import { useAppStore } from "../store/storeApp";
import { Button } from "./atom/Button";

type HeaderProps = {
  toggleMenu: () => void;
};

export const Header = ({ toggleMenu }: HeaderProps) => {
  const { logout, toggleModoOscuro, modoOscuro } = useAppStore();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Error", "No se pudo cerrar sesión");
    }
  };

  return (
    <header className="bg-sky-500 text-white px-6 h-16 flex items-center justify-between shadow-md 
                   dark:bg-gray-900 dark:text-gray-100 
                   transition-colors duration-500">
  <div className="flex items-center gap-4">
    <button
      onClick={toggleMenu}
      className="text-2xl hover:bg-sky-600 p-1 rounded-md transition"
    >
      ☰
    </button>

    <h1 className="text-lg font-semibold">
      Plantilla del cruz azul
    </h1>
  </div>
  <div className="flex items-center gap-4">
    <Button 
      text={modoOscuro ? "🌞" : "🌙"} 
      onClick={toggleModoOscuro} 
      className="bg-transparent border border-transparent py-1 px-3 text-sm rounded-md 
                 hover:bg-sky-600/20 hover:text-white transition"
    />
    <Button 
      text="Cerrar sesión" 
      onClick={handleLogout} 
      className="bg-transparent border border-transparent py-1 px-3 text-sm rounded-md 
                 hover:bg-sky-600/20 hover:text-white transition"
    />
  </div>
</header>
  );
};