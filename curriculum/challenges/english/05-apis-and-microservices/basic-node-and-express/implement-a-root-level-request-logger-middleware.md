---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
challengeType: 2
forumTopicId: 301514
---

## Description
<section id='description'>
Earlier, you were introduced to the <code>express.static()</code> middleware function. Now it’s time to see what middleware is, in more detail. Middleware functions are functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle. These functions execute some code that can have side effects on the app, and usually add information to the request or response objects. They can also end the cycle by sending a response when some condition is met. If they don’t send the response when they are done, they start the execution of the next function in the stack. This triggers calling the 3rd argument, <code>next()</code>.
Look at the following example:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

Let’s suppose you mounted this function on a route. When a request matches the route, it displays the string “I’m a middleware…”, then it executes the next function in the stack. 
In this exercise, you are going to build root-level middleware. As you have seen in challenge 4, to mount a middleware function at root level, you can use the <code>app.use(&lt;mware-function&gt;)</code> method. In this case, the function will be executed for all the requests, but you can also set more specific conditions. For example, if you want a function to be executed only for POST requests, you could use <code>app.post(&lt;mware-function&gt;)</code>. Analogous methods exist for all the HTTP verbs (GET, DELETE, PUT, …).
</section>

## Instructions
<section id='instructions'>
Build a simple logger. For every request, it should log to the console a string taking the following format: <code>method path - ip</code>. An example would look like this: <code>GET /json - ::ffff:127.0.0.1</code>. Note that there is a space between <code>method</code> and <code>path</code> and that the dash separating <code>path</code> and <code>ip</code> is surrounded by a space on both sides. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using <code>req.method</code>, <code>req.path</code> and <code>req.ip</code>. Remember to call <code>next()</code> when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.
<strong>Note:</strong> Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Root level logger middleware should be active
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/root-middleware-logger'').then(data => { assert.isTrue(data.passed, ''root-level logger is not working as expected''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
