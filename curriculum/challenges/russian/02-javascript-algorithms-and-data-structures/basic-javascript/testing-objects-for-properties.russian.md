---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
videoUrl: ''
localeTitle: Тестирование объектов для свойств
---

## Description
<section id="description"> Иногда полезно проверить, существует ли свойство данного объекта или нет. Мы можем использовать метод объектов <code>.hasOwnProperty(propname)</code> для определения того, имеет ли этот объект указанное имя свойства. <code>.hasOwnProperty()</code> возвращает <code>true</code> или <code>false</code> если свойство найдено или нет. <strong>пример</strong> <blockquote> var myObj = { <br> top: «шляпа», <br> снизу: &quot;штаны&quot; <br> }; <br> myObj.hasOwnProperty ( &quot;вершина&quot;); // правда <br> myObj.hasOwnProperty ( &quot;средний&quot;); // ложный </blockquote></section>

## Instructions
<section id="instructions"> Измените функцию <code>checkObj</code> для проверки <code>myObj</code> для <code>checkProp</code> . Если свойство найдено, верните его значение. Если нет, верните <code>&quot;Not Found&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkObj(&quot;gift&quot;)</code> должен вернуть <code>&quot;pony&quot;</code> .
    testString: 'assert(checkObj("gift") === "pony", "<code>checkObj("gift")</code> should return  <code>"pony"</code>.");'
  - text: <code>checkObj(&quot;pet&quot;)</code> должен вернуть <code>&quot;kitten&quot;</code> .
    testString: 'assert(checkObj("pet") === "kitten", "<code>checkObj("pet")</code> should return  <code>"kitten"</code>.");'
  - text: <code>checkObj(&quot;house&quot;)</code> должен вернуть <code>&quot;Not Found&quot;</code> .
    testString: 'assert(checkObj("house") === "Not Found", "<code>checkObj("house")</code> should return  <code>"Not Found"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
