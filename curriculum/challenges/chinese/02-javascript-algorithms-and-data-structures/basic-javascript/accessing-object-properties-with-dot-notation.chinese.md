---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: ''
localeTitle: 使用点表示法访问对象属性
---

## Description
<section id="description">有两种方法可以访问对象的属性：点表示法（ <code>.</code> ）和括号表示法（ <code>[]</code> ），类似于数组。当您知道要提前访问的属性的名称时，使用点符号。以下是使用点表示法（ <code>.</code> ）读取对象属性的示例： <blockquote> var myObj = { <br> prop1：“val1”， <br> prop2：“val2” <br> }; <br> var prop1val = myObj.prop1; // val1 <br> var prop2val = myObj.prop2; // val2 </blockquote></section>

## Instructions
<section id="instructions">使用点表示法读入<code>testObj</code>的属性值。将变量<code>hatValue</code>设置为等于对象的属性<code>hat</code> ，并将变量<code>shirtValue</code>设置为等于对象的属性<code>shirt</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hatValue</code>应该是一个字符串
    testString: 'assert(typeof hatValue === "string" , "<code>hatValue</code> should be a string");'
  - text: <code>hatValue</code>的值应该是<code>&quot;ballcap&quot;</code>
    testString: 'assert(hatValue === "ballcap" , "The value of <code>hatValue</code> should be <code>"ballcap"</code>");'
  - text: <code>shirtValue</code>应该是一个字符串
    testString: 'assert(typeof shirtValue === "string" , "<code>shirtValue</code> should be a string");'
  - text: <code>shirtValue</code>的值应该是<code>&quot;jersey&quot;</code>
    testString: 'assert(shirtValue === "jersey" , "The value of <code>shirtValue</code> should be <code>"jersey"</code>");'
  - text: 你应该使用点符号两次
    testString: 'assert(code.match(/testObj\.\w+/g).length > 1, "You should use dot notation twice");'

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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
