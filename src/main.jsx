import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Programacion from './programacion.jsx'
import { Calculo } from './calculo.jsx'
import BaseDeDatos from './basededatos.jsx'
import RedesDeComputadoras from './redes.jsx'
import SistemasOperativos from './sistemasoperativo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="programacion" element={<Programacion />} />
        <Route path="calculo" element={<Calculo />} />
        <Route path="basededatos" element={<BaseDeDatos />} />
        <Route path="redes" element={<RedesDeComputadoras />} />
        <Route path="sistemasoperativo" element={<SistemasOperativos />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
