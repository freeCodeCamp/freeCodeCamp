[![Throughput Graph](https://graphs.waffle.io/freecodecamp/freecodecamp/throughput.svg)](https://waffle.io/freecodecamp/freecodecamp/metrics)

[![Stories in Ready](https://badge.waffle.io/FreeCodeCamp/freecodecamp.png?label=ready&title=Ready)](https://waffle.io/FreeCodeCamp/freecodecamp)
<img src="https://s3.amazonaws.com/freecodecamp/logo4.0LG.png">

Free Code Camp!
=======================

We're a community of busy people learning to code by collaborating on projects for nonprofits. We learn, then use, the JavaScript MEAN stack - MongoDB, Express.js, Angular.js and Node.js. 

This app is live at [FreeCodeCamp.com](http://www.FreeCodeCamp.com), and we have a [chat room](https://gitter.im/FreeCodeCamp/FreeCodeCamp), [blog](http://blog.freecodecamp.com) and [forum](http://forum.freecodecamp.com), too. Join us!

Prerequisites
-------------

- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/freecodecamp/freecodecamp.git freecodecamp

cd freecodecamp

# Install NPM dependencies
npm install

# Create a .env file and populate it with the necessary API keys and secrets:
touch .env

```

Edit your .env file with the following API keys accordingly (if you only use email login, only the MONGOHQ_URL, SESSION_SECRET, MANDRILL_USER and MANDRILL_PASSWORD fields are necessary:

```

MONGOHQ_URL='mongodb://localhost:27017/freecodecamp'
SESSION_SECRET='ANY ENGLISH PHRASE'
MANDRILL_USER='THE EMAIL ADDRESS FROM YOUR MANDRILL ACCOUNT'
MANDRILL_PASSWORD='YOUR MANDRILL PASSWORD'
FACEBOOK_ID='FACEBOOK APP API KEY'
FACEBOOK_SECRET='FACEBOOK SECRET'
GITHUB_ID='GITHUB APP API KEY'
GITHUB_SECRET='GITHUB APP SECRET'
TWITTER_KEY='TWITTER APP API KEY'
TWITTER_SECRET='TWITTER APP SECRET'
GOOGLE_ID='GOOGLE APP API KEY'
GOOGLE_SECRET='GOOGLE APP SECRET'
LINKEDIN_ID='LINKEDIN APP API KEY'
LINKEDIN_SECRET='LINKEDIN APP SECRET'

```

```bash

# Start the mongo server
mongod

# Seed your database with the challenges
node seed_data/seed.js

# start the application
gulp

```

Project Structure
-----------------

| Name                               | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware. |
| **config**/secrets.js              | Your API keys, tokens, passwords and database URL.          |
| **controllers**/contact.js         | Controller for contact form.                                |
| **controllers**/home.js            | Controller for home page (index).                           |
| **controllers**/user.js            | Controller for user account management.                     |
| **controllers**/challenges.js      | Controller for rendering the challenges.                    |
| **models**/User.js                 | Mongoose schema and model for User.                         |
| **models**/Challenge.js            | Mongoose schema and model for Challenge.                    |
| **public**/                        | Static assets (fonts, css, js, img).                        |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                     |
| **public**/**css**/main.less       | Main stylesheet for the app.                                |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.     |
| **views/partials**/flash.jade      | Error, info and success flash notifications.                |
| **views/partials**/navigation.jade | Navbar partial template.                                    |
| **views/partials**/footer.jade     | Footer partial template.                                    |
| **views**/layout.jade              | Base template.                                              |
| **views**/home.jade                | Home page template.                                         |
| app.js                             | Main application file.                                      |


List of Packages
----------------

| Package                         | Description                                                          |
| ------------------------------- |:--------------------------------------------------------------------:|
| async                           | Utility library that provides asynchronous control flow.             |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                      |
| cheerio                         | Scrape web pages using jQuery-style syntax.                          |
| clockwork                       | Clockwork SMS API library.                                           |
| connect-assets                  | Compiles LESS stylesheets, concatenates & minifies JavaScript.       |
| connect-mongo                   | MongoDB session store for Express.                                   |
| csso                            | Dependency for connect-assets library to minify CSS.                 |
| express                         | Node.js web framework.                                               |
| body-parser                     | Express 4.0 middleware.                                              |
| cookie-parser                   | Express 4.0 middleware.                                              |
| express-session                 | Express 4.0 middleware.                                              |
| morgan                          | Express 4.0 middleware.                                              |
| compression                     | Express 4.0 middleware.                                              |
| errorhandler                    | Express 4.0 middleware.                                              |
| method-override                 | Express 4.0 middleware.                                              |
| express-flash                   | Provides flash messages for Express.                                 |
| express-validator               | Easy form validation for Express.                                    |
| fbgraph                         | Facebook Graph API library.                                          |
| github-api                      | GitHub API library.                                                  |
| jade                            | Template engine for Express.                                         |
| less                            | LESS compiler. Used implicitly by connect-assets.                    |
| helmet                          | Restricts Cross site requests. You can modify its settings in app.js |
| mongoose                        | MongoDB ODM.                                                         |
| nodemailer                      | Node.js library for sending emails.                                  |
| passport                        | Simple and elegant authentication library for node.js                |
| passport-facebook               | Sign-in with Facebook plugin.                                        |
| passport-github                 | Sign-in with GitHub plugin.                                          |
| passport-google-oauth           | Sign-in with Google plugin.                                          |
| passport-twitter                | Sign-in with Twitter plugin.                                         |
| passport-local                  | Sign-in with Username and Password plugin.                           |
| passport-linkedin-oauth2        | Sign-in with LinkedIn plugin.                                        |
| passport-oauth                  | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies.   |
| request                         | Simplified HTTP request library.                                     |
| lodash                          | Handy JavaScript utilities library.                                   |
| uglify-js                       | Dependency for connect-assets library to minify JS.                  |
| mocha                           | Test framework.                                                      |
| chai                            | BDD/TDD assertion library.                                           |
| supertest                       | HTTP assertion library.                                              |
| multiline                       | Multi-line strings for the generator.                                |


Changelog
---------

### 0.1.0 (December 24, 2014)
- Improved how unique emails and usernames are handled (with Express-validator)
- Added a tweet button to challenge completion model
- Refactored all views to get rid of any hard-coded challenge information (to make for a better forking experience)
- Installed Helmet to maximize security of application
- Added .env and removed all trace of API keys from git history

Contributing
------------

We welcome pull requests from Free Code Camp "campers" (our students) and seasoned JavaScript developers alike!
1) Check our [public Trello Board](https://trello.com/b/CW5AFr0v/free-code-camp-development)
2) If your issue or feature isn't on the board, either open an issue on this GitHub repo or message Quincy Larson to request to be added to the Trello board.
3) Once your code is ready, submit the pull request. We'll do a quick code review and give you feedback, and iterate from there.

This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions. If you are submitting a pull request that involves
Jade templates, please make sure you are using *spaces*, not tabs.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Sahat Yalkabov (creator of the Hackathon Starter App with which Free Code Camp started)
Copyright (c) 2015 Quincy Larson (the guy who started Free Code Camp and wrote a lot of the code here)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
