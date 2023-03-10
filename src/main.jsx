import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; {/* Fuentes de Roboto */}

import './index.css'
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/> {/* Incluye reglas para establecer valores para propiedades como tipografias, margenes y paddings, se aplican a todo el proyecto.*/}
    <App />
  </React.StrictMode>,
)
