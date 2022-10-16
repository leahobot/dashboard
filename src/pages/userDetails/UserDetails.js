import React from "react";
import {UserInfo, Header, SideBar} from "../../components";
import styles from "./UserDetails.module.scss";
import {useStateContext} from "../../context/ContextProvider";

const UserDetails = () => {
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
					<UserInfo />
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
