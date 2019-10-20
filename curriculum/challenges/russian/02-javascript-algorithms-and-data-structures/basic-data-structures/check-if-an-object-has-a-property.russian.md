---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
forumTopicId: 301155
localeTitle: Проверьте, имеет ли объект свойство
---

## Description
<section id='description'>
Теперь мы можем добавлять, изменять и удалять ключи из объектов. Но что, если мы просто хотим узнать, обладает ли объект конкретным свойством? JavaScript предоставляет нам два разных способа сделать это. Один использует <code>hasOwnProperty()</code> метод , а другой использует <code>in</code> ключевом слове. Если у нас есть объектные <code>users</code> с собственностью <code>Alan</code> , мы можем проверить его наличие одним из следующих способов: <blockquote> users.hasOwnProperty ( &#39;Алан&#39;); <br> «Алан» у пользователей; <br> // оба возвращают true </blockquote>
</section>

## Instructions
<section id='instructions'>
Мы создали объект, <code>users</code> , с некоторыми пользователями в нем, а функция <code>isEveryoneHere</code> , которую мы передаем объекту <code>users</code> в качестве аргумента. Завершите запись этой функции, чтобы она возвращала значение <code>true</code> только если объект <code>users</code> содержит все четыре имени: <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> и <code>Ryan</code> , как ключи, и <code>false</code> противном случае.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>users</code> object should only contain the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>
    testString: assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4);
  - text: The function <code>isEveryoneHere</code> should return <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object
    testString: assert(isEveryoneHere(users) === true);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Alan</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Alan; return isEveryoneHere(users) })() === false);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Jeff</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Jeff; return isEveryoneHere(users) })() === false);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Sarah</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Sarah; return isEveryoneHere(users) })() === false);
  - text: The function <code>isEveryoneHere</code> should return <code>false</code> if <code>Ryan</code> is not a property on the <code>users</code> object
    testString: assert((function() { delete users.Ryan; return isEveryoneHere(users) })() === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));

```

</div>

</section>

## Solution
<section id='solution'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(i => obj.hasOwnProperty(i));
}

console.log(isEveryoneHere(users));
```

</section>
