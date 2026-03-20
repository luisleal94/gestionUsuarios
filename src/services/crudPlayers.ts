import type { PlayerData } from "../interface/playerData";
import supabase from "../lib/supabase"

const insertPlatrayer = async (playerData: PlayerData) : Promise<boolean> => {
const { data, error } = await supabase
  .from('jugadoresFut')
  .insert([
    {
        nombre: playerData.nombre, apellido: playerData.apellido,
        posicion: playerData.posicion, paisOrigen: playerData.pais,
        estatura: playerData.estatura, peso: playerData.peso
     },
  ])
  .select()
    if (error) {
        console.error('Error inserting player:', error);
        return false;
    }
    return true;
}

export default insertPlatrayer;