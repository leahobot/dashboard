import React, {useContext, createContext, useState, useEffect} from "react";
import axios from "axios";
import {apiEndpoint} from "../config";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
	const [users, setUsers] = useState(null);
	const [searchValue, setSearchValue] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);
	const [toggleSideBar, setToggleSideBar] = useState(false);

	useEffect(() => {
		try {
			const getUsers = async () => {
				const {data} = await axios.get(apiEndpoint);
				setUsers(data);
				localStorage.setItem("users", JSON.stringify(data));
			};
			getUsers();
		} catch (err) {
			console.log(err.message);
		}
	}, []);

	useEffect(() => {
		const tempUsers = users
			? users.filter(
					(user) =>
						user.userName.toLowerCase().includes(searchValue.toLowerCase()) ||
						user.orgName.toLowerCase().includes(searchValue.toLowerCase()) ||
						user.email.toLowerCase().includes(searchValue.toLowerCase()),
			  )
			: [];

		setFilteredUsers(tempUsers);
	}, [searchValue, users]);

	//Limit page numbers shown
	const [pageNumberLimit] = useState(5);
	const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

	const pageNumbers = [];
	const totalUsers = filteredUsers.length;
	const totalPages = Math.ceil(totalUsers / usersPerPage);

	//Get Current Users

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
	//Paginate
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	//Go to next Page
	const paginateNext = () => {
		setCurrentPage(currentPage + 1);

		//Show next set of page numbers
		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	//Go to prev page
	const paginatePrev = () => {
		setCurrentPage(currentPage - 1);

		//Show prev set of page numbers
		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	const createdAt = (str) => {
		const date = str.slice(0, 9).split("-");
		const time = str.slice(11, -5).split(":");

		const [y, m, d] = date;
		const [hrs, mins, secs] = time;
		const dateTime = new Date(+y, +m - 1, +d, +hrs, +mins, +secs);

		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const year = new Date(dateTime).getFullYear();
		const month = new Date(dateTime).getMonth();
		const day = new Date(dateTime).getDate();
		const hours = new Date(dateTime).getHours();
		const minutes = new Date(dateTime).getMinutes();

		const dateStr = `${monthNames[month]} ${day}, ${year} ${hours}:${minutes} PM`;

		return dateStr;
	};

	const editPhoneNumber = (str) => {
		const index = str.indexOf("x");
		const slicedPhoneNumber = str.slice(0, index);
		return slicedPhoneNumber;
	};

	return (
		<div>
			<StateContext.Provider
				value={{
					users,
					toggleSideBar,
					setToggleSideBar,
					currentUsers,
					totalPages,
					totalUsers,
					paginatePrev,
					paginateNext,
					paginate,
					pageNumbers,
					currentPage,
					maxPageNumberLimit,
					minPageNumberLimit,
					searchValue,
					setSearchValue,
					editPhoneNumber,
					createdAt,
					setFilteredUsers,
				}}>
				{children}
			</StateContext.Provider>
		</div>
	);
};

export const useStateContext = () => useContext(StateContext);
