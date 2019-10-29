---
title: Deepcopy
id: 596a8888ab7c01048de257d5
challengeType: 5
forumTopicId: 302247
localeTitle: DeepCopy
---

## Description
<section id='description'>
Задача: <p> Напишите функцию, которая возвращает глубокую копию данного объекта. </p><p> Копия не должна быть тем же самым объектом, который был дан. </p><p> Эта задача не будет проверяться: </p> Объекты со свойствами, которые являются функциями. Объекты Date или объект со свойствами, которые являются объектами Date. RegEx или объект со свойствами, которые являются объектами RegEx. Прототипирование копий
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>deepcopy</code> should be a function.
    testString: assert(typeof deepcopy === 'function');
  - text: '<code>deepcopy({test: "test"})</code> should return an object.'
    testString: assert(typeof deepcopy(obj1) === 'object');
  - text: Should not return the same object that was provided.
    testString: assert(deepcopy(obj2) != obj2);
  - text: When passed an object containing an array, should return a deep copy of the object.
    testString: assert.deepEqual(deepcopy(obj2), obj2);
  - text: When passed an object containing another object, should return a deep copy of the object.
    testString: assert.deepEqual(deepcopy(obj3), obj3);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function deepcopy(obj) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};

```

</div>

</section>

## Solution
<section id='solution'>

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

</section>
