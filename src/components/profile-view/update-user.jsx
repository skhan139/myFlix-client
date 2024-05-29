import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const UpdateUser = ({ formData, handleUpdate, handleSubmit, handleDeleteAccount, birthDateValue }) => {
  

  return (
    <Row>
      <Form onSubmit={handleSubmit}>
        <h3>Update profile information</h3>
        <Form.Group className="mb-2">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            minLength={4}
            name="username"
            value={formData.username}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password:</Form.Label>
          <p>Your new password must be at least 8 characters long.</p>
          <Form.Control
            type="password"
            minLength={8}
            name="password"
            value={formData.password}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Birthdate:</Form.Label>
          <Form.Control
            type="date"
            name="birthDate"
            value={birthDateValue}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit Changes</Button>
        <Button
          onClick={() => handleDeleteAccount()}
          variant="outline-secondary"
          className="mx-3"
        >
          Delete account
        </Button>
      </Form>
    </Row>
  );
};
