---
title: Heroku Deployment Guide
---
1.  Create a Heroku account.

2.  After making an account, you can go to your <a href='https://dashboard.heroku.com/apps' target='_blank' rel='nofollow'>dashboard</a>

3.  Click the + sign in the top right hand corner and click Create New App (just like you're making a new repo on github). Give it a name, and click Create.

1.  After creating the app you'll see its name in your dashboard. Click on it.

2.  You'll be taken to a dashboard for that app. Click on the Deploy tab.

3.  There you'll be pleased to find that you can connect to a github repo. In the Deployment Method section, choose Github and authenticate by signing into Github.

4.  Right below that, fill in your github repo name. (This of course requires that you've pushed a repo to github from either cloud9 or your local machine...and that you've correctly configured it. More on that below.)

5.  Scroll down again and click Automatic Deploy or scroll down even more and click Manual Deploy. After a few moments you should see your app running at your-repo-name.herokuapp.com. Sweet.

## Creating your app locally or on Cloud9

1.  Make a new folder called timestamp-microservice (or whatever your project is called).

`$ mkdir timestamp-microservice && cd timestamp-microservice`

1.  Create the files you're going to need:

`$ touch .env .gitignore README.md index.html server.js`

1.  Install the packages that you need along the way

Examples:

`$ npm install --save express`

`$ npm install --save moment`

These will get added to a folder called node_modules in your root folder.

1.  Initialize the project with a package.json by doing `$ npm init`

It'll ask you a series of questions and create a package.json file in your root folder based on your answers and its defaults. If you've already created a file called server.js as mentioned above, this _essential_ line will get added to your package.json file:

      "scripts": {

      "start": "node server.js"

      }

If you name it anything else, though, like 'index.js', that line won't get added and you'll have to manually add that. That's the default behavior as mentioned <a href='https://docs.npmjs.com/files/package.json#default-values' target='_blank' rel='nofollow'>here</a>. You can install node modules before or after this step and they will get added to package.json automatically.

1.  When you're ready, create a new repository on github, copy the remote URL, and initialize the project locally by doing:

`$ git init`

`$ git add .`

`$ git commit -m "initial commit"`

`$ git remote add origin <your github url>`

`$ git push -u origin master`

Tip: In your server.js file, make sure to use `app.listen(process.env.PORT || <default port>)` so that the app works on heroku.

Return to step 7 above.