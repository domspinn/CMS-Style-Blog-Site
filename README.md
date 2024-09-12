# MVC Tech Blog

## Description

The **MVC Tech Blog** is a content management system-style (CMS) blog website where developers can publish blog posts, comment on other users' posts, and engage with the tech community. The project follows the **Model-View-Controller (MVC)** architectural pattern, utilizing **Sequelize** as the ORM, **Handlebars.js** as the templating engine, and **Express.js** for routing. The site is fully deployed on Render.

Users can sign up, log in, and manage their posts through a personalized dashboard. Additionally, users can comment on posts, with authentication handled via **express-session** and passwords hashed using **bcrypt**.

## Table of Contents
- [MVC Tech Blog](#mvc-tech-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [License](#license)
  - [Links](#links)

## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Features

- User authentication: sign-up, log-in, and log-out functionality
- Post creation, update, and deletion for logged-in users
- Ability to comment on posts
- Dashboard to manage a user's posts
- Utilizes the MVC paradigm
- Secure authentication using express-session and bcrypt

## Installation

1. Clone the repository:

   git clone https://github.com/domspinn/CMS-Style-Blog-Site

2. Navigate to the project directory:
 
   cd mvc-tech-blog
   
3. Install the required dependencies:
   
   npm install
   
4. Set up the PostgreSQL database:
   - Create a `.env` file in the root directory with your database credentials and session secret:
     
     DB_NAME='your_db_name'
     DB_USER='your_db_user'
     DB_PASSWORD='your_db_password'
     DB_HOST='localhost'
     DB_PORT=5432
     SESSION_SECRET='your_session_secret'
     ```
   - Initialize the database by running Sequelize migrations:
    
     npm run migrate
     
5. Start the application:
   
   npm start
   

## Usage

Once the application is running, you can access it via `http://localhost:3000`. The homepage displays blog posts from all users, and the dashboard allows authenticated users to create and manage their own posts.

## Technologies

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **PostgreSQL**
- **Handlebars.js**
- **express-session** for user authentication
- **bcrypt** for password hashing
- **dotenv** for environment variables

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Links

- **GitHub Repository**: [https://github.com/domspinn/CMS-Style-Blog-Site](https://github.com/domspinn/CMS-Style-Blog-Site)
- **Deployed Application**: [https://your-render-app-url.com](https://your-render-app-url.com)
