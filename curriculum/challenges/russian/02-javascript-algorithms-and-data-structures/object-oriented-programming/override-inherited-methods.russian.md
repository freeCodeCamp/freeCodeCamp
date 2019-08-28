---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
forumTopicId: 301322
localeTitle: Переопределить наследуемые методы
---

## Description
<section id='description'>
На предыдущих уроках вы узнали, что объект может наследовать свое поведение (методы) от другого объекта, клонируя его <code>prototype</code> объекта: <blockquote> ChildObject.prototype = Object.create (ParentObject.prototype); </blockquote> Затем <code>ChildObject</code> получил свои собственные методы, связав их с <code>prototype</code> : <blockquote> ChildObject.prototype.methodName = function () {...}; </blockquote> Можно переопределить унаследованный метод. Это делается так же, добавив метод <code>ChildObject.prototype</code> с использованием того же имени метода, что и для переопределения. Вот пример того, как <code>Bird</code> переопределяет метод <code>eat()</code> унаследованный от <code>Animal</code> : <blockquote> функция Animal () {} <br> Animal.prototype.eat = function () { <br> возвращение «nom nom nom»; <br> }; <br> function Bird () {} <br><br> // Наследовать все методы из Animal <br> Bird.prototype = Object.create (Animal.prototype); <br><br> // Bird.eat () переопределяет Animal.eat () <br> Bird.prototype.eat = function () { <br> вернуть «peck peck peck»; <br> }; </blockquote> Если у вас есть экземпляр <code>let duck = new Bird();</code> и вы вызываете <code>duck.eat()</code> , это то, как JavaScript ищет метод <code>duck&#39;s</code> цепочке <code>prototype</code> утки: 1. duck =&gt; Is eat () определен здесь? № 2. Птица =&gt; Есть ли () определенная здесь? =&gt; Да. Выполните его и прекратите поиск. 3. Также определено Animal =&gt; eat (), но JavaScript дошел до этого уровня. 4. Object =&gt; JavaScript остановил поиск до достижения этого уровня.
</section>

## Instructions
<section id='instructions'>
Переопределите метод <code>fly()</code> для <code>Penguin</code> чтобы он вернул «Увы, это нелетающая птица».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>penguin.fly()</code> should return the string "Alas, this is a flightless bird."
    testString: assert(penguin.fly() === "Alas, this is a flightless bird.");
  - text: The <code>bird.fly()</code> method should return "I am flying!"
    testString: assert((new Bird()).fly() === "I am flying!");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```

</section>
