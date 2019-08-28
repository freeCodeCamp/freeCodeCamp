---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
forumTopicId: 301164
localeTitle: Изменение объекта, вложенного в объект
---

## Description
<section id='description'>
Теперь давайте посмотрим на несколько более сложный объект. Свойства объекта могут быть вложены в произвольную глубину, а их значениями могут быть любые типы данных, поддерживаемые JavaScript, включая массивы и даже другие объекты. Рассмотрим следующее: <blockquote> let inestedObject = { <br> id: 28802695164, <br> дата: «31 декабря 2016 года», <br> данные: { <br> totalUsers: 99, <br> онлайн: 80, <br> onlineStatus: { <br> активен: 67, <br> 13 гостей <br> } <br> } <br> }; </blockquote> <code>nestedObject</code> имеет три уникальных ключа: <code>id</code> , значение которого - число, <code>date</code> , значение которого является строкой, и <code>data</code> , значение которых является объектом, у которого есть еще один объект, вложенный в него. Хотя структуры могут быстро стать сложными, мы все равно можем использовать одни и те же обозначения для доступа к необходимой нам информации.
</section>

## Instructions
<section id='instructions'>
Здесь мы определили объект, <code>userActivity</code> , который включает в себя другой объект, вложенный в него. Вы можете изменять свойства этого вложенного объекта так же, как вы изменили свойства в последнем вызове. Установите значение <code>online</code> ключа на <code>45</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>userActivity</code> has <code>id</code>, <code>date</code> and <code>data</code> properties
    testString: assert('id' in userActivity && 'date' in userActivity && 'data' in userActivity);
  - text: <code>userActivity</code> has a <code>data</code> key set to an object with keys <code>totalUsers</code> and <code>online</code>
    testString: assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
  - text: The <code>online</code> property nested in the <code>data</code> key of <code>userActivity</code> should be set to <code>45</code>
    testString: assert(userActivity.data.online === 45);
  - text: The <code>online</code> property is set using dot or bracket notation
    testString: 'assert.strictEqual(code.search(/online: 45/), -1);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```

</section>
