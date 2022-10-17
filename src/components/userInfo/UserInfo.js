import React from "react";
import {useParams} from "react-router-dom";
import {UserSummary} from "..";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {MdStar, MdOutlineStarBorder} from "react-icons/md";
import {useStateContext} from "../../context/ContextProvider";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
	const {id} = useParams();
	const {setToggleSideBar, toggleSideBar} = useStateContext();

	let users;
	let currentUser;

	const allUsers = localStorage.getItem("users");
	if (allUsers) {
		users = JSON.parse(allUsers);
	}

	const singleUser = users.find((user) => user.id === id);
	currentUser = singleUser;

	return (
		<div className={styles.container}>
			<div>
				<div className={styles["user-info"]}>
					<div className={styles.link}>
						<Link to='/users'>
							<BiArrowBack />
						</Link>
						<p>Back to Users</p>
					</div>
					<div
						className={styles.menu}
						onClick={() => setToggleSideBar((previous) => !previous)}>
						{toggleSideBar ? <AiOutlineClose /> : <AiOutlineMenu />}
					</div>
				</div>
				<div className={styles.user}>
					<p>User Details</p>
					<div className={styles.buttons}>
						<button type='button' className={styles["btn-blackList"]}>
							BLACKLIST USER
						</button>
						<button type='button' className={styles["btn-activate"]}>
							ACTIVATE USER
						</button>
					</div>
				</div>
				{currentUser && (
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
								<li>Bank Details</li>
								<li>Loans</li>
								<li>Savings</li>
								<li>App and System</li>
							</ul>
						</div>
					</div>
				)}
			</div>
			<UserSummary {...currentUser} />
		</div>
	);
};

export default UserInfo;
