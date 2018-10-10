---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: ''
localeTitle: Доступ к объектным свойствам с нотами Dot
---

## Description
undefined

## Instructions
<section id="instructions"> Прочитайте значения свойств <code>testObj</code> с использованием точечной нотации. Установите переменную <code>hatValue</code> равное свойству объекта <code>hat</code> и установить переменную <code>shirtValue</code> равной свойству объекта <code>shirt</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof hatValue === "string" , "<code>hatValue</code> should be a string");'
  - text: Значение <code>hatValue</code> должно быть <code>&quot;ballcap&quot;</code>
    testString: 'assert(hatValue === "ballcap" , "The value of <code>hatValue</code> should be <code>"ballcap"</code>");'
  - text: <code>shirtValue</code> должна быть строкой
    testString: 'assert(typeof shirtValue === "string" , "<code>shirtValue</code> should be a string");'
  - text: Значение <code>shirtValue</code> должно быть <code>&quot;jersey&quot;</code>
    testString: 'assert(shirtValue === "jersey" , "The value of <code>shirtValue</code> should be <code>"jersey"</code>");'
  - text: Вы должны использовать точную нотацию дважды
    testString: 'assert(code.match(/testObj\.\w+/g).length > 1, "You should use dot notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line

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
