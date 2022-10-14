import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	const activeLink = ({isActive}) => (isActive ? `${styles.activeLink}` : "");

	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<NavLink to='/' end className={activeLink}>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink to='/dashboard' className={activeLink}>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink to='/users' className={activeLink}>
						Users
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
