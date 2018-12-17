---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
challengeType: 2
---

## Description
<section id='description'>
The file package.json is the center of any Node.js project or npm package. It stores information about your project just like the &lt;head&gt;-section in a HTML document describes the content of a webpage. The package.json consists of a single JSON-object where information is stored in "key": value-pairs. There are only two required fields in a minimal package.json - name and version - but it’s a good practice to provide additional information about your project that could be useful to future users or maintainers.
The author-field
If you go to the Glitch project that you set up previously and look at on the left side of your screen, you’ll find the file tree where you can see an overview of the various files in your project. Under the file tree’s back-end section, you’ll find package.json - the file that we’ll be improving in the next couple of challenges.
One of the most common pieces of information in this file is the author-field that specifies who’s the creator of a project. It can either be a string or an object with contact details. The object is recommended for bigger projects but in our case, a simple string like the following example will do.
<code>"author": "Jane Doe",</code>
Instructions
Add your name to the author-field in the package.json of your Glitch project.
Remember that you’re writing JSON.
All field-names must use double-quotes ("), e.g. "author"
All fields must be separated with a comma (,)
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "author" key
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.author, ''"author" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
