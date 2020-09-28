---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: https://scrimba.com/c/c9MEKHZ
forumTopicId: 18280
localeTitle: Список покупок
---

## Description
<section id='description'>
Создайте список покупок в переменной <code>myList</code> . Список должен быть многомерным массивом, содержащим несколько подмассивов. Первый элемент в каждом под-массиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим количество, т. Е. <code>[&quot;Chocolate Bar&quot;, 15]</code> В списке должно быть не менее 5 под-массивов.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> should be an array
    testString: assert(isArray);
  - text: The first elements in each of your sub-arrays must all be strings
    testString: assert(hasString);
  - text: The second elements in each of your sub-arrays must all be numbers
    testString: assert(hasNumber);
  - text: You must have at least 5 items in your list
    testString: assert(count > 4);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myList = [];

```

</div>

### After Tests
<div id='js-teardown'>

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```

</section>
