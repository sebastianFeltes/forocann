import React from "react";
import { useState, useEffect } from "react";
import './Autocultivo.css';
import { Outlet, Link } from "react-router-dom";

function Autocultivo() {
	return (
		<div className="container">
			<button className="nuevaDiscusion">
				<Link to={'/autocultivo/nueva-discusion'}>
				Nueva Discusión
				</Link>
				</button>
			<div className="discusiones">
				<div className="discusion">
					<h3>Germinación</h3>
					<img className='imgDelTema' src='https://cdn.portalfruticola.com/2017/10/vxcvxcvxcvxcvxcvxcvxcv.jpg' alt='' />
					<p>Autor: Jikan</p>
					<p>Fecha: 20 de Diciembre de 2023</p>
					<p>Respuestas: 10</p>
					<p>Banderas: 5</p>
					<p>
						texto de relleno...... texto de relleno...... texto de relleno...... texto de relleno......
						texto de relleno...... texto de relleno...... texto de relleno...... texto de relleno......
						texto de relleno...... texto de relleno...... texto de relleno...... texto de relleno......
						texto de relleno...... texto de relleno...... texto de relleno...... texto de relleno......
						texto de relleno...... texto de relleno...... texto de relleno...... texto de relleno......
						texto de relleno......
					</p>
					<button>Responder</button>
					<button>Cerrar tema</button>
					<button>Reportar</button>
					<button>Dejar bandera</button>
					<h4>Respuestas</h4>
					<div className="respuestas">
						<p>
							respuesta que responde la pregunta de arribarespuesta que responde la pregunta de
							arribarespuesta que responde la pregunta de arribarespuesta que responde la pregunta de
							arribarespuesta que responde la pregunta de arriba
						</p>
						<p>Nombre del usuario que responde</p>
						<p>
							fecha de la respuesta
						</p>
						<button>Comentar respuesta</button>
						<button>Reportar</button>
						<div className="comentario">
							<p>
								comentario a la respuesta comentario a la respuesta comentario a la respuesta comentario
								a la respuesta ...
							</p>
							<p>
								autor del comentario
							</p>
							<p>
								fecha del comentario
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Autocultivo;
