import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/inicio/Inicio";
import Perfil from "./pages/perfil/Perfil";
import Contacto from "./pages/contacto/Contacto";
import AcercaDe from "./pages/acerca/AcercaDe";
import Layout from "./pages/layout/Layout";
import Notificaciones from "./pages/notificaciones/Notificaciones";
import Autocultivo from "./pages/autocultivo/Autocultivo";
import Venta from "./pages/venta/Venta";
import Legalidad from "./pages/legalidad/Legalidad";
import ModeloTema from "./pages/autocultivo/Modelotema";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Inicio />} />
					<Route path="perfil" element={<Perfil />} />
					<Route path="contacto" element={<Contacto />} />
					<Route path="acerca" element={<AcercaDe />} />
					<Route path="notificaciones" element={<Notificaciones />} />
					<Route path="autocultivo" element={<Autocultivo />} />
					<Route path="venta" element={<Venta />} />
					<Route path="legalidad" element={<Legalidad />} />
					<Route path="autocultivo/nueva-discusion" element={<ModeloTema />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
