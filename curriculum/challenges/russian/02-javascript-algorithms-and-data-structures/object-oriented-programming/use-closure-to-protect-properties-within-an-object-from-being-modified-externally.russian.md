---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
videoUrl: ''
localeTitle: Использовать закрытие для защиты свойств внутри объекта от модификации извне
---

## Description
<section id="description"> В предыдущем вызове у <code>bird</code> было <code>name</code> общественной собственности. Он считается открытым, потому что его можно получить и изменить вне определения <code>bird</code> . <blockquote> bird.name = &quot;Duffy&quot;; </blockquote> Поэтому любая часть вашего кода может легко изменить имя <code>bird</code> на любое значение. Подумайте о таких вещах, как пароли и банковские счета, которые легко заменяются любой частью вашей кодовой базы. Это может вызвать множество проблем. Самый простой способ сделать свойства private - создать переменную в функции конструктора. Это изменяет область действия этой переменной в функции конструктора по сравнению с глобально доступной. Таким образом, свойство может быть доступно и доступно только с помощью методов, также входящих в конструкторскую функцию. <blockquote> функция Bird () { <br> let hatchedEgg = 10; // частная собственность <br><br> this.getHatchedEggCount = function () {// общедоступный метод, который может использовать объект птицы <br> return hatchedEgg; <br> }; <br> } <br> let ducky = new Bird (); <br> ducky.getHatchedEggCount (); // возвращает 10 </blockquote> Здесь <code>getHachedEggCount</code> является привилегированным методом, поскольку он имеет доступ к частной переменной <code>hatchedEgg</code> . Это возможно, потому что <code>hatchedEgg</code> объявлен в том же контексте, что и <code>getHachedEggCount</code> . В JavaScript функция всегда имеет доступ к контексту, в котором она была создана. Это называется <code>closure</code> . </section>

## Instructions
<section id="instructions"> Измените, как <code>weight</code> объявляется в функции <code>Bird</code> поэтому он является частной переменной. Затем создайте метод <code>getWeight</code> который возвращает значение <code>weight</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Свойство <code>weight</code> должно быть частной переменной.
    testString: 'assert(!code.match(/this\.weight/g), "The <code>weight</code> property should be a private variable.");'
  - text: Ваш код должен создать метод в <code>Bird</code> под названием <code>getWeight</code> который возвращает <code>weight</code> .
    testString: 'assert((new Bird()).getWeight() === 15, "Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


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
