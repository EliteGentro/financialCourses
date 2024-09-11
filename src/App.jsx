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
      <Route path="./" element={<Home />} />
      <Route path="/financialCourses/ahorro" element={<AhorroYPresupuesto />} />
      <Route path="/financialCourses/presencial" element={<Presencial />} />
      <Route path="/financialCourses/inversion" element={<Inversion />} />
      <Route path="/financialCourses/planificacion" element={<PlanificacionFiscal />} />
      <Route path="/financialCourses/gestion" element={<GestionDeDeudas />} />
    </Routes>
  );
};

export default App;
