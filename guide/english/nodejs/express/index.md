---
title: ExpressJS
---
## ExpressJS

When it comes to build web applications using Node.js, creating a server can take a lot of time. Over the years Node.js has matured enough due to the support from community. Using Node.js as a backend for web applications and websites help the developers to start working on their application or product quickly. In this tutorial, we are going to look into Expressjs which is a Node.js framework for web development that comes with features like routing and rendering and support for REST APIs.

## What is Express?

Express is the most popular Node.js framework because it requires minimum setup to start an application or an API and is fast, and unopinionated at the same time. In other words, it does not enforces its own philosophy that a application or API should be built in a specific way, unlike Rails and Django. Its flexibility can be calculated by the number of `npm` modules available which makes it pluggable at the same time. If you have basic knowledge of HTML, CSS, and JavaScript and how Node.js works in general, in no time you will be able to get started with Expressjs.

Express was developed by TJ Holowaychuk and is now maintained by Node.js foundation and open source developers. To get started with the development using Express, you need to have Node.js and npm installed. You can install [Node.js](https://nodejs.org/en/) on your local machine and along with it comes the command line utility `npm` that will help us to install plugins or as called dependencies later on in our project.

To check if everything is installed correctly, please open your terminal and type:

```shell
node --version
v5.0.0
npm --version
3.5.2
```

If you are getting the version number instead of an error that means you have installed Node.js and npm successfully.

## Why use Expressjs?

Before we start with mechanism of using Express as the backend framework, let us first explore why we should consider it using or the reasons of its popularity.

* Express lets you build single page, multi-page, and hybrid web and mobile applications. Other common backend use is to provide an API for a client (whether web or mobile).
* It comes with a default template engine, Jade which helps to facilitate the flow of data into a website structure and does support other template engines.
* It supports MVC (Model-View-Controller), a very common architecture to design web applications.
* It is cross-platform and is not limited to any particular operating system.
* It leverages upon Node.js single threaded and asynchronous model.

Whenever we create a project using `npm`, our project must have a `package.json` file.

### Creating package.json

A JSON (JavaScript Object Notation) file is contains every information about any Express project. The number of modules installed, the name of the project, the version, and other meta information. To add Expressjs as a module in our project, first we need to create a project directory and then create a package.json file.

```shell
mkdir express-app-example
cd express-app-example
npm init --yes
```

This will generate a `package.json` file in the root of the project directory. To install any module from `npm` we need to have `package.json` file exist in that directory.

```json
{
  "name": "express-web-app",
  "version": "0.1.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "license": "MIT"
}
```

### Installing Express

Now we have `package.json` file, we can install Express by running the command:

```shell
npm install --save express
```

We can confirm that Express has correctly installed by two ways. First, there will be new section in `package.json` file named `dependencies` under which our Express exists:

```json
{
  "name": "express-web-app",
  "version": "0.1.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "license": "MIT",
  "dependencies": {
    "express": "4.16.0"
  }
}
```

Second way is that a new folder called `node_modules` suddenly appeared in the root of our project directory. This folder stores the packages we install locally in our project.

## Building a Server with Express

To use our installed package for Express framework and create a simple server application, we will create the file, `index.js`, at the root of our project's directory.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

To start the server, go to your terminal and type:

```shell
node index.js
```

This will start the server. This bare-minimum application will listen on port 3000. We make a request through our browser on `http://localhost:3000` and our server will respond with `Hello World` to which the browser is the client and the message will be shown there.

The first line of our code is using the `require` function to include the `express` module. This is how we include and use a package installed from npm in any JavaScript file in our project. Before we start using Express, we need to define an instance of it which handles the request and response from the server to the client. In our case, it is the variable `app`.

`app.get()` is a function that tells the server what to do when a `get` request at the given route is called. It has a callback function `(req, res)` that listen to the incoming request `req` object and respond accordingly using `res` response object. Both `req` and `res` are made available to us by the Express framework.

The `req` object represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers. The res object represents the HTTP response that an Express app sends when it gets an HTTP request. In our case, we are sending a text `Hello World` whenever a request is made to the route `/`.

Lastly, `app.listen()` is the function that starts a port and host, in our case the `localhost` for the connections to listen to incoming requests from a client. We can define the port number such as `3000`.

## Anatomy of an Express Application

A typical structure of an Express server file will most likely contain the following parts:

**Dependencies**

Importing the dependencies such as the express itself. These dependencies are installed using `npm` like we did in the previous example.

**Instantiations**

These are the statements to create an object. To use express, we have to instantiate the `app` variable from it.

**Configurations**

These statements are the custom application based settings that are defined after the instantiations or defined in a separate file (more on this when discuss the project structure) and required in our main server file.

**Middleware**

These functions determine the flow of request-response cycle. They are executred after every incoming request. We can also define custom middleware functions. We have section on them below.

**Routes**

They are the endpoints defined in our server that helps to perform operations for a particular client request.

**Bootstrapping Server**

The last that gets executed in an Express server is the `app.listen()` function which starts our server.

We will now start disussing sections that we haven't previously discussed about.

## Routing

Routing refers to how an server side application responds to a client request to a particular endpoint. This endpoint consists of a URI (a path such as `/` or `/books`) and an HTTP method such as GET, POST, PUT, DELETE, etc.

Routes can be either good old web pages or REST API endpoints. In both cases the syntax is similar syntax for a route can be defined as:

```javascript
app.METHOD(PATH, HANDLER);
```

Routers are helpful in separating concerns such as different endpoints and keep relevant portions of the source code together. They help in building maintainable code. All routes are defined before the function call of `app.listen()`. In a typical Express application, `app.listen()` will be last function to execute.

### Routing Methods

HTTP is a standard protocol for a client and a server to communicate over. It provides different methods for a client to make request. Each route has at least on hanlder function or a callback. This callback function determines what will be the response from server for that particular route. For example, a route of `app.get()` is used to handle GET requests and in return send simple message as a response.

```javascript
// GET method route
app.get('/', (req, res) => res.send('Hello World!'));
```

### Routing Paths

A routing path is a combination of a request method to define the endpoints at which requests can be made by a client. Route paths can be strings, string patterns, or regular expressions.

Let us define two more endpoints in our server based application.

```javascript
app.get('/home', (req, res) => {
  res.send('Home Page');
});
app.get('/about', (req, res) => {
  res.send('About');
});
```

Consider the above code as a bare minimum website which has two endpoints, `/home` and `/about`. If a client makes a request for home page, it will only response with `Home Page` and on `/about` it will send the response: `About Page`. We are using the `res.send` function to send the string back to the client if any one of the two routes defined is selected.

### Routing Parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. `req.params` object is used in this case because it has access to all the parameters passed in the url.

```javascript
app.get('/books/:bookId', (req, res) => {
  res.send(req.params);
});
```

The request URL from client in above source code will be `http://localhost:3000/books/23`. The name of route parameters must be made up of characters ([A-Za-z0-9_]). A very general use case of a routing parameter in our application is to have 404 route.

```javascript
// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
```

If we now start the server from command line using `node index.js` and try visiting the URL: `http://localhost:3000/abcd`. In response, we will get the 404 message.

## Middleware Functions

Middleware functions are those functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. The objective of these functions is to modify request and response objects for tasks like parsing request bodies, adding response headers, make other changes to request-response cycle, end the request-response cycle and call the next middleware function.

The `next` function is a function in the Express router which is used to execute the other middleware functions succeeding the current middleware. If a middleware function does include `next()` that means the request-response cycle is ended there. The name of the function `next()` here is totally arbitary and you can name it whatever you like but is important to stick to best practices and try to follow a few conventions, especially if you are working with other developers.

Also, when writing a custom middleware do not forget to add `next()` function to it. If you do not mention `next()` the request-response cycle will hang in middle of nowhere and you servr might cause the client to time out.

Let use create a custom middleware function to grasp the understanding of this concept. Take this code for example:

```javascript
const express = require('express');
const app = express();

// Simple request time logger
app.use((req, res, next) => {
   console.log("A new request received at " + Date.now());

   // This function call tells that more processing is
   // required for the current request and is in the next middleware
   function/route handler.
   next();  
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

To setup any middleware, whether a custom or available as an npm module, we use `app.use()` function. It as one optional parameter path and one mandatory parameter callback. In our case, we are not using the optional paramaeter path.

```javascript
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});
```

The above middleware function is called for every request made by the client. When running the server you will notice, for the every browser request on the endpoint `/`, you will be prompt with a message in your terminal:

```shell
A new request received at 1467267512545
```

Middleware functions can be used for a specific route. See the example below:

```javascript
const express = require('express');
const app = express();

//Simple request time logger for a specific route
app.use('/home', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

This time, you will only see a similar prompt when the client request the endpoint `/home` since the route is mentioned in `app.use()`. Nothing will be shown in the terminal when the client requests endpoint `/about`.

Order of middleware functions is important since they define when to call which middleware function. In our above example, if we define the route `app.get('/home')...` before the middleware `app.use('/home')...`, the middleware function will not be invoked.

### Third Party Middleware Functions

Middleware functions are useful pattern that allows developers to reuse code within their applications and even share it with others in the form of NPM modules. The essential definition of middleware is a function with three arguments: request (or req), response (res), and next which we observer in the previous section.

Often in our Express based server application, we will be using third party middleware functions. These functions are provided by Express itself. They are like plugins that can be installed using npm and this is why Express is flexible.

Some of the most commonly used middleware functions in an Express appication are:

#### bodyParser

It allows developers to process incoming data, such as body payload. The payload is just the data we are receiving from the client to be processed on. Most useful with POST methods. It is installed using:

```shell
npm install --save body-parser
```

Usage:

```javascript
const bodyParser = require('body-parser');

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// To parse json data
app.use(bodyParser.json());
```

It is probably one of the most used third-party middleware function in any Express applicaiton.

#### cookieParser

It parses Cookie header and populate `req.cookies` with an object keyed by cookie names. To install it,

```shell
$ npm install --save cookie-parser
```

```javascript
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

#### session

This middleware function creates a session middleware with given options. A session is often used in applications such as login/signup.

```shell
$ npm install --save session
```

```javascript
app.use(
  session({
    secret: 'arbitary-string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);
```

#### morgan

The morgan middleware keeps track of all the requests and other important information depending on the output format specified.

```shell
npm install --save morgan
```

```javascript
const logger = require('morgan');
// ... Configurations
app.use(logger('common'));
```

`common` is a predfined format case which you can use in the application. There are other predefined formats such as tiny and dev, but you can define you own custom format too using the string parameters that are available to us by morgan.

#### dotenv

The dotenv middleware loads environmental variables from a `.env` file into `process.env`.  An `.env` file can be used to store sensitive information such as API keys and database credentials.  `dotenv` allows for a zero-configuration way to access the information stored in `.env`.  
**Note:** You should NEVER include your `.env` file in your public repo.  Be sure to add `.env` to your `.gitignore` file.

```shell
npm install --save dotenv
```

```sh
# .env file
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```
```js
/* index.js file */
require('dotenv').config();
const db = require('db');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});
```

A list of most used middleware functions is available at this [link](https://expressjs.com/en/resources/middleware.html).

## Serving Static Files

To serve static files such as CSS stylesheets, images, etc. Express provides a built in middleware function `express.static`. Static files are those files that a client downloads from a server.

It is the only middleware function that comes with Express framework and we can use it directly in our application. All other middlewares are third party.

By default, Express does not allow to serve static files. We have to use this middleware function. A common practice in the development of a web application is to store all static files under the 'public' directory in the root of a project. We can serve this folder to serve static files include by writing in our `index.js` file:

```javascript
app.use(express.static('public'));
```

Now, the static files in our public directory will be loaded.

```shell
http://localhost:3000/css/style.css
http://localhost:3000/images/logo.png
http://localhost:3000/images/bg.png
http://localhost:3000/index.html
```

### Multiple Static Directories

To use multiple static assets directories, call the `express.static` middleware function multiple times:

```javascript
app.use(express.static('public'));
app.use(express.static('files'));
```

### Virtual Path Prefix

A fix path prefix can also be provided as the first argument to the `express.static` middleware function. This is known as a _Virtual Path Prefix_ since the actual path does not exist in project.

```javascript
app.use('/static', express.static('public'));
```

If we now try to load the files:

```shell
http://localhost:3000/static/css/style.css
http://localhost:3000/static/images/logo.png
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/index.html
```

This technique comes in handy when providing multiple directories to serve static files. The prefixes are used to help distinguish between the multiple directories.

## Template Engines

Template engines are libraries that allow us to use different template languages. A template language is a special set of instructions (syntax and control structures) that instructs the engine how to process data. Using a template engine is easy with Express. The popular template engines such as Pug, EJS, Swig, and Handlebars are compatible with Express. However, Express comes with a default template engine, Jade, which is the first released version of Pug.

To demonstrate how to use a Template Engine, we will be using Pug. It is a powerful template engine that provide features such as filters, includes, interpolation, etc. To use it, we have to first install as a module in our project using `npm`.

```shell
npm install --save pug
```

This command will install the pug and to verify that installed correctly, just take a look at the `package.json` file. To use it with our application first we have to set it as the template engine and create a new directory './views' where we will store all the files related to our template engine.

```javascript
app.set('view engine', 'pug');
app.set('views', './views');
```

Since we are using `app.set()` which indicates configuration within our server file, we must place them before we define any route or a middleware function.

In the `views` direcotry, create file called `index.pug`.

```pug
doctype html
  html
    head
      tite="Hello from Pug"
    body
      p.greetings Hello World!  
```

To run this page, we will add the following route to our application.

```javascript
app.get('/hello', (req, res) => {
  res.render('index');
});
```

Since we have already set Pug as our template engine, in `res.render` we do not have to provide `.pug` extension. This function renders the code in any `.pug` file to HTML for the client to display. The browsers can only render HTML files. If you start the server now, and visit the route `http://localhost:3000/hello` you will see the output `Hello World` rendered correctly.

In Pug, you must notice that we do not have to write closing tags to elements as we do in HTML. The above code will be rendered into HTML as:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Hello from Pug</title>
   </head>

   <body>
      <p class = "greetings">Hello World!</p>
   </body>
</html>
```

The advantage of using a Template Engine over raw HTML files is that they provide support for performing tasks over data. HTML cannot render data directly. Frameworks like Angular and React share this behaviour with template engines.

You can also pass values to template engine directly from the route handler function.

```javascript
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello from Pug', message: 'Hello World!' });
});
```

For above case, our `index.pug` file will be written as:

```pug
doctype html
  html
    head
      title= title
    body
      h1= message
```

The output will be the same as previous case.

## Project Structure of an Express App

Because Express does not enforce a particular hierarchy, it can occasionally be overwhelming which project structure to follow.  The most common structure is a separation of tasks into different modules.

An example of a typical structure for an Express-based web application:
```
project-root/
   node_modules/          // This is where the packages installed are stored
   config/
      db.js                // Database connection and configuration
      credentials.js       // Passwords/API keys for external services used by your app
      config.js            // Environment variables
   models/                 // For mongoose schemas
      books.js
      things.js
   routes/                 // All routes for different entities in different files
      books.js
      things.js
   views/
      index.pug
      404.pug
        ...
   public/                 // All static files
      images/
      css/
      javascript/
   app.js
   routes.js               // Require all routes in this and then require this file in
   app.js
   package.json
```

This is pattern is commonly known as MVC, model-view-controller. Simply because our database model, the UI of the application and the controllers (in our case, routes) are written and stored in separate files. This design pattern makes any web application easy to scale and helps make the code more maintainable.
