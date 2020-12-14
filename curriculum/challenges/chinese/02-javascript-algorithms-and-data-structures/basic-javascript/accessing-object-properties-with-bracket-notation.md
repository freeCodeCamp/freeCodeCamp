---
id: 56533eb9ac21ba0edf2244c8
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
title: 通过方括号访问对象属性
---

## Description
<section id='description'>
第二种访问对象的方式就是中括号操作符(<code>[]</code>)，如果你想访问的属性的名称有一个空格，这时你只能使用中括号操作符(<code>[]</code>)。
当然，如果属性名不包含空格，也可以使用中括号操作符。
这是一个使用中括号操作符(<code>[]</code>)读取对象属性的例子：

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
```

提示：属性名称中如果有空格，必须把属性名称用单引号或双引号包裹起来。
</section>

## Instructions
<section id='instructions'>
用中括号操作符读取对象<code>testObj</code>的<code>an entree</code>属性值和<code>the drink</code>属性值，并分别赋值给<code>entreeValue</code>和<code>drinkValue</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code>应该是一个字符串。
    testString: assert(typeof entreeValue === 'string' );
  - text: <code>entreeValue</code>的值应该是<code>"hamburger"</code>。
    testString: assert(entreeValue === 'hamburger' );
  - text: <code>drinkValue</code>应该是一个字符串。
    testString: assert(typeof drinkValue === 'string' );
  - text: <code>drinkValue</code>的值应该是<code>"water"</code>。
    testString: assert(drinkValue === 'water' );
  - text: 你应该使用中括号两次。
    testString: assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
```

</section>
