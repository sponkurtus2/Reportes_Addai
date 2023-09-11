// Imports de funciones (rutas)
import { Routes, Route } from "react-router-dom";

//Componentes usados
import Layout from "./components/Layout";
import Hhome from "./components/Hhome";
import Reporte1 from "./components/Reporte1";
import Reporte2 from "./components/Reporte2";

export default function App() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hhome />} />
          <Route path="Reporte1" element={<Reporte1 />} />
          <Route path="Reporte2" element={<Reporte2 />} />
        </Route>
      </Routes>
    </div>
  );
}
