interface PopupProps {
  setIsOpen: (isOpen: boolean) => void;
  mensaje: string;
}

export const Popup = ({ setIsOpen, mensaje }: PopupProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 text-center 
                      transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-lg font-semibold mb-4">
          {mensaje}
        </h2>
        <div className="mt-4 flex justify-center border-t pt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-500 text-white px-5 py-2 rounded-lg 
                       hover:bg-red-600 transition duration-200"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};