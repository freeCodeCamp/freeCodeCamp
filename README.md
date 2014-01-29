![Alt](https://lh4.googleusercontent.com/-PVw-ZUM9vV8/UuWeH51os0I/AAAAAAAAD6M/0Ikg7viJftQ/w1286-h566-no/hackathon-starter-logo.jpg)
Hackathon Starter [![Dependency Status](https://david-dm.org/sahat/hackathon-starter.png?theme=shields.io)](https://david-dm.org/sahat/hackathon-starter)
=================
A boilerp1late for **Node.js** web applications.

**Live Demo**: http://hackathonstarter.herokuapp.com :octocat:

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
- Awesome flash notifications with animations by [animate.css](http://daneden.github.io/animate.css/)
- MVC Project Structure
- Node.js clusters support
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
- MongoDB
- Node.js
- Command Line Tools
 - **Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - **Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - **Ubuntu**: `sudo apt-get install build-essential`
 - **Fedora**: `sudo yum groupinstall "Development Tools"`
 - **OpenSUSE**: `sudo zypper install --type pattern devel_basis`

:exclamation: **Note**: If you are new to Node.js or Express framework,
I highly recommend watching [Node.js and Express 101](http://www.youtube.com/watch?v=BN0JlMZCtNU) screencast that teaches Node and Express from scratch.


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:sahat/hackathon-starter.git my-project

cd my-project

# Install NPM dependencies
npm install

node app.js
```

>:exclamation: **Note**: I strongly recommend installing nodemon `sudo npm install -g nodemon`.
>It will monitor for any changes in your node.js
>application and automatically restart the server. Once installed, instead of `node app.js` use `nodemon app.js`.
>It is a big time saver in the long run.

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

>:exclamation: **Note**: When you ready to deploy to production don't forget to add
>    your new url to Authorized Javascript origins and Authorized redirect URI,
>   e.g. `http://my-awesome-app.herokuapp.com` and `http://my-awesome-app.herokuapp.com/auth/google/callback` respectively.

<hr>

<img src="http://www.doit.ba/img/facebook.jpg" width="200">
- Visit [Facebook Developers](https://developers.facebook.com/)
- Click **Apps > Create a New App** in the navigation bar
- Enter *Display Name*, then choose a category, then click **Create app**
- Copy and paste *App ID* and *App Secret* keys into `config/secrets.js`
 - *App ID* is **clientID**, *App Secret* is **clientSecret**
- Click on *Settings* on the sidebar, then click **+ Add Platform**
- Select **Website**
- Enter `http://localhost:3000` for *Site URL*

<hr>

<img src="https://github.global.ssl.fastly.net/images/modules/logos_page/GitHub-Logo.png" width="200">
- Go to [Account Settings](https://github.com/settings/profile)
- Select **Applications** from the sidebar
- Then inside **Developer applications** click on **Register new application**
- Enter *Application Name* and *Homepage URL*.
- For *Authorization Callback URL*: http://localhost:3000/auth/github/callback
- Click **Register application**
- Now copy and paste *Client ID* and *Client Secret* keys into `config/secrets.js`

<hr>

<img src="https://g.twimg.com/Twitter_logo_blue.png" width="100">
- Sign in at [https://dev.twitter.com](https://dev.twitter.com/)
- From the profile picture dropdown menu select **My Applications**
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: http://127.0.0.1:3000/auth/twitter/callback
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**

<hr>

<img src="https://www.paypalobjects.com/webstatic/developer/logo_paypal-developer_beta.png" width="200">
- Visit [PayPal Developer](https://developer.paypal.com/)
- Log in using your existing PayPal account
- Click **Applications > Create App** in the navigation bar
- Enter *Application Name*, then click **Create app**
- Copy and paste *Client ID* and *Secret* keys into `config/secrets.js`
- *App ID* is **client_id**, *App Secret* is **client_secret**
- Change **host** to api.paypal.com if you want to test against production and use the live credentials

Project Structure
-----------------

| Name          | Description   |
| ------------- |:-------------:|
| **config**/passport.js      | Passport Local and OAuth strategies + Passport middleware.         |
| **config**/secrets.js    | Your API keys, tokens, passwords and database URL.                    |
| **controllers**/api.js | Controller for /api route and all api examples.                         |
| **controllers**/contact.js | Controller for contact form.                                        |
| **controllers**/home.js | Controller for home page (index).                                      |
| **controllers**/user.js | Controller for user account management page.                           |
| **models**/User.js | Mongoose schema and model for User.                                         |
| **public/*** | Static assets, i.e. fonts, css, js, img.                                          |
| **public/css**/styles.less | Imports Bootstrap + a theme that overrides default Bootstrap.       |
| **public/css/theme**/default.less | The default styles that were previously inside style.less.   |
| **views/account/*** | Templates relating to user account.                                        |
| **views/api/*** | Templates relating to API Examples.                                            |
| **views/partials**/flash.jade      | Error, info and success notifications.                      |
| **views/partials**/navigation.jade | Navbar partial template.                                    |
| **views/partials**/footer.jade     | Footer partial template.                                    |
| **views**/layout.jade              | Base template.                                              |
| **views**/home.jade                | Home page template.                                         |


:exclamation: **Note:** There is no difference how you name or structure your views. You could place all your templates in a top-level `views` directory without having a nested folder structure, if that makes things easier for you. Just don't forget to update `extends ../layout`  and corresponding `res.render()` method in controllers. For smaller apps, I find having a flat folder structure to be easier to work with.

:bangbang: **Note:** Although your main template - **layout.jade** only knows about `/css/styles.css` file, you should be editing **styles.less** stylesheet. Express will automatically generate minified **styles.css** whenever there are changes in LESS file. This is done via [less-middleware](https://github.com/emberfeather/less.js-middleware) node.js library.

Useful Tools
------------
- [Jade Syntax Documentation by Example](http://naltatis.github.io/jade-syntax-docs/#attributes) - Better than official docs.
- [HTML to Jade converter](http://html2jade.aaron-powell.com) - Extremely valuable when you need to quickly copy and paste HTML snippets from the web.

Recommended Design
------------------
- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap.
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/) - It's already part of the Hackathon Starter, so use this page as a reference.
- [Colors](http://clrs.cc) - a nicer color palette for the web.
- [CSS Spinning Loaders](http://codepen.io/andymcfee/pen/ioskA) - spinning loader in CSS.
- [SpinKit](http://tobiasahlin.com/spinkit/) - 8 awesome looking spinning loaders in CSS.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.
- [3D Dropdown Menu](http://soulwire.github.io/Makisu/) - CSS3 3D Dropdown Menu that folds and unfolds.
- [Calendar in CSS](http://cssdeck.com/labs/vr7yddm7) - Nice looking calendar in pure HTML and CSS.
- [Creative Link Effects](http://tympanus.net/Development/CreativeLinkEffects/) - Beautiful link effects in CSS.
- [Medium Scroll Effect](http://codepen.io/andreasstorm/pen/pyjEh) - Fade in/out header background image as you scroll.

Recommended Node.js Libraries
-----------------------------
- [nodemon](https://github.com/remy/nodemon) - automatically restart node.js server on code change.
- [geoip-lite](https://github.com/bluesmoon/node-geoip) - get geolocation coordinates from IP address.
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

Pro Tips
--------
- When you install a new npm package, add a *--save* flag and it will be automatially
added to `package.json` as well. For example, `npm install moment --save`.
- Use [async.parallel()](https://github.com/caolan/async#parallel) when you neeed to run multiple
asynchronous tasks, and then render a page, but only when all tasks are completed. For example, you might
want to scrape 3 different websites for some data (async operation) and render the results
on a page after all 3 websites have been scraped.

FAQ
---
### What is `cluster_app.js`?
From the [Node.js Documentation](http://nodejs.org/api/cluster.html#cluster_how_it_works):
> A single instance of Node runs in a single thread. To take advantage of multi-core systems
> the user will sometimes want to launch a cluster of Node processes to handle the load.
> The cluster module allows you to easily create child processes that all share server ports.

`cluster_app.js` allows you to take advantage of this feature by forking a process of `app.js`
for each CPU detected. For the majority of applications serving HTTP requests,
this is a resounding boon. However, the cluster module is still in experimental stage, therefore it should only be used after understanding its purpose and behavior. To use it, simply run `node cluster_app.js`. **Its use is entirely optional and `app.js` is not tied in any way to it**. As a reminder, if you plan to use `cluster_app.js` instead of `app.js`, be sure to indicate that in `Procfile` if you are deploying your app to Heroku.

### I am getting MongoDB Connection Error, how do I fix it?
That's a custom error message defined in `app.js` to indicate that there was a connection problem to MongoDB:
```
mongoose.connection.on('error', function() {
  console.log('✗ MongoDB Connection Error. Please make sure MongoDB is running.'.red);
});
```
As the messages implies, you need to have a MongoDB server running before launching `app.js`. You can get MongoDB from
[mongodb.org/downloads](mongodb.org/downloads), or install it via a package manager
([Homebrew](http://brew.sh/) on Mac, `apt-get` on Ubuntu, `yum` on Fedora, etc.)

### Why Jade and not Handlebars template engine?
When I first started this project I didn't have any experience with Handlebars. Since then I have worked on Ember.js apps and got myself familiar with the Handlebars syntax. While it is true Handlebars is easier, because it looks like good old HTML, I have no regrets picking Jade over Handlebars. First off, it's the default template engine in Express, so someone who has built Express apps in the past already knows it. Secondly, I find `extends` and `block` to be indispensable, which as far as I know, Handlebars does not have out of the box. And lastly, subjectively speaking, Jade looks much cleaner and shorter than Handlebars, or any non-HAML style for that matter.

### Why do you have all routes defined in app.js?
For the sake of simplicity. While there might be a better approach, such as passing `app` context to each controller as outlined in this [blog](http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/), I find such style to be confusing for beginners. It took me a long time to grasp the concept of `exports` and `module.exports`, let alone having a global `app` reference in other files. That to me is a backward thinking. The `app.js` is the "center of the universe", it should be the one referencing models, routes, controllers, etc. When working solo I actually prefer to have everything in `app.js` as is the case with this REST API server for [ember-sass-express-starter's app.js file](https://github.com/sahat/ember-sass-express-starter/blob/master/app.js). That makes things so much simpler!

### I don't need a sticky footer, can I delete it?
Absolutely. But unlike a regular footer there is a bit more work involved. First, delete `#wrap` and `#footer` ID selectors and `html, body { height: 100%; }` from **styles.less**. Next, delete `#wrap` and `#footer` lines from **layout.jade** (By the way, If no element is specified before the class or id, Jade assumes it's a `div` element). Don't forget to indent everything under `#wrap` to the left once, since this project uses two spaces per block indentation.

### Can I use Ember, Angular or Backbone with Hackathon Starter?
It might be possible, but why would you want to?
I specifically avoided client-side MV* frameworks in this project to keep things simple.
There is a big shift in the way you develop apps with Ember, Backbone, Angular
as opposed to server-side frameworks like Express, Flask, Rails, Django. Not only
would you need to know how to use Express in this case, but also the client-side framework of your choice,
which in itself is not a trivial task. And then there is a whole different process
for authentication with single page applications. If you insist on using
a client-side framework, it's best if you use a boilerplate of choice for your particular
client-side framework and just grab the pieces you need from the Hackathon Starter.

HOW IT WORKS (mini guide series)
------------
This section is intended for giving you a detailed explanation about
how a particular functionality works. Maybe you are just curious about
how it works, or maybe you are lost and confused while reading the code,
I hope it provides some guidance to you.

###:bulb: How do flash messages work in this project?
This project uses *express-flash* module for flash messages. And that
module is built on top of *connect-flash*, which is what I used in
this project initially. With *express-flash* you don't have to
explicity send a flash message to every view inside `res.render`.
All flash messages are available in your views via `messages` object by default,
thanks to *express-flash*.

Flash messages have a two-step process. You use `req.flash('errors', { msg: 'Error messages goes here' }`
to create a flash message in your controllers, and then display them in your views:
```jade
if messages.errors
  .alert.alert-danger.animated.fadeIn
    for error in messages.errors
      div= error.msg
```
In the first step, `'errors'` is the name of a flash message, which should match the
name of the property on `messages` object in your views. You place alert messages
inside `if message.errors` because you don't want to show them flash messages are actually present.
The reason why you pass an error like `{ msg: 'Error messages goes here' }` instead
of just a string - `'Error messages goes here'`, is for the sake of consistency.
To clarify that, *express-validator* module which is used for validating and sanitizing user's input,
returns all errors as an array of objects, where each object has a `msg` property with a message
why an error has occured. To keep consistent with that style, you should pass all flash messages
as `{ msg: 'My flash message' }` instead of a string. Otherwise you will just see an alert box
without an error message. That is because, in **partials/flash.jade** template it will try to output
`error.msg` (i.e. `"My flash message".msg`), in other words it will try to call a `msg` method on a *String* object,
which will return *undefined*. Everything I just mentioned about errors, also applies
to "info" and "success" flash messages, and you could even create a new one yourself, such as:

**Data Usage Controller (Example)**
```
req.flash('warning', 'You have exceeded 90% of your data usage');
```

**User Account Page (Example)**
```jade
if messages.warning
  .alert.alert-warning.animated.fadeIn
    for warning in messages.warning
      div= warning.msg
```

`partials/flash.jade` is a partial template that contains how flash messages
are formatted. If you don't like the *fadeIn* animation, try something like
*flipInX* (refer to [animate.css](http://daneden.github.io/animate.css/)), or just
delete `.animated.fadeIn` from alerts if you don't want any animations. Or if you
want to customize your flash messages by displaying ✔ on success flash and ✗ on error
flash, this is the place where you would do all those customizations. Previously, flash
messages were scattered throughout each view that used flash messages
(contact, login, signup, profile), but now, thankfully it is uses a *DRY* approach.

The flash messages partial template is *included* in the `layout.jade`, along with footer and navigation.
```jade
body
  #wrap
    include partials/navigation
    .container
      include partials/flash
      block content
  include partials/footer
```

If you have any further questions about flash messages,
please feel free to open an issue and I will update this mini-guide accordingly,
or send a pull request if you  would like to include something that I missed.

<hr>

### How do I create a new page?
Todo

### How "Forgot your password" works?

"Forgot your password" is only partially implemented at this time
 (Views and GET controller to display a form). Once the feature is live,
 I will update this section.

<hr>


TODO LIST
---------
- Concatenate and minify all assets via Express middleware if possible, otherwise Gulp.js. Because even with caching enabled, there is at least 50-80ms delay for each static file request (On Heroku).
- Pages that require login, should automatically redirect to last attempted URL on successful sign-in.
- Add more API examples.
- Mocha tests.
- Once things are stabilized, create a CHANGELOG.md and follow a version format so people who already use Hackathon Starter could know what are the new changes.


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
