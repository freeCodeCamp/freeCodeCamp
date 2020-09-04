---
id: 5eb3e497b8d6d7f63c5517ea
title: Search a list of records
challengeType: 5
forumTopicId: 385315
---

## Description

<section id='description'>

A record consists of attributes that describe an entity. Each attribute has a name and a value. For example, a person can have an attribute `age` with a value of 25. An important operation on a list of records is to find a record with a particular attribute value.

</section>

## Instructions

<section id='instructions'>

Write a function that takes a string as a parameter. The function should return the index of the item in `list` for which the value of the `name` attribute matches the given string.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>searchCity</code> should be a function.
    testString: assert(typeof searchCity === 'function');
  - text: <code>searchCity("Dar Es Salaam")</code> should return a number.
    testString: assert(typeof searchCity("Dar Es Salaam") === 'number');
  - text: <code>searchCity("Dar Es Salaam")</code> should return <code>6</code>.
    testString: assert.equal(searchCity("Dar Es Salaam"), 6);
  - text: <code>searchCity("Casablanca")</code> should return <code>9</code>.
    testString: assert.equal(searchCity("Casablanca"), 9);
  - text: <code>searchCity("Cairo")</code> should return <code>1</code>.
    testString: assert.equal(searchCity("Cairo"), 1);
  - text: <code>searchCity("Mogadishu")</code> should return <code>4</code>.
    testString: assert.equal(searchCity("Mogadishu"), 4);
  - text: <code>searchCity("Lagos")</code> should return <code>0</code>.
    testString: assert.equal(searchCity("Lagos"), 0);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function searchCity(name) {

}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

</div>
</section>

## Solution

<section id='solution'>

```js
function searchCity(name) {
  return list.findIndex(item => item.name === name);
}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

</section>
