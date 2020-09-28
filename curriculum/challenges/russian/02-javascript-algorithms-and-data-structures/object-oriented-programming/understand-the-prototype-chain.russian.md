---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
forumTopicId: 301329
localeTitle: Поймите прототипную цепочку
---

## Description
<section id='description'>
Все объекты в JavaScript (за некоторыми исключениями) имеют <code>prototype</code> . Кроме того, сам <code>prototype</code> объекта является объектом. <blockquote> функция Bird (name) { <br> this.name = name; <br> } <br><br> тип Bird.prototype; // =&gt; объект </blockquote> Поскольку <code>prototype</code> является объектом, <code>prototype</code> может иметь свой собственный <code>prototype</code> ! В этом случае <code>prototype</code> <code>Bird.prototype</code> является <code>Object.prototype</code> : <blockquote> Object.prototype.isPrototypeOf (Bird.prototype); <br> // возвращает true </blockquote> Как это полезно? Вы можете вспомнить метод <code>hasOwnProperty</code> из предыдущего <code>hasOwnProperty</code> : <blockquote> пусть утка = новая птица («Дональд»); <br> duck.hasOwnProperty ( &quot;имя&quot;); // =&gt; true </blockquote> Метод <code>hasOwnProperty</code> определен в <code>Object.prototype</code> , к которому можно получить доступ с помощью <code>Bird.prototype</code> , к которому затем можно получить доступ <code>duck</code> . Это пример цепи <code>prototype</code> . В этой <code>prototype</code> цепочке <code>Bird</code> является <code>supertype</code> для <code>duck</code> , а <code>duck</code> - <code>subtype</code> . <code>Object</code> - это <code>supertype</code> как для <code>Bird</code> и для <code>duck</code> . <code>Object</code> - это <code>supertype</code> для всех объектов в JavaScript. Поэтому любой объект может использовать метод <code>hasOwnProperty</code> .
</section>

## Instructions
<section id='instructions'>
Измените код, чтобы показать правильную цепочку прототипов.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should show that <code>Object.prototype</code> is the prototype of <code>Dog.prototype</code>
    testString: assert(/Object\.prototype\.isPrototypeOf/.test(code));

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

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

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
Object.prototype.isPrototypeOf(Dog.prototype);
```

</section>
