import axios from "axios";
import { FormEvent, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { serverUrl } from "../lib/utils";

type InputValue = {
	username: string;
	password: string;
};

export const Signin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [inputValue, setInputValue] = useState<InputValue>({
		username: "",
		password: "",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log(inputValue);
		try {
			setIsLoading(true);
			const response = await axios.post(
				`${serverUrl}signin`,
				{
					...inputValue,
				},
				{ withCredentials: true },
			);
			console.log(response);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container
			fluid
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1>Sign In</h1>
			<Form style={{ width: "50%", height: "50%" }} onSubmit={handleSubmit}>
				<Form.Group
					className="mb-3"
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "10px",
					}}
					controlId="formBasicEmail"
				>
					<Form.Label>Username</Form.Label>
					<Form.Control
						style={{ width: "600px" }}
						type="text"
						placeholder="Username"
						name="username"
						value={inputValue.username}
						onChange={(e) =>
							setInputValue((prev) => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
					/>
				</Form.Group>

				<Form.Group
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: "10px",
					}}
					className="mb-3"
					controlId="formBasicPassword"
				>
					<Form.Label>Password</Form.Label>
					<Form.Control
						style={{ width: "600px" }}
						type="password"
						placeholder="Password"
						name="password"
						value={inputValue.password}
						onChange={(e) =>
							setInputValue((prev) => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
					/>
				</Form.Group>
				<div style={{ display: "flex", gap: "10px" }}>
					<h1>Already have an Account?</h1>
					<Link to="/login">Log In</Link>
				</div>
				<Button variant="primary" type="submit">
					{isLoading ? "Loading..." : "Sign In"}
				</Button>
			</Form>
		</Container>
	);
};
