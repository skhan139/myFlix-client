import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch('https://movieapicf-30767e813dee.herokuapp.com/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful");
                // Handle successful signup, if needed
            } else {
                alert("Signup failed");
            }
        }).catch((error) => {
            console.error("Signup error: ", error);
            alert("Something went wrong");
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="signUpFormUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength="3"
              className="mb-4"
              required
            />
          </Form.Group>
    
          <Form.Group controlId="signUpFormPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
              required
            />
          </Form.Group>
          <Form.Group controlId="signUpFormEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
              required
            />
          </Form.Group>
          <Form.Group controlId="signUpFormBirthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="mb-4"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    };

export { SignupView };
