![](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

[![Throughput Graph](https://graphs.waffle.io/freecodecamp/freecodecamp/throughput.svg)](https://waffle.io/freecodecamp/freecodecamp/metrics)

[![Join the chat at https://gitter.im/freecodecamp/freecodecamp](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/freecodecamp/freecodecamp?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Welcome to Free Code Camp's open source codebase!
=======================

Free Code Camp is an open-source community of busy people who learn to code and build projects for nonprofits.

Our campers (students) start by working through our free, self-paced, browser-based curriculum. Next, they build several practice projects. Finally, we pair two campers together with a stakeholder from a nonprofit organization, and help them build the solution the nonprofit has requested.

**We help our campers build job-worthy portfolios of real apps used by real people, while helping nonprofits.**

80% of our campers are over 25, and nearly a fifth of our campers are women.

This code is running live at [FreeCodeCamp.com](http://www.FreeCodeCamp.com). We also have [Gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp), a [blog](http://medium.freecodecamp.com), and even a [Twitch.tv channel](http://twitch.tv/freecodecamp).

[Join our community here](http://www.freecodecamp.com/signin).

*Note: We're currently very close to moving from Express to Loopback. As such, please keep in mind that the instructions here for setting up and running the project do not directly translate to the staging branch. Additionally, the file structure is quite a bit different. As always, the staging branch is the appropriate place to branch off of to fix/add something.*

Wiki
------------

We would love your help expanding our [wiki](https://github.com/freecodecamp/freecodecamp/wiki). Our goal is to become a great resource for people learning to code, building local coding communities, and applying for coding jobs.

Contributing
------------

We welcome pull requests from Free Code Camp campers (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1.  Check our [public Waffle Board](https://waffle.io/freecodecamp/freecodecamp).
2.  Pick an issue that nobody has claimed and start working on it. If your issue isn't on the board, open an issue. If you think you can fix it yourself, start working on it. Feel free to ask for help in our [Gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp).
3.  Fork the project ([Need help with forking a project?](https://help.github.com/articles/fork-a-repo/)). You'll do all of your work on your forked copy.
4.  Create a branch specific to the issue or feature you are working on. Push your work to that branch. ([Need help with branching?](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches))
5.  Name the branch something like `fix/xxx` or `feature/xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `fix/email-login` would be a branch where I fix something specific to email login.
6.  You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [Free Code Camp's JavaScript Style Guide](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Free-Code-Camp-JavaScript-Style-Guide) (you can find a summary of those rules [here](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/.eslintrc). Please do not ignore any linting errors, as they are meant to **help** you and to ensure a clean and simple code base. Make sure none of your JavaScript is longer than 80 characters per line.
7.  Once your code is ready, submit a [pull request](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute) from your branch to Free Code Camp's `staging` branch. We'll do a quick code review and give you feedback, then iterate from there. It may also be helpful to read about git [rebasing](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/git-rebase).

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

# Change directory
cd freecodecamp

# Install NPM dependencies
npm install

# Install Gulp globally
npm install -g gulp

# Install Bower globally
npm install -g bower

# Install Bower dependencies
bower install

# Create a .env file and populate it with the necessary API keys and secrets:
touch .env
```

Edit your `.env` file with the following API keys accordingly. If you only use email login, only the `MONGOHQ_URL`, `SESSION_SECRET`, `MANDRILL_USER` and `MANDRILL_PASSWORD` fields are necessary. Keep in mind if you want to use more services you'll have to get your own API keys for those services. If you only use a subset or no OAuth2 authentication methods, you have to remove them from ```server/passport-providers.js``` otherwise the server will complain of missing clientID at launch.

```
MONGOHQ_URL='mongodb://localhost:27017/freecodecamp'

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

TRELLO_KEY=stuff
TRELLO_SECRET=stuff

TWITTER_KEY=stuff
TWITTER_SECRET=stuff
TWITTER_TOKEN=stuff
TWITTER_TOKEN_SECRET=stuff

BLOGGER_KEY=stuff

SESSION_SECRET=secretstuff
COOKIE_SECRET='this is a secret'

PEER=stuff
DEBUG=true
```

```bash
# Start the mongo server in a seperate terminal
mongod

# Initialize Free Code Camp
# This will seed the database for the first time.
# This command should only be run once.
npm run first-time

# start the application
gulp
```
Now navigate to your browser and open http://localhost:3001
Congradulations! You did it!

Note that you may need to run gulp before ```node seed/``` one time to create ```server/rev-manifest.json``` (on which the seeding scripts also depend).

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
