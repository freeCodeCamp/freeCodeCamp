---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: 探索var和let关键字之间的差异
---

## Description
<section id="description">使用<code>var</code>关键字声明变量的最大问题之一是您可以在没有错误的情况下覆盖变量声明。 <blockquote> var camper =&#39;詹姆斯&#39;; <br> var camper =&#39;大卫&#39;; <br>的console.log（野营车）; <br> //记录&#39;大卫&#39; </blockquote>正如您在上面的代码中看到的那样， <code>camper</code>变量最初被声明为<code>James</code> ，然后被重写为<code>David</code> 。在小型应用程序中，您可能不会遇到此类问题，但是当您的代码变大时，您可能会意外覆盖您不打算覆盖的变量。因为这种行为不会引发错误，所以搜索和修复错误变得更加困难。 <br>在ES6中引入了一个名为<code>let</code>的新关键字，用<code>var</code>关键字解决了这个潜在的问题。如果要在上面代码的变量声明中用<code>let</code>替换<code>var</code> ，结果将是一个错误。 <blockquote>让露营者=&#39;詹姆斯&#39;; <br>让露营者=&#39;大卫&#39;; //抛出错误</blockquote>您可以在浏览器的控制台中看到此错误。因此与<code>var</code>不同，使用<code>let</code> ，具有相同名称的变量只能声明一次。注意<code>&quot;use strict&quot;</code> 。这启用了严格模式，可以捕获常见的编码错误和“不安全”操作。例如： <blockquote> “严格使用”; <br> x = 3.14; //因为未声明x而抛出错误</blockquote></section>

## Instructions
<section id="instructions">更新代码，使其仅使用<code>let</code>关键字。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code>在代码中不存在。
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: <code>catName</code>应该是<code>Oliver</code> 。
    testString: 'assert(catName === "Oliver", "<code>catName</code> should be <code>Oliver</code>.");'
  - text: <code>quote</code>应该是<code>&quot;Oliver says Meow!&quot;</code>
    testString: 'assert(quote === "Oliver says Meow!", "<code>quote</code> should be <code>"Oliver says Meow!"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
