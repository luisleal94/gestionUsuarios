import insertPlatrayer from "../services/crudPlayers";

export const handleForm = (setShowDiv: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowDiv(true);
};

export const guardaDatos = async (
    nombre: string,
    apellido: string,
    posicion: string,
    pais: string,
    estatura: string,
    peso: string,
    setShowDiv: React.Dispatch<React.SetStateAction<boolean>>,
    setMensajePopup: React.Dispatch<React.SetStateAction<string>>
) : Promise<boolean> => {
    if (!nombre.trim() || !apellido.trim() || !posicion.trim() || !pais.trim() || !estatura.trim() || !peso.trim()) {
        setMensajePopup('Por favor completa todos los campos');
        return false;
    }

    const playerInserted = await insertPlatrayer({nombre, apellido, posicion, pais, estatura, peso});

    if (!playerInserted) {
        setMensajePopup('Error al agregar jugador');
        return false;
    }

    setShowDiv(false);
    return true;
}

export const cleanState = ( setNombre: React.Dispatch<React.SetStateAction<string>>, 
    setApellido: React.Dispatch<React.SetStateAction<string>>, 
    setPosicion: React.Dispatch<React.SetStateAction<string>>, 
    setPais: React.Dispatch<React.SetStateAction<string>>, 
    setEstatura: React.Dispatch<React.SetStateAction<string>>, 
    setPeso: React.Dispatch<React.SetStateAction<string>> ) => {
    setNombre('');
    setApellido('');
    setPosicion('');
    setPais('');
    setEstatura('');
    setPeso('');
}