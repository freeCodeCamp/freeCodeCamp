---
id: a2f1d72d9b908d0bd72bb9f6
title: Make a Person
challengeType: 5
videoUrl: ''
localeTitle: Сделать человека
---

## Description
<section id="description"> Заполните конструктор объекта следующими способами: <blockquote> getFirstName () getLastName () getFullName () setFirstName (first) setLastName (последний) setFullName (firstAndLast) </blockquote> Запустите тесты, чтобы увидеть ожидаемый результат для каждого метода. Методы, принимающие аргумент, должны принимать только один аргумент и должны быть строкой. Эти методы должны быть единственным доступным средством взаимодействия с объектом. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Object.keys(bob).length</code> должен возвращать 6.
    testString: 'assert.deepEqual(Object.keys(bob).length, 6, "<code>Object.keys(bob).length</code> should return 6.");'
  - text: <code>bob instanceof Person</code> должно возвращать true.
    testString: 'assert.deepEqual(bob instanceof Person, true, "<code>bob instanceof Person</code> should return true.");'
  - text: <code>bob.firstName</code> должен возвращаться не определен.
    testString: 'assert.deepEqual(bob.firstName, undefined, "<code>bob.firstName</code> should return undefined.");'
  - text: <code>bob.lastName</code> должен возвращаться не определен.
    testString: 'assert.deepEqual(bob.lastName, undefined, "<code>bob.lastName</code> should return undefined.");'
  - text: <code>bob.getFirstName()</code> должен вернуть «Боб».
    testString: 'assert.deepEqual(bob.getFirstName(), "Bob", "<code>bob.getFirstName()</code> should return "Bob".");'
  - text: <code>bob.getLastName()</code> должен возвращать «Росс».
    testString: 'assert.deepEqual(bob.getLastName(), "Ross", "<code>bob.getLastName()</code> should return "Ross".");'
  - text: <code>bob.getFullName()</code> должен вернуть «Боб Росс».
    testString: 'assert.deepEqual(bob.getFullName(), "Bob Ross", "<code>bob.getFullName()</code> should return "Bob Ross".");'
  - text: <code>bob.getFullName()</code> должен вернуть «Haskell Ross» после <code>bob.setFirstName(&quot;Haskell&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFirstName("Haskell"); return bob.getFullName(); })(), "Haskell Ross", "<code>bob.getFullName()</code> should return "Haskell Ross" after <code>bob.setFirstName("Haskell")</code>.");'
  - text: <code>bob.getFullName()</code> должен вернуть «Haskell Curry» после <code>bob.setLastName(&quot;Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { var _bob=new Person("Haskell Ross"); _bob.setLastName("Curry"); return _bob.getFullName(); })(), "Haskell Curry", "<code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setLastName("Curry")</code>.");'
  - text: <code>bob.getFullName()</code> должен вернуть «Haskell Curry» после <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFullName(); })(), "Haskell Curry", "<code>bob.getFullName()</code> should return "Haskell Curry" after <code>bob.setFullName("Haskell Curry")</code>.");'
  - text: <code>bob.getFirstName()</code> должен возвращать «Haskell» после <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getFirstName(); })(), "Haskell", "<code>bob.getFirstName()</code> should return "Haskell" after <code>bob.setFullName("Haskell Curry")</code>.");'
  - text: <code>bob.getLastName()</code> должен возвращать «Curry» после <code>bob.setFullName(&quot;Haskell Curry&quot;)</code> .
    testString: 'assert.strictEqual((function () { bob.setFullName("Haskell Curry"); return bob.getLastName(); })(), "Curry", "<code>bob.getLastName()</code> should return "Curry" after <code>bob.setFullName("Haskell Curry")</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
