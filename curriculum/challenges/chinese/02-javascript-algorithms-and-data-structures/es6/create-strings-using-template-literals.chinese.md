---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
videoUrl: ''
localeTitle: 使用模板文字创建字符串
---

## Description
<section id="description"> ES6的一个新功能是<dfn>模板文字</dfn> 。这是一种特殊类型的字符串，可以更轻松地创建复杂字符串。模板文字允许您创建多行字符串并使用字符串插值功能来创建字符串。考虑以下代码： <blockquote> const person = { <br>name: "Zodiac Hasbro"， <br>age: 56<br> }; <br><br> //具有多行和字符串插值的模板文字<br> const greeting =`您好，我的名字是${person.name}！ <br>我是${person.age}岁。` <br><br>的console.log(greeting); //打印<br> //你好，我的名字是Zodiac Hasbro！ <br> //我今年56岁<br></blockquote>那里发生了很多事情。首先，例如使用反引号（ <code>`</code> ），而不是引号（ <code>&#39;</code>或<code>&quot;</code> ），换行字符串。其次，请注意，该字符串是多线，无论是在代码和输出。这节省了插入<code>\n</code>串内。上面使用的<code>${variable}</code>语法是占位符。基本上，您不必再使用<code>+</code>运算符连接。要将变量添加到字符串，只需将变量放在模板字符串中并用<code>${</code>包装它<code>}</code>同样，您可以在您的字符串表达式的其他文字，例如<code>${a + b}</code>这个新创建的字符串的方式为您提供了更大的灵活性，以创建强大的字符串。 </section>

## Instructions
<section id="instructions">使用带有反引号的模板文字语法来显示<code>result</code>对象的<code>failure</code>数组的每个条目。每个条目都应该包含在一个带有class属性<code>text-warning</code>的<code>li</code>元素中，并列在<code>resultDisplayArray</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code>是一个包含<code>result failure</code>消息的数组。
    testString: 'assert(typeof makeList(result.failure) === "object" && resultDisplayArray.length === 3, "<code>resultDisplayArray</code> is a list containing <code>result failure</code> messages.");'
  - text: <code>resultDisplayArray</code>是所需的输出。
    testString: 'assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class="text-warning">${result.failure[i]}</li>`), "<code>resultDisplayArray</code> is the desired output.");'
  - text: 使用了模板字符串
    testString: 'getUserInput => assert(getUserInput("index").match(/`.*`/g), "Template strings were not used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
