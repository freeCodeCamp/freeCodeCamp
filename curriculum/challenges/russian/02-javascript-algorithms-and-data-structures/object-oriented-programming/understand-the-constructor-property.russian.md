---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
forumTopicId: 301327
localeTitle: Понять свойство конструктора
---

## Description
<section id='description'>
Существует специальное свойство <code>constructor</code> расположенное на объектных экземплярах <code>duck</code> и <code>beagle</code> которые были созданы в предыдущих задачах: <blockquote> let duck = new Bird (); <br> let beagle = new Dog (); <br><br> console.log (duck.constructor === Bird); // выводит true <br> console.log (beagle.constructor === Собака); // выводит true </blockquote> Обратите внимание, что свойство <code>constructor</code> является ссылкой на конструктор, создавший экземпляр. Преимущество свойства <code>constructor</code> заключается в том, что можно проверить это свойство, чтобы узнать, какой он объект. Вот пример того, как это можно использовать: <blockquote> function joinBirdFraternity (кандидат) { <br> if (кандидат.конструктор === Птица) { <br> return true; <br> } else { <br> return false; <br> } <br> } </blockquote> <strong>Заметка</strong> <br> Поскольку свойство <code>constructor</code> может быть перезаписано (что будет рассмотрено в следующих двух задачах), лучше всего использовать метод <code>instanceof</code> для проверки типа объекта.
</section>

## Instructions
<section id='instructions'>
Write a <code>joinDogFraternity</code> function that takes a <code>candidate</code> parameter and, using the <code>constructor</code> property, return <code>true</code> if the candidate is a <code>Dog</code>, otherwise return <code>false</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code> should be defined as a function.
    testString: assert(typeof(joinDogFraternity) === 'function');
  - text: <code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.
    testString: assert(joinDogFraternity(new Dog("")) === true);
  - text: <code>joinDogFraternity</code> should use the <code>constructor</code> property.
    testString: assert(/\.constructor/.test(code) && !/instanceof/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {

}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

</section>
