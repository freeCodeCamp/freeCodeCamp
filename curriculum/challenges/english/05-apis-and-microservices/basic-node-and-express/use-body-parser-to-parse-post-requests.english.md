---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
challengeType: 2
isHidden: false
forumTopicId: 301520
---

## Description
<section id='description'>
Besides GET, there is another common HTTP verb, it is POST. POST is the default method used to send client data with HTML forms. In REST convention, POST is used to send data to create new items in the database (a new user, or a new blog post). You don’t have a database in this project, but you are going to learn how to handle POST requests anyway.
In these kind of requests, the data doesn’t appear in the URL, it is hidden in the request body. The body is a part of the HTTP request, also called the payload. Even though the data is not visible in the URL, this does not mean that it is private. To see why, look at the raw content of an HTTP POST request:

```http
POST /path/subpath HTTP/1.0
From: john@example.com
User-Agent: someBrowser/1.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 20
name=John+Doe&age=25
```

As you can see, the body is encoded like the query string. This is the default format used by HTML forms. With Ajax, you can also use JSON to handle data having a more complex structure. There is also another type of encoding: multipart/form-data. This one is used to upload binary files.
In this exercise, you will use a urlencoded body. To parse the data coming from POST requests, you have to install the <code>body-parser</code> package. This package allows you to use a series of middleware, which can decode data in different formats.
</section>

## Instructions
<section id='instructions'>
Install the <code>body-parser</code> module in your <code>package.json</code>. Then, <code>require</code> it at the top of the file. Store it in a variable named <code>bodyParser</code>. The middleware to handle urlencoded data is returned by <code>bodyParser.urlencoded({extended: false})</code>. Pass to <code>app.use()</code> the function returned by the previous method call. As usual, the middleware must be mounted before all the routes which need it.
<strong>Note:</strong> <code>extended=false</code> is a configuration option that tells the parser to use the classic encoding. When using it, values can be only strings or arrays. The extended version allows more data flexibility, but it is outmatched by JSON.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The 'body-parser' middleware should be mounted
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/add-body-parser'').then(data => { assert.isAbove(data.mountedAt, 0, ''"body-parser" is not mounted correctly'') }, xhr => { throw new Error(xhr.responseText); })'

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
