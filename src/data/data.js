import {
	FaUserFriends,
	FaUsers,
	FaHandshake,
	FaPiggyBank,
	FaUserCheck,
	FaUserTimes,
	FaSuitcase,
	FaFan,
	FaUserCog,
	FaScroll,
} from "react-icons/fa";
import {TbCurrencyNaira} from "react-icons/tb";
import {RiHandCoinFill} from "react-icons/ri";
import {BsBuilding} from "react-icons/bs";
import {ImDatabase} from "react-icons/im";
import {MdOutlineSendToMobile, MdTune} from "react-icons/md";
import {AiOutlineBarChart} from "react-icons/ai";
import {VscOutput} from "react-icons/vsc";
import {TbDiscount2} from "react-icons/tb";
import {IoFilter} from "react-icons/io5";

export const links = [
	{
		title: "CUSTOMERS",
		links: [
			{
				name: "Users",
				icon: <FaUserFriends />,
			},
			{
				name: "Guarantors",
				icon: <FaUsers />,
			},
			{
				name: "Loans",
				icon: <TbCurrencyNaira />,
			},
			{
				name: "Decision Models",
				icon: <FaHandshake />,
			},
			{
				name: "Savings",
				icon: <FaPiggyBank />,
			},
			{
				name: "Loan Requests",
				icon: <RiHandCoinFill />,
			},
			{
				name: "Whitelist",
				icon: <FaUserCheck />,
			},
			{
				name: "Karma",
				icon: <FaUserTimes />,
			},
		],
	},

	{
		title: "BUSINESSES",
		links: [
			{
				name: "Organization",
				icon: <FaSuitcase />,
			},
			{
				name: "Loan Products",
				icon: <RiHandCoinFill />,
			},
			{
				name: "Savings Product",
				icon: <BsBuilding />,
			},
			{
				name: "Fees ans Charges",
				icon: <ImDatabase />,
			},
			{
				name: "Transactions",
				icon: <MdOutlineSendToMobile />,
			},
			{
				name: "Services",
				icon: <FaFan />,
			},
			{
				name: "Service Account",
				icon: <FaUserCog />,
			},
			{
				name: "Settlements",
				icon: <FaScroll />,
			},
			{
				name: "Reports",
				icon: <AiOutlineBarChart />,
			},
		],
	},

	{
		title: "SETTINGS",
		links: [
			{
				name: "Preferences",
				icon: <MdTune />,
			},
			{
				name: "Fees and Pricing",
				icon: <TbDiscount2 />,
			},
			{
				name: "Audit Logs",
				icon: <VscOutput />,
			},
		],
	},
];

export const tableHead = [
	{
		title: "ORGANIZATION",
		icon: <IoFilter />,
	},
	{
		title: "USERNAME",
		icon: <IoFilter />,
	},
	{
		title: "EMAIL",
		icon: <IoFilter />,
	},
	{
		title: "PHONE NUMBER",
		icon: <IoFilter />,
	},
	{
		title: "DATE JOINED",
		icon: <IoFilter />,
	},
	{
		title: "STATUS",
		icon: <IoFilter />,
	},
	{
		title: "",
		icon: "",
	},
];
