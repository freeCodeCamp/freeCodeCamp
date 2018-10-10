---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
videoUrl: ''
localeTitle: Генерировать массив всех ключей объекта с помощью Object.keys ()
---

## Description
<section id="description"> Мы также можем сгенерировать массив, содержащий все ключи, хранящиеся в объекте, с использованием <code>Object.keys()</code> и передачи объекта в качестве аргумента. Это вернет массив со строками, представляющими каждое свойство объекта. Опять же, не будет никакого конкретного порядка для записей в массиве. </section>

## Instructions
<section id="instructions"> Завершите запись функции <code>getArrayOfUsers</code> чтобы она возвращала массив, содержащий все свойства объекта, который он получает в качестве аргумента. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Объект <code>users</code> содержит только ключи <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> и <code>Ryan</code>'
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: 'Функция <code>getArrayOfUsers</code> возвращает массив, содержащий все ключи в объекте <code>users</code>'
    testString: 'assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf("Alan") !== -1 && R.indexOf("Jeff") !== -1 && R.indexOf("Sarah") !== -1 && R.indexOf("Ryan") !== -1 && R.indexOf("Sam") !== -1 && R.indexOf("Lewis") !== -1); })() === true, "The <code>getArrayOfUsers</code> function returns an array which contains all the keys in the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  // change code above this line
}

console.log(getArrayOfUsers(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
