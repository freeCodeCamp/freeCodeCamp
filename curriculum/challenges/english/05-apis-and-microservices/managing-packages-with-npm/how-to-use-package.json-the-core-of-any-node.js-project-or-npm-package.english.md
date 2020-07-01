---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
challengeType: 2
isHidden: false
forumTopicId: 301528
---

## Description
<section id='description'>
The <code>package.json</code> file is the center of any Node.js project or npm package. It stores information about your project, similar to how the &lt;head&gt; section of an HTML document describes the content of a webpage. It consists of a single JSON object where information is stored in key-value pairs. There are only two required fields; "name" and "version", but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.
If you look at the file tree of your project, you will find the package.json file on the top level of the tree. This is the file that you will be improving in the next couple of challenges.
One of the most common pieces of information in this file is the <code>author</code> field. It specifies who created the project, and can consist of a string or an object with contact or other details. An object is recommended for bigger projects, but a simple string like the following example will do for this project.

```json
"author": "Jane Doe",
```

</section>

## Instructions
<section id='instructions'>
Add your name as the <code>author</code> of the project in the package.json file.
<strong>Note:</strong> Remember that you’re writing JSON, so all field names must use double-quotes (") and be separated with a comma (,).
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
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
