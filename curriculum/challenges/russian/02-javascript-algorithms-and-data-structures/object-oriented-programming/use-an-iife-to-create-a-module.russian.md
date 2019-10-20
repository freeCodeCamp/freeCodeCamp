---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
forumTopicId: 301332
localeTitle: Использование модуля IIFE для создания модуля
---

## Description
<section id='description'>
<code>IIFE</code> <code>immediately invoked function expression</code> ( <code>IIFE</code> ) часто используется для группировки связанных функций в один объект или <code>module</code> . Например, более ранняя задача определила два микшина: <blockquote> функция glideMixin (obj) { <br> obj.glide = function () { <br> console.log («Скольжение по воде»); <br> }; <br> } <br> функция flyMixin (obj) { <br> obj.fly = function () { <br> console.log («Flying, wooosh!»); <br> }; <br> } </blockquote> Мы можем сгруппировать эти <code>mixins</code> в модуль следующим образом: <blockquote> let motionModule = (function () { <br> вернуть { <br> glideMixin: function (obj) { <br> obj.glide = function () { <br> console.log («Скольжение по воде»); <br> }; <br> }, <br> flyMixin: function (obj) { <br> obj.fly = function () { <br> console.log («Flying, wooosh!»); <br> }; <br> } <br> } <br> }) (); // Две скобки приводят к немедленному вызову функции </blockquote> Обратите внимание, что вы <code>immediately invoked function expression</code> ( <code>IIFE</code> ), которое возвращает объект <code>motionModule</code> . Этот возвращенный объект содержит все поведение <code>mixin</code> как свойства объекта. Преимущество шаблона <code>module</code> заключается в том, что все поведение движения может быть упаковано в один объект, который затем может использоваться другими частями вашего кода. Вот пример использования: <blockquote> motionModule.glideMixin (уток); <br> duck.glide (); </blockquote>
</section>

## Instructions
<section id='instructions'>
Создать <code>module</code> с именем <code>funModule</code> , чтобы обернуть два <code>mixins</code> <code>isCuteMixin</code> и <code>singMixin</code> . <code>funModule</code> должен возвращать объект.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>funModule</code> should be defined and return an object.
    testString: assert(typeof funModule === "object");
  - text: <code>funModule.isCuteMixin</code> should access a function.
    testString: assert(typeof funModule.isCuteMixin === "function");
  - text: <code>funModule.singMixin</code> should access a function.
    testString: assert(typeof funModule.singMixin === "function");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

```

</div>

</section>

## Solution
<section id='solution'>

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

</section>
