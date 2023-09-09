import React from 'react';
import ReactDOM from 'react-dom/client';
//Este es el componente
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


//Montanto en el root principal
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



