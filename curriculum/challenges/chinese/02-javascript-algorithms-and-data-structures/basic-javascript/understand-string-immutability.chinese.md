---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: ''
localeTitle: 理解字符串不变性
---

## Description
<section id="description">在JavaScript中， <code>String</code>值是<dfn>不可变的</dfn> ，这意味着一旦创建它们就不能被更改。例如，以下代码： <blockquote> var myStr =“Bob”; <br> myStr [0] =“J”; </blockquote>无法将<code>myStr</code>的值更改为“Job”，因为<code>myStr</code>的内容无法更改。请注意，这<em>并不</em>意味着<code>myStr</code>不能改变的，只是一个<dfn>字符串</dfn>的单个字符不能改变。更改<code>myStr</code>的唯一方法是为其分配一个新字符串，如下所示： <blockquote> var myStr =“Bob”; <br> myStr =“工作”; </blockquote></section>

## Instructions
<section id="instructions">更正<code>myStr</code>的赋值，使其包含<code>Hello World</code>的字符串值，使用上面示例中显示的方法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code>应该具有<code>Hello World</code>的值
    testString: assert(myStr === "Hello World");
  - text: 不要更改行上方的代码
    testString: assert(/myStr = "Jello World"/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix Me

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
