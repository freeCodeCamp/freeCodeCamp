---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
---

## Description
<section id='description'>
Create a shopping list in the variable <code>myList</code>. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
<code>["Chocolate Bar", 15]</code>
There should be at least 5 sub-arrays in the list.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myList</code> should be an array.
    testString: assert(isArray);
  - text: The first elements in each of your sub-arrays should all be strings.
    testString: assert(hasString);
  - text: The second elements in each of your sub-arrays should all be numbers.
    testString: assert(hasNumber);
  - text: You should have at least 5 items in your list.
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


### After Test
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
