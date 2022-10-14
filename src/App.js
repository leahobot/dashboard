import {Routes, Route, Navigate} from "react-router-dom";
import {Login, Dashboard, Users, UserDetails, NotFound} from "./pages";
import {NavBar} from "./components";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Navigate to='/' />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/users' element={<Users />} />
				<Route path='/userdetails/:id' element={<UserDetails />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
