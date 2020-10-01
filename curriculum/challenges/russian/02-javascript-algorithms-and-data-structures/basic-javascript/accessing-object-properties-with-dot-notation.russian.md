---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: https://scrimba.com/c/cGryJs8
forumTopicId: 16164
localeTitle: Доступ к объектным свойствам с нотами Dot
---

## Description
<section id='description'>
Существует два вида доступа к свойствам объекта: через точку (<code>.</code>) и используя скобки (<code>[]</code>), подобно как и в масиве.
Доступ через точку это то что вы должны использовать когда вы знаете имя свойства которое будете спользовать.  
Ниже приведен пример использования (<code>.</code>) доступа к свойству через точку:

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

</section>

## Instructions
<section id='instructions'>
Прочитайте значения свойств <code>testObj</code> с использованием точечной нотации. Установите переменную <code>hatValue</code> равное свойству объекта <code>hat</code> и установить переменную <code>shirtValue</code> равной свойству объекта <code>shirt</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hatValue</code> should be a string
    testString: assert(typeof hatValue === 'string' );
  - text: The value of <code>hatValue</code> should be <code>"ballcap"</code>
    testString: assert(hatValue === 'ballcap' );
  - text: <code>shirtValue</code> should be a string
    testString: assert(typeof shirtValue === 'string' );
  - text: The value of <code>shirtValue</code> should be <code>"jersey"</code>
    testString: assert(shirtValue === 'jersey' );
  - text: You should use dot notation twice
    testString: assert(code.match(/testObj\.\w+/g).length > 1);

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

### After Tests
<div id='js-teardown'>

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

</section>
