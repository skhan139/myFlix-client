import { useEffect, useState } from "react";
import { UserInfo } from './user-info';
import { Button, Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FavouriteMovies } from './favourite-movies';
import { UpdateUser } from "./update-user";

export const ProfileView = ({ localUser, movies, token }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(storedUser?.username || '');
  const [email, setEmail] = useState(storedUser?.email || '');
  const [password, setPassword] = useState(storedUser?.password || '');
  const [birthDate, setBirthdate] = useState(storedUser?.birthDate || '');
  const [user, setUser] = useState(storedUser || {});

  const favoriteMovies =
  user && user.favoriteMovies
    ? movies.filter((m) => user.favoriteMovies.includes(m._id))
    : [];

  const formData = {
    Username: username,
    Email: email,
    BirthDate: birthDate,
    Password: password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://movieapicf-30767e813dee.herokuapp.com/users/${user.username}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          alert("Update successful");
          return response.json();
        }
        throw new Error("Update failed");
      })
      .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
        alert("Update failed");
      });
  };

  const handleUpdate = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "birthDate":
        setBirthdate(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleDeleteAccount = () => {
    fetch(`https://movieapicf-30767e813dee.herokuapp.com/users/${user.username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Account deleted successfully.");
        localStorage.clear();
        window.location.reload();
      } else {
        alert("Something went wrong.");
      }
    });
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(`https://movieapicf-30767e813dee.herokuapp.com/users/${localUser.Username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const currentUser = {
          id: data._id,
          username: data.Username,
          password: data.Password,
          email: data.Email,
          birthDate: data.BirthDay,
          favoriteMovies: data.FavoriteMovies || []
        };
        setUser(currentUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token, localUser.Username]);

  return (
    <Container className="mx-1">
      <Row>
        <Card className="mb-5">
          <Card.Body>
            <Card.Title>My Profile</Card.Title>
            <Card.Text>
              {user && (
                <UserInfo name={user.username} email={user.email} />
              )}
              {favoriteMovies.length > 0 && (
                <FavouriteMovies user={user} favoriteMovies={favoriteMovies} />
              )}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-5">
          <Card.Body>
            <UpdateUser
              formData={formData}
              handleUpdate={handleUpdate}
              handleSubmit={handleSubmit}
              handleDeleteAccount={handleDeleteAccount}
            />
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
