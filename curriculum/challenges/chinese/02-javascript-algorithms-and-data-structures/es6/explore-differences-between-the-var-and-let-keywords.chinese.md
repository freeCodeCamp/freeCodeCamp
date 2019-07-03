---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1

videoUrl: ''
localeTitle: Explore Differences Between the var and let Keywords
---

## Description
<section id='description'>
使用<code>var</code>关键字来声明变量，会出现重复声明导致变量被覆盖却不会报错的问题：
<blockquote>var camper = 'James';<br>var camper = 'David';<br>console.log(camper);<br>// 打印出 'David'</blockquote>
在上面的代码中，<code>camper</code>的初始值为<code>'James'</code>，然后又被覆盖成了<code>'David'</code>。
在小型的应用中，你可能不会遇到这样的问题，但是当你的代码规模变得更加庞大的时候，就可能会在不经意间覆盖了之前定义的变量。
这样的行为不会报错，导致了 debug 非常困难。<br>
在 ES6 中引入了新的关键字<code>let</code>来解决<code>var</code>关键字带来的潜在问题。
如果你在上面的代码中，使用了<code>let</code>关键字来代替<code>var</code>关键字，结果会是一个报错。
<blockquote>let camper = 'James';<br>let camper = 'David'; // 报错</blockquote>
你可以在浏览器的控制台里看见这个错误。
与<code>var</code>不同的是，当使用<code>let</code>的时候，同一名字的变量只能被声明一次。
请注意<code>"use strict"</code>。这代表着开启了严格模式，用于检测常见的代码错误以及"不安全"的行为，例如：
<blockquote>"use strict";<br>x = 3.14; // x 没有声明导致了报错</blockquote>
</section>

## Instructions
<section id='instructions'>
请更新这段代码，并且在其中只使用<code>let</code>关键字
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在代码中不应存在<code>var</code>。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'在代码中不应存在<code>var</code>。');
  - text: "<code>catName</code>变量的值应该为<code>'Oliver'</code>。"
    testString: assert(catName === "Oliver", '<code><code>catName</code>变量的值应该为<code>"Oliver"</code>。');
  - text: "<code>quote</code>变量的值应该为<code>'Oliver says Meow!'</code>"
    testString: assert(quote === "Oliver says Meow!", '<code>quote</code>变量的值应该为<code>"Oliver says Meow!"</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              