import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUpPage from "./components/signUpPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
