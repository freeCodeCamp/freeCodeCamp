[![Throughput Graph](https://graphs.waffle.io/freecodecamp/freecodecamp/throughput.svg)](https://waffle.io/freecodecamp/freecodecamp/metrics)

[![Stories in Ready](https://badge.waffle.io/FreeCodeCamp/freecodecamp.png?label=ready&title=Ready)](https://waffle.io/FreeCodeCamp/freecodecamp)
<img src="https://s3.amazonaws.com/freecodecamp/logo4.0LG.png">

Welcome to Free Code Camp's open source codebase!
=======================

Free Code Camp is an open-source community of busy people who learn to code, then build projects for nonprofits. 

Our campers (students) start by working through our free, self-paced, browser-based curriculum. Next, they build several practice projects. Finally, we pair two campers together with a stakeholder from a nonprofit organization, and help them build the solution the nonprofit has requested.

**We help our campers build job-worthy portfolios of real apps used by real people, while helping nonprofits.**

80% of our campers are over 25, and nearly a fifth of our campers are women.

This code is running live at [FreeCodeCamp.com](http://www.FreeCodeCamp.com). We also have [Slack](http://freecodecamp.slack.com), a [blog](http://blog.freecodecamp.com), and even a [Twitch.tv channel](http://twitch.tv/freecodecamp). 

[Join our community](http://www.freecodecamp.com/signin)!

Contributing
------------

We welcome pull requests from Free Code Camp campers (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1.  Check our [public Waffle Board](https://waffle.io/freecodecamp/freecodecamp).
2.  Pick an issue that nobody has claimed and start working on it. If your issue isn't on the board, open an issue. If you think you can fix it yourself, start working on it. Feel free to ask for help in our [Slack](http://freecodecamp.slack.com).
3.  Fork the project ([Need help with forking a project?](https://help.github.com/articles/fork-a-repo/)). You'll do all of your work on your forked copy. 
4.  Create a branch specific to the issue or feature you are working on. Push your work to that branch. ([Need help with branching?](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches))
5.  Name the branch something like  `user-xxx` where user is your username and xxx is the issue number you are addressing.
6.  You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [AirBnB's JavaScript Style Guide](https://github.com/airbnb/javascript).  Please do not ignore any linting errors, as they are meant to **help** you. Make sure none of your JavaScript is longer than 80 characters per line.
7.  Once your code is ready, submit a pull request from your branch to Free Code Camp's `staging` branch. We'll do a quick code review and give you feedback, then iterate from there.
8.  Once we accept one of your pull requests, one of the project owners (currently @quincylarson, @terakilobyte, and @berkeleytrue) will add you to our camper contributor group.

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

# Install Bower dependencies
bower install

# Create a .env file and populate it with the necessary API keys and secrets:
touch .env

```

Edit your .env file with the following API keys accordingly (if you only use email login, only the MONGOHQ_URL, SESSION_SECRET, MANDRILL_USER and MANDRILL_PASSWORD fields are necessary. Keep in mind if you want to use more services you'll have to get your own API keys for those services.

```

MONGOHQ_URL='mongodb://localhost:27017/freecodecamp'
BLOGGER_KEY=stuff
FACEBOOK_ID=stuff
FACEBOOK_SECRET=stuff
GITHUB_ID=stuff
GITHUB_SECRET=stuff
GOOGLE_ID=stuff
GOOGLE_SECRET=stuff
LINKEDIN_ID=stuff
LINKEDIN_SECRET=stuff
MANDRILL_PASSWORD=stuff
MANDRILL_USER=stuff
SESSION_SECRET=secretstuff
TRELLO_KEY=stuff
TRELLO_SECRET=stuff
TWITTER_KEY=stuff
TWITTER_SECRET=stuff
TWITTER_TOKEN=stuff
TWITTER_TOKEN_SECRET=stuff
SLACK_WEBHOOK=stuff
PEER=stuff
DEBUG=true

```

```bash

# Start the mongo server
mongod

# Seed your database with the challenges
node seed/

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
| **models**/user.json                 | Mongoose schema and model for User.                         |
| **models**/challenge.json            | Mongoose schema and model for Challenge.                    |
| **public**/                        | Static assets (fonts, css, js, img).                        |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                |
| **public**/**js**/main_0.0.2.js          | Place your client-side JavaScript here.                     |
| **public**/**css**/main.less       | Main stylesheet for the app.                                |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.     |
| **views/partials**/flash.jade      | Error, info and success flash notifications.                |
| **views/partials**/navigation.jade | Navbar partial template.                                    |
| **views/partials**/footer.jade     | Footer partial template.                                    |
| **views**/layout.jade              | Base template.                                              |
| **views**/home.jade                | Home page template.                                         |
| server.js                             | Main application file.                                      |


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
| helmet                          | Restricts Cross site requests. You can modify its settings in server.js |
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

License
-------

The BSD-3-Clause

Copyright (c) 2015, Free Code Camp
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of Free Code Camp nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY FREE CODE CAMP AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
