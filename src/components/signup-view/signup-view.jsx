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
            {/* Form fields go here */}
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

export { SignupView };
