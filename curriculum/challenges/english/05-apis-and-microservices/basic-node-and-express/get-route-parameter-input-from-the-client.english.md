---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
challengeType: 2
isHidden: false
forumTopicId: 301513
---

## Description
<section id='description'>
When building an API, we have to allow users to communicate to us what they want to get from our service. For example, if the client is requesting information about a user stored in the database, they need a way to let us know which user they're interested in. One possible way to achieve this result is by using route parameters. Route parameters are named segments of the URL, delimited by slashes (/). Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the <code>req.params</code> object.
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>
</section>

## Instructions
<section id='instructions'>
Build an echo server, mounted at the route <code>GET /:word/echo</code>. Respond with a JSON object, taking the structure <code>{echo: word}</code>. You can find the word to be repeated at <code>req.params.word</code>. You can test your route from your browser's address bar, visiting some matching routes, e.g. <code>your-app-rootpath/freecodecamp/echo</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Test 1 : Your echo server should repeat words correctly'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Test 2 : Your echo server should repeat words correctly'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
