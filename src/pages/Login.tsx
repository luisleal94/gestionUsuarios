import { useState } from "react";
import { handleLogin } from "../util/handleLogin";
import { useAppStore } from "../store/storeApp";
import { Button } from "../components/atom/Button";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn, setUsername } = useAppStore();

  const onHandleLogin = async () => {
  const res = await handleLogin(
    email,
    password,
    setLoggedIn,
    setUsername,
    setEmail,
    setPassword
  );

  if (res.success) {
    console.log('Login correcto');
    navigate('/dashboard');
  } else {
    console.log('Error:', res.error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6" >Iniciar sesión</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Correo electrónico"
          />
          <input
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Contraseña"
          />
        <Button 
            text="Entrar" 
            onClick={onHandleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200" />
      </form>
      </div>
    </div>
  );
};
