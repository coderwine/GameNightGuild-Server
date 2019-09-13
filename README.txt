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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
How to Proceed:
It’s really easy to have big ideas of grandeur, in fact we encourage that. We do have a caveat of figuring out what is version 1.0 of the application.


Start with thinking through the application. Without doing this you will lose time in the long run, trust us. So let’s have an example of a hypothetical idea, an application for a Farmers Market.

    My Ideas:
    a) Game Night Guilds  --WORKING PROJECT
    b) All in the Family 
    c) Housewares
    d) This is How We...  *** https://rapidapi.com/efecan95.gs/api/tutorial2/endpoints
    e) 

Now that we have our idea, we now think through some questions:
 

Q: Who will this application be for? (Who will be our users?)
    a) Small Gaming Groups   --WORKING PROJECT
    b) Kids Milestone
    c) Individual Households
    d) Trainer/Trainees
    e) 

A: This application will be specifically for the Farmers Market vendors. Not for people who go to farmers markets, just the vendors. (Notice that it’s very specific)

 

Q: What is the purpose of this application?
    a)  Log Game(s) stats  --WORKING PROJECT
    b)  For Parents to keep note of varied development stages of their children (an online keepsake)
    c)  Creating an inventory account of household items & groceries
    d)  Creating various tutorials for users to create and access
    e) 

A: The application is for Farmers Market vendors to submit their inventory to the organization that runs the market.

 

Q: What will this application give users the ability to do?
    a)  Log in as the host/member and view their gaming groups stats  --WORKING PROJECT
    b)  Parents can log in and update status for their kids.  *Potentially allow other family members to log in (ie grandparents, aunt/uncle, etc) so that they can include possible experiences.  Parents will have overall control of what is posted.
    c)  Individuals of a household can update the amount of varied items so that those items could be put onto a "grocery list".
    d) Trainers can create "How-To's" for users to access and view.
    e) 

A: Vendors can log on. They can add their inventory. This app will also allow the organization to manage the vendors at the Farmers Market - creating, updating, and deleting them.

 

Now that we have our idea rounded out a bit, let’s start thinking about how we will store the data:
    a) Post game game details (title), win/losses/scores, players, dates, special comments & pics.  --WORKING PROJECT
    b) Development updates (height/weight, age), projects to note (ie drawings, crafts, etc), noteable "quotes" (funny things said), pictures.
    c) Location, Item, Quantity, On List
    d) Subject Matter, Status (Beginner, Intermediate, Further Training), Required (yes/no)
    e)

Thought process:

 

I would like to have 3 tables, Users, Vendors, VendorsInventory.

 

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
 

Continue for the rest of the tables.

 

This gives you an idea of how to contain your development. If you ever go off track you can ask yourself “is this a part of my original goal?”  If not, then take a step back and get back on track.

Have Fun
Don’t lose sight of the 50,000 ft. view of why you are doing what you’re doing. You’re learning, it’s going to be messy, but that’s all a part of the fun.