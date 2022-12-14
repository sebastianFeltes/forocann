import React from "react";
import "./Inicio.css";
import { Link, Outlet } from "react-router-dom";

function Inicio() {
	return (
		<div className="inicio">
			<h3>Foro de Cannabicultores</h3>
			<div className="temario">
				<button>
					<Link to="/autocultivo">Autocultivo</Link>
				</button>
				<button>
					<Link to="/legalidad">Legalidad</Link>
				</button>
				<button>
				<Link to="/venta">Venta de productos</Link>
				</button>
			</div>
			<Outlet />
		</div>
	);
}

export default Inicio;
