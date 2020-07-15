---
id: 567af2437cbaa8c51670a16c
title: Testing Objects for Properties
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8Q7Ua'
forumTopicId: 18324
localeTitle: 测试对象的属性
---

## Description
<section id='description'>
有时检查一个对象属性是否存在是非常有用的，我们可以用<code>.hasOwnProperty(propname)</code>方法来检查对象是否有该属性。如果有返回<code>true</code>，反之返回<code>false</code>。
<strong>示例</strong>

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
修改函数<code>checkObj</code>检查<code>myObj</code>是否有<code>checkProp</code>属性，如果属性存在，返回属性对应的值，如果不存在，返回<code>"Not Found"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkObj("gift")</code>应该返回<code>"pony"</code>。
    testString: assert(checkObj("gift") === "pony");
  - text: <code>checkObj("pet")</code>应该返回<code>"kitten"</code>。
    testString: assert(checkObj("pet") === "kitten");
  - text: <code>checkObj("house")</code>应该返回<code>"Not Found"</code>。
    testString: assert(checkObj("house") === "Not Found");

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
