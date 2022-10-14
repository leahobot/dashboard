import React from "react";
import styles from "./SideBar.module.scss";
import {Link, NavLink} from "react-router-dom";
import logo from "../../logo.svg";
import {links} from "../../data/data";
import {FaHome, FaSuitcase} from "react-icons/fa";
import {FiChevronDown} from "react-icons/fi";

const SideBar = () => {
	const activeLink = ({isActive}) =>
		isActive ? `${styles.activeLink} ${styles.link}` : `${styles.link}`;

	return (
		<nav className={styles.sidebar}>
			<div>
				<Link to='/'>
					<img src={logo} alt='brand-logo' />
				</Link>
			</div>
			<div className={styles.org}>
				<FaSuitcase />
				<p>Switch Organization</p>
				<FiChevronDown />
			</div>
			<NavLink to='/dashboard' className={activeLink}>
				<FaHome />
				<p>Dashboard</p>
			</NavLink>

			<div>
				{links.map((item) => (
					<div key={item.title}>
						<p className={styles.title}>{item.title}</p>
						{item.links.map((link) => (
							<NavLink
								key={link.name}
								to={`/${link.name}`}
								className={activeLink}>
								{link.icon} <p>{link.name}</p>
							</NavLink>
						))}
					</div>
				))}
			</div>
		</nav>
	);
};

export default SideBar;
