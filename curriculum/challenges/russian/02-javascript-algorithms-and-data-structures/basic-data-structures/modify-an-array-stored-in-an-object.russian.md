---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
forumTopicId: 301163
localeTitle: Измените массив, хранящийся в объекте
---

## Description
<section id='description'>
Теперь вы видели все основные операции для объектов JavaScript. Вы можете добавлять, изменять и удалять пары ключ-значение, проверять наличие ключей и перебирать все ключи в объекте. По мере продолжения изучения JavaScript вы увидите еще более универсальные приложения объектов. Кроме того, дополнительные уроки Advanced Data Structures далее в учебной программе также охватывают объекты ES6 <dfn>Map</dfn> и <dfn>Set</dfn> , оба из которых похожи на обычные объекты, но предоставляют некоторые дополнительные функции. Теперь, когда вы изучили основы массивов и объектов, вы полностью готовы приступить к решению более сложных проблем с помощью JavaScript!
</section>

## Instructions
<section id='instructions'>
Взгляните на объект, который мы предоставили в редакторе кода. <code>user</code> объект содержит три ключа. Ключ <code>data</code> содержит пять ключей, один из которых содержит массив <code>friends</code> . Из этого вы можете видеть, как гибкие объекты являются структурами данных. Мы начали писать функцию <code>addFriend</code> . Закончите запись, чтобы он взял объект <code>user</code> и добавил имя аргумента <code>friend</code> в массив, хранящийся в <code>user.data.friends</code> и возвращает этот массив.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>user</code> object has <code>name</code>, <code>age</code>, and <code>data</code> keys
    testString: assert('name' in user && 'age' in user && 'data' in user);
  - text: The <code>addFriend</code> function accepts a <code>user</code> object and a <code>friend</code> string as arguments and adds the friend to the array of <code>friends</code> in the <code>user</code> object
    testString: assert((function() { let L1 = user.data.friends.length; addFriend(user, 'Sean'); let L2 = user.data.friends.length; return (L2 === L1 + 1); })());
  - text: <code>addFriend(user, "Pete")</code> should return <code>["Sam", "Kira", "Tomo", "Pete"]</code>
    testString: assert.deepEqual((function() { delete user.data.friends; user.data.friends = ['Sam', 'Kira', 'Tomo']; return addFriend(user, 'Pete') })(), ['Sam', 'Kira', 'Tomo', 'Pete']);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line

  // change code above this line
}

console.log(addFriend(user, 'Pete'));

```

</div>

</section>

## Solution
<section id='solution'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```

</section>
