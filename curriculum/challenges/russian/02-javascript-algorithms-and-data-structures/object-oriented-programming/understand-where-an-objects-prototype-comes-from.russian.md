---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
localeTitle: Поймите, откуда идет прототип объекта
---

## Description
<section id='description'>
Подобно тому, как люди наследуют гены от своих родителей, объект наследует свой <code>prototype</code> непосредственно от созданной им функции-конструктора. Например, здесь конструктор <code>Bird</code> создает объект <code>duck</code> : <blockquote> функция Bird (name) { <br> this.name = name; <br> } <br><br> пусть утка = новая птица («Дональд»); </blockquote> <code>duck</code> наследует свой <code>prototype</code> из функции конструктора <code>Bird</code> . Вы можете показать это отношение с методом <code>isPrototypeOf</code> : <blockquote> Bird.prototype.isPrototypeOf (уток); <br> // возвращает true </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте <code>isPrototypeOf</code> чтобы проверить <code>prototype</code> <code>beagle</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Show that <code>Dog.prototype</code> is the <code>prototype</code> of <code>beagle</code>
    testString: assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```

</section>
