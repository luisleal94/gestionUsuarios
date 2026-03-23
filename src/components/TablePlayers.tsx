import type { PlayerData } from "../interface/playerData";

interface TablePlayersProps {
    users: PlayerData[];
    elimina: (id: number) => void;
    editar: (id: number) => void;
}

export const TablePlayers = ({ users, elimina, editar }: TablePlayersProps) => {

    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="min-w-full text-sm text-left">

                <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                    <tr>
                        <th className="px-6 py-3">Nombre</th>
                        <th className="px-6 py-3">Apellido</th>
                        <th className="px-6 py-3">Posición</th>
                        <th className="px-6 py-3">País</th>
                        <th className="px-6 py-3">Estatura</th>
                        <th className="px-6 py-3">Peso</th>
                        <th className="px-6 py-3"></th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border-t hover:bg-gray-50 transition"
                        >
                            <td className="px-6 py-4">{user.nombre}</td>
                            <td className="px-6 py-4">{user.apellido}</td>
                            <td className="px-6 py-4">{user.posicion}</td>
                            <td className="px-6 py-4">{user.paisOrigen}</td>
                            <td className="px-6 py-4">{user.estatura}</td>
                            <td className="px-6 py-4">{user.peso}</td>
                            <td className="px-6 py-4">
                                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                                    onClick={() => editar(user.id||0)}
                                >
                                    Editar
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                    onClick={() => elimina(user.id||0)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    )
}
