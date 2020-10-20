---
id: 587d7fb6367417b2b2512c06
title: Install and Set Up Mongoose
challengeType: 2
forumTopicId: 301540
---

## Description

<section id='description'>

In this challenge, you will import the required projects, and connect to your Atlas database.

</section>

## Instructions

<section id='instructions'>

Add `mongodb` and `mongoose` to the project’s `package.json`. Then, require mongoose as `mongoose` in `myApp.js`. Store your MongoDB Atlas database URI in a private `.env` file as `MONGO_URI`. Surround the the URI with single or double quotes, and make sure no space exists between both the variable and the `=`, and the value and `=`. Connect to the database using the following syntax:

```js
mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
```

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: '"mongodb" dependency should be in package.json'
    testString: |
      getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'mongodb');
        }, xhr => { throw new Error(xhr.responseText); })
  - text: '"mongoose" dependency should be in package.json'
    testString: |
      getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'mongoose');
        }, xhr => { throw new Error(xhr.responseText); })
  - text: '"mongoose" should be connected to a database'
    testString: |
      getUserInput => $.get(getUserInput('url') + '/_api/is-mongoose-ok').then(data => {
        assert.isTrue(data.isMongooseOk, 'mongoose is not connected')
        }, xhr => { throw new Error(xhr.responseText); })
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
