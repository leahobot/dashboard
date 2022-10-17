import {Routes, Route} from "react-router-dom";
import {Login, Dashboard, Users, UserDetails, NotFound} from "./pages";

function App() {
	return (
		<Routes>
			<Route path='/lendsqr-fe-test' element={<Login />} />
			<Route path='/lendsqr-fe-test/users' element={<Users />} />
			<Route path='/lendsqr-fe-test/dashboard' element={<Dashboard />} />
			<Route
				path='/lendsqr-fe-test/user-details/:id'
				element={<UserDetails />}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
