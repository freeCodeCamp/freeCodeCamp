---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: https://scrimba.com/c/c2QwKH2
forumTopicId: 18194
localeTitle: Глобальная и локальная область функций
---

## Description
<section id='description'>
Можно иметь как <dfn>локальные, так</dfn> и <dfn>глобальные</dfn> переменные с тем же именем. Когда вы это делаете, <code>local</code> переменная имеет приоритет над <code>global</code> переменной. В этом примере: <blockquote> var someVar = &quot;Hat&quot;; <br> function myFun () { <br> var someVar = &quot;Голова&quot;; <br> return someVar; <br> } </blockquote> Функция <code>myFun</code> вернет <code>&quot;Head&quot;</code> потому что присутствует <code>local</code> версия переменной.
</section>

## Instructions
<section id='instructions'>
Добавьте локальную переменную в функцию <code>myOutfit</code> чтобы переопределить значение <code>outerWear</code> с помощью <code>&quot;sweater&quot;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Do not change the value of the global <code>outerWear</code>
    testString: assert(outerWear === "T-Shirt");
  - text: <code>myOutfit</code> should return <code>"sweater"</code>
    testString: assert(myOutfit() === "sweater");
  - text: Do not change the return statement
    testString: assert(/return outerWear/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();

```

</div>

</section>

## Solution
<section id='solution'>

```js
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
```

</section>
