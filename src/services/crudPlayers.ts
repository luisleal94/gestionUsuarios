import type { PlayerData } from "../interface/playerData";
import supabase from "../lib/supabase"

export const insertPlatrayer = async (playerData: PlayerData) : Promise<PlayerData|null> => {
  const { data, error } = await supabase
  .from('jugadoresFut')
  .insert([
    {
        nombre: playerData.nombre, apellido: playerData.apellido,
        posicion: playerData.posicion, paisOrigen: playerData.paisOrigen,
        estatura: playerData.estatura, peso: playerData.peso
     },
  ])
  .select()
    if (error) {
        console.error('Error inserting player:', error);
        return null;
    }
    return data[0] as PlayerData;
}

export const getPlayers = async () => {
    const { data, error } = await supabase
      .from('jugadoresFut')
      .select('*');
    if (error) {
        console.error('Error fetching players:', error);
        return [];
    }
    return data as PlayerData[];
}

export const updatePlayer = async (id: number, playerData: PlayerData) : Promise<boolean> => {
    const { data, error } = await supabase
      .from('jugadoresFut')
      .update({
        nombre: playerData.nombre, apellido: playerData.apellido,
        posicion: playerData.posicion, paisOrigen: playerData.paisOrigen,
        estatura: playerData.estatura, peso: playerData.peso
      })
      .eq('id', id)
      .select();
    if (error) {
        console.error('Error updating player:', error);
        return false;
    }
    return true;
}

export const deletePlayer = async (id: number) : Promise<boolean> => {
    const { data, error } = await supabase
      .from('jugadoresFut')
      .delete()
      .eq('id', id);
    if (error) {
        console.error('Error deleting player:', error);
        return false;
    }
    return true;
}