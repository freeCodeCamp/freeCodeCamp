---
title: Deploying to Openshift
---
If you deploy your applications to Heroku you can only upload 5 applications, if you want to deploy a new one, you need to verify you account with your credit card.

![Heroku Error](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

These are the steps you need to follow to deploy to <a href='https://www.openshift.com/app/account/new' target='_blank' rel='nofollow'>OpenShift</a>.

## Requirements

*   An account in <a href='https://www.openshift.com/app/account/new' target='_blank' rel='nofollow'>OpenShift</a>
*   Our app in a [Git](//forum.freecodecamp.com/t/wiki-git-resources/13136) Repository

## Changes in your code

*   `app.listen` with `process.env.OPENSHIFT_NODEJS_PORT` and `process.env.OPENSHIFT_NODEJS_IP`, both requires.
*   In your **package.json** set your `"main": 'yourMainFile.js` and `"script": { "start": "node yourMainFile.js" }`

## Deploying our app

*   <a href='https://openshift.redhat.com/app/console/application_types' target='_blank' rel='nofollow'>Add a new application</a>

![Choose a web programming cartridge](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   Choose a name (second input will be same for all you apps)

[![Fill our name and our domain](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg)

*   Fill our Git URL and our branch name

![Where you can find your Git URL and your branch name at Github](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg)

![Fill your Git URL and your branch name](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   "Create Application". It will take some time

![You will be redirected here when you finish deployment](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg)

*   Enter to "Application", then into your App and check it's started.

![Your applications list](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg)

![Details of your application](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg)

## Enviroment variables

In my case I have my database in mLab, so I need to create some enviroment variables.

*   <a href='https://developers.openshift.com/getting-started/windows.html#client-tools' target='_blank' rel='nofollow'>Install Ruby and rhc.</a>

**rhc** only works with versions 1.9.3 and 2.0.0 of Ruby.

*   <a href='https://developers.openshift.com/getting-started/windows.html#rhc-setup' target='_blank' rel='nofollow'>Setting up Your Machine</a>

If you are having trouble with setting up `rhc`, try <a href='http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import' target='_blank' rel='nofollow'>this</a> answer on StackOverflow.

*   <a href='https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables' target='_blank' rel='nofollow'>Custom Environment Variables</a>

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name`.

You need to restart your app to load the variables.

If you find a better way to solve this limitation. Feel free to contribute to our <a>Wiki</a> and share it with us.

You can check the app working at <a href='http://voting-pitazo.rhcloud.com/#/polls' target='_blank' rel='nofollow'>http://voting-pitazo.rhcloud.com/#/polls</a>
