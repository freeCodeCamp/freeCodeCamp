---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/accessing-objects-properties-with-bracket-notation'
videoUrl: ''
localeTitle: 使用括号表示法访问对象属性
---

## Description
<section id="description">访问对象属性的第二种方法是括号表示法（ <code>[]</code> ）。如果您尝试访问的对象的属性在其名称中有空格，则需要使用括号表示法。但是，您仍然可以在没有空格的对象属性上使用括号表示法。以下是使用括号表示法读取对象属性的示例： <blockquote> var myObj = { <br> “太空名称”：“柯克”， <br> “更多空间”：“Spock”​​， <br> “NoSpace”：“USS Enterprise” <br> }; <br> myObj [“空间名称”]; //柯克<br> myObj [&#39;更多空间&#39;]; // Spock <br> MyObj中[ “无空间”]; // USS Enterprise </blockquote>请注意，其中包含空格的属性名称必须使用引号（单引号或双引号）。 </section>

## Instructions
<section id="instructions">使用括号表示法<code>testObj</code>属性<code>&quot;an entree&quot;</code> <code>testObj</code> <code>&quot;an entree&quot;</code>和<code>&quot;the drink&quot;</code>的<code>testObj</code> ，并分别将它们分配给<code>entreeValue</code>和<code>drinkValue</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code>应该是一个字符串
    testString: 'assert(typeof entreeValue === "string" , "<code>entreeValue</code> should be a string");'
  - text: <code>entreeValue</code>的值应该是<code>&quot;hamburger&quot;</code>
    testString: 'assert(entreeValue === "hamburger" , "The value of <code>entreeValue</code> should be <code>"hamburger"</code>");'
  - text: <code>drinkValue</code>应该是一个字符串
    testString: 'assert(typeof drinkValue === "string" , "<code>drinkValue</code> should be a string");'
  - text: <code>drinkValue</code>的值应该是<code>&quot;water&quot;</code>
    testString: 'assert(drinkValue === "water" , "The value of <code>drinkValue</code> should be <code>"water"</code>");'
  - text: 您应该使用括号表示法两次
    testString: 'assert(code.match(/testObj\s*?\[("|")[^""]+\1\]/g).length > 1, "You should use bracket notation twice");'

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
