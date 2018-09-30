---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
challengeType: 2
---

## Description
<section id='description'>
During the development process, it is important to be able to check what’s going on in your code. Node is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. On your local machine, you would see the console output in a terminal. On Glitch you can open the logs in the lower part of the screen. You can toggle the log panel with the button ‘Logs’ (top-left, under the app name).
To get started, just print the classic "Hello World" in the console. We recommend to keep the log panel open while working at these challenges. Reading the logs you can be aware of the nature of the errors that may occur.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>"Hello World"</code> should be in the console
  testString: 'getUserInput => $.get(getUserInput("url") + "/_api/hello-console").then(data => { assert.isTrue(data.passed, ""Hello World" is not in the server console"); }, xhr => { throw new Error(xhr.responseText); })'

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
