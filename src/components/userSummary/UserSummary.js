import React from "react";
import styles from "./UserSummary.module.scss";
import {useStateContext} from "../../context/ContextProvider";

const UserSummary = ({...currentUser}) => {
	const {editPhoneNumber, createdAt} = useStateContext();

	return (
		<div className={styles.container}>
			<div className={styles["summary"]}>
				<h4 className={styles["summary-heading"]}>Personal Information</h4>
				<div className={styles["summary-body"]}>
					<span className={styles["summary-details"]}>
						<p>FULL NAME</p>
						<p>
							{currentUser.profile.firstName}
							{"   "}
							{currentUser.profile.lastName}
						</p>
					</span>
					<span>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(currentUser.profile.phoneNumber)}</p>
					</span>
					<span>
						<p>EMAIL ADDRESS</p>
						<p>{currentUser.email}</p>
					</span>
					<span>
						<p>BVN</p>
						<p>{currentUser.profile.bvn}</p>
					</span>
					<span>
						<p>GENDER</p>
						<p>{currentUser.profile.gender}</p>
					</span>

					<span>
						<p>MARITAL STATUS</p>
						<p>Single</p>
					</span>
					<span>
						<p>CHILDREN</p>
						<p>None</p>
					</span>
					<span>
						<p>TYPE OF RESIDENCE</p>
						<p>{currentUser.profile.address}</p>
					</span>
				</div>
			</div>
			<br className={styles.line} />
		</div>
	);
};

export default UserSummary;
