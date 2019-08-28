---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
forumTopicId: 301319
localeTitle: Наследование поведения от супертипа
---

## Description
<section id='description'>
В предыдущем вызове вы создали <code>supertype</code> под названием <code>Animal</code> который определял поведение, разделяемое всеми животными: <blockquote> функция Animal () {} <br> Animal.prototype.eat = function () { <br> console.log («nom nom nom»); <br> }; </blockquote> Эта и следующая задача будет посвящена тому, как повторно использовать методы <code>Animal&#39;s</code> внутри <code>Bird</code> and <code>Dog</code> не определяя их снова. Он использует метод, называемый <code>inheritance</code> . Эта задача охватывает первый шаг: создайте экземпляр <code>supertype</code> (или родителя). Вы уже знаете один способ создания экземпляра <code>Animal</code> с помощью <code>new</code> оператора: <blockquote> let animal = new Animal (); </blockquote> Существуют некоторые недостатки при использовании этого синтаксиса для <code>inheritance</code> , которые слишком сложны для этой задачи. Вместо этого, это альтернативный подход без этих недостатков: <blockquote> let animal = Object.create (Animal.prototype); </blockquote> <code>Object.create(obj)</code> создает новый объект и устанавливает <code>obj</code> как <code>prototype</code> нового объекта. Напомним, что <code>prototype</code> подобен «рецепту» для создания объекта. Установив <code>prototype</code> от <code>animal</code> быть <code>Animal&#39;s</code> <code>prototype</code> , вы фактически давая <code>animal</code> экземпляру же «рецепт» , как и любой другой экземпляр <code>Animal</code> . <blockquote> animal.eat (); // печатает &quot;nom nom nom&quot; <br> животный экземпляр животных; // =&gt; true </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте <code>Object.create</code> чтобы создать два экземпляра <code>Animal</code> именем <code>duck</code> и <code>beagle</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>duck</code> variable should be defined.
    testString: assert(typeof duck !== "undefined");
  - text: The <code>beagle</code> variable should be defined.
    testString: assert(typeof beagle !== "undefined");
  - text: The <code>duck</code> variable should be initialised with <code>Object.create</code>.
    testString: assert(/(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(code));
  - text: The <code>beagle</code> variable should be initialised with <code>Object.create</code>.
    testString: assert(/(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(code));
  - text: <code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.
    testString: assert(duck instanceof Animal);
  - text: <code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.
    testString: assert(beagle instanceof Animal);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck; // Change this line
let beagle; // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```

</section>
