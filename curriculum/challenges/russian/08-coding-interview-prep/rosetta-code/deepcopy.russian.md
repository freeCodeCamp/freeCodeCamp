---
title: Deepcopy
id: 596a8888ab7c01048de257d5
challengeType: 5
videoUrl: ''
localeTitle: DeepCopy
---

## Description
<section id="description"> Задача: <p> Напишите функцию, которая возвращает глубокую копию данного объекта. </p><p> Копия не должна быть тем же самым объектом, который был дан. </p><p> Эта задача не будет проверяться: </p> Объекты со свойствами, которые являются функциями. Объекты Date или объект со свойствами, которые являются объектами Date. RegEx или объект со свойствами, которые являются объектами RegEx. Прототипирование копий </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>deepcopy</code> должна быть функцией.
    testString: 'assert(typeof deepcopy === "function", "<code>deepcopy</code> should be a function.");'
  - text: '<code>deepcopy({test: &quot;test&quot;})</code> должен возвращать объект.'
    testString: 'assert(typeof deepcopy(obj1) === "object", "<code>deepcopy({test: "test"})</code> should return an object.");'
  - text: 'Не следует возвращать тот же объект, который был предоставлен.'
    testString: 'assert(deepcopy(obj2) != obj2, "Should not return the same object that was provided.");'
  - text: 'Когда передан объект, содержащий массив, должен возвращать глубокую копию объекта.'
    testString: 'assert.deepEqual(deepcopy(obj2), obj2, "When passed an object containing an array, should return a deep copy of the object.");'
  - text: 'При передаче объекта, содержащего другой объект, следует вернуть глубокую копию объекта.'
    testString: 'assert.deepEqual(deepcopy(obj3), obj3, "When passed an object containing another object, should return a deep copy of the object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function deepcopy (obj) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
