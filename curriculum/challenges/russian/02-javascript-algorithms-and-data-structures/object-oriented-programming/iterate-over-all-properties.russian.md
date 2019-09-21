---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
forumTopicId: 301320
localeTitle: Итерация по всем свойствам
---

## Description
<section id='description'>
Теперь вы видите два вида свойств: <code>own</code> свойства и свойства <code>prototype</code> . <code>Own</code> свойства определяются непосредственно на самом экземпляре объекта. И <code>prototype</code> определены на <code>prototype</code> . <blockquote> функция Bird (name) { <br> this.name = name; //собственность <br> } <br><br> Bird.prototype.numLegs = 2; // свойство прототипа <br><br> пусть утка = новая птица («Дональд»); </blockquote> Вот как вы добавляете <code>own</code> свойства <code>duck</code> к массиву <code>ownProps</code> и свойства <code>prototype</code> для массива <code>prototypeProps</code> : <blockquote> let ownProps = []; <br> let prototypeProps = []; <br><br> для (пусть свойство в утке) { <br> if (duck.hasOwnProperty (свойство)) { <br> ownProps.push (свойство); <br> } else { <br> prototypeProps.push (свойство); <br> } <br> } <br><br> console.log (ownProps); // печатает [&quot;name&quot;] <br> console.log (prototypeProps); // печатает [&quot;numLegs&quot;] </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте все <code>own</code> свойства <code>beagle</code> в массив <code>ownProps</code> . Добавьте все свойства <code>prototype</code> <code>Dog</code> в массив <code>prototypeProps</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ownProps</code> array should include <code>"name"</code>.
    testString: assert(ownProps.indexOf('name') !== -1);
  - text: The <code>prototypeProps</code> array should include <code>"numLegs"</code>.
    testString: assert(prototypeProps.indexOf('numLegs') !== -1);
  - text: Solve this challenge without using the built in method <code>Object.keys()</code>.
    testString: assert(!/\Object.keys/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

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

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```

</section>
