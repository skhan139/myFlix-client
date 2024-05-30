myFlix Client Application
The myFlix Client is a React-based application designed for movie enthusiasts. It interacts with the myFlix movie API, a server-side REST API with an underlying database. This client application leverages the MERN tech stack to deliver a comprehensive movie browsing experience.

Features

User Registration and Authentication:
Sign up with a username, password, email, and date of birth.
Log in with a username and password.
Log out and deregister from the application.
Movie Database Interaction:
Retrieve and display all movies from the database.
View detailed information about a single movie by clicking on its card.
Use the search feature to filter movies by title, description, director name, genre name, and genre description.
User Profile Management:
View profile with account information and favorite movies.
Add or remove movies from the favorites list.
Update account information.
Running the Client Application

Hosting:

The client application is hosted on Netlify and can be accessed through the provided link.

Local Development with Parcel:

To run the application locally, follow these steps:

Clone the repository to your local machine.
Initiate the build process with Parcel using the following command:
bash
Copy code
parcel src/index.html
Open localhost:1234 in your browser.
Project Dependencies

Production:

React
React Bootstrap
React DOM
React Router
Bootstrap
Prop-Types
React FontAwesome (including free-regular-svg-icons and free-solid-svg-icons)
Development:

Parcel
API Utilized

The client utilizes the myFlix movie API, which was built as a prerequisite for this client application.
