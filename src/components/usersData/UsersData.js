import React from "react";
import styles from "./UsersData.module.scss";
import {UsersInfo} from "..";
import {FiUsers, FiDatabase} from "react-icons/fi";
import {AiOutlineDatabase} from "react-icons/ai";
import {FaUsers} from "react-icons/fa";

const UserData = () => {
	return (
		<div className={styles.users}>
			<div className={styles["user-summary"]}>
				<p className={styles.users}>Users</p>
				<div className={styles.summary}>
					<div className={styles["summary-container"]}>
						<span className={styles["purple-bg"]}>
							<FiUsers />
						</span>
						<p className={styles.title}>USERS</p>
						<p className={styles.total}>2,453</p>
					</div>
					<div className={styles["summary-container"]}>
						<span className={styles["blue-bg"]}>
							<FaUsers />
						</span>
						<p className={styles.title}>ACTIVE USERS</p>
						<p className={styles.total}>2,453</p>
					</div>
					<div className={styles["summary-container"]}>
						<span className={styles["red-bg"]}>
							<AiOutlineDatabase />
						</span>
						<p className={styles.title}>USERS WITH LOAN</p>
						<p className={styles.total}>12,453</p>
					</div>
					<div className={styles["summary-container"]}>
						<span className={styles["pink-bg"]}>
							<FiDatabase />
						</span>
						<p className={styles.title}>USERS WITH SAVINGS</p>
						<p className={styles.total}>102,453</p>
					</div>
				</div>
			</div>

			<UsersInfo />
		</div>
	);
};

export default UserData;
