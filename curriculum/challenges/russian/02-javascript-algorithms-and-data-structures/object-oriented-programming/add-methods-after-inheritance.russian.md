---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
videoUrl: ''
localeTitle: Добавить методы после наследования
---

## Description
<section id="description"> Функция-конструктор, которая наследует свой объект- <code>prototype</code> от функции-конструктора <code>supertype</code> может по-прежнему иметь свои собственные методы в дополнение к унаследованным методам. Например, <code>Bird</code> - это конструктор, который наследует свой <code>prototype</code> от <code>Animal</code> : <blockquote> функция Animal () {} <br> Animal.prototype.eat = function () { <br> console.log («nom nom nom»); <br> }; <br> function Bird () {} <br> Bird.prototype = Object.create (Animal.prototype); <br> Bird.prototype.constructor = Bird; </blockquote> В дополнение к тому, что унаследовано от <code>Animal</code> , вы хотите добавить поведение, уникальное для объектов <code>Bird</code> . Здесь <code>Bird</code> получит функцию <code>fly()</code> . Функции добавляются к <code>prototype</code> <code>Bird&#39;s</code> же, как и любая функция конструктора: <blockquote> Bird.prototype.fly = function () { <br> console.log («Я летаю!»); <br> }; </blockquote> Теперь экземпляры <code>Bird</code> будут иметь методы <code>eat()</code> и <code>fly()</code> : <blockquote> let duck = new Bird (); <br> duck.eat (); // печатает &quot;nom nom nom&quot; <br> duck.fly (); // печатает «Я лечу!» </blockquote></section>

## Instructions
<section id="instructions"> Добавьте все необходимые символы , поэтому <code>Dog</code> объект наследует от <code>Animal</code> и в <code>Dog&#39;s</code> <code>prototype</code> конструктора установлена Собаке. Затем добавьте метод <code>bark()</code> к объекту <code>Dog</code> чтобы <code>beagle</code> мог как <code>eat()</code> и <code>bark()</code> . Метод <code>bark()</code> должен печатать «Woof!» на консоль. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal</code> не должно отвечать методу <code>bark()</code> .
    testString: 'assert(typeof Animal.prototype.bark == "undefined", "<code>Animal</code> should not respond to the <code>bark()</code> method.");'
  - text: <code>Dog</code> должна наследовать метод <code>eat()</code> от <code>Animal</code> .
    testString: 'assert(typeof Dog.prototype.eat == "function", "<code>Dog</code> should inherit the <code>eat()</code> method from <code>Animal</code>.");'
  - text: <code>Dog</code> должна иметь метод <code>bark()</code> как <code>own</code> свойство.
    testString: 'assert(Dog.prototype.hasOwnProperty("bark"), "<code>Dog</code> should have the <code>bark()</code> method as an <code>own</code> property.");'
  - text: <code>beagle</code> должен быть <code>instanceof</code> <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should be an <code>instanceof</code> <code>Animal</code>.");'
  - text: Конструктор для <code>beagle</code> должен быть установлен на <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "The constructor for <code>beagle</code> should be set to <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line




// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
