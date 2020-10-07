---
id: 56533eb9ac21ba0edf2244c7
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
title: 通过点符号访问对象属性
---

## Description
<section id='description'>
有两种方式访问对象属性，一个是点操作符(<code>.</code>)，一个是中括号操作符(<code>[]</code>)。
当你知道所要读取的属性的名称的时候，使用点操作符。
这是一个使用点操作符读取对象属性的例子：

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

</section>

## Instructions
<section id='instructions'>
通过点操作符读取对象<code>testObj</code>，把<code>hat</code>的属性值赋给变量<code>hatValue</code>，把<code>shirt</code>的属性值赋给<code>shirtValue</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hatValue</code>应该是一个字符串。
    testString: assert(typeof hatValue === 'string' );
  - text: <code>hatValue</code>的值应该是<code>"ballcap"</code>。
    testString: assert(hatValue === 'ballcap' );
  - text: <code>shirtValue</code>应该是一个字符串。
    testString: assert(typeof shirtValue === 'string' );
  - text: <code>shirtValue</code>的值应该是<code>"jersey"</code>。
    testString: assert(shirtValue === 'jersey' );
  - text: 你应该使用点操作符两次。
    testString: assert(code.match(/testObj\.\w+/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line
```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

</section>
