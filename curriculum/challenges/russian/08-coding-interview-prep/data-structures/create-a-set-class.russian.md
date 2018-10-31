---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
videoUrl: ''
localeTitle: Создание набора классов
---

## Description
<section id="description"> В следующих нескольких упражнениях мы собираемся создать функцию для эмуляции структуры данных, называемой «Set». Набор подобен массиву, но он не может содержать повторяющиеся значения. Типичное использование набора - это просто проверить наличие предмета. Это может быть реализовано с помощью объекта, например: <blockquote> var set = new Object (); <br> set.foo = true; <br> // Смотрите, существует ли foo в нашем наборе: <br> console.log (set.foo) // true </blockquote> В следующих нескольких упражнениях мы создадим полнофункциональный набор с нуля. Для этого упражнения создайте функцию, которая добавит значение в нашу коллекцию наборов, если это значение еще не существует в наборе. Например: <blockquote> this.add = function (element) { <br> // некоторый код для добавления значения к набору <br> } </blockquote> Функция должна возвращать значение <code>true</code> если значение успешно добавлено, а <code>false</code> противном случае. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>Set</code> должен иметь метод <code>add</code> .
    testString: 'assert((function(){var test = new Set(); return (typeof test.add === "function")}()), "Your <code>Set</code> class should have an <code>add</code> method.");'
  - text: Ваш метод <code>add</code> не должен добавлять повторяющиеся значения.
    testString: 'assert((function(){var test = new Set(); test.add("a"); test.add("b"); test.add("a"); var vals = test.values(); return (vals[0] === "a" && vals[1] === "b" && vals.length === 2)}()), "Your <code>add</code> method should not add duplicate values.");'
  - text: Ваш метод <code>add</code> должен возвращать <code>true</code> когда значение было успешно добавлено.
    testString: 'assert((function(){var test = new Set(); var result = test.add("a"); return (result != undefined) && (result === true);}()), "Your <code>add</code> method should return <code>true</code> when a value has been successfully added.");'
  - text: Метод <code>add</code> должен возвращать значение <code>false</code> при добавлении повторяющегося значения.
    testString: 'assert((function(){var test = new Set(); test.add("a"); var result = test.add("a"); return (result != undefined) && (result === false);}()), "Your <code>add</code> method should return <code>false</code> when a duplicate value is added.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    // change code above this line
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
