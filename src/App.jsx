import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AhorroYPresupuesto from "./pages/AhorroYPresupuesto";
import GestionDeDeudas from "./pages/GestionDeDeudas";
import Inversion from "./pages/Inversion";
import PlanificacionFiscal from "./pages/PlanificacionFiscal";
import Presencial from "./pages/Presencial";

const App = () => {
  return (
    <Routes>
      <Route path="/financialCourses" element={<Home />} />
      <Route path="/ahorro" element={<AhorroYPresupuesto />} />
      <Route path="/presencial" element={<Presencial />} />
      <Route path="/inversion" element={<Inversion />} />
      <Route path="/planificacion" element={<PlanificacionFiscal />} />
      <Route path="/gestion" element={<GestionDeDeudas />} />
    </Routes>
  );
};

export default App;
