import React from "react";
import {GoSearch} from "react-icons/go";
import {BsBell} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";
import styles from "./Header.module.scss";
import user from "../../assets/user-avatar.png";
import {Link} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider";

const Header = () => {
	const {searchValue, setSearchValue} = useStateContext();

	return (
		<header>
			<div className={styles.left}>
				<input
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					name='search'
					type='text'
					placeholder='Search for anything'
				/>
				<span>
					<GoSearch />
				</span>
			</div>
			<div className={styles.right}>
				<Link to='/docs'>Docs</Link>
				<BsBell />
				<img src={user} alt='user' />
				<span className={styles.user}>
					Adedeji
					<AiFillCaretDown />
				</span>
			</div>
		</header>
	);
};

export default Header;
