---
id: 56533eb9ac21ba0edf2244a9
title: Initializing Variables with the Assignment Operator
challengeType: 1
videoUrl: ''
localeTitle: Инициализация переменных с помощью оператора присваивания
---

## Description
<section id="description"> Хорошей практикой является объявление переменной вместе с инициализацией её начальным значением. Код <code>var myVar = 0;</code> создает новую переменную <code>myVar</code> и присваивает ей начальное значение <code>0</code> . </section>

## Instructions
<section id="instructions"> Определите переменную <code>a</code> с помощью ключевого слова <code>var</code> и инициализируйте ее значением <code>9</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Инициализировать значение <code>a</code> до значения <code>9</code>
    testString: 'assert(/var\s+a\s*=\s*9\s*/.test(code), "Initialize <code>a</code> to a value of <code>9</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Пример
var ourVar = 19;

// Изменяйте код ниже этой строки

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

</div>

</section>

## Solution
<section id='solution'>

```js
var a = 9;
```
</section>
