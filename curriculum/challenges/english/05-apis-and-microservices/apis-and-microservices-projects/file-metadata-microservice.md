---
id: bd7158d8c443edefaeb5bd0f
title: File Metadata Microservice
challengeType: 4
forumTopicId: 301506
---

## Description

<section id='description'>
Build a full stack JavaScript app that is functionally similar to this: <a href='https://file-metadata-microservice.freecodecamp.rocks/' target='_blank'>https://file-metadata-microservice.freecodecamp.rocks/</a>. Working on this project will involve you writing your code using one of the following methods:

- Clone <a href='https://github.com/freeCodeCamp/boilerplate-project-filemetadata/'>this GitHub repo</a> and complete your project locally.
- Use <a href='https://repl.it/github/freeCodeCamp/boilerplate-project-filemetadata' target='_blank'>our repl.it starter project</a> to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the `Solution Link` field. Optionally, also submit a link to your projects source code in the `GitHub Link` field.
</section>

## Instructions

<section id='instructions'>

**HINT:** You can use the `multer` npm package to handle file uploading.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should provide your own project, not the example URL.
    testString: |
      getUserInput => {
        assert(!/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(getUserInput('url')));
      }
  - text: You can submit a form that includes a file upload.
    testString: "async getUserInput => {
      const site = await fetch(getUserInput('url'));
      const data = await site.text();
      const doc = new DOMParser().parseFromString(data, 'text/html');
      assert(doc.querySelector('input[type=\"file\"]'));
    }"
  - text: The form file input field has the `name` attribute set to `upfile`.
    testString: "async getUserInput => {
      const site = await fetch(getUserInput('url'));
      const data = await site.text();
      const doc = new DOMParser().parseFromString(data, 'text/html');
      assert(doc.querySelector('input[name=\"upfile\"]'));
    }"
  - text: When you submit a file, you receive the file `name`, `type`, and `size` in bytes within the JSON response.
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
