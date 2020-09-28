---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
forumTopicId: 301150
localeTitle: Доступ к именам объектов с обозначением скобок
---

## Description
<section id='description'>
В первом вызове объекта мы упоминали использование нотации в виде скобок как способ доступа к значениям свойств с использованием оценки переменной. Например, представьте, что наш <code>foods</code> объект используется в программе для кассового аппарата супермаркета. У нас есть функция , которая устанавливает <code>selectedFood</code> и мы хотим , чтобы проверить наши <code>foods</code> объекта на наличие этой пищи. Это может выглядеть так: <blockquote> let selectedFood = getCurrentFood (scannedItem); <br> пусть инвентарь = продукты питания [selectedFood]; </blockquote> Этот код будет оценивать значение, хранящееся в переменной <code>selectedFood</code> и возвращать значение этого ключа в файле <code>foods</code> или <code>undefined</code> если оно отсутствует. Обозначение скобок очень полезно, поскольку иногда свойства объекта неизвестны до выполнения, или нам нужно получить доступ к ним более динамичным способом.
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>checkInventory</code> , которая получает отсканированный элемент в качестве аргумента. Верните текущее значение ключа <code>scannedItem</code> в объект <code>foods</code> . Вы можете предположить, что в качестве аргумента для <code>checkInventory</code> будут предоставлены только действительные ключи.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkInventory</code> is a function
    testString: assert.strictEqual(typeof checkInventory, 'function');
  - text: 'The <code>foods</code> object should have only the following key-value pairs: <code>apples: 25</code>, <code>oranges: 32</code>, <code>plums: 28</code>, <code>bananas: 13</code>, <code>grapes: 35</code>, <code>strawberries: 27</code>'
    testString: 'assert.deepEqual(foods, {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27});'
  - text: <code>checkInventory("apples")</code> should return <code>25</code>
    testString: assert.strictEqual(checkInventory('apples'), 25);
  - text: <code>checkInventory("bananas")</code> should return <code>13</code>
    testString: assert.strictEqual(checkInventory('bananas'), 13);
  - text: <code>checkInventory("strawberries")</code> should return <code>27</code>
    testString: assert.strictEqual(checkInventory('strawberries'), 27);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```

</section>
