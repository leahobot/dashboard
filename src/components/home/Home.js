import React from "react";
import {Header, SideBar, UsersData} from "..";
import styles from "./Home.module.scss";

const UsersPage = () => {
	return (
		<div className={styles.home}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.content}>
				<div className={styles.sidebar}>
					<SideBar />
				</div>
				<div className={styles["user-data"]}>
					<UsersData />
				</div>
			</div>
		</div>
	);
};

export default UsersPage;
