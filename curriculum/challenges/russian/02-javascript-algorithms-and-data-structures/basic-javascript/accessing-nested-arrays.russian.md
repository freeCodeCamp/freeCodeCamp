---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: https://scrimba.com/c/cLeGDtZ
forumTopicId: 16160
localeTitle: Доступ к вложенным массивам
---

## Description
<section id='description'>
Как мы видели в предыдущих примерах, объекты могут содержать как вложенные объекты, так и вложенные массивы. Подобно доступу к вложенным объектам, нотация матричного массива может быть привязана для доступа к вложенным массивам. Ниже приведен пример доступа к вложенному массиву: <blockquote> var ourPets = [ <br> { <br> animalType: &quot;cat&quot;, <br> имена: [ <br> &quot;Meowzer&quot;, <br> «Пушистый», <br> «Кит-Кат» <br> ] <br> }, <br> { <br> animalType: «собака», <br> имена: [ <br> &quot;Место&quot;, <br> &quot;Bowser&quot;, <br> «Фрэнки» <br> ] <br> } <br> ]; <br> ourPets [0] .names [1]; // &quot;Пушистый&quot; <br> ourPets [1] .names [0]; // &quot;Место&quot; </blockquote>
</section>

## Instructions
<section id='instructions'>
<code>myPlants</code> второе дерево из переменной <code>myPlants</code> используя <code>myPlants</code> объектов dot и массива.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondTree</code> should equal "pine"
    testString: assert(secondTree === "pine");
  - text: Use dot and bracket notation to access <code>myPlants</code>
    testString: assert(/=\s*myPlants\[1\].list\[1\]/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = ""; // Change this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(x) {
  if(typeof x != 'undefined') {
    return "secondTree = " + x;
  }
  return "secondTree is undefined";
})(secondTree);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];
```

</section>
