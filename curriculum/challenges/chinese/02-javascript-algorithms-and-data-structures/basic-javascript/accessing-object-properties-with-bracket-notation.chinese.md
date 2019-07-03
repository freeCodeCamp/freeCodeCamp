---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1

videoUrl: ''
localeTitle: Accessing Object Properties with Bracket Notation
---

## Description
<section id='description'>
第二种访问对象的方式就是中括号操作符(<code>[]</code>)，如果你想访问的属性的名称有一个空格，这时你只能使用中括号操作符(<code>[]</code>)。
这是一个使用中括号操作符(<code>[]</code>)读取对象属性的例子：
<blockquote>var myObj = {<br>&nbsp;&nbsp;"Space Name": "Kirk",<br>&nbsp;&nbsp;"More Space": "Spock",<br>&nbsp;&nbsp;"NoSpace": "USS Enterprise"<br>};<br>myObj["Space Name"]; // Kirk<br>myObj['More Space']; // Spock<br>myObj["NoSpace"];    // USS Enterprise</blockquote>
提示：属性名称中如果有空格，必须把属性名称用单引号或双引号包裹起来。
</section>

## Instructions
<section id='instructions'>
用中括号操作符读取对象<code>testObj</code>的属性<code>"an entree"</code>值和属性<code>"the drink"</code>值，并赋给<code>entreeValue</code>和<code>drinkValue</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code>应该是一个字符串
    testString: assert(typeof entreeValue === 'string' , '<code>entreeValue</code>应该是一个字符串');
  - text: "<code>entreeValue</code>的值应该是<code>'hamburger'</code>"
    testString: assert(entreeValue === 'hamburger' , '<code>entreeValue</code>的值应该是<code>"hamburger"</code>');
  - text: <code>drinkValue</code>应该是一个字符串
    testString: assert(typeof drinkValue === 'string' , '<code>drinkValue</code>应该是一个字符串');
  - text: "<code>drinkValue</code>的值应该是<code>'water'</code>"
    testString: assert(drinkValue === 'water' , '<code>drinkValue</code>的值应该是<code>"water"</code>');
  - text: 你应该使用中括号两次
    testString: assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1, '你应该使用中括号两次');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














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
              