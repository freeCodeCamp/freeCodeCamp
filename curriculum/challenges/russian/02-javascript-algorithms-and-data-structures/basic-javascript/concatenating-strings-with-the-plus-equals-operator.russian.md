---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: ''
localeTitle: Объединение строк с помощью оператора Plus Equals
---

## Description
<section id="description"> Мы также можем использовать оператор <code>+=</code> для <dfn>конкатенации</dfn> строки в конец существующей строковой переменной. Это может быть очень полезно для разбиения длинной строки на несколько строк. <strong>Заметка</strong> <br> Следите за пробелами. Конкатенация не добавляет пробелов между конкатенированными строками, поэтому вам нужно будет добавить их самостоятельно. </section>

## Instructions
<section id="instructions"> Постройте <code>myStr</code> в нескольких строках, <code>myStr</code> эти две строки: <code>&quot;This is the first sentence. &quot;</code> и <code>&quot;This is the second sentence.&quot;</code> используя оператор <code>+=</code> . Используйте оператор <code>+=</code> аналогичный тому, как он отображается в редакторе. Начните с назначения первой строки <code>myStr</code> , затем добавьте вторую строку. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> должно иметь значение <code>This is the first sentence. This is the second sentence.</code>
    testString: 'assert(myStr === "This is the first sentence. This is the second sentence.", "<code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>");'
  - text: Используйте оператор <code>+=</code> для создания <code>myStr</code>
    testString: 'assert(code.match(/\w\s*\+=\s*[""]/g).length > 1 && code.match(/\w\s*\=\s*[""]/g).length > 1, "Use the <code>+=</code> operator to build <code>myStr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
