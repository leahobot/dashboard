import React from "react";
import {Header, SideBar, UsersData, Pagination} from "..";
import styles from "./Home.module.scss";
import {useStateContext} from "../../context/ContextProvider";

const UsersPage = () => {
	const {toggleSideBar} = useStateContext();

	return (
		<div className={styles.home}>
			<div className={styles.header}>
				<Header />
			</div>
			<div className={styles.content}>
				<div
					className={
						toggleSideBar
							? `${styles.showSidebar} ${styles.sidebar}`
							: `${styles.sidebar} ${styles.hideSidebar}`
					}>
					<SideBar />
				</div>
				<div className={styles["user-data"]}>
					<UsersData />

					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default UsersPage;
