---
id: 587d7fb9367417b2b2512c12
title: Chain Search Query Helpers to Narrow Search Results
challengeType: 2
---

## Description
<section id='description'>
If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec(). Pass your callback to this last method. There are many query helpers, here we’ll use the most ‘famous’ ones.
Find people who like "burrito". Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: Chaining query helpers should succeed
  testString: 'getUserInput => $.ajax({url: getUserInput("url") + "/_api/query-tools", type: "POST", contentType:"application/json", data: JSON.stringify([{name: "Pablo", age: 26, favoriteFoods: ["burrito", "hot-dog"]}, {name: "Bob", age: 23, favoriteFoods: ["pizza", "nachos"]}, {name: "Ashley", age: 32, favoriteFoods: ["steak", "burrito"]}, {name: "Mario", age: 51, favoriteFoods: ["burrito", "prosciutto"]} ]) }).then(data => { assert.isArray(data, "the response should be an Array"); assert.equal(data.length, 2, "the data array length is not what expected"); assert.notProperty(data[0], "age", "The returned first item has too many properties"); assert.equal(data[0].name, "Ashley", "The returned first item name is not what expected"); assert.notProperty(data[1], "age", "The returned second item has too many properties"); assert.equal(data[1].name, "Mario", "The returned second item name is not what expected");}, xhr => { throw new Error(xhr.responseText); })'

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
