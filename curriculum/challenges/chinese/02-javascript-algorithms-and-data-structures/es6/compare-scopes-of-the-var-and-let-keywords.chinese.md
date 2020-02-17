---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: 比较var的范围并让关键字
---

## Description
<section id="description">使用<code>var</code>关键字声明变量时，它将全局声明，如果在函数内声明，则声明为本地。 <code>let</code>关键字的行为类似，但具有一些额外的功能。在块，语句或表达式中使用<code>let</code>关键字声明变量时，其范围仅限于该块，语句或表达式。例如： <blockquote> var numArray = []; <br> for（var i = 0; i &lt;3; i ++）{ <br> numArray.push（ⅰ）; <br> } <br>的console.log（numArray）; <br> //返回[0,1,2] <br>的console.log（ⅰ）; <br> //返回3 </blockquote>使用<code>var</code>关键字， <code>i</code>被全局声明。因此，当执行<code>i++</code>时，它会更新全局变量。此代码类似于以下内容： <blockquote> var numArray = []; <br> var i; <br> for（i = 0; i &lt;3; i ++）{ <br> numArray.push（ⅰ）; <br> } <br>的console.log（numArray）; <br> //返回[0,1,2] <br>的console.log（ⅰ）; <br> //返回3 </blockquote>如果您要创建一个函数并将其存储以供以后在使用<code>i</code>变量的for循环中使用，则此行为将导致问题。这是因为存储的函数将始终引用更新的全局<code>i</code>变量的值。 <blockquote> var printNumTwo; <br> for（var i = 0; i &lt;3; i ++）{ <br> if（i === 2）{ <br> printNumTwo = function（）{ <br>return i; <br> }; <br> } <br> } <br>的console.log（printNumTwo（））; <br> //返回3 </blockquote>正如你所看到的， <code>printNumTwo()</code>打印3，而不是2.这是因为分配给该值<code>i</code>进行了更新和<code>printNumTwo()</code>返回全球<code>i</code> ，而不是价值<code>i</code>的作用是在创建for循环的时候了。 <code>let</code>关键字不遵循此行为： <blockquote> &#39;use strict&#39;; <br>让printNumTwo; <br> for（let i = 0; i &lt;3; i ++）{ <br> if（i === 2）{ <br> printNumTwo = function（）{ <br>return i;<br> }; <br> } <br> } <br>的console.log（printNumTwo（））; <br> //返回2 <br>的console.log（ⅰ）; <br> //返回“i没有定义” </blockquote> <code>i</code>没有定义，因为它没有在全局范围内声明。它仅在for循环语句中声明。 <code>printNumTwo()</code>返回正确的值，因为循环语句中的<code>let</code>关键字创建了具有唯一值（0,1和2）的三个不同的<code>i</code>变量。 </section>

## Instructions
<section id="instructions">修复代码，以便<code>i</code>在if语句中声明的是一个单独的变量，而不是<code>i</code>在函数的第一行声明的变量。确保不要在代码中的任何位置使用<code>var</code>关键字。本练习旨在说明<code>var</code>和<code>let</code>关键字如何将范围分配给声明的变量之间的区别。在编写与本练习中使用的函数类似的函数时，通常最好使用不同的变量名来避免混淆。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code>在代码中不存在。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: 在if语句中声明的变量<code>i</code>应该等于“块范围”。
    testString: getUserInput => assert(getUserInput('index').match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
  - text: <code>checkScope()</code>应该返回“函数范围”
    testString: assert(checkScope() === "function scope");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
"use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
