---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
isRequired: true
challengeType: 5
forumTopicId: 16011
localeTitle: Все верно
---

## Description
<section id='description'>
Проверьте, является ли предикат (второй аргумент) <dfn>правдивым</dfn> для всех элементов коллекции (первый аргумент). Другими словами, вам предоставляется массив объектов. Предикат <code>pre</code> будет свойством объекта, и вам нужно вернуть <code>true</code> если его значение является <code>truthy</code> . В противном случае верните <code>false</code> . В JavaScript <code>truthy</code> значениями являются значения, которые переводятся в <code>true</code> при оценке в булевом контексте. Помните, что вы можете получить доступ к свойствам объекта с помощью либо точечной нотации, либо обозначения <code>[]</code> . Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return true.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true);'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")</code> should return false.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false);'
  - text: '<code>truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")</code> should return false.'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false);'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"), false);'
  - text: '<code>truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")</code> should return true'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"), true);'
  - text: '<code>truthCheck([{"single": "yes"}], "single")</code> should return true'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true);'
  - text: '<code>truthCheck([{"single": ""}, {"single": "double"}], "single")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false);'
  - text: '<code>truthCheck([{"single": "double"}, {"single": undefined}], "single")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false);'
  - text: '<code>truthCheck([{"single": "double"}, {"single": NaN}], "single")</code> should return false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function truthCheck(collection, pre) {
  // Does everyone have one of these?
  return collection.every(function(e) { return e[pre]; });
}
```

</section>
