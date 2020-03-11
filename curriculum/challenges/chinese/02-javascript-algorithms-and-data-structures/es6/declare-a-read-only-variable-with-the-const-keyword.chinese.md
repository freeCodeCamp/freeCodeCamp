---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
videoUrl: ''
localeTitle: 使用const关键字声明只读变量
---

## Description
<section id="description"> <code>let</code>不是声明变量的唯一新方法。在ES6中，您还可以使用<code>const</code>关键字声明变量。 <code>const</code>拥有所有的真棒功能， <code>let</code>具有，与额外的奖励，使用声明的变量<code>const</code>是只读的。它们是一个常量值，这意味着一旦变量被赋值为<code>const</code> ，就无法重新赋值。 <blockquote> "use strict" <br> const FAV_PET ="Cats"; <br> FAV_PET = "Dogs"; //返回错误</blockquote>如您所见，尝试重新分配使用<code>const</code>声明的变量将引发错误。您应该始终使用<code>const</code>关键字命名您不想重新分配的变量。当您意外尝试重新分配一个旨在保持不变的变量时，这会有所帮助。命名常量时的常见做法是使用全部大写字母，单词用下划线分隔。 </section>

## Instructions
<section id="instructions">更改代码，以便使用<code>let</code>或<code>const</code>声明所有变量。如果希望变量更改，请使用<code>let</code> ;如果希望变量保持不变，请使用<code>const</code> 。此外，重命名用<code>const</code>声明的变量以符合常规做法，这意味着常量应该全部大写。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code>在您的代码中不存在。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>SENTENCE</code>应该是用<code>const</code>声明的常量变量。
    testString: getUserInput => assert(getUserInput('index').match(/(const SENTENCE)/g));
  - text: <code>i</code>应该以<code>let</code>来宣布。
    testString: getUserInput => assert(getUserInput('index').match(/(let i)/g));
  - text: 应更改<code>console.log</code>以打印<code>SENTENCE</code>变量。
    testString: getUserInput => assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
