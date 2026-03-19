import { signInWithEmail } from '../services/authService';

type LoginResponse = {
  success: boolean;
  user?: any;
  error?: string;
};

export const handleLogin = async (
    usuario: string, 
    contrasenia: string,
    setLoggedIn: (value: boolean) => void,
    setUsername: (name: string) => void,
    setUsuario: (value: string) => void,
    setContrasenia: (value: string) => void
): Promise<LoginResponse> => {
    if (!usuario.trim()) {
        alert('Por favor ingresa el usuario');
        return Promise.resolve({ success: false, error: 'Por favor ingresa el usuario' });
    }

    if (!contrasenia.trim()) {
        alert('Por favor ingresa la contraseña');
        return Promise.resolve({ success: false, error: 'Por favor ingresa la contraseña' });
    }

    if (contrasenia.length < 4) {
        alert('La contraseña debe tener al menos 4 caracteres');
        return Promise.resolve({ success: false, error: 'La contraseña debe tener al menos 4 caracteres' });
    }

    try {
      const result = await signInWithEmail(usuario, contrasenia);
      
      if (result.success) {
        setUsername(usuario);
        setLoggedIn(true);
        setUsuario('');
        setContrasenia('');
        return Promise.resolve({ success: true, user: '' });
      } else {
        console.error('Error de login:', result.error);
        alert(result.error || 'Error en el inicio de sesión');
        return Promise.resolve({ success: false, error: result.error || 'Error en el inicio de sesión' });
      }
    } catch (error) {
      console.error('Error en login:', error);
      alert('Error inesperado en el inicio de sesión');
      return Promise.resolve({ success: false, error: 'Error inesperado en el inicio de sesión' });
    }
};