import React from "react";
import {IoArrowBack} from "react-icons/io5";
import styles from "./NotFound.module.scss";
import {Link} from "react-router-dom";

const NotFound = () => {
	return (
		<section className={styles["not-found"]}>
			<h1>Page Not Found</h1>
			<Link to='/'>
				<IoArrowBack />
				Go to Login Page
			</Link>
		</section>
	);
};

export default NotFound;
