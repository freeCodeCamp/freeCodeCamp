---
title: JortSort
id: 5a23c84252665b21eecc7ec4
challengeType: 5
videoUrl: ''
localeTitle: JortSort
---

## Description
<section id="description"> jortSort - это набор инструментов сортировки, который заставляет пользователя выполнять работу и гарантирует эффективность, потому что вам больше не нужно сортировать. Первоначально он был представлен Jenn «Moneydollars» Шиффер на престижном <a href="https://www.youtube.com/watch?v=pj4U_W0OFoE">JSConf</a> . jortSort - это функция, которая принимает один массив сопоставимых объектов в качестве аргумента. Затем он сортирует массив в порядке возрастания и сравнивает отсортированный массив с первоначально предоставленным массивом. Если массивы совпадают (т. Е. Исходный массив уже был отсортирован), функция возвращает true. Если массивы не совпадают (т. Е. Исходный массив не был отсортирован), функция возвращает false. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jortsort</code> должен быть функцией.
    testString: 'assert(typeof jortsort=="function","<code>jortsort</code> should be a function.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code> должен возвращать логическое значение.'
    testString: 'assert(typeof jortsort(tests[0].slice())=="boolean","<code>jortsort("+JSON.stringify(tests[0])+")</code> should return a boolean.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[0])+&quot;)</code> должен возвращать <code>true</code> .'
    testString: 'assert.equal(jortsort(tests[0].slice()),true,"<code>jortsort("+JSON.stringify(tests[0])+")</code> should return <code>true</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[1])+&quot;)</code> должен возвращать <code>false</code> .'
    testString: 'assert.equal(jortsort(tests[1].slice()),false,"<code>jortsort("+JSON.stringify(tests[1])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[2])+&quot;)</code> должен возвращать значение <code>false</code> .'
    testString: 'assert.equal(jortsort(tests[2].slice()),false,"<code>jortsort("+JSON.stringify(tests[2])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[3])+&quot;)</code> должен возвращать <code>true</code> .'
    testString: 'assert.equal(jortsort(tests[3].slice()),true,"<code>jortsort("+JSON.stringify(tests[3])+")</code> should return <code>true</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[4])+&quot;)</code> должен возвращать значение <code>false</code> .'
    testString: 'assert.equal(jortsort(tests[4].slice()),false,"<code>jortsort("+JSON.stringify(tests[4])+")</code> should return <code>false</code>.");'
  - text: '<code>jortsort(&quot;+JSON.stringify(tests[5])+&quot;)</code> должен возвращать <code>true</code> .'
    testString: 'assert.equal(jortsort(tests[5].slice()),true,"<code>jortsort("+JSON.stringify(tests[5])+")</code> should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jortsort (array) {
  // Good luck!
}

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
