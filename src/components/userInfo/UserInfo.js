import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {UserSummary} from "..";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {MdStar, MdOutlineStarBorder} from "react-icons/md";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
	const {id} = useParams();
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		const getUser = () => {
			const allUsers = window.localStorage.getItem("users");
			if (allUsers) {
				const singleUser = JSON.parse(allUsers).find((user) => user.id === id);
				setCurrentUser(singleUser);
			}
		};
		getUser();
	}, [id]);

	return (
		<div className={styles.container}>
			<div>
				<div className={styles["user-info"]}>
					<Link to='/users' className={styles.link}>
						<BiArrowBack />
						<p>Back to Users</p>
					</Link>
				</div>
				<div className={styles.user}>
					<p>User Details</p>
					<div>
						<button type='button' className={styles["btn-blackList"]}>
							BLACKLIST USER
						</button>
						<button type='button' className={styles["btn-activate"]}>
							ACTIVATE USER
						</button>
					</div>
				</div>
				<div className={styles.summary}>
					<div className={styles["basic-summary"]}>
						<img
							src={
								currentUser.profile.avatar === undefined
									? ""
									: currentUser.profile.avatar
							}
							alt='user-avatar'
						/>
						<span>
							<p className={styles.name}>
								{currentUser.profile.firstName} {"   "}
								{currentUser.profile.lastName}
							</p>
							<p className={styles["acc-num"]}>{currentUser.accountNumber}</p>
						</span>
						<span className={styles.line}></span>
						<span>
							<p className={styles.tier}>User's Tier</p>
							<span className={styles.icons}>
								<MdStar />
								<MdOutlineStarBorder />
								<MdOutlineStarBorder />
							</span>
						</span>
						<span className={styles.line}></span>
						<span>
							<p
								className={
									styles.amount
								}>{`₦${currentUser.education.monthlyIncome[1]}`}</p>
							<p
								className={
									styles.amt
								}>{`${currentUser.profile.bvn}/${currentUser.education.sector}`}</p>
						</span>
					</div>
					<div className={styles["other-summary"]}>
						<ul>
							<li>General Details</li>
							<li>Documents</li>
							<li>Bank Details </li>
							<li>Loans</li>
							<li>Savings</li>
							<li>App ans System</li>
						</ul>
					</div>
				</div>
			</div>
			<UserSummary {...currentUser} />
		</div>
	);
};

export default UserInfo;
