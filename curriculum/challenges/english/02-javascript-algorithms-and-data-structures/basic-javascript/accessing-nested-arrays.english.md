---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
---

## Description
<section id='description'>
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
Here is an example of how to access a nested array:
<blockquote>var ourPets = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "cat",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Meowzer",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fluffy",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Kit-Cat"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "dog",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Spot",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Bowser",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Frankie"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;}<br>];<br>ourPets[0].names[1]; // "Fluffy"<br>ourPets[1].names[0]; // "Spot"</blockquote>
</section>

## Instructions
<section id='instructions'>
Retrieve the second tree from the variable <code>myPlants</code> using object dot and array bracket notation.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondTree</code> should equal "pine"
    testString: assert(secondTree === "pine", '<code>secondTree</code> should equal "pine"');
  - text: Use dot and bracket notation to access <code>myPlants</code>
    testString: assert(/=\s*myPlants\[1\].list\[1\]/.test(code), 'Use dot and bracket notation to access <code>myPlants</code>');

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


### After Test
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
