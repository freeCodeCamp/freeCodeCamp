---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
challengeType: 2
isHidden: false
forumTopicId: 301521
---

## Description
<section id='description'>
The <code>.env</code> file is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.
The environment variables are accessible from the app as <code>process.env.VAR_NAME</code>. The <code>process.env</code> object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The <code>.env</code> is a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. <code>VAR_NAME=value</code>. Usually, you will put each variable definition on a separate line.
</section>

## Instructions
<section id='instructions'>
Let's add an environment variable as a configuration option.
Store the variable <code>MESSAGE_STYLE=uppercase</code> in the <code>.env</code> file. Then tell the GET <code>/json</code> route handler that you created in the last challenge to transform the response object’s message to uppercase if <code>process.env.MESSAGE_STYLE</code> equals <code>uppercase</code>. The response object should become <code>{"message": "HELLO JSON"}</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The response of the endpoint <code>/json</code> should change according to the environment variable <code>MESSAGE_STYLE</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/use-env-vars'').then(data => { assert.isTrue(data.passed, ''The response of "/json" does not change according to MESSAGE_STYLE''); }, xhr => { throw new Error(xhr.responseText); })'

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
