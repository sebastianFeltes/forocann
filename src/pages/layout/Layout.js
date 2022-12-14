import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/"><img src="https://cdn.icon-icons.com/icons2/3002/PNG/512/marijuana_cannabis_icon_187910.png" alt="" />
                        </Link>
					</li>
					<li>
						<Link to="/perfil">
                        <img src="https://cdn.icon-icons.com/icons2/1904/PNG/512/profile_121261.png" alt="" />
                        </Link>
					</li>
					<li>
						<Link to="/contacto">
                        <img src="https://cdn.icon-icons.com/icons2/777/PNG/512/contact_icon-icons.com_64661.png" alt=""/>
                        </Link>
					</li>
					<li>
						<Link to="/acerca">
                        <img src="https://cdn.icon-icons.com/icons2/1812/PNG/512/4213426-about-description-help-info-information-notification_115427.png" alt=""/>
                        </Link>
					</li>
                    <li>
                        <Link to="/notificaciones">
                            <img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/alarm_alert_attention_bell_clock_notification_ring_icon_123203.png" alt="" />
                        </Link>
                    </li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Layout;
