import React from "react";
import {Link} from "react-router-dom";
import styles from "./Login.module.scss";
import {BsArrowRight} from "react-icons/bs";
import logo from "../../logo.svg";
import image from "../../assets/image.png";

const Login = () => {
	return (
		<div className={styles["login-container"]}>
			<div className={styles.logo}>
				<img src={logo} alt='brand-logo' className={styles["brand-logo"]} />
				<img src={image} alt='login' className={styles["login-image"]} />
			</div>
			<div className={styles.content}>
				<form>
					<h1>Welcome</h1>
					<p className={styles.text}>Enter details to login</p>
					<div>
						<input type='text' placeholder='Email' name='email' />
					</div>
					<div>
						<input type='password' placeholder='Password' name='password' />
						<p>SHOW</p>
					</div>
					<p className={styles["forgot-password"]}>FORGOT PASSWORD?</p>
					<button>LOG IN</button>
				</form>
			</div>
			<Link to='/dashboard' className={styles.link}>
				Go to Dashboard
				<BsArrowRight />
			</Link>
		</div>
	);
};

export default Login;
