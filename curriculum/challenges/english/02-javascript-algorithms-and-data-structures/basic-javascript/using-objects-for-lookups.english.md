---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
---

## Description
<section id='description'>
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a <code>switch</code> statement or an <code>if/else</code> chain. This is most useful when you know that your input data is limited to a certain range.
Here is an example of a simple reverse alphabet lookup:

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

</section>

## Instructions
<section id='instructions'>
Convert the switch statement into an object called <code>lookup</code>. Use it to look up <code>val</code> and assign the associated string to the <code>result</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>
    testString: assert(phoneticLookup("alpha") === 'Adams');
  - text: <code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>
    testString: assert(phoneticLookup("bravo") === 'Boston');
  - text: <code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>
    testString: assert(phoneticLookup("charlie") === 'Chicago');
  - text: <code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>
    testString: assert(phoneticLookup("delta") === 'Denver');
  - text: <code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>
    testString: assert(phoneticLookup("echo") === 'Easy');
  - text: <code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>
    testString: assert(phoneticLookup("foxtrot") === 'Frank');
  - text: <code>phoneticLookup("")</code> should equal <code>undefined</code>
    testString: assert(typeof phoneticLookup("") === 'undefined');
  - text: You should not modify the <code>return</code> statement
    testString: assert(code.match(/return\sresult;/));
  - text: You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements
    testString: assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,'')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```

</section>
