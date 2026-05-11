---
id: 69a6f5e1264af50c407aecfe
title: How Do You Create a Basic Express App?
challengeType: 19
dashedName: how-do-you-create-a-basic-express-app
---

# --description--

In the previous lesson, you created a project folder and installed Express:

```bash
mkdir my-app
cd my-app
npm init -y
npm install express
```

As a reminder, these commands create a new project folder, `cd` into the project folder, initialize the project and create a basic `package.json` file, and install Express.

Next, open up a code editor, create a file named `index.js`, and write your first Express server:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

You can run your code with the following command in the terminal:

```bash
node index.js
```

Open your browser to [http://localhost:3000](http://localhost:3000) and you'll see the message **"Hello World!"**

That’s how fast it is to get started with Express! Now let’s walk through the code step-by-step.

In the first line of code, you are loading the Express library and assigning that to a variable called `express`:

```javascript
const express = require("express");
```

The `express` variable is a factory function. When you call it, it creates and returns a new Express application instance:

```javascript
const app = express();
```

`app` now has access to all the methods provided by Express, such as `.get()`, `.post()`, `.listen()`, and so on. This is your main server object.

The next line defines the `port` variable. A port is a network endpoint that your application listens on, and `3000` is a commonly used port for local development:

```javascript
const port = 3000;
```

Now, let’s take a look at the next part here:

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

This block of code defines a route and tells the server how to respond to requests. `app.get()` registers a handler for HTTP GET requests. A GET request is a commonly used HTTP method for retrieving data.

The `"/"` argument inside `app.get()` represents the route path. In this case, it points to the root URL of the application.

The `(req, res) => { ... }` part is a callback function that runs when a request matches this route. The `req` object contains information about the incoming request, and the `res` object is used to send a response back to the client.

Finally, `res.send("Hello World!")` sends a response to the client. In this example, the response is the plain text `"Hello World!"`.

Now, let’s take a look at the last piece of code here:

```javascript
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

The `app.listen()` method starts the Express application and tells Node to listen for incoming HTTP requests on the specified port, in this case, `3000`.

Once the server starts, the callback function executes and the message `Example app listening on port 3000` is logged to the console, confirming that the Express app has started successfully and is ready to receive requests.

# --questions--

## --text--
 
What does this Express route do?

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

## --answers--

It deletes the homepage.

### --feedback--

What happens when a user visits `/`?

---

It creates a new database.

### --feedback--

What happens when a user visits `/`?

---

It sends a response to the root URL.

---

It starts the server.

### --feedback--

What happens when a user visits `/`?

## --video-solution--

3

## --text--

What does `app.listen()` do?

```javascript
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## --answers--

It stops the app.

### --feedback--

Think about what must happen before you can visit [`http://localhost:3000`](http://localhost:3000) in a browser.

---

It sends a 404 code back to the client.

### --feedback--

Think about what must happen before you can visit [`http://localhost:3000`](http://localhost:3000) in a browser.

---

It defines the port for the app.

### --feedback--

Think about what must happen before you can visit [`http://localhost:3000`](http://localhost:3000) in a browser.

---

It starts the server and listens for incoming requests on a port.

## --video-solution--

4

## --text--

Which of these is a root URL?

## --answers--

`http://localhost:3000/posts`

### --feedback--

Recall that the root URL does not include any additional path segments.

---

`http://localhost:3000/posts?id=34`

### --feedback--

Recall that the root URL does not include any additional path segments.

---

`http://localhost:3000`

---

`http://localhost:3000/posts+comments`

### --feedback--

Recall that the root URL does not include any additional path segments.

## --video-solution--

3
