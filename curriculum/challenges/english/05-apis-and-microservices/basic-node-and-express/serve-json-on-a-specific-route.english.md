---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
challengeType: 2
isHidden: false
forumTopicId: 301517
---

## Description
<section id='description'>
While an HTML server serves (you guessed it!) HTML, an API serves data. A <dfn>REST</dfn> (REpresentational State Transfer) API allows data exchange in a simple way, without the need for clients to know any detail about the server. The client only needs to know where the resource is (the URL), and the action it wants to perform on it (the verb). The GET verb is used when you are fetching some information, without modifying anything. These days, the preferred data format for moving information around the web is JSON. Simply put, JSON is a convenient way to represent a JavaScript object as a string, so it can be easily transmitted.
Let's create a simple API by creating a route that responds with JSON at the path <code>/json</code>. You can do it as usual, with the <code>app.get()</code> method. Inside the route handler, use the method <code>res.json()</code>, passing in an object as an argument. This method closes the request-response loop, returning the data. Behind the scenes, it converts a valid JavaScript object into a string, then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back. A valid object has the usual structure <code>{key: data}</code>. <code>data</code> can be a number, a string, a nested object or an array. <code>data</code> can also be a variable or the result of a function call, in which case it will be evaluated before being converted into a string.
</section>

## Instructions
<section id='instructions'>
Serve the object <code>{"message": "Hello json"}</code> as a response, in JSON format, to GET requests to the <code>/json</code> route. Then point your browser to <code>your-app-url/json</code>, you should see the message on the screen.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The endpoint <code>/json</code> should serve the json object <code>{"message": "Hello json"}</code>'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
