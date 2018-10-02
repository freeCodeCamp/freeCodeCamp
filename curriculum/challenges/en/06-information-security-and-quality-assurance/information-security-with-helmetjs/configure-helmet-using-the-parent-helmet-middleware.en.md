---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
---

## Description
<section id='description'>
As a reminder, this project is being built upon the following starter project on <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-infosec/'>Glitch</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a>.
app.use(helmet()) will automatically include all the middleware introduced above, except noCache(), and contentSecurityPolicy(), but these can be enabled if necessary. You can also disable or configure any other middleware individually, using a configuration object.
// Example
<code>app.use(helmet({</code>
<code>  frameguard: {         // configure</code>
<code>    action: 'deny'</code>
<code>  },</code>
<code>  contentSecurityPolicy: {    // enable and configure</code>
<code>   directives: {</code>
<code>     defaultSrc: ["self"],</code>
<code>     styleSrc: ['style.com'],</code>
<code>   }</code>
<code>  },</code>
<code> dnsPrefetchControl: false     // disable</code>
<code>}))</code>
We introduced each middleware separately for teaching purpose, and for ease of testing. Using the ‘parent’ helmet() middleware is easiest, and cleaner, for a real project.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: no tests - it's a descriptive challenge
  testString: assert(true)

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
