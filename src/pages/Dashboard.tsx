import { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar";
import { cleanState, guardaDatos } from "../util/handleDashboard";
import { Button} from "@headlessui/react";
import { Popup } from "../components/Popup";
import { TablePlayers } from "../components/TablePlayers";
import type { PlayerData } from "../interface/playerData";
import { deletePlayer, getPlayers } from "../services/crudPlayers";
import { FormPlayer } from "../components/FormPlayer";

const Dashboard = () => {
  const [users, setUsers] = useState<PlayerData[]>([]);
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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getPlayers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [])

  const handleEdit = (id: number) => {
    console.log('Editar jugador con ID:', id);
  };

  const handleDelete = async (id: number) => {
      const result = await deletePlayer(id);
      if (result) {
          setUsers((prev) => prev.filter((user) => user.id !== id));
          setmensajePopup('Jugador eliminado exitosamente');
      } else {
          setmensajePopup('Error al eliminar el jugador');
      }
  }
  
  const procesaDatos = async () => {
    const datosGuardados : PlayerData|null =  await guardaDatos(nombre, apellido, posicion, pais, estatura, peso, setshowDiv, setmensajePopup);
    if (datosGuardados!= null) {
      setUsers((prev) => [...prev, datosGuardados]);
      setmensajePopup('Jugador agregado exitosamente');
      cleanState(setnombre, setapellido, setposicion, setpais, setestatura, setpeso);
    }
      setPopup(true);
  }

  return (
    <>
      <Header toggleMenu={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
      <div className="p-6">

        <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold mb-4">Plantilla</h1>
        <div className="mb-4">
          <Button onClick={() => setshowDiv(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Agregar Jugador
          </Button>
        </div>
        </div>
        <TablePlayers users={users} elimina={handleDelete} />
        {showDiv && <FormPlayer 
          setshowDiv={setshowDiv} setnombre={setnombre} 
          setapellido={setapellido} setposicion={setposicion} 
          setpais={setpais} setestatura={setestatura}
          setpeso={setpeso} procesaDatos={procesaDatos}
        />}        
    </div>
    {popup && ( Popup({ setIsOpen: setPopup, mensaje: mensajePopup }))}
    </>
    

  )
}

export default Dashboard