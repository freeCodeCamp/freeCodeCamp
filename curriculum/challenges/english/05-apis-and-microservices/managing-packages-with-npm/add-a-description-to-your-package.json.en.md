---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
challengeType: 2
---

## Description
<section id='description'>
The next part of a good package.json is the description-field, where a short but informative description about your project belongs.
If you some day plan to publishing a package to npm, remember that this is the string that should sell your idea to the user when they decide whether to install your package or not. However, that’s not the only use case for the description: Since it’s a great way to summarize what a project does, it’s just as important for your normal Node.js-projects to help other developers, future maintainers or even your future self understand the project quickly.
Regardless of what you plan for your project, a description is definitely recommended. Let’s add something similar to this:
<code>"description": "A project that does something awesome",</code>
Instructions
Add a description to the package.json in your Glitch project.
Remember to use double-quotes for field-names (") and commas (,) to separate fields.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "description" key
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.description, ''"description" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
