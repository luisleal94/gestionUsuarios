import { Button } from "@headlessui/react";
import type { PlayerData } from "../interface/playerData";

interface FormPlayerProps {
  setshowDiv: (value: boolean) => void;
  nombre: string;
  setnombre: (value: string) => void;
  apellido: string;
  setapellido: (value: string) => void;
  posicion: string;
  setposicion: (value: string) => void;
  pais: string;
  setpais: (value: string) => void;
  estatura: string;
  setestatura: (value: string) => void;
  peso: string;
  setpeso: (value: string) => void;
  procesaDatos: () => void;
  datosEdit?: PlayerData | null;
}

export const FormPlayer = ({
  setshowDiv,
  nombre, setnombre,
  apellido, setapellido,
  posicion, setposicion,
  pais, setpais,
  estatura, setestatura,
  peso, setpeso,
  procesaDatos
 }: FormPlayerProps) => {
  return (
    <div className="flex items-center justify-center p-15 fixed inset-0 bg-black/50 z-50">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 dark:bg-gray-700 dark:text-gray-100 transition-colors duration-500">
            <div className="mb-6 border-b pb-4 border-gray-200 text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 dark:text-gray-100">
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
                  value={nombre}
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
                  value={apellido}
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
                  value={posicion}

                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  País de origen
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  onChange={(e) => setpais(e.target.value)}
                  value={pais}
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
                  value={estatura}
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
                  value={peso}
                />
              </div>

            </div>
            <div className="mt-6 flex gap-4">
              <Button
                className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition flex-1 dark:bg-green-700 dark:hover:bg-green-800 dark:text-gray-900"
                onClick={() => procesaDatos()}
              >
                Guardar
              </Button>
              <Button
                className="bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition flex-1 dark:bg-sky-700 dark:hover:bg-sky-800 dark:text-gray-900"
                onClick={() => setshowDiv(false)}
              >
                Cerrar
              </Button>
            </div>

          </div>
        </div>
  )
}
