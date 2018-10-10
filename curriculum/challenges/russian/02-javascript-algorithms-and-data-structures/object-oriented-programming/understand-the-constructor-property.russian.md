---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: Понять свойство конструктора
---

## Description
<section id="description"> Существует специальное свойство <code>constructor</code> расположенное на объектных экземплярах <code>duck</code> и <code>beagle</code> которые были созданы в предыдущих задачах: <blockquote> let duck = new Bird (); <br> let beagle = new Dog (); <br><br> console.log (duck.constructor === Bird); // выводит true <br> console.log (beagle.constructor === Собака); // выводит true </blockquote> Обратите внимание, что свойство <code>constructor</code> является ссылкой на конструктор, создавший экземпляр. Преимущество свойства <code>constructor</code> заключается в том, что можно проверить это свойство, чтобы узнать, какой он объект. Вот пример того, как это можно использовать: <blockquote> function joinBirdFraternity (кандидат) { <br> if (кандидат.конструктор === Птица) { <br> return true; <br> } else { <br> return false; <br> } <br> } </blockquote> <strong>Заметка</strong> <br> Поскольку свойство <code>constructor</code> может быть перезаписано (что будет рассмотрено в следующих двух задачах), лучше всего использовать метод <code>instanceof</code> для проверки типа объекта. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code> следует определять как функцию.
    testString: 'assert(typeof(joinDogFraternity) === "function", "<code>joinDogFraternity</code> should be defined as a function.");'
  - text: ''
    testString: 'assert(joinDogFraternity(new Dog("")) === true, "<code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.");'
  - text: <code>joinDogFraternity</code> должен использовать свойство <code>constructor</code> .
    testString: 'assert(/\.constructor/.test(code) && !/instanceof/.test(code), "<code>joinDogFraternity</code> should use the <code>constructor</code> property.");'

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
// solution required
```
</section>
