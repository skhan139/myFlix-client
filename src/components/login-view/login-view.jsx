import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
  
        const data = {
            Username: username,
            Password: password,
        };
  
        fetch("https://movieapicf-30767e813dee.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("No such user");
            }
        })
        .catch((e) => {
            console.error("Login error: ", e);
            alert("Something went wrong");
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            {/* Form fields go here */}
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export { LoginView };

