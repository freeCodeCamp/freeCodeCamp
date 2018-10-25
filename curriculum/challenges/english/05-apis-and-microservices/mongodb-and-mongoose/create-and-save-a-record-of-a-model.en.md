---
id: 587d7fb6367417b2b2512c09
title: Create and Save a Record of a Model
challengeType: 2
---

## Description
<section id='description'>
Create a document instance using the Person constructor you build before. Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must be conformant to the ones in the Person Schema. Then call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern, all the following CRUD methods take a callback function like this as the last argument.
<code>/* Example */</code>
<code>// ...</code>
<code>person.save(function(err, data) {</code>
<code>//   ...do your stuff here...</code>
<code>});</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Creating and saving a db item should succeed
  testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/create-and-save-person'').then(data => { assert.isString(data.name, ''"item.name" should be a String''); assert.isNumber(data.age, ''28'', ''"item.age" should be a Number''); assert.isArray(data.favoriteFoods, ''"item.favoriteFoods" should be an Array''); assert.equal(data.__v, 0, ''The db item should be not previously edited''); }, xhr => { throw new Error(xhr.responseText); })'

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
