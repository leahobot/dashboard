import React from "react";
import styles from "./UsersInfo.module.scss";
import {FiMoreVertical} from "react-icons/fi";
import {tableHead} from "../../data/data";
import {useStateContext} from "../../context/ContextProvider";

const UsersInfo = () => {
	const {currentUsers, editPhoneNumber, createdAt} = useStateContext();

	return (
		<table className={styles["users-table"]}>
			<thead>
				<tr className={styles["table-head"]}>
					{tableHead.map((item, index) => (
						<th key={index}>
							{item.title}
							{"    "}
							{item.icon}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{currentUsers &&
					currentUsers.map((user) => {
						return (
							<tr key={user.id} className={styles.users}>
								<td>{user.orgName}</td>
								<td>{user.userName}</td>
								<td>{user.email}</td>
								<td>{editPhoneNumber(user.profile.phoneNumber)}</td>
								<td>{createdAt(user.createdAt)}</td>
								<td></td>
								<td>{<FiMoreVertical />}</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default UsersInfo;
