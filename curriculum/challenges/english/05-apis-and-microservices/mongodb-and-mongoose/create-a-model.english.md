---
id: 587d7fb6367417b2b2512c07
title: Create a Model
challengeType: 2
isHidden: false
forumTopicId: 301535
---

## Description
<section id='description'>
<b>C</b>RUD Part I - CREATE

First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection.
Schemas are building block for Models. They can be nested to create complex models, but in this case we’ll keep things simple.
A model allows you to create instances of your objects, called documents.

Repl.it is a real server, and in real servers the interactions with the db happen in handler functions. These function are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The <code>done()</code> function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating or deleting. It’s following the Node convention and should be called as <code>done(null, data)</code> on success, or <code>done(err)</code> on error.
Warning - When interacting with remote services, errors may occur!

```js
/* Example */

var someFunc = function(done) {
  //... do something (risky) ...
  if(error) return done(error);
  done(null, result);
};
```

</section>

## Instructions
<section id='instructions'>
Create a person having this prototype :
<blockquote>
- Person Prototype -<br>
--------------------<br>
name : string [required]<br>
age :  number<br>
favoriteFoods : array of strings (*)
</blockquote>

Use the mongoose basic schema types. If you want you can also add
more fields, use simple validators like required or unique,
and set default values. See the <a href='http://mongoosejs.com/docs/guide.html'>mongoose docs</a>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Creating an instance from a mongoose schema should succeed
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

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
