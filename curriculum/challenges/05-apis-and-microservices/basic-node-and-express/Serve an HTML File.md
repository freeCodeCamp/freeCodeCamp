---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
challengeType: 2
---

## Description
<section id='description'>
We can respond with a file using the method <code>res.sendFile(path)</code>.
You can put it inside the <code>app.get('/', ...)</code> route handler. Behind the scenes this method will set the appropriate headers to instruct your browser on how to handle the file you want to send, according to its type. Then it will read and send the file. This method needs an absolute file path. We recommend you to use the Node global variable <code>__dirname</code> to calculate the path.
e.g. <code>absolutePath = __dirname + relativePath/file.ext</code>.
The file to send is <code>/views/index.html</code>. Try to ‘Show Live’ your app, you should see a big HTML heading (and a form that we will use later…), with no style applied.
Note: You can edit the solution of the previous challenge, or create a new one. If you create a new solution, keep in mind that Express evaluates the routes from top to bottom. It executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Your app should serve the file views/index.html
  testString: 'getUserInput => $.get(getUserInput("url")).then(data => { assert.match(data, /<h1>.*<\/h1>/, "Your app does not serve the expected HTML"); }, xhr => { throw new Error(xhr.responseText); })'

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
