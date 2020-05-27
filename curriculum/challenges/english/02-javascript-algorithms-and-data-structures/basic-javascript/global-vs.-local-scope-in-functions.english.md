---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
---

## Description
<section id='description'>
It is possible to have both <dfn>local</dfn> and <dfn>global</dfn> variables with the same name. When you do this, the <code>local</code> variable takes precedence over the <code>global</code> variable.
In this example:

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

The function <code>myFun</code> will return <code>"Head"</code> because the <code>local</code> version of the variable is present.
</section>

## Instructions
<section id='instructions'>
Add a local variable to <code>myOutfit</code> function to override the value of <code>outerWear</code> with <code>"sweater"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not change the value of the global <code>outerWear</code>.
    testString: assert(outerWear === "T-Shirt");
  - text: <code>myOutfit</code> should return <code>"sweater"</code>.
    testString: assert(myOutfit() === "sweater");
  - text: You should not change the return statement.
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
