---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
challengeType: 2
forumTopicId: 301515
---

## Description
<section id='description'>
During the development process, it is important to be able to check what’s going on in your code. Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see the console output in a terminal. On Glitch you can open the logs in the lower part of the screen. You can toggle the log panel with the button ‘Logs’ (lower-left, inside the tools menu).
We recommend to keep the log panel open while working at these challenges. By reading the logs, you can be aware of the nature of errors that may occur.
</section>

## Instructions
<section id='instructions'>

If you have not already done so, please read the instructions in [the introduction](/learn/apis-and-microservices/basic-node-and-express/) and start a new project on Glitch using [this link](https://glitch.com/edit/#!/remix/clone-from-repo?REPO_URL=https://github.com/freeCodeCamp/boilerplate-express/).
  
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
