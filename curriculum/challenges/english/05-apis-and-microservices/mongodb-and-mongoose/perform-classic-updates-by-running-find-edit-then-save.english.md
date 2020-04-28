---
id: 587d7fb8367417b2b2512c0e
title: 'Perform Classic Updates by Running Find, Edit, then Save'
challengeType: 2
forumTopicId: 301541
---

## Description
<section id='description'>

In the good old days this was what you needed to do if you wanted to edit a document and be able to use it somehow e.g. sending it back in a server response. Mongoose has a dedicated updating method : <code>Model.update()</code>. It is bound to the low-level mongo driver. It can bulk edit many documents matching certain criteria, but it doesn’t send back the updated document, only a ‘status’ message. Furthermore it makes model validations difficult, because it just directly calls the mongo driver.
</section>

## Instructions
<section id='instructions'>

Find a person by <code>_id</code> ( use any of the above methods ) with the parameter <code>personId</code> as search key. Add &quot;hamburger&quot; to the list of the person&apos;s <code>favoriteFoods</code> (you can use <code>Array.push()</code>). Then - inside the find callback - <code>save()</code> the updated <code>Person</code>.

<strong>Note:</strong> This may be tricky, if in your Schema, you declared <code>favoriteFoods</code> as an Array, without specifying the type (i.e. <code>[String]</code>). In that case, <code>favoriteFoods</code> defaults to Mixed type, and you have to manually mark it as edited using <code>document.markModified('edited-field')</code>. See [Mongoose documentation](https://mongoosejs.com/docs/schematypes.html#Mixed)

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Find-edit-update an item should succeed
    testString: "getUserInput => $.post(getUserInput('url') + '/_api/find-edit-save', {name:'Poldo', age: 40, favoriteFoods:['spaghetti']}).then(data => { assert.equal(data.name, 'Poldo', 'item.name is not what is expected'); assert.equal(data.age, 40, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['spaghetti', 'hamburger'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 1, 'The item should be previously edited'); }, xhr => { throw new Error(xhr.responseText); })"
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
