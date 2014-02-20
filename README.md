![Alt](https://lh4.googleusercontent.com/-PVw-ZUM9vV8/UuWeH51os0I/AAAAAAAAD6M/0Ikg7viJftQ/w1286-h566-no/hackathon-starter-logo.jpg)
Hackathon Starter [![Dependency Status](https://david-dm.org/sahat/hackathon-starter.png?theme=shields.io)](https://david-dm.org/sahat/hackathon-starter)
=================
A boilerplate for **Node.js** web applications.

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

Chances are, you might not need all 4 types of OAuth 1.0a/OAuth2 authentication methods, or all 12+ API examples. So, use what you need and delete what you don't need. As of recently, it is possible to selectively *enable/disable* authentication methods in `config/secrets.js`.

<h4 align="center">Flatly Bootstrap Theme</h3>

![Alt](https://lh6.googleusercontent.com/-NikjFtdyOq8/UsCv7URplAI/AAAAAAAADrE/a417u0cZU7Y/w1278-h958-no/Screenshot+2013-12-29+18.27.10.png)

<h4 align="center">Default Theme</h3>

![Alt](https://lh5.googleusercontent.com/-KmlaMLKGCqg/UuWt4MrXzeI/AAAAAAAAD6o/KUucObo33zU/w1170-h860-no/Screenshot+2014-01-26+19.52.03.png)

Table of Contents
-----------------
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Obtaining API Keys](#obtaining-api-keys)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Useful Tools](#useful-tools)
- [Recommended Design](#recommended-design)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Recommended Client-Side Libraries](#recommended-client-side-libraries)
- [Pro Tips](#pro-tips)
- [FAQ](#faq)
- [How It Works](#how-it-works-mini-guides)
- [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Deployment](#deployment)
- [TODO](#todo)
- [Contributing](#contributing)
- [License](#license)

Features
--------
- **Local Authentication** using Email and Password
- **OAuth 1.0a Authentication** via Twitter
- **OAuth 2.0 Authentication** via Facebook, Google or GitHub
- Awesome flash notifications with animations by [animate.css](http://daneden.github.io/animate.css/)
- MVC Project Structure
- Node.js clusters support
- Rails 3.1-style asset pipeline (See FAQ)
- LESS stylesheets (auto-compiled via Express middleware)
- Bootstrap 3 + Flat UI + iOS7 Theme
- Contact Form (powered by Mailgun or Sendgrid)
- **Account Management**
 - Gravatar
 - Profile Details
 - Change Password
 - Link multiple OAuth strategies to one account
 - Delete Account
 - Forgot Password
- **API Examples**: Facebook, Foursquare, Last.fm, Tumblr, Twitter, PayPal, and more.

Prerequisites
-------------
- [MongoDB](http://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X**: [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9 Mavericks**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows**: [Visual Studio](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu**: `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo yum groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE**: `sudo zypper install --type pattern devel_basis`

:exclamation: **Note**: If you are new to Node.js or Express framework,
I highly recommend watching [Node.js and Express 101](http://www.youtube.com/watch?v=BN0JlMZCtNU) screencast by Alex Ford that teaches Node and Express from scratch. Alternatively, here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).


Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Fetch only the latest commits
git clone --depth=1 git@github.com:sahat/hackathon-starter.git my-project

cd my-project

# Install NPM dependencies
npm install

node app.js
```

:exclamation: **Note**: I strongly recommend installing nodemon `sudo npm install -g nodemon`.
It will monitor for any changes in your node.js
application and automatically restart the server. Once installed, instead of `node app.js` use `nodemon app.js`.
It will save you a lot of time in the long run, because you won't need to manually restart the server each time you make a change.

Next, if you want to use any of the included APIs or OAuth authentication methods, you will need to obtain
appropriate credentials: Client ID, Client Secret, API Key, or Username & Password. You will
need to go through each provider to generate new credentials.

Obtaining API Keys
------------------

:pushpin: You could support all 5 authentication methods by setting up OAuth keys, but you don't have to. If you would only like to have **Facebook sign-in** and **Local sign-in** with email and password, in **secrets.js** set `googleAuth: false`, `twitterOauth: false`, `githubAuth: false`. By doing so, *Google, Twitter and Github* buttons will not show up on the *Login* page. If you set `localAuth: false`, users will not be able to login/create an account with email and password or change password in the *Account Management* page.

:bulb: Alternatively, if you would like to completely remove authentication methods that you do not plan on using, you will need to manually delete the code yourself. Let's say you want to keep only **Local authentication**. Start by deleting *FacebookStrategy, TwitterStrategy, GitHubStrategy, GoogleStrategy* `require` lines and their corresponding defined strategies in **passport.js**. Then in **login.jade** template delete the entire `.btn-group`, leaving only the form with Email and Password.
Update **User.js** model by deleting the following fields: `facebook`, `github`, `google`, `twitter`. In your **profile.jade** template delete the entire code starting with **h3 Linked Accounts**. And finally delete the corresponding routes that have **/auth/provider** and **/auth/provider/callback**, for example:
```js
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
```

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

:exclamation: **Note**: When you ready to deploy to production don't forget to add your new url to *Authorized Javascript origins* and *Authorized redirect URI*, e.g. `http://my-awesome-app.herokuapp.com` and `http://my-awesome-app.herokuapp.com/auth/google/callback` respectively. The same goes for other providers.

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

:exclamation: **Note**: After a successful sign in with Facebook, a user will be redirected back to home page with appended hash `#_=_` in the URL. It is *not* a bug. See this [Stack Overflow](https://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url) discussion for ways to handle it.

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
- Copy and paste *Consumer Key* and *Consumer Secret* keys into `config/secrets.js`

<hr>

<img src="https://s3.amazonaws.com/venmo/venmo_logo_blue.png" width="200">
- Visit the **Account** section of your Venmo profile after logging in
- Click on the **Developers** tab
- Then click on the [new](https://venmo.com/account/app/new) link next to **Your Applications (0)**
- Fill in the required fields: *App Name* and *What Will The App Be Used For?*
- For **Web Redirect URL** enter: http://localhost:3000/auth/venmo/callback
- Hit **Create** button
- Back on the **Developers** tab click on **view** link next to **Your Applications (1) new**
- Copy and paste **ID** and **Secret** keys into `config/secrets.js`

<hr>

<img src="https://www.paypalobjects.com/webstatic/developer/logo_paypal-developer_beta.png" width="200">
- Visit [PayPal Developer](https://developer.paypal.com/)
- Log in to your PayPal account
- Click **Applications > Create App** in the navigation bar
- Enter *Application Name*, then click **Create app**
- Copy and paste *Client ID* and *Secret* keys into `config/secrets.js`
- *App ID* is **client_id**, *App Secret* is **client_secret**
- Change **host** to api.paypal.com if you want to test against production and use the live credentials

<hr>

<img src="https://www.dropboxatwork.com/wp-content/uploads/2013/02/foursquare-logo.png" width="200">
- Go to [foursquare for Developers](https://developer.foursquare.com/)
- Click on **My Apps** in the top menu
- Click the **Create A New App** button
- Enter *App Name*, *Welcome page url*,
- For **Redirect URI**: http://localhost:3000/auth/foursquare/callback
- Click **Save Changes**
- Copy and paste *Client ID* and *Client Secret* keys into `config/secrets.js`

<hr>

<img src="http://www.athgo.org/ablog/wp-content/uploads/2013/02/tumblr_logo.png" width="200">
- Go to http://www.tumblr.com/oauth/apps
- Once signed in, click **+Register application**
- Fill in all the details
- For **Default Callback URL**: http://localhost:3000/auth/tumblr/callback
- Click **✔Register**
- Copy and paste *OAuth consumer key* and *OAuth consumer secret* keys into `config/secrets.js`

<hr>

<img src="http://www.outofoursystem.com/wp-content/uploads/2012/06/steam-logo-white.jpg" width="200">
- Go to http://steamcommunity.com/dev/apikey
- Sign in with your existing Steam account
- Enter your *Domain Name*, then and click **Register**
- Copy and paste *Key* into `config/secrets.js`

<hr>

<img src="https://raw.github.com/mailgun/media/master/Mailgun_Primary.png" width="200">
- Go to http://www.mailgun.com
- Sign up and add your *Domain Name*
- From the domain overview, copy and paste the default SMTP *Login* and *Password* into `config/secrets.js`

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
| **public/***                       | Static assets (fonts, css, js, img)                         |
| **public/css**/styles.less         | Main stylesheet for your app.                               |
| **public/css/themes**/default.less | Some Bootstrap overrides to make it look prettier.          |
| **views/account/***                | Templates for *login, signup, profile*.                     |
| **views/api/***                    | Templates for API Examples.                                 |
| **views/partials**/flash.jade      | Error, info and success flash notifications.                |
| **views/partials**/navigation.jade | Navbar partial template.                                    |
| **views/partials**/footer.jade     | Footer partial template.                                    |
| **views**/layout.jade              | Base template.                                              |
| **views**/home.jade                | Home page template.                                         |
| app.js                             | Main application file.                                      |
| cluster_app.js                     | Runs multiple instances of `app.js` using <a href="http://nodejs.org/api/cluster.html" target="_blank">Node.js clusters</a>.|

:exclamation: **Note:** There is no preference how you name or structure your views. You could place all your templates in a top-level `views` directory without having a nested folder structure, if that makes things easier for you. Just don't forget to update `extends ../layout`  and corresponding `res.render()` method in controllers.

:bangbang: **Note:** Although your main template - **layout.jade** only knows about `/css/styles.css` file, you should be editing **styles.less** stylesheet. Express will automatically generate a minified **styles.css** whenever it detects changes in the *LESS* file. This is done via [connect-assets](https://github.com/adunkman/connect-assets) and [less.js](https://github.com/less/less.js).

List of Packages
----------------
| Package       | Description   |
| ------------- |:-------------:|
| async         | Utility library that provides asynchronous control flow. |
| bcrypt-nodejs | Library for hashing and salting user passwords. |
| cheerio | Scrape web pages using jQuery-style syntax.  |
| connect-mongo | MongoDB session store for Express. |
| connect-assets | Compiles LESS stylesheets, concatenates/minifies JavaScript. |
| express | Web framework. |
| express-flash | Provides flash messages for Express. Uses connect-flash internally. |
| express-validator | Easy form validation for Express. Uses node-validator internally. |
| fbgraph | Facebook Graph API library |
| github-api | GitHub API library |
| jade | Template engine for node.js |
| lastfm | Last.fm API library |
| less | LESS compiler. Used implicitly by connect-assets. |
| mongoose | MongoDB object modeling tool |
| node-foursquare | Foursquare API library |
| nodemailer | Node.js library for sending emails |
| passport | Simple and elegant authentication library for node.js |
| passport-facebook | Sign-in with Facebook plugin. |
| passport-github | Sign-in with GitHub plugin. |
| passport-google-oauth | Sign-in with Google plugin. |
| passport-twitter | Sign-in with Twitter plugin. |
| passport-local | Sign-in with Username and Password plugin. |
| passport-oauth | Allows you to set up your own OAuth 1.0a and OAuth 2.0 strategies. |
| request | Simplified HTTP request library. |
| tumblr.js | Tumblr API library. |
| underscore | Handy JavaScript utlities library. |
| paypal-rest-sdk | PayPal API library. |
| twilio | Twilio API library. |
| validator | Used in conjunction with express-validator in **controllers/api.js**. |


Useful Tools
------------
- [Jade Syntax Documentation by Example](http://naltatis.github.io/jade-syntax-docs/#attributes) - Even better than official Jade docs.
- [HTML to Jade converter](http://html2jade.aaron-powell.com) - Extremely valuable when you need to quickly copy and paste HTML snippets from the web.
- [JavascriptOO](http://www.javascriptoo.com/) - A directory of JavaScript libraries with examples, CDN links, statistics, and videos.

Recommended Design
------------------
- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap.
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/) - It's already part of the Hackathon Starter, so use this page as a reference.
- [Colors](http://clrs.cc) - a nicer color palette for the web.
- [CSS Spinning Loaders](http://codepen.io/andymcfee/pen/ioskA) - spinning loader in CSS.
- [SpinKit](http://tobiasahlin.com/spinkit/) - 8 awesome looking spinning loaders in CSS.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.
- [3D Dropdown Menu](http://soulwire.github.io/Makisu/) - CSS3 3D Dropdown Menu that folds and unfolds.
- [Creative Link Effects](http://tympanus.net/Development/CreativeLinkEffects/) - Beautiful link effects in CSS.
- [Medium Scroll Effect](http://codepen.io/andreasstorm/pen/pyjEh) - Fade in/out header background image as you scroll.
- [HTML5UP](http://html5up.net/) - Beautifully designed HTML templates.
- [Progre(c)ss](https://github.com/jh3y/progre-c-ss) - Pure CSS progress bars.

Recommended Node.js Libraries
-----------------------------
- [nodemon](https://github.com/remy/nodemon) - automatically restart node.js server on code change.
- [geoip-lite](https://github.com/bluesmoon/node-geoip) - get geolocation coordinates from IP address.
- [Nodemailer](https://github.com/andris9/Nodemailer) - send emails with node.js (without sendgrid or mailgun).
- [filesize.js](http://filesizejs.com/) - make file size pretty, e.g. `filesize(265318); // "265.32 kB"`.
- [Numeral.js](http://numeraljs.com) - a javascript library for formatting and manipulating numbers.

Recommended Client-Side libraries
---------------------------------
- [Hover](https://github.com/IanLunn/Hover) - Awesome css3 animations on mouse hover.
- [platform.js](https://github.com/bestiejs/platform.js) - Get client's operating system name, version, and other useful information.
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) - Responsive jQuery Lightbox Plugin.
- [jQuery Raty](http://wbotelhos.com/raty/) - Star Rating Plugin.
- [Headroom.js](http://wicky.nillia.ms/headroom.js/) - Hide your header until you need it.
- [Fotorama](http://fotorama.io) - Very nice jQuery gallery.
- [X-editable](http://vitalets.github.io/x-editable/) - Edit form elements inline.
- [Offline.js](http://github.hubspot.com/offline/docs/welcome/) - Detect when user's internet connection goes offline.
- [Color Thief](https://github.com/lokesh/color-thief) - Grabs the dominant color or a representative color palette from an image.
- [Alertify.js](http://fabien-d.github.io/alertify.js/) - Sweet looking alerts and browser dialogs.
- [select.js](http://github.hubspot.com/select/docs/welcome/) - Styleable select elements.
- [drop.js](http://github.hubspot.com/drop/docs/welcome/) -  Powerful Javascript and CSS library for creating dropdowns and other floating displays.
- [scrollReveal.js](https://github.com/julianlloyd/scrollReveal.js) - Declarative on-scroll reveal animations.
- [InstantClick](http://instantclick.io) - Makes your pages load instantly by pre-loading them on mouse hover.

Pro Tips
--------
- When you install a new npm package, add a *--save* flag and it will be automatially
added to `package.json` as well. For example, `npm install --save moment`.
- Use [async.parallel()](https://github.com/caolan/async#parallel) when you neeed to run multiple
asynchronous tasks, and then render a page, but only when all tasks are completed. For example, you might
want to scrape 3 different websites for some data (async operation) and render the results in a template  after all 3 websites have been scraped.
- Need to find a specific object inside an Array? Use [_.findWhere](http://underscorejs.org/#findWhere) function from Underscore.js. For example, this is how you would retrieve a Twitter token from database: `var token = _.findWhere(req.user.tokens, { kind: 'twitter' });`, where `req.user.tokens` is an Array, and a second parameter is an object with a given key/value.
- If you right click and select **View Page Source**, notice how *Express*
minified HTML for you. If you would like to see non-minified markup,
add `app.locals.pretty = true;` to **app.js** with the rest of the Express configuration.

FAQ
---
### Why do I get `403 Error: Forbidden` when submitting a POST form?
You need to add this hidden input element to your form. This has been added in the
pull request [#40](https://github.com/sahat/hackathon-starter/pull/40).

```
input(type='hidden', name='_csrf', value=token)
```
You can read more about [CSRF protection middleware](http://expressjs.com/api.html#csrf) at the Express API Reference.


### What is `cluster_app.js`?
From the [Node.js Documentation](http://nodejs.org/api/cluster.html#cluster_how_it_works):
> A single instance of Node runs in a single thread. To take advantage of multi-core systems
> the user will sometimes want to launch a cluster of Node processes to handle the load.
> The cluster module allows you to easily create child processes that all share server ports.

`cluster_app.js` allows you to take advantage of this feature by forking a process of `app.js`
for each CPU detected. For the majority of applications serving HTTP requests,
this is a resounding boon. However, the cluster module is still in experimental stage, therefore it should only be used after understanding its purpose and behavior. To use it, simply run `node cluster_app.js`. **Its use is entirely optional and `app.js` is not tied in any way to it**. As a reminder, if you plan to use `cluster_app.js` instead of `app.js`, be sure to indicate that in `package.json` when you are ready to deploy your app.

### What is this Rails 3.1-style asset pipeline that you mentioned in Features?
This is how you typically define static files inside HTML, Jade or any template for that matter:
```jade
link(href='/css/styles.css', rel='stylesheet')
script(src='/js/lib/jquery-2.1.0.min.js')
script(src='/js/lib/bootstrap.min.js')
script(src='/js/main.js')
```
Simple enough right? But wouldn't it be nice to have it just like that in development mode, but when you deploy
to production, have it minified and concatenated into a single file automatically without any extra effort on you part?
```jade
link(href='/css/styles.css', rel='stylesheet')
script(src='/js/application.js')
```
As soon as you start bringing in more JavaScript libraries, the benefits of concatenating and minifying
JavaScript files will be even greater.
Using connect-assets library it's as as simple as:
```jade
!= css('styles')      // expects public/css/styles.less
!= js('application')  // expects public/js/application.js
```

The only thing you need to remember is to define your JavaScript files inside `public/js/application.js` using this
strange syntax notation (Sprockets-style) borrowed from Rails. I know it's an extra thing to learn
for someone who has never seen Rails asset pipeline before, but in this case, I think benefits outweigh the costs.
```js
//= require lib/jquery-2.1.0.min
//= require lib/bootstrap.min
//= require main
```
Using this approach, when working in `development` mode, **connect-assets** will load each file individually,
without minifying or concatenating anything. When you deploy your app, it will run in `production` mode, and so
**connect-assets** will automatically serve a single concatenated + minified `application.js`. For more
information see [Sprockets-style concatenation](https://github.com/adunkman/connect-assets/#sprockets-style-concatenation)

### I am getting MongoDB Connection Error, how do I fix it?
That's a custom error message defined in `app.js` to indicate that there was a connection problem to MongoDB:
```js
mongoose.connection.on('error', function() {
  console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
});
```
As the message says, you need to have a MongoDB server running before launching `app.js`. You can get MongoDB from
[mongodb.org/downloads](mongodb.org/downloads), or install it via a package manager
([Homebrew](http://brew.sh/) on Mac, `apt-get` on Ubuntu, `yum` on Fedora, etc.)

### I get an error when I deploy my app, why?
Chances are you haven't changed the *Dabatase URI* in `secrets.js`. If `db` is set to `localhost`, it will only work
on your machine as long as MongoDB is running. When you deploy to Heroku, OpenShift or some other provider, you will not have MongoDB
running on `localhost`. You need to create an account with [MongoLab](http://mongolab.com) or [MongoHQ](http://mongohq.com), then create a free tier database. See [Deployment](#deployment) for more information on how to
setup an account and a new database step-by-step with MongoLab.

### Why Jade instead of Handlebars?
When I first started this project I didn't have any experience with Handlebars. Since then I have worked on Ember.js apps and got myself familiar with the Handlebars syntax. While it is true Handlebars is easier, because it looks like good old HTML, I have no regrets picking Jade over Handlebars. First off, it's the default template engine in Express, so someone who has built Express apps in the past already knows it. Secondly, I find `extends` and `block` to be indispensable, which as far as I know, Handlebars does not have out of the box. And lastly, subjectively speaking, Jade looks much cleaner and shorter than Handlebars, or any non-HAML style for that matter.

### Why do you have all routes defined in app.js?
For the sake of simplicity. While there might be a better approach,
such as passing `app` context to each controller as outlined in this
[blog](http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/),
I find such style to be confusing for beginners.
It took me a long time to grasp the concept of `exports` and `module.exports`,
let alone having a global `app` reference in other files.
That to me is a backward thinking.
The `app.js` is the "heart of the app", it should be the one referencing
models, routes, controllers, etc.
When working solo on small projects I actually prefer to have everything inside `app.js` as is the case with [this]((https://github.com/sahat/ember-sass-express-starter/blob/master/app.js))
REST API server.

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

### Why is there no Mozilla Persona as a sign-in option?
If you would like to use **Persona** authentication strategy, use the [pull request #64](https://github.com/sahat/hackathon-starter/pull/64) as
a reference guide. I have explained my reasons why it could not be merged into the *Hackathon Starter* in
[issue #63](https://github.com/sahat/hackathon-starter/issues/63#issuecomment-34898290).



### How do I switch SendGrid for another email delivery service?
If you would like to use [Mailgun](http://mailgun.com) service instead of [SendGrid](http://sendgrid.com) for sending emails, open `controllers/contact.js`, then inside `var smtpTransport = nodemailer.createTransport('SMTP', { });` comment out or delete **SendGrid** code block, and uncomment **Mailgun** code block. You are not limited to just SendGrid or Mailgun. **Nodemailer** library supports many other providers, including GMail, iCloud, Hotmail, Yahoo, Mail.ru. Just don't forget to add *username* and *password* for that service provider to `secrets.js`.

How It Works (mini guides)
--------------------------
This section is intended for giving you a detailed explanation about
how a particular functionality works. Maybe you are just curious about
how it works, or maybe you are lost and confused while reading the code,
I hope it provides some guidance to you.

###:rose: Custom HTML and CSS Design 101
[HTML5 UP](http://html5up.net/) has many beautiful templates that you can download for free, like the ones you see below:
![Alt](http://html5up.net/uploads/previews/6742121165068310.jpg)
![Alt](http://html5up.net/uploads/previews/9257227011867312.jpg)

When you download the ZIP file, it will come with *index.html*, *images*, *css* and *js* folders. So, how do you
integrate it with Hackathon Starter? Hackathon Starter uses Bootstrap CSS framework, but these templates do not.
Trying to use both CSS files at the same time will likely result in undesired effects.

:exclamation: **Note:** Using the custom templates approach, you should understand that you cannot reuse any of the views I have created: layout, home page, api browser, login, signup, account management, contact. Those views were built using Bootstrap grid and styles. You will have to manually update the grid using a different syntax provided in the template. **Having said that, you can mix and match if you want to do so: Use Bootstrap for main app interface, and a custom template for a landing page.**

Let's start from the beginning. For this example I will use [Escape Velocity](http://html5up.net/escape-velocity/) template:
![Alt](http://html5up.net/uploads/previews/6330653905846315.jpg)

**Note**: For the sake of simplicity I will only consider `index.html`, and skip `left-sidebar.html`,
`no-sidebar.html`, `right-sidebar.html`.

Move all javascript files from `html5up-escape-velocity/js` to `public/js`. Then move all css files from `html5up-escape-velocity/css` to `public/css`. And finally, move all images from `html5up-escape-velocity/images` to `public/images` (You could move it to the existing **img** folder, but then you would have to manually change every `img` reference). Grab the contents of `index.html` and paste it into [HTML To Jade](http://html2jade.aaron-powell.com/).

Create a new file `escape-velocity.jade` and paste the Jade markup there. Change `!!! 5` to `doctype html`. It's a fairly recent
change in **Jade** language, but http://html2jade.aaron-powell.com hasn't caught up to this change yet.

Let's see how it looks. Create a new controller **escapeVelocity** inside `controllers/home.js`:

```js
exports.escapeVelocity = function(req, res) {
  res.render('escape-velocity', {
    title: 'Landing Page'
  });
};
```

And then create a route in `app.js`. I placed it right after the index controller:
```js
app.get('/escape-velocity', homeController.escapeVelocity);
```

Restart the server (if you are not using **nodemon**), then you should see the new template at [http://localhost:3000/escape-velocity](http://localhost:3000/escape-velocity).

I will stop right here, but if you would like to use this template as more than just a single page, take a look at how these Jade templates work: `layout.jade` - base template, `index.jade` - home page, `partials/navigation.jade` - Bootstrap navbar, `partials/footer.jade` - sticky footer. You will have to manually break it apart into smaller pieces. Figure out which part of the template you want to keep the same on all pages - that's your new `layout.jade`.
Then, each page that changes, be it `index.jade`, `about.jade`, `contact.jade`
will be embedded in your new `layout.jade` via `block content`. Use existing templates as a reference.

This is a rather lengthy process, and templates you get from elsewhere,
might have yet another grid system. That's why I chose *Bootstrap* for the Hackathon Starter.
 Many people are already familiar with *Bootstrap*, plus it's easy to get started with it if you have never used *Bootstrap*.
 You can also buy many beautifully designed *Bootstrap* themes at [Themeforest](http://themeforest.net/), and use them as a drop-in replacement for Hackathon Starter. However, if you would like to go with a completely custom HTML/CSS design, this should help you to get started!

<hr>

###:bulb: How do flash messages work in this project?
Flash messages allow you to display a message at the end of the request and access
it on next request and only next request. For instance, on a failed login attempt, you would
display an alert with some error message, but as soon as you refresh that page or visit a different
page and come back to the login page, that error message will be gone. It is only displayed once.
This project uses *express-flash* module for flash messages. And that
module is built on top of *connect-flash*, which is what I used in
this project initially. With *express-flash* you don't have to
explicity send a flash message to every view inside `res.render()`.
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
why an error has occured. Here is a more general example of what express-validator returns when there are errors present:

```js
[
  { param: "name", msg: "Name is required", value: "<received input>" },
  { param: "email", msg: "A valid email is required", value: "<received input>" }
]
```

To keep consistent with that style, you should pass all flash messages
as `{ msg: 'My flash message' }` instead of a string. Otherwise you will just see an alert box
without an error message. That is because, in **partials/flash.jade** template it will try to output
`error.msg` (i.e. `"My flash message".msg`), in other words it will try to call a `msg` method on a *String* object,
which will return *undefined*. Everything I just mentioned about errors, also applies
to "info" and "success" flash messages, and you could even create a new one yourself, such as:

**Data Usage Controller (Example)**
```
req.flash('warning', { msg: 'You have exceeded 90% of your data usage' });
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

###:snowman: How do I create a new page?
A more correct way to be to say "How do I create a new route". The main file `app.js` contains all the routes.
Each route has a callback function associated with it. Sometimes you will see 3 or more arguments
to routes. In cases like that, the first argument is still a URL string, while middle arguments
are what's called middleware. Think of middleware as a door. If this door prevents you from
continuing forward, you won't get to your callback function. One such example is a route that requires authentication.

```js
app.get('/account', passportConf.isAuthenticated, userController.getAccount);
```

It always goes from left to right. A user visits `/account` page. Then `isAuthenticated` middleware
checks if you are authenticated:

```js
exports.isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};
```

If you are authenticated, you let this visitor pass through your "door" by calling `return next();`. It then proceeds to the
next middleware until it reaches the last argument, which is a callback function that typically renders a template on `GET` requests or redirects on `POST` requests. In this case, if you are authenticated, then you will see *Account Management* page, otherwise you will be redirected to *Login* page.

```js
exports.getAccount = function(req, res) {
  res.render('account/profile', {
    title: 'Account Management'
  });
};
```

Express.js has `app.get`, `app.post`, `app.put`, `app.del`, but for the most part you will only use the first two.
If you just want to display a page, then use `GET`, if you are submitting a form, sending a file then use `POST`.

Here is a typical workflow for adding new routes to your application. Let's say we are building
a page that lists all books from database.

**Step 1.** Start by defining a route.
```js
app.get('/books', bookController.getBooks);

```

**Step 2.** Create a new controller file called `book.js`.
```js
/**
 * GET /books
 * List all books.
 */

exports.getBooks = function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
};
```

**Step 3.** Import that controller in `app.js`.
```js
var bookController = require('./controllers/book');
```

**Step 4.** Create `books.jade` template.
```jade
extends layout

block content
  .page-header
    h3 All Books

  ul
    for book in books
      li= book.name
```

That's it! I will say that you could have combined Step 1, 2, 3 as following:

```js
app.get('/books', function(req, res) {
  Book.find(function(err, docs) {
    res.render('books', { books: docs });
  });
});
```

Sure, it's simpler, but as soon as you pass 1000 lines of code in `app.js` it becomes a little difficult to navigate the file.
I mean, the whole point of this boilerplate project was to separate concerns, so you could
work with your teammates without running into *MERGE CONFLICTS*. Imagine you have 4 developers
working on a single `app.js`, I promise you it won't be fun resolving merge conflicts all the time.
If you are the only developer then it's fine. But as I said, once it gets up to a certain LoC size, it becomes
difficult to maintain everything in a single file.

That's all there is to it. Express.js is super simple to use.
Most of the time you will be dealing with other APIs to do the real work:
[Mongoose](http://mongoosejs.com/docs/guide.html) for querying database, socket.io for sending and receiving messages over websockets,
sending emails via [Nodemailer](http://www.nodemailer.com/), form validation using [express-validator](https://github.com/ctavan/express-validator) library,
parsing websites using [Cheerio](https://github.com/MatthewMueller/cheerio), and etc.

<hr>

###:dizzy: How do I use Socket.io with Hackathon Starter?
[Dan Stroot](https://github.com/dstroot) submitted an excellent [pull request](https://github.com/dstroot/hackathon-starter/commit/0a632def1ce8da446709d92812423d337c977d75) that adds a real-time dashboard with socket.io.
And as  much as I'd like to add it to the project, I think it violates one of the main
principles of the Hackathon Starter:
> When I started this project, my primary focus was on simplicity and ease of use.
> I also tried to make it as generic and reusable as possible to cover most use cases of
> hackathon web apps, **without being too specific**.

When I need to use socket.io, I **really** need it, but most of the time - I don't. But more
importantly, websockets support is still experimental on most hosting providers. As of October 2013,
Heroku supports websockets, but not until you opt-in by running this command:

```js
heroku labs:enable websockets -a myapp
```

And what if you are deploying to OpenShift? They do support websockets, but it is currently in a
preview state. So, for OpenShift you would need to change the socket.io connect URI to the following:

```js
var socket = io.connect('http://yoursite-namespace.rhcloud.com:8000');
```

Wait, why is it on port 8000? Who knows, and if I didn't run across this [blog post](http://velin-georgiev-blog.appspot.com/blog/set-up-nodejs-express-socketio-application-using-websockets-on-openshift-by-red-hat/)
I wouldn't even know I had to use port 8000.

I am really glad that Heroku and OpenShift at least
have a websockets support, because many other PaaS providers still do not support it.
Due to the aforementioned issues with websockets, I cannot include socket.io as part of the Hackathon Starter. *For now...*
If you need to use socket.io in your app, please continue reading.

First you need to install socket.io:
```js
npm install socket.io --save
```

Replace `var app = express();` with the following code:

```js
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
```

I like to have the following code organization in `app.js` (from top to bottom): module dependencies,
import controllers, import configs, connect to database, express configuration, routes,
start the server, socket.io stuff. That way I always know where to look for things.

Add the following code at the end of `app.js`:

```js
io.configure(function() {
  io.set('transports', ['websocket']);
});

io.sockets.on('connection', function(socket) {
  socket.emit('greet', { hello: 'Hey, Mr.Client!' });
  socket.on('respond', function(data) {
    console.log(data);
  });
  socket.on('disconnect', function() {
    console.log('Socket disconnected');
  });
});
```

One last thing left to change:
```js
app.listen(app.get('port'), function() {
```
to
```js
server.listen(app.get('port'), function() {
```

At this point we are done with the back-end.

You now have a choice - to include your JavaScript code in Jade templates or have all your client-side
JavaScript in a separate file - in `main.js`. I will admit, when I first started out with Node.js and JavaScript in general,
I placed all JavaScript code inside templates because I have access to template variables passed in from Express
right then and there. It's the easiest thing you can do, but also the least efficient and harder to maintain. Since then I
almost never include inline JavaScript inside templates anymore.

But it's also understandable if you want take the easier road.
Most of the time you don't even care about performance during hackathons, you just
want to [*"get shit done"*](http://www.startupvitamins.com/media/products/13/aaron_levie_poster_black.jpg) before the time runs out.
Well, either way, use whichever approach makes more sense to you. At the end of the day,
it's **what** you build that matters, not **how** you build it.

If you want to stick all your JavaScript inside templates, then in `layout.jade` -
your main template file, add this to `head` block.

```jade
script(src='/socket.io/socket.io.js?v=#{cacheBuster}')
script.
    var socket = io.connect(window.location.href);
    socket.on('greet', function (data) {
      console.log(data);
      socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
    });
```

**Note**: Notice the path of the `socket.io.js`, you don't actually
have to have `socket.io.js` file anywhere in your project; it will be generated automatically
at runtime.

If you want to have JavaScript code separate from templates, move that inline script code into `main.js`,
inside the `$(document).ready()` function:

```js
$(document).ready(function() {

  // Place JavaScript code here...
  var socket = io.connect(window.location.href);
  socket.on('greet', function (data) {
    console.log(data);
    socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
  });

});
```

And that's it, we are done!

If you want to see a really cool real-time dashboard check out this [live example](http://hackathonstarter.herokuapp.com/dashboard). Refer to the [pull request #23](https://github.com/sahat/hackathon-starter/pull/23/files) to see how it is implemented.

### How does “Forgot your password” feature work?

There are **4** routes in total that handle forgot password and reset password:
```js
app.get('/forgot', forgotController.getForgot);
app.post('/forgot', forgotController.postForgot);
app.get('/reset/:token', resetController.getReset);
app.post('/reset/:token', resetController.postReset);
```

The first step begins at the get `GET /forgot` when user clicks on **Forgot your password?** link on the *Login* page. The `POST /forgot` handles the form submission. If email address is valid, it creates a random 20-bit hash, finds that user’s email in the database and sets `resetPasswordToken` field to the newly  generated random 20-bit hash, additionally `resetPasswordExpires` is set to 1 hour into the future. That means from the moment you receive an email, that reset link will be valid only for one hour (for security reasons it’s a good practice to expire reset password links). If 1 hour is too short for your needs, feel free to increase it. The final step is to actually send an email with a reset link. This is all elegantly done using **async.waterfall** control flow.

Notice how it handles the case when no email address exists:
```js
if (!user) {
  req.flash('errors', { msg: 'No account with that email address exists.' });
  return res.redirect('/forgot');
}
```

Some people might find this approach to be less secure. Maybe a better approach might have been to let the user know “If there is an account with provided e-mail address, we will send you a reset link”. Again, feel free to change it based on your application needs.

The second step involves resetting a password. After clicking on a reset link, it redirects you to a page where you can set a new password. The token validity check is performed twice - on `GET` request when you click on a reset link and on `POST` request after you submit a new password. After selecting a new password, both `passwordResetToken` and `resetPasswordExpire` fields are deleted from the database. This is easily done by setting their value to `undefined`; *Mongoose* will run `$unset` internally. And finally, user is logged in with the new password and a confirmation email is sent notifying about the password change.

Mongoose Cheatsheet
-------------------
#### Find all users:
```js
User.find(function(err, users) {
  console.log(users);
});
```

#### Find a user by email:
```js
var userEmail = 'example@gmail.com';
User.findOne({ email: userEmail }, function(err, user) {
  console.log(user);
});
```

#### Find 5 most recent user accounts:
```js
User
  .find()
  .sort({ _id: -1 })
  .limit(5)
  .exec(function(err, users) {
    console.log(users);
  });
```

#### Get total count of a field from all documents:
Let's suppose that each user has a `votes` field and you would like to count the total number of votes in your database accross all users. One very inefficient way would be to loop through each document and manually accumulate the count. Or you could use [MongoDB Aggregation Framework](http://docs.mongodb.org/manual/core/aggregation-introduction/) instead:
```js
User.aggregate({ $group: { _id: null, total: { $sum: '$votes' } } }, function(err, votesCount) {
  console.log(votesCount.total);
});
```

Deployment
----------

Once you are ready to deploy your app, you will need to create an account with a cloud platform to host it. These are not
the only choices, but they are my top picks. Create an account with **MongoLab** and then pick one of the 4 providers
below. Once again, there are plenty of other choices and you are not limited to just the ones listed below. From my
experience, **Heroku** is the easiest to get started with, it will automatically restart your node.js process when it crashes, custom domain support on free accounts and zero-downtime deployments.

<img src="http://i.imgur.com/7KnCa5a.png" width="200">
- Open [mongolab.com](https://mongolab.com) website
- Click the yellow **Sign up** button
- Fill in your user information then hit **Create account**
- From the dashboard, click on **:zap:Create new** button
- Select **any** cloud provider (I usually go with AWS)
- Under *Plan* click on **Single-node (development)** tab and select **Sandbox** (it's free)
 - *Leave MongoDB version as is - `2.4.x`*
- Enter *Database name** for your web app
- Then click on **:zap:Create new MongoDB deployment** button
- Now, to access your database you need to create a DB user
- You should see the following message:
 - *A database user is required to connect to this database.* **Click here** *to create a new one.*
- Click the link and fill in **DB Username** and **DB Password** fields
- Finally, in `secrets.js` instead of `db: 'localhost'`, use the following URI with your credentials:
 - `db: 'mongodb://<dbuser>:<dbpassword>@ds027479.mongolab.com:27479/<dbname>'`

> **:exclamation:Note**: As an alternative to MongoLab, there is also [MongoHQ](http://www.mongohq.com/home).

<img src="http://blog.exadel.com/wp-content/uploads/2013/10/heroku-Logo-1.jpg" width="200">
- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/osx)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`, followed by `git push heroku master`
- Done!

<img src="http://www.opencloudconf.com/images/openshift_logo.png" width="200">
- First, install this Ruby gem: `sudo gem install rhc` :gem:
- Run `rhc login` and enter your OpenShift credentials
- From *your app* directory run `rhc app create MyApp nodejs-0.10`
 - **Note**: *MyApp* is what you want to name your app (no spaces)
- Once that is done, you will be provided with **URL**, **SSH** and **Git Remote** links
- Visit that **URL** and you should see *Welcome to your Node.js application on OpenShift* page
- Copy **Git Remote** and paste it into `git remote add openshift your_git_remote`
- Before you push your app, you need to do a few modifications to your code

Add these two lines to `app.js`, just place them anywhere before `app.listen()`:
```js
var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
```

Then change `app.listen()` to:
```js
app.listen(PORT, IP_ADDRESS, function() {
  console.log("✔ Express server listening on port %d in %s mode", PORT, app.settings.env);
});
```
Add this to `package.json`, after *name* and *version*. This is necessary because, by default, OpenShift looks for `server.js` file. And by specifying `supervisor app.js` it will automatically restart the server when node.js process crashes.

```js
"main": "app.js",
"scripts": {
  "start": "supervisor app.js"
},
```

- Finally, now you can push your code to OpenShift by running `git push -f openshift master`
 - **Note**: The first time you run this command, you have to pass `-f` (force) flag because OpenShift creates a dummy server with the welcome page when you create a new Node.js app. Passing `-f` flag will override everything with your *Hackathon Starter* project repository. Please **do not** do `git pull` as it will create unnecessary merge conflicts.
- And you are done! (Not quite as simple as Heroku, huh?)

<img src="https://www.nodejitsu.com/img/media/nodejitsu-transparent.png" width="200">
- To install **jitsu**, open a terminal and type: `sudo npm install -g jitsu`
- Run `jitsu login` and enter your login credentials
- From your app directory, run `jitsu deploy`
 - This will create a new application snapshot, generate and/or update project metadata
- Done!

<img src="http://upload.wikimedia.org/wikipedia/en/f/ff/Windows_Azure_logo.png" width="200">

TODO: Will be added soon.

TODO
----
- Pages that require login, should automatically redirect to last attempted URL on successful sign-in.

Contributing
------------
If something is unclear, confusing, or needs to be refactored, please let me know. Pull requests are always welcome, but due to the opinionated nature of this project, I cannot accept every pull request. Please open an issue before submitting a pull request. This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a few minor exceptions. If you are submitting a pull request that involves Jade templates, please make sure you are using *spaces*, not tabs.

License
-------
The MIT License (MIT)

Copyright (c) 2014 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
