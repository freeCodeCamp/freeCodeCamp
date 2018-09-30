---
id: 587d7fb8367417b2b2512c0f
title: Perform New Updates on a Document Using model.findOneAndUpdate()
challengeType: 2
---

## Description
<section id='description'>
Recent versions of mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the Classic method is still useful in many situations. findByIdAndUpdate() can be used when searching by Id.
Find a person by Name and set her age to 20. Use the function parameter personName as search key.
Hint: We want you to return the updated document. To do that you need to pass the options document { new: true } as the 3rd argument to findOneAndUpdate(). By default these methods return the unmodified object.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: findOneAndUpdate an item should succeed
  testString: 'getUserInput => $.post(getUserInput("url") + "/_api/find-one-update", {name:"Dorian Gray", age: 35, favoriteFoods:["unknown"]}).then(data => { assert.equal(data.name, "Dorian Gray", "item.name is not what expected"); assert.equal(data.age, 20, "item.age is not what expected"); assert.deepEqual(data.favoriteFoods, ["unknown"], "item.favoriteFoods is not what expected"); assert.equal(data.__v, 0, "findOneAndUpdate does not increment version by design !!!"); }, xhr => { throw new Error(xhr.responseText); })'

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
