import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Pet from './componentes/pets/Pet';
import Veterinario from './componentes/veterinario/Veterinario';
import Atendimento from './componentes/atendimento/Atendimento';
import Dono from './componentes/dono/Dono';
import Menu from './componentes/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Pet/> 
    <Veterinario/>
    <Atendimento/>
    <Dono/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

