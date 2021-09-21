# My Tech Blog [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]

A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. 

## Technologies Used

* JavaScript (Node.js, express.js)
* Sequelize as the ORM
* Handlebars.js as the templating language
* Express-session npm package for authentication

## Description 

This blog site is intended to provide the platform for reading and writing about technical concepts, recent advancements, and new technologies. The app follows the MVC paradigm in its architectural structure. Acceptance Criteria:

```
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Table of Contents 
- [Installation](#installation)
- [License](#license)
- [Screenshots](#screenshot)
- [Questoins](#questions)
  
## Installation 

This app is already deployed 

if you want to install it locally:               
` npm install `  
create .env file  
example:  
DB_NAME='tech_blog_db'  
DB_USER='--your user name--'   
DB_PW='--your mysql pass--'   
` mysql -u root -p ` (enter your password)  
` source db/schema.sql `  
` quit`  
` npm run seed  / node seeds/index.js`       
` npm run start / node server.js` 
  
## License 
  
  The MIT License


## Screenshots
  
|![alt text](public/img/sssign.png) | ![alt text](public/img/sslog.png)|
| :---: | :---: |
|![alt text](public/img/sshome.png) | ![alt text](public/img/ssdash.png)|
|![alt text](public/img/sscomment.png) | ![alt text](public/img/ssedit.png)|


   
## Questions
  If you hane any questions:
  
  Get in touch with me on Github [Irina-Golubitsky](https://github.com/Irina-Golubitsky)
  
  Email me irina.golubitsky@gmail.com
