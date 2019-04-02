---
title: How to Install the Mean Stack on Mac Osx
---
To install MongoDB, you should have Mac OS X 10.6 (Snow Leopard) or above. To find out which version of OS X you own, click the  icon in the top left corner of your screen and select `About This Mac`.

![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":warning:") **WARNING:** do a Time Machine backup before carrying out any of the following steps!

## Step 1: installing MongoDB

The easiest way to install MongoDB on OS X is using <a href='http://brew.sh/' target='_blank' rel='nofollow'>HomeBrew</a>. If you haven't used HomeBrew before, simply execute the following command in a Terminal window:

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

After HomeBrew is successfully installed, follow up with this command:

    brew update && brew install mongodb

HomeBrew will automatically install all the dependencies for you.

## Step 2: installing Node.js

Again, we'll let HomeBrew do the heavy lifting:

    brew install node

The npm executable is already included in the Node.js package.

Before continuing, let's make sure Node.js modules can be found by others (![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":warning:") **CAUTION**: it's best to copy and paste these commands, as you'd lose the original contents of your `.bashrc` file if you typed `>` in place of `>>`):

    echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc

To check if the configuration is in effect, execute:

    echo $NODE_PATH

You should see `./node_modules:/usr/local/lib/node_modules` printed out below your command.

If you use a different shell than Bash, simply replace `~/.bashrc` with your shell configuration file.

## Step 3: installing fullstack tools

    npm install -g express yo grunt grunt-cli generator-angular-fullstack bower

## Step 4: generating a fullstack app

Make a directory for your Back End Project projects. Assuming your desktop is your de facto workspace:

    mkdir ~/Desktop/Back End Projects && cd ~/Desktop/Back End Projects

Now that all the preparations are in place, it's time for the main event:

    yo angular-fullstack

Answer the questions according to checklist items <span class="hashtag">#13-23</span> of <a href='http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects' target='_blank' rel='nofollow'>Challenge: Get Set for Back End Projects</a>. Consult <span class="hashtag">#24-27</span> if you run into errors. This will download ~350MB worth of files into your current directory.

Before going any further, we need to fix a <a href='https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate' target='_blank' rel='nofollow'>known issue</a> in some generated files:

    echo "sed -i '' -e 's/_.merge/_.extend/' server/api/*/*.controller.js" > \
    fix-exports-update.sh && chmod +x fix-exports-update.sh && \
    ./fix-exports-update.sh

You need to run `./fix-exports-update.sh` every time you generate a new API endpoint (until they fix this upstream, that is).

## Step 5: initialising local Git repository

Tell Git not to track your database:

    echo "data" >> .gitignore

Turn the directory in which your application is located into a Git repository by running the following commands:

    git init && git add . && git commit -am 'initial commit'

## Step 6: starting MongoDB

To start MongoDB for the first time in your app's directory, run the following commands in your terminal:

    mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface' > mongod.sh && chmod a+x mongod.sh && ./mongod.sh

From this point on you can simply start MongoDB by executing `./mongod.sh`. A few things to note:

*   The `.conf` file directs `mongod` to write messages to a log file instead of stdout. To view the log, run the following in a separate Terminal tab: `less /usr/local/var/log/mongodb/mongo.log`.
*   Since we're not on Cloud9, we don't need the `--nojournal` option. Journaling lets you recover the database in case of a `mongod` crash.
*   You have to make a clean database for each project. If you copied the `data` directory over from an earlier project, `mongod` will fail to start. If that's the case, just `rm -rf data && mkdir data && ./mongod.sh`.

## Step 7: starting Grunt

Open a new Terminal tab by pressing `⌘T`, and run the following command:

    grunt serve

Grunt should automatically open your new Angular site's index page as soon as it finishes starting up.

Now you should be able to follow the rest of the Challenge instructions to push to GitHub and Heroku. Just ignore the part about SSH key (#33-36) and replace `~/workspace` with your app directory's path.

## Footnote

The above steps were tested under the following configuration:

*   OS X 10.10.5
*   zsh 5.0.8 (x86_64-apple-darwin14.3.0)
*   node v0.12.7
*   npm 2.11.3