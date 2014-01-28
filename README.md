![Alt](https://lh4.googleusercontent.com/-PVw-ZUM9vV8/UuWeH51os0I/AAAAAAAAD6M/0Ikg7viJftQ/w1286-h566-no/hackathon-starter-logo.jpg)
Hackathon Starter [![Dependency Status](https://david-dm.org/sahat/hackathon-starter.png?theme=shields.io)](https://david-dm.org/sahat/hackathon-starter)
=================
A kickstarter for **Node.js** web applications. 

**Live Demo**: http://hackathonstarter.herokuapp.com

If you have attended any hackathons in the past then you know how much time it takes to
get a project started. Decide on an idea, pick a programming language, pick a web framework,
pick a CSS framework. A while later, you will have an initial project up on GitHub, and only then can other team members
start contributing. Or what about doing something as simple as OAuth 2.0 Authentication? You can spend hours
on it if you are not familiar with how OAuth 2.0 works. *(As a side-note, over a year ago
I had no idea WTF REST or OAuth were, or how to do a simple "Sign in with Facebook".
It was a frustrating experience to say the least.)*

When I started this project, my primary focus was on **simplicity** and **ease of use**.
I also tried to make it as **generic** and **reusable** as possible to cover most use cases of hackathon web apps,
without being too specific. In the worst case you can use this as a guide for your projects, if for example you are only
interested in **Sign in with Google** authentication and nothing else.

Chances are, you might not need all 4 types of OAuth 1.0a/OAuth2 authentication methods, or all 9 API examples.
Sadly, there is no step-by-step wizard to configure the boilerplate code just for your use case. So, use what you need, simply delete what you don't need.

<h4 align="center">Flatly Bootstrap Theme</h3>

![Alt](https://lh6.googleusercontent.com/-NikjFtdyOq8/UsCv7URplAI/AAAAAAAADrE/a417u0cZU7Y/w1278-h958-no/Screenshot+2013-12-29+18.27.10.png)

<h4 align="center">Default Theme</h3>

![Alt](https://lh5.googleusercontent.com/-KmlaMLKGCqg/UuWt4MrXzeI/AAAAAAAAD6o/KUucObo33zU/w1170-h860-no/Screenshot+2014-01-26+19.52.03.png)

Features
--------
- **Local Authentication** using Email and Password
- **OAuth 1.0a Authentication** via Twitter
- **OAuth 2.0 Authentication** via Facebook, Google or GitHub
- Sweet Error and Success flash notifications with animations by *animate.css*
- MVC Project Structure
- LESS stylesheets (auto-compiled via Express middleware)
- Bootstrap 3 + Flat UI + iOS7 Theme
- Contact Form (powered by Sendgrid)
- **Account Management**
 - Profile Details
 - Change Password
 - Link multiple OAuth strategies to one account
 - Delete Account
- **API Examples**: Facebook, Foursquare, Last.fm, Tumblr, Twitter, PayPal, and more.

Prerequisites
-------------
> - MongoDB
> - Node.js
> - **Xcode** (Mac OS X) or **Visual Studio** (Windows)

**Note**: If you are new to Node.js or Express framework,
I highly recommend watching [Node.js and Express 101](http://www.youtube.com/watch?v=BN0JlMZCtNU) screencast that teaches Node and Express from scratch.


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:sahat/hackathon-starter.git

# Move the repository to your own project name.
mv hackathon-starter my-project

cd my-project

# Install NPM dependencies
npm install

node app.js
```

> **Note**: I strongly recommend installing nodemon `sudo npm install -g nodemon`.
> It will monitor for any changes in your node.js
> application and automatically restart the server. Once installed, instead of `node app.js` use `nodemon app.js`.
> It is a big time saver in the long run.

Next up, if you want to use any of the APIs or OAuth authentication methods, you will need to obtain
appropriate credentials: Client ID, Client Secret, API Key, or Username & Password. You will
need to go through each provider to generate new credentials.

Obtaining API Keys
------------------

<img src="http://images.google.com/intl/en_ALL/images/srpr/logo6w.png" width="200">
- Visit [Google Cloud Console](https://cloud.google.com/console/project)
- Click **CREATE PROJECT** button
- Enter *Project Name*, then click **CREATE**
- Then select *APIs & auth* from the sidebar and click on *Credentials* tab
- Click **CREATE NEW CLIENT ID** button
 - **Application Type**: Web Application
 - **Authorized Javascript origins**: http://localhost:3000
 - **Authorized redirect URI**: http://localhost:3000/auth/google/callback
- Copy and paste *Client ID* and *Client secret* keys into `config/secrets.js`

> **Note**: When you ready to deploy to production don't forget to add
>    your new url to Authorized Javascript origins and Authorized redirect URI,
>   e.g. `http://my-awesome-app.herokuapp.com` and `http://my-awesome-app.herokuapp.com/auth/google/callback` respectively.

<img src="http://www.doit.ba/img/facebook.jpg" width="200">
- Visit [Facebook Developers](https://developers.facebook.com/)
- Click **Apps > Create a New App** in the navigation bar
- Enter *Display Name*, then choose a category, then click **Create app**
- Copy and paste *App ID* and *App Secret* keys into `config/secrets.js`
 - *App ID* is **clientID**, *App Secret* is **clientSecret**
- Click on *Settings* on the sidebar, then click **+ Add Platform**
- Select **Website**
- Enter `http://localhost:3000` for *Site URL*

<img src="https://www.paypalobjects.com/webstatic/developer/logo_paypal-developer_beta.png" width="200">
- Visit [PayPal Developer](https://developer.paypal.com/)
- Log in using your existing PayPal account
- Click **Applications > Create App** in the navigation bar
- Enter *Application Name*, then click **Create app**
- Copy and paste *Client ID* and *Secret* keys into `config/secrets.js`
- *App ID* is **client_id**, *App Secret* is **client_secret**
- Change **host** to api.paypal.com if you want to test against production and use the live credentials

*TODO: Add Twitter and GitHub instructions.*

Project Structure
-----------------

| Name          | Description   |
| ------------- |:-------------:|
| **config**/passport.js      | Passport Local and OAuth strategies + Passport middleware. |
| **config**/secrets.js    | Your API keys, tokens, passwords and database URL.      |
| **controllers**/api.js | Controller for /api route and all api examples.      |
| **controllers**/contact.js | Controller for contact form.      |
| **controllers**/home.js | Controller for home page (index).
| **controllers**/user.js | Controller for user account management page.      |
| **models**/User.js | Mongoose schema and model for User.      |
| **public/*** | Static assets, i.e. fonts, css, js, img.   |
| **views/account** | Templates relating to user account.     |
| **views/api** | Templates relating to API Examples.   |
| **views**/layout.jade | Base template.     |
| **views**/home.jade | Home page template.     |


**Note:** There is no difference how you name or structure your views. You could place all your templates in a top-level `views` directory without having a nested folder structure, if that makes things easier for you. Just don't forget to update `extends ../layout`  and corresponding `res.render()` method in controllers. For smaller apps, I find having a flat folder structure to be easier to work with.

**Note 2:** Although your main template - **layout.jade** only knows about `/css/styles.css` file, you should be editing **styles.less** stylesheet. Express will automatically generate **styles.css** whenever there are changes in LESS file. This is done via [less-middleware](https://github.com/emberfeather/less.js-middleware) node.js library.

Useful Tools
------------
[HTML to Jade converter](http://html2jade.aaron-powell.com)

Recommended Design
------------------
- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap
- [Colors](http://clrs.cc) - a nicer color palette for the web.
- [CSS Spinning Loaders](http://codepen.io/andymcfee/pen/ioskA) - spinning loader in css.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.
- [3D Dropdown Menu](http://soulwire.github.io/Makisu/) - CSS3 3D Dropdown Menu that folds and unfolds.
- [Calendar in CSS](http://cssdeck.com/labs/vr7yddm7) - Nice looking calendar in pure HTML and CSS.
- [Creative Link Effects](http://tympanus.net/Development/CreativeLinkEffects/) - Beautiful link effects in CSS.

Recommended Node.js Libraries
-----------------------------
- [nodemon](https://github.com/remy/nodemon) - automatically restart node.js server on code change.
- [geoip-lite](https://github.com/bluesmoon/node-geoip) - get location name from IP address.
- [email.js](https://github.com/eleith/emailjs) - send emails with node.js (without sendgrid or mailgun).
- [filesize.js](http://filesizejs.com/) - make file size pretty, e.g. `filesize(265318); // "265.32 kB"`.
- [Numeral.js](http://numeraljs.com) - a javascript library for formatting and manipulating numbers.

Recommended Client-Side libraries
---------------------------------
- [Hover](https://github.com/IanLunn/Hover) - Awesome css3 animations on mouse hover.
- [platform.js](https://github.com/bestiejs/platform.js) - Get client's operating system name, version, and other useful information.
- [iCheck](https://github.com/fronteed/iCheck) - Custom nice looking radio and check boxes.
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) - Responsive jQuery Lightbox Plugin.
- [jQuery Raty](http://wbotelhos.com/raty/) - Star Rating Plugin.
- [Headroom.js](http://wicky.nillia.ms/headroom.js/) - Hide your header until you need it.
- [Fotorama](http://fotorama.io) - Very nice jQuery gallery.
- [X-editable](http://vitalets.github.io/x-editable/) - Edit form elements inline.
- [Offline.js](http://github.hubspot.com/offline/docs/welcome/) - Detect when user's internet connection goes offline.
- [Color Thief](https://github.com/lokesh/color-thief) - Grabs the dominant color or a representative color palette from an image.
- [Alertify.js](http://fabien-d.github.io/alertify.js/) - Sweet looking alerts and browser dialogs.


FAQ
---
### Why Jade and not Handlebars template engine?
When I first created this project I didn't have any experience with Handlebars. Since then I have worked on Ember.js apps and got myself familiar with the Handlebars syntax. While it is true Handlebars is easier, because it looks like good old HTML, I have no regrets picking Jade over Handlebars. First off, it's the default template engine in Express, so someone who has built Express apps in the past already knows it. Secondly, I find `extends` and `block` to be indispensable, which as far as I know, Handlebars does not have out of the box. And lastly, subjectively speaking, Jade looks much cleaner and shorter than Handlebars, or any non-HAML style for that matter.

### Why do you have all routes in app.js?
For the sake of simplicity. While there might be a better approach, such as passing `app` context to each controller as outlined in this [blog](http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/), I find such style to be confusing for beginners. It took me a long time to grasp the concept of `exports` and `module.exports`, let alone having a global `app` reference in other files. That to me is a backward thinking. The `app.js` is the "center of the universe", it should be the one referencing models, routes, controllers, etc. When working solo I actually prefer to have everything in `app.js` as is the case with this REST API server for [ember-sass-express-starter's app.js file](https://github.com/sahat/ember-sass-express-starter/blob/master/app.js). That makes things so much simpler!


TODO
----
- Pages that require login, should automatically redirect to last attempted URL on successful sign-in.
- Add more API examples.
- Mocha tests.

Contributing
------------
If something is unclear, confusing, or needs to be refactored, please let me know. Pull requests are always welcome, but due to the opinionated nature of this project, I cannot accept every pull request. Please open an issue before submitting a pull request.

License
-------
The MIT License (MIT)

Copyright (c) 2014 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
