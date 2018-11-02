---
title: Getting Started with Back End Projects
---
The curriculum lead-up to the first Back End Project is not very comprehensive. Here are a number of common resources which other campers have found helpful.

*   <a>Introduction to Yeoman</a> - Lots of helpful tips and tricks for the Yeoman Angular Fullstack setup
*   <a href='https://github.com/DaftMonk/generator-angular-fullstack#generators' target='_blank' rel='nofollow'>Angular Generator</a> - Generator used by Yeoman, you can find syntax and what files it creates

## APIs

*   API for Charting the stock market: <a href='https://www.quandl.com/help/api' target='_blank' rel='nofollow'>https://www.quandl.com/help/api</a>

## MEAN Stack Tutorials & Videos

*   5 Part Series on setting up a MEAN stack  
    <a href='https://www.youtube.com/watch?v=kHV7gOHvNdk' target='_blank' rel='nofollow'>https://www.youtube.com/watch?v=kHV7gOHvNdk</a>
*   A MEAN tutorial that creates a simple Twitter clone  
    <a href='https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start' target='_blank' rel='nofollow'>https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start</a>
*   Clementine is a stripped down MEAN stack, great for learning the fundamentals.  
    <a href='https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html' target='_blank' rel='nofollow'>https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html</a>
*   Authentication with Passport for the MEAN stack:  
    <a href='https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs' target='_blank' rel='nofollow'>https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs</a>
*   An amazing list of resources for learning the MEAN stack:  
    <a href='https://github.com/ericdouglas/MEAN-Learning' target='_blank' rel='nofollow'>https://github.com/ericdouglas/MEAN-Learning</a>

## Scotch IO Tutorials

*   <a href='https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application' target='_blank' rel='nofollow'>https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application</a>
*   <a href='https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure' target='_blank' rel='nofollow'>https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure</a>

## Node/Express

*   <a href='http://stackoverflow.com/a/16512303/1420506' target='_blank' rel='nofollow'>Online Debugging for Node.js/Express</a>

## Cloud 9 Tricks

### Speed up browser reloads

1.  Open gruntfile.js and edit both instances of `livereload: true` to `livereload: false`.
2.  Open server/config/express.js and comment out the line `app.use(require('connect-livereload')());`