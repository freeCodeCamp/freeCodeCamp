---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: https://scrimba.com/c/cWGkbtd
forumTopicId: 16769
localeTitle: Создание объектов JavaScript
---

## Description
<section id='description'>
Возможно, вы слышали термин <code>object</code> раньше. Объекты похожи на <code>arrays</code> , за исключением того, что вместо использования индексов для доступа и изменения их данных вы получаете доступ к данным в объектах через так называемые <code>properties</code> . Объекты полезны для хранения данных структурированным способом и могут представлять объекты реального мира, такие как кошка. Вот пример объекта cat: <blockquote> var cat = { <br> «имя»: «Усы», <br> «ноги»: 4, <br> «хвосты»: 1, <br> «враги»: [«Вода», «Собаки»] <br> }; </blockquote> В этом примере все свойства сохраняются как строки, такие как <code>&quot;name&quot;</code> , <code>&quot;legs&quot;</code> и <code>&quot;tails&quot;</code> . Однако вы также можете использовать числа как свойства. Вы даже можете опустить кавычки для свойств строки с одним словом, а именно: <blockquote> var anotherObject = { <br> сделать: «Форд», <br> 5: «пять», <br> «модель»: «фокус» <br> }; </blockquote> Однако, если ваш объект имеет какие-либо свойства, отличные от строки, JavaScript автоматически приведет их в виде строк.
</section>

## Instructions
<section id='instructions'>
Создайте объект, представляющий собаку под названием <code>myDog</code> которая содержит свойства <code>&quot;name&quot;</code> (строка), <code>&quot;legs&quot;</code> , <code>&quot;tails&quot;</code> и <code>&quot;friends&quot;</code> . Вы можете установить эти свойства объекта для любых значений, которые вы хотите, поскольку <code>&quot;name&quot;</code> - это строка, <code>&quot;legs&quot;</code> и <code>&quot;tails&quot;</code> - это числа, а <code>&quot;friends&quot;</code> - это массив.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code> should contain the property <code>name</code> and it should be a <code>string</code>.
    testString: assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should contain the property <code>legs</code> and it should be a <code>number</code>.
    testString: assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should contain the property <code>tails</code> and it should be a <code>number</code>.
    testString: assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should contain the property <code>friends</code> and it should be an <code>array</code>.
    testString: assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code> should only contain all the given properties.
    testString: assert((function(z){return Object.keys(z).length === 4;})(myDog));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {




};

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(z){return z;})(myDog);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

</section>
