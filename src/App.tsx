import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NavBar } from "./components/NavBar";
import { Signin } from "./pages/Signin";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/about" Component={About} />
				<Route path="/dashboard" Component={Dashboard} />
				<Route path="/login" Component={Login} />
				<Route path="/signin" Component={Signin} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
