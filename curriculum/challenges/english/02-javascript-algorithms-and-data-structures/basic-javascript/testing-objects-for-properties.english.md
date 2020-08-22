---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c6Wz4ySr'
forumTopicId: 18324
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
Modify the function <code>checkObj</code> to test if an object passed to the function (<code>obj</code>) contains a specific property (<code>checkProp</code>). If the property is found, return that property's value. If not, return <code>"Not Found"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")</code> should return <code>"pony"</code>.'
    testString: 'assert(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") === "pony");'
  - text: '<code>checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")</code> should return <code>"kitten"</code>.'
    testString: 'assert(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") === "kitten");'
  - text: '<code>checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")</code> should return <code>"Not Found"</code>.'
    testString: 'assert(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") === "Not Found");'
  - text: '<code>checkObj({city: "Seattle"}, "city")</code> should return <code>"Seattle"</code>.'
    testString: 'assert(checkObj({city: "Seattle"}, "city") === "Seattle");'
  - text: '<code>checkObj({city: "Seattle"}, "district")</code> should return <code>"Not Found"</code>.'
    testString: 'assert(checkObj({city: "Seattle"}, "district") === "Not Found");'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```

</section>
