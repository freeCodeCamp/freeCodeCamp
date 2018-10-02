---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
challengeType: 2
---

## Description
<section id='description'>
Another common way to get input from the client is by encoding the data after the route path, using a query string. The query string is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&). Express can parse the data from the query string, and populate the object <code>req.query</code>. Some characters cannot be in URLs, they have to be encoded in a <a href='https://en.wikipedia.org/wiki/Percent-encoding' target='_blank'>different format</a> before you can send them. If you use the API from JavaScript, you can use specific methods to encode/decode these characters.
<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>
Build an API endpoint, mounted at <code>GET /name</code>. Respond with a JSON document, taking the structure <code>{ name: 'firstname lastname'}</code>. The first and last name parameters should be encoded in a query string e.g. <code>?first=firstname&last=lastname</code>.
TIP: In the following exercise we are going to receive data from a POST request, at the same <code>/name</code> route path. If you want you can use the method <code>app.route(path).get(handler).post(handler)</code>. This syntax allows you to chain different verb handlers on the same path route. You can save a bit of typing, and have cleaner code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: 'Test 1 : Your API endpoint should respond with the correct name'
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?first=Mick&last=Jagger'').then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
- text: 'Test 2 : Your APi endpoint should respond with the correct name'
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?last=Richards&first=Keith'').then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
