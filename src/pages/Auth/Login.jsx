// import LoginImage from "../../assets/LoginImage.webp";
// import { Link } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export const LoginPage = () => {  

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold">Bienvenido {user?.username}</h1>
          <button onClick={signOut} className="px-4 py-2 mt-4 bg-red-500 text-white rounded">
            Cerrar sesión
          </button>
        </div>
      )}
    </Authenticator>
  );
};




