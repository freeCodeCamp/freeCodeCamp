---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
forumTopicId: 301153
localeTitle: Добавление пар ключей к объектам JavaScript
---

## Description
<section id='description'>
В большинстве своих объектов объекты представляют собой только коллекции <dfn>пар ключ-значение</dfn> , или, другими словами, части данных, сопоставленные с уникальными идентификаторами, которые мы называем <dfn>свойствами</dfn> или <dfn>ключами</dfn> . Давайте рассмотрим очень простой пример: <blockquote> пусть FCC_User = { <br> имя пользователя: &#39;awesome_coder&#39;, <br> последователи: 572, <br> баллы: 1741, <br> completedProjects: 15 <br> }; </blockquote> Вышеприведенный код определяет объект с именем <code>FCC_User</code> который имеет четыре <dfn>свойства</dfn> , каждый из которых соответствует определенному значению. Если бы мы хотели узнать количество <code>followers</code> <code>FCC_User</code> , мы можем получить доступ к этому свойству, написав: <blockquote> let userData = FCC_User.followers; <br> // userData равно 572 </blockquote> Это называется <dfn>точечной нотации</dfn> . Кроме того, мы также можем получить доступ к свойству с помощью скобок, например: <blockquote> let userData = FCC_User [&#39;followers&#39;] <br> // userData равно 572 </blockquote> Обратите внимание, что с <dfn>обозначением в скобках</dfn> мы заключили <code>followers</code> в кавычки. Это связано с тем, что скобки фактически позволяют нам передавать переменную in, которая будет оцениваться как имя свойства (подсказка: помните об этом позже!). Если бы мы передали <code>followers</code> без кавычек, движок JavaScript попытался бы оценить его как переменную, и <code>ReferenceError: followers is not defined</code> был бы указан идентификатор <code>ReferenceError: followers is not defined</code> .
</section>

## Instructions
<section id='instructions'>
Используя тот же синтаксис, мы можем также <em><strong>добавить новые</strong></em> пары ключ-значение в объекты. Мы создали объект для <code>foods</code> с тремя записями. Добавьте еще три записи: <code>bananas</code> со значением <code>13</code> , <code>grapes</code> со значением <code>35</code> и <code>strawberries</code> со значением <code>27</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code> is an object
    testString: assert(typeof foods === 'object');
  - text: The <code>foods</code> object has a key <code>"bananas"</code> with a value of <code>13</code>
    testString: assert(foods.bananas === 13);
  - text: The <code>foods</code> object has a key <code>"grapes"</code> with a value of <code>35</code>
    testString: assert(foods.grapes === 35);
  - text: The <code>foods</code> object has a key <code>"strawberries"</code> with a value of <code>27</code>
    testString: assert(foods.strawberries === 27);
  - text: The key-value pairs should be set using dot or bracket notation
    testString: assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
// change code above this line
```

</section>
