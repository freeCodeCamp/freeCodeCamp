---
id: bd7158d8c443edefaeb5bd0f
title: File Metadata Microservice
challengeType: 4
forumTopicId: 301506
---

## Description

<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://file-metadata-microservice.freecodecamp.rocks/' target='_blank'>https://file-metadata-microservice.freecodecamp.rocks/</a>.
Working on this project will involve you writing your code on Repl.it on our starter project. After completing this project you can copy your public Repl.it URL (to the homepage of your app) into this screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.
Start this project on Repl.it using <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-filemetadata' target='_blank'>this link</a> or clone <a href='https://github.com/freeCodeCamp/boilerplate-project-filemetadata/'>this repository</a> on GitHub! If you use Repl.it, remember to save the link to your project somewhere safe!
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: I can provide my own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: I can submit a form that includes a file upload.
    testString: "async getUserInput => {
      const site = await fetch(getUserInput('url'));
      const data = await site.text();
      const doc = new DOMParser().parseFromString(data, 'text/html');
      assert(doc.querySelector('input[type=\"file\"]'));
    }"
  - text: The form file input field has the <code>name</code> attribute set to <code>upfile</code>.
    testString: "async getUserInput => {
      const site = await fetch(getUserInput('url'));
      const data = await site.text();
      const doc = new DOMParser().parseFromString(data, 'text/html');
      assert(doc.querySelector('input[name=\"upfile\"]'));
    }"
  - text: When I submit something, I will receive the file <code>name</code>, <code>type</code>, and <code>size</code> in bytes within the JSON response.
    testString: "async getUserInput => {
      const formData = new FormData();
      const fileData = await fetch('https://cdn.freecodecamp.org/weather-icons/01d.png');
      const file = await fileData.blob();
      formData.append('upfile', file, 'icon');
      const data = await fetch(getUserInput('url') + '/api/fileanalyse', {
        method: 'POST', body: formData
      });
      const parsed = await data.json();
      assert.property(parsed, 'size');
      assert.equal(parsed.name, 'icon');
      assert.equal(parsed.type, 'image/png');
    }"

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
