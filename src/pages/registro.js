import React, { useState } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
const RegistroUsuarios = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [confirmemail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [delegacion, setDelegacion] = useState('');
  return (
    <Layout>
      <div className="">
        <form className="login-form">
          <h2>Registro de usuarios</h2>
          <label htmlFor="username">Nombre:</label>
          <input
           type="text"
            id="username" 
             placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}

            />

          <label htmlFor="text">Delegación:</label>
          <input 
          type="text" 
          id="text" 
          placeholder="Escribe aquí tu delegación"
            value={delegacion}
            onChange={(e) => setDelegacion(e.target.value)}
          
        />

          <label htmlFor="email">Correo electrónico:</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Escribe aquí tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
          />

          <label htmlFor="confirmemail">Confirmar correo electrónico:</label>
          <input
           type="email" 
           id="confirmemail" 
           placeholder="Escribe aquí tu correo electrónico"
            value={confirmemail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            />

          <label htmlFor="password">Contraseña:</label>
          <input 
          type="password" 
          id="password" 
          placeholder="Escribe aquí tu contraseña"
            value={confirmemail}
            onChange={(e) => setConfirmEmail(e.target.value)}
           />

          <label htmlFor="confirmpass">Confirmar contraseña:</label>
          <input type="confirmpass" id="confirmpass" name="confirmpass" required />
          
         
          <button type="submit">Registrar</button>
        </form>
      </div>
    </Layout>
  );
};
export default RegistroUsuarios;
export const Head = () => <Seo title="Registro de usuarios" />
