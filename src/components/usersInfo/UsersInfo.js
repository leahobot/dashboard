import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./UsersInfo.module.scss";
import {FiMoreVertical} from "react-icons/fi";
import {tableHead} from "../../data/data";
import {BsEye} from "react-icons/bs";
import {MdOutlineClose} from "react-icons/md";
import {TbUserX, TbUserCheck} from "react-icons/tb";
import {useStateContext} from "../../context/ContextProvider";

const UsersInfo = () => {
	const {users, currentUsers, editPhoneNumber, createdAt, setFilteredUsers} =
		useStateContext();

	const [showModal, setShowModal] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const [statusValue, setStatusValue] = useState("Pending");
	const [org, setOrg] = useState("");
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dateTime, setDateTime] = useState("");
	const [status, setStatus] = useState("Pending");
	const [userId, setUserId] = useState("");

	const displayBox = (id) => {
		setShowModal((previous) => !previous);
		setUserId(id);
	};

	const activate = (id) => {
		setShowModal(false);
		if (id) {
			setStatus("Active");
		}
	};

	const blacklist = (id) => {
		setShowModal(false);
		if (id) {
			setStatus("Blacklisted");
		}
	};

	const statusBg = (status) => {
		if (status === "Pending") {
			return `${styles["user-status"]} ${styles.yellowBg}`;
		} else if (status === "Active") {
			return `${styles["user-status"]} ${styles.greenBg}`;
		} else {
			return `${styles["user-status"]} ${styles.redBg}`;
		}
	};

	const submitForm = (e) => {
		e.preventDefault();

		const tempUsers = users
			? users.filter(
					(user) =>
						user.userName.toLowerCase() === userName.toLowerCase() ||
						user.orgName.toLowerCase() === org.toLowerCase() ||
						user.email.toLowerCase() === email.toLowerCase() ||
						user.profile.phoneNumber.toLowerCase() ===
							phoneNumber.toLowerCase() ||
						user.createdAt.toLowerCase() === dateTime.toLowerCase() ||
						user.userName.toLowerCase() === statusValue.toLowerCase(),
			  )
			: [];

		setFilteredUsers(tempUsers);

		setShowFilter(false);
	};

	return (
		<div>
			<table className={styles["users-table"]}>
				<thead>
					<tr className={styles["table-head"]}>
						{tableHead.map((item, index) => (
							<th key={index}>
								<p onClick={() => setShowFilter((previous) => !previous)}>
									{item.title}
									{item.icon}
								</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentUsers.map((user) => {
						return (
							<tr key={user.id} className={styles.users}>
								<td>{user.orgName}</td>
								<td>{user.userName}</td>
								<td>{user.email}</td>
								<td>{editPhoneNumber(user.profile.phoneNumber)}</td>
								<td>{createdAt(user.createdAt)}</td>
								<td>
									<span className={statusBg(status)}>{status}</span>
								</td>
								<td>
									<FiMoreVertical
										className={styles.moreIcon}
										onClick={() => displayBox(user.id)}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{showModal && (
				<div className={styles["status-modal"]}>
					<div onClick={() => setShowModal(false)}>
						<Link to={`/user-details/${userId}`}>
							<BsEye />
							<p>View User</p>
						</Link>
					</div>
					<div onClick={(e) => blacklist(userId)}>
						<TbUserX />
						<p>Blacklist User</p>
					</div>
					<div onClick={(e) => activate(userId, e)}>
						<TbUserCheck />
						<p>Activate User</p>
					</div>
				</div>
			)}
			{showFilter && (
				<form
					className={styles["filter-modal"]}
					onSubmit={(e) => submitForm(e)}>
					<MdOutlineClose
						className={styles.icon}
						onClick={() => setShowFilter(false)}
					/>
					<div>
						<label>Organization</label>
						<select
							value={org}
							onChange={(e) => setOrg(e.target.value)}
							required>
							<option value=''>Select</option>
							{users
								? users.map((user) => (
										<option key={user.id} value={user.orgName}>
											{user.orgName}
										</option>
								  ))
								: null}
						</select>
					</div>
					<div>
						<label>UserName</label>
						<input
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							type='text'
							placeholder='User'
							required
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
						/>
					</div>
					<div>
						<label>Date</label>
						<input
							value={dateTime}
							onChange={(e) => setDateTime(e.target.value)}
							type='datetime-local'
						/>
					</div>
					<div>
						<label>Phone Number</label>
						<input
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							type='number'
							placeholder='Phone Number'
						/>
					</div>
					<div>
						<label>status</label>
						<select
							value={statusValue}
							onChange={(e) => setStatusValue(e.target.value)}>
							<option>Select</option>
							<option value='pending'>Pending</option>
							<option value='active'>Active</option>
							<option value='blacklisted'>Blaclisted</option>
						</select>
					</div>
					<div>
						<button type='reset' className={styles.reset}>
							Reset
						</button>
						<button type='submit' className={styles.submit}>
							Filter
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default UsersInfo;
