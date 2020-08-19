---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
challengeType: 2
isHidden: false
forumTopicId: 301515
---

## Description
<section id='description'>
During the development process, it is important to be able to check what’s going on in your code. 

Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see console output in a terminal. On Repl.it, a terminal is open in the right pane by default.

We recommend to keep the terminal open while working at these challenges. By reading the output in the terminal, you can see any errors that may occur.
</section>

## Instructions
<section id='instructions'>

If you have not already done so, please read the instructions in [the introduction](/learn/apis-and-microservices/basic-node-and-express/) and start a new project on Repl.it using [this link](https://repl.it/github/freeCodeCamp/boilerplate-express).
  
Modify the <code>myApp.js</code> file to log "Hello World" to the console.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Hello World"</code> should be in the console
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/hello-console'').then(data => { assert.isTrue(data.passed, ''"Hello World" is not in the server console''); }, xhr => { throw new Error(xhr.responseText); })'

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
