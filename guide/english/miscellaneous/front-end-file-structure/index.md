---
title: Front End File Structure
---
First things first: All your user-facing files and angular files are in **/client/app/**

1.  **app.js**: defines your app and includes some basic app-wide functions, you probably don't really need to mess with it unless you're trying to add more dependencies to your app. We're not gonna worry about that right now.
2.  **app.css**: an app-wide stylesheet, you can put styles here if you want but I'd recommend you put them in **main/main.css**, as these styles are also app-wide.
3.  **main/**: this folder contains what the user sees first when they load up your site. **main.html** is the page template, **main.js** routes the user to **main.html** when the user goes to the top level directory of your website--that is, <a>http://yourapp.wherever.itis/</a> with no <a>/other/url/hierarchy</a>. You'll also learn soon that you can define your app's <a>/url/heirarchy/fairly/arbitrarily</a>. You won't really need to edit **main.js** or **main.controller.spec.js**, so let's not worry about those right now. If you look through the **main.html** file you'll see it uses _ng-repeat_ to show _things_ in _awesomeThings_. Where does it get _awesomeThings_?
4.  **main/main.controller.js**: all of the javascript functions you want to use to interact directly with the user go here! You'll put functions here to interact with your API, refresh views for your user, etc. Here, _awesomeThings_ are pulled from your database and added to the local scope so your HTML view can display them! How cool! We'll get to adding custom objects to your database in a minute.

Great! Now you know how to interact with the user! But what if you want your app to have another page that does something else? Maybe **main.html** shows the home page, but you want a page that shows a form to add a poll? maybe <a>http://yourapp.wherever.itis/newpage</a>? This is where the yeoman generator comes in handy.

<a href='http://forum.freecodecamp.com/t/guides-to-back-end-projects/14265' target='_blank' rel='nofollow'>PREVIOUS</a> <a>NEXT</a>