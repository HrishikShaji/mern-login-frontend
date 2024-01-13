import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="h-screen w-full bg-neutral-950">
			<NavBar />
			<Hero />
			<Footer />
		</div>
	);
}

export default App;
