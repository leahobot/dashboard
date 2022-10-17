import React from "react";
import styles from "./UserSummary.module.scss";
import {useStateContext} from "../../context/ContextProvider";

const UserSummary = ({...currentUser}) => {
	const {editPhoneNumber} = useStateContext();

	return (
		<div className={styles.container}>
			<div className={styles.summary}>
				<h4>Personal Information</h4>
				<div className={styles["summary-body"]}>
					<span className={styles["summary-body-span"]}>
						<p>FULL NAME</p>
						<p>
							{currentUser.profile.firstName}
							{"   "}
							{currentUser.profile.lastName}
						</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(currentUser.profile.phoneNumber)}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>EMAIL ADDRESS</p>
						<p>{currentUser.email}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>BVN</p>
						<p>{currentUser.profile.bvn}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>GENDER</p>
						<p>{currentUser.profile.gender}</p>
					</span>

					<span className={styles["summary-body-span"]}>
						<p>MARITAL STATUS</p>
						<p>{currentUser.profile.maritalStatus}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>CHILDREN</p>
						<p>{currentUser.profile.children}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>TYPE OF RESIDENCE</p>
						<p>{currentUser.profile.address}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.summary}>
				<h4>Education and Emplyment</h4>
				<div className={styles["summary-body"]}>
					<span className={styles["summary-body-span"]}>
						<p>LEVEL OF EDUCATION</p>
						<p>{currentUser.education.level}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>EMPLOYMENT STATUS</p>
						<p>{currentUser.education.employmentStatus}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>SECTOR OF EMPLYMENT</p>
						<p>{currentUser.education.sector}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>DURATION OF EMPLYMENT</p>
						<p>{currentUser.education.duration}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>OFFICE EMAIL</p>
						<p>{currentUser.education.officeEmail}</p>
					</span>

					<span className={styles["summary-body-span"]}>
						<p>MONTHLY INCOME</p>
						<p>{`₦${currentUser.education.monthlyIncome[1]} - ₦${currentUser.education.monthlyIncome[0]}`}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>LOAN REPAYMENT</p>
						<p>{`₦${currentUser.education.loanRepayment}`}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.summary}>
				<h4>Socials</h4>
				<div className={styles["summary-body"]}>
					<span className={styles["summary-body-span"]}>
						<p>TWITTER</p>
						<p>{currentUser.socials.twitter}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>FACEBOOK</p>
						<p>{currentUser.socials.facebook}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>INSTAGRAM</p>
						<p>{currentUser.socials.instagram}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.summary}>
				<h4>Guarantor</h4>
				<div className={styles["summary-body"]}>
					<span className={styles["summary-body-span"]}>
						<p>FULL NAME</p>
						<p>
							{currentUser.guarantor.firstName}
							{"   "} {currentUser.guarantor.firstName}
						</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(currentUser.guarantor.phoneNumber)}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>EMAIL ADDRESS</p>
						<p>{currentUser.guarantor.email}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>RELATIONSHIP</p>
						<p>{currentUser.guarantor.relationship}</p>
					</span>
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.summary}>
				<h4>{""}</h4>
				<div className={styles["summary-body"]}>
					<span className={styles["summary-body-span"]}>
						<p>FULL NAME</p>
						<p>
							{currentUser.guarantor.firstName}
							{"   "} {currentUser.guarantor.firstName}
						</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>PHONE NUMBER</p>
						<p>{editPhoneNumber(currentUser.guarantor.phoneNumber)}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>EMAIL ADDRESS</p>
						<p>{currentUser.guarantor.email}</p>
					</span>
					<span className={styles["summary-body-span"]}>
						<p>RELATIONSHIP</p>
						<p>{currentUser.guarantor.relationship}</p>
					</span>
				</div>
			</div>
		</div>
	);
};

export default UserSummary;
