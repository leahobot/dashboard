import {Routes, Route, Navigate} from "react-router-dom";
import {Login, Dashboard, Users, UserDetails} from "./pages";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/login' element={<Navigate to='/' />} />
			<Route path='/users' element={<Users />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/user-details/:id' element={<UserDetails />} />
		</Routes>
	);
}

export default App;

// <Route path='*' element={<NotFound />} />
