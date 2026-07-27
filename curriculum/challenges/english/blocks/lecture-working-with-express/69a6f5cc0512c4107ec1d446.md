---
id: 69a6f5cc0512c4107ec1d446
title: What is Express.js?
challengeType: 19
dashedName: what-is-express-js
---

# --description--

Express.js or Express for short, is a minimal and flexible web framework built **on top** of Node.js. It simplifies the process of building web servers and APIs.

Instead of writing tons of boilerplate code with Node’s native `http` module, Express lets you create robust web applications with just a few lines.

You can think of it as the fast, unopinionated layer that makes Node.js easier and more powerful.

Here are three key reasons developers love Express:

1. **Minimal and fast** – Express provides only the essentials, giving you full control while letting you add features as needed through middleware and plugins.

2. **Massive ecosystem** – It has a huge collection of middleware and plugins for logging, authentication, security, sessions, and more.

3. **Great for APIs** – Its simple routing and request-handling model makes Express especially well suited for building RESTful APIs.

With Express, you can create:

* Web apps

* RESTful APIs

* Single Page Application (SPA) backends

* Middleware-heavy services

* Anything server-side with HTTP


## How To Install Express

First, make sure you have Node.js and npm installed. Here is how to check if node and npm are installed:

```bash
node -v
npm -v
```

If you see a version number, that means it is installed. If not, you will need to install them. You can find installation instructions in an earlier lesson, or on the official Node.js website.

Next, in your terminal, write the following commands:

```bash
mkdir my-app
cd my-app
npm init -y
npm install express
```

You'll learn more about middleware and plugins in future lessons, but in short, middleware is code that runs between receiving a request and sending a response. It's commonly used for error handling, input validation, modifying data in the request or response, and more. You can chain middleware together to build flexible and reusable logic to handle requests.

Plugins are typically external, third-party Node.js modules that extend the functionality of Express. You can install them separately with npm, and most are implemented as middleware that can be used in your app with just a little setup. Instead of writing common features from scratch, you can use a plugin to handle things like logging, authentication, or security best practices.

Express is a popular framework for server-side development in Node.js. It gives you the building blocks to quickly spin up a server, handle routes, manage middleware, and build APIs—all with clean and readable code.

# --questions--

## --text--

What is Express.js built on?

## --answers--

React

### --feedback--

Think about what JavaScript runtime Express runs on.

---

Python

### --feedback--

Think about what JavaScript runtime Express runs on.

---

Node.js

---

Angular

### --feedback--

Think about what JavaScript runtime Express runs on.

## --video-solution--

3

## --text--

Which command installs Express?

## --answers--

`npm start express`

### --feedback--

It's the standard npm install command.

---

`npm build express`

### --feedback--

It's the standard npm install command.

---

`npm install express`

---

`install express`

### --feedback--

It's the standard npm install command.

## --video-solution--

3

## --text--

Why is Express a popular framework?

## --answers--

To quickly spin up a server.

### --feedback--

Express.js does a lot of heavy lifting.

---

To handle routes.

### --feedback--

Express.js does a lot of heavy lifting.

---

To manage middleware.

### --feedback--

Express.js does a lot of heavy lifting.

---

All of the above.

## --video-solution--

4
