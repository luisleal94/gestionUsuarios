import { useState } from "react";
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar";
import { cleanState, guardaDatos, handleForm } from "../util/handleDashboard";
import { Button } from "@headlessui/react";
import { Popup } from "../components/Popup";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mensajePopup, setmensajePopup] = useState('')
  const [popup, setPopup] = useState(false);
  const [showDiv, setshowDiv] = useState(false);
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [posicion, setposicion] = useState('');
  const [pais, setpais] = useState('');
  const [estatura, setestatura] = useState('');
  const [peso, setpeso] = useState('');

  const procesaDatos = async () => {
    const datosGuardados =  await guardaDatos(nombre, apellido, posicion, pais, estatura, peso, setshowDiv, setmensajePopup);
    if (datosGuardados) {
      setmensajePopup('Jugador agregado exitosamente');
      cleanState(setnombre, setapellido, setposicion, setpais, setestatura, setpeso);
    }
    setPopup(true);
  }

  return (
    <>
      <Header toggleMenu={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div className="flex flex-wrap justify-center mt-8">
        <div className="bg-blue-500 text-white p-4 m-2 flex-1 min-w-[200px] max-w-[300px] text-center cursor-pointer" onClick={handleForm.bind(null, setshowDiv)}>
          <h2 className="text-lg font-bold">Agregar jugador</h2>
        </div>
        <div className="bg-green-500 text-white p-4 m-2 flex-1 min-w-[200px] max-w-[300px] text-center cursor-pointer" onClick={() => console.log("eliminar")}>
          <h3 className="text-lg font-semibold">
            Eliminar jugador
          </h3>
        </div>
        <div className="bg-yellow-500 text-white p-4 m-2 flex-1 min-w-[200px] max-w-[300px] text-center cursor-pointer" onClick={() => console.log("modificar")}>
          <h3 className="text-lg font-semibold">
            Modificar datos y/o posición del jugador
          </h3>
        </div>
      </div>
      {showDiv && (
        <div className="flex items-center justify-center p-15">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6 border-b pb-4 border-gray-200 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Información del jugador
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setnombre(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setapellido(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Posicion de juego
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setposicion(e.target.value)}

                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  País de origen
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setpais(e.target.value)}
                >
                  <option>México</option>
                  <option>Estados Unidos</option>
                  <option>Canadá</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Estatura
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setestatura(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Peso
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setpeso(e.target.value)}
                />
              </div>

            </div>
            <div className="mt-6 flex gap-4">
              <Button
                className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition flex-1"
                onClick={() => procesaDatos()}
              >
                Guardar
              </Button>
              <Button
                className="bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition flex-1"
                onClick={() => setshowDiv(false)}
              >
                Cerrar
              </Button>
            </div>

          </div>
        </div>
      )}
      {popup && ( Popup({ setIsOpen: setPopup, mensaje: mensajePopup })
      )}

    </>
    

  )
}

export default Dashboard