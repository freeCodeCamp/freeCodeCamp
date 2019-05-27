---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8Q7Ua'
---

## Description
<section id='description'>
Sometimes it is useful to check if the property of a given object exists or not. We can use the <code>.hasOwnProperty(propname)</code> method of objects to determine if that object has the given property name. <code>.hasOwnProperty()</code> returns <code>true</code> or <code>false</code> if the property is found or not.
<strong>Example</strong>

```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

</section>

## Instructions
<section id='instructions'>
Modify the function <code>checkObj</code> to test <code>myObj</code> for <code>checkProp</code>. If the property is found, return that property's value. If not, return <code>"Not Found"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkObj("gift")</code> should return  <code>"pony"</code>.
    testString: assert(checkObj("gift") === "pony", '<code>checkObj("gift")</code> should return  <code>"pony"</code>.');
  - text: <code>checkObj("pet")</code> should return  <code>"kitten"</code>.
    testString: assert(checkObj("pet") === "kitten", '<code>checkObj("pet")</code> should return  <code>"kitten"</code>.');
  - text: <code>checkObj("house")</code> should return  <code>"Not Found"</code>.
    testString: assert(checkObj("house") === "Not Found", '<code>checkObj("house")</code> should return  <code>"Not Found"</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
```

</div>



</section>

## Solution
<section id='solution'>


```js
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
```

</section>
