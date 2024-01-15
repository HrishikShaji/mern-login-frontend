import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export const NavBar = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Navbar.Brand href="#home">SIMPLE LOGIN APP</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link as={Link} to="/">
					Home
				</Nav.Link>
				<Nav.Link as={Link} to="/about">
					About
				</Nav.Link>
				<Nav.Link as={Link} to="/dashboard">
					Dashboard
				</Nav.Link>
				<Nav.Link as={Link} to="/login">
					Login
				</Nav.Link>
				<Logout />
			</Nav>
		</Navbar>
	);
};
