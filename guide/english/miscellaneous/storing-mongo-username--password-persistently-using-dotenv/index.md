---
title: Storing Mongo Username  Password Persistently Using Dotenv
---
## Storing Secure information for applications with dotenv

This article is about saving username and password credentials information for secure database access on 3rd party sites such as mLab in your local testing environment in order to protect them from anyone looking at your public repository on a site like github.

Secure or private information should never be stored inside your code and pushed to a repository, because it would be publicly exposed which puts your information at risk, and puts you at risk of losing API or database access if someone uses your credentials fraudulently.

[This wiki article](//forum.freecodecamp.com/t/guide-for-using-mongodb-and-deploying-to-heroku/19347/3) discusses how to protect your credentials using the export command, but in order to make these variables persistent you have two choices. However, the enivorment variables set this way are erased each time the shell is restarted, such as when you shut down your computer and restart for a new coding session.

You'd have to go through all the steps again to set your environment variables each time you started a new terminal shell. This means you'd need to store your credentials in text file somewhere, or keep looking them up in your third party account (such as mLab).

Doing this each time you start a new session gets tedious, and rather than store these in the code itself where it's easy to find, I'm going to show you a way to use the text file and import your credentials.

The first choice is to use your shell profile and export these variables each time you start up a new terminal. However over a few weeks of developing new applications and projects your shell profile would get clogged up with a massive list of variables that you won't need every session. You only need the credentials for the application you are currently working on.

## Cleaning up a git repo containing secure credentials

If you have already pushed your repository to github with your credentials stored in teh codebase, simply deleting them and pushing it again will not help, because your credentials are stored in your history, which is visible to the public as well. If this is the case use these commands to reset your git repository wipe out your history.

**First,** delete your repo from github. You'll create a new one when we are ready.

**Second,** delete your local git repository from your working directory.  
-Change directories to your working directory. Your .git repo file should be in here.  
BEWARE: using the -rf flag can delete your entire harddrive if not used correctly. I use the -i flag, which stands for interactive to be certain I am IN the correct directory. After sorting through a few files and I am 100% sure I'm in the right place, I'll kill that command and run it again without the -i flag. Do what you feel most comfortable with, but it's advised you have a full backup of your computer (in more than one place) before running a -rm command.

    cd <project-name>
    rm -i -rf .git

**Third** be sure to update your .gitignore file to include the .env file in addition to any other folders you wish to keep private. Local IDE files such as .idea/ if using jetbrains for example, could be in this file. My .gitignore file looks like this. Note that you can add a folder or file here before it is created without causing any errors.

`.gitignore`  
node_modules  
.env  
data/  
.idea/

**Finally** create a new repository. Now you're ready to continue creating your .env file and pushing your repo safely to github and keep your credentials safe.

`git init`

## How to use dotenv in your local application

This is where the node module dotenv can help. To use dotenv, you need to require it in your application code, call the config() function on it which pulls your credentials from a locally stored file on your computer. This file is named `.env`

**Step 1:** Create a .env file and store your variables in it  
`MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

**Step 2:** Require dotenv in your main application  
in your main `app.js` (or whatever you have named it)  
`var dotenv = require('dotenv');`

**Step 3:** Call the config function on your variable. (note this can all be done in one line by chaining, but I like seeing this occur as a separate activity).  
`dotenv.config();`

**Step 4:** Set your mongodb URL by calling your process varables:  
`var url = process.env.MONGOLAB_URI;`

This solution keeps your code clean of the secure credentials you do not want to push to a public repository, while keeping each application neatly organized and saving time during development.

**References:**  

<aside class="onebox whitelistedgeneric">

<header class="source"><a href='http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/' target='_blank' rel='nofollow'>osxdaily.com</a></header>

<article class="onebox-body">![](http://cdn.osxdaily.com/wp-content/uploads/2014/08/terminal-icon-osx.png)

### <a href='http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/' target='_blank' rel='nofollow'>Where to Set Environment Variables in Mac OS X</a>

At the command line, environmental variables are defined for the current shell and become inherited by any running command or process. They can determine anything from the default shell, the PATH, …

</article>

</aside>

<aside class="onebox stackexchange">

<header class="source"><a href='http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js' target='_blank' rel='nofollow'>stackoverflow.com</a></header>

<article class="onebox-body"><a href='https://cdn-media-1.freecodecamp.org/imgr/jRaTj.jpg' target='_blank' rel='nofollow'>![Drake Main</a>](http://stackoverflow.com/users/4956243/drake-main) 

#### <a href='http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js' target='_blank' rel='nofollow'>Best practice when using an API key in Node.js</a>

<div class="tags">**node.js, api-key**</div>

<div class="date">asked by <a href='http://stackoverflow.com/users/4956243/drake-main' target='_blank' rel='nofollow'>Drake Main</a> on <a href='http://stackoverflow.com/questions/35356692/best-practice-when-using-an-api-key-in-node-js' target='_blank' rel='nofollow'>07:05AM - 12 Feb 16</a></div>

</article>

</aside>

<aside class="onebox stackexchange">

<header class="source"><a href='http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init' target='_blank' rel='nofollow'>stackoverflow.com</a></header>

<article class="onebox-body"><a href='https://www.gravatar.com/avatar/9db1745a666cface1731c12d54e189e6?s=128&d=identicon&r=PG' target='_blank' rel='nofollow'>![Peiniau</a>](http://stackoverflow.com/users/105813/peiniau) 

#### <a href='http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init' target='_blank' rel='nofollow'>How to fully delete a git repository created with init?</a>

<div class="tags">**git, git-init**</div>

<div class="date">asked by <a href='http://stackoverflow.com/users/105813/peiniau' target='_blank' rel='nofollow'>Peiniau</a> on <a href='http://stackoverflow.com/questions/1213430/how-to-fully-delete-a-git-repository-created-with-init' target='_blank' rel='nofollow'>04:06PM - 31 Jul 09</a></div>

</article>

</aside>