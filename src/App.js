import {Routes, Route} from "react-router-dom";
import {Login, Dashboard, Users, UserDetails, NotFound} from "./pages";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/users' element={<Users />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/user-details/:id' element={<UserDetails />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
