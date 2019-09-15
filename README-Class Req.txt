                                                Blue Badge PERN Stack Project
Due Sep 26 by 11:59pm Points 20 Submitting a website url
Submission Guidelines:
Client & Server should be deployed to Heroku with a cloud instance of Postgres.

                                                Pre-Reqs
React basics (prop, state, components, etc.).
Go through guided React lessons.
Built an application(s) with a PostgresSQL type database.
Built an API with Express.
Understanding between a server - client relationship.
Created API endpoints, and connect to them with a client.
 

            Objective:
The objective for this project is to build a full stack application using PostgreSQL, Express, React and Node.

            Requirements:
* The server must be written using Node.
* Have AT LEAST 2 tables created for your database. One of those tables must be a Users table that stores user information.
* The server must support session validation with JWT.
* The server must encrypt sensitive material such as passwords.
* There needs to be AT LEAST 6 API endpoints. Of which one of them must implement full CRUD (Create, Read, Update, Delete) functionality.
* The client must be written in React.
* Add custom styling to all views in the Client.
* Add validation to user sign up, ie an email address should look like this ’test@test.com’, passwords should have 5 or more characters.
* The client side must implement react-router.

            Presentation:
You will demo this app to the class upon the due date of the project.  The length of time for this presentation is to be determined, but will be in front of your classmates as a professional demonstration of what you’ve built.  

Check-ins:
You will have daily stand ups regarding your active development on this application. You must be prepared at all times to give updates both seen and verbal about your application.

Users table needs:

firstName
    Cannot be null
    Needs at least 1 character
    Needs to be a string
lastName
    Cannot be null
    Needs at least 1 character
    Needs to be a string
email
    Cannot be null
    Needs to be a email
password
    Cannot be null
    Needs at least 6 characters
    Needs to be a string
    Needs to be hashed
 