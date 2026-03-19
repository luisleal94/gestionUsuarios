type SidebarProps = {
  isOpen: boolean;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-gray-800 text-white
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 z-50
      `}
    >
      <div className="p-4 text-lg font-bold">Menú</div>

      <nav className="flex flex-col gap-2 p-4">
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer">Partidos</a>
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer">Perfiles</a>
        <a className="hover:bg-gray-700 p-2 rounded cursor-pointer">Configuración</a>
      </nav>
    </aside>
  );
};