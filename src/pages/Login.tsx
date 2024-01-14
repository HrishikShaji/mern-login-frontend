import { FormEvent, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

type InputValue = {
  username: string;
  password: string;
};

export const Login = () => {
  const [inputValue, setInputValue] = useState<InputValue>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(inputValue);
    await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValue),
    });
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
      <h1>Login</h1>
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
          <h1>New User?</h1>
          <Link to="/signin">SignIn</Link>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
