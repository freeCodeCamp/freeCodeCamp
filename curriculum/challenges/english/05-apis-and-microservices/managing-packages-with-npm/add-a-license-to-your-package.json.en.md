---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
challengeType: 2
---

## Description
<section id='description'>
The license-field is where you inform users of your project what they are allowed to do with it.
Some common licenses for open source projects include MIT and BSD. http://choosealicense.com is a great resource if you want to learn more about what license could fit your project.
License information is not required. Copyright laws in most countries will give you ownership of what you create by default. However, it’s always a good practice to explicitly state what users can and can’t do.
Example
<code>"license": "MIT",</code>
Instructions
Fill the license-field in the package.json of your Glitch project as you find suitable.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "license" key
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
