---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1

videoUrl: ''
localeTitle: Declare a Read-Only Variable with the const Keyword
---

## Description
<section id='description'>
<code>let</code>并不是唯一的新的声明变量的方式。在 ES6里面，你还可以使用<code>const</code>关键字来声明变量。
<code>const</code>拥有<code>let</code>的所有优点，所不同的是，通过<code>const</code>声明的变量是只读的。这意味着通过<code>const</code>声明的变量只能被赋值一次，而不能被再次赋值。
<blockquote>"use strict"<br>const FAV_PET = "Cats";<br>FAV_PET = "Dogs"; // 报错 </blockquote>
可以看见，尝试给通过<code>const</code>声明的变量再次赋值会报错。你应该使用<code>const</code>关键字来对所有不打算再次赋值的变量进行声明。这有助于你避免给一个常量进行额外的再次赋值。一个最佳实践是对所有常量的命名采用全大写字母，并在单词之间使用下划线进行分隔。
</section>

## Instructions
<section id='instructions'>
改变以下代码，使得所有的变量都使用<code>let</code>或<code>const</code>关键词来声明。当变量将会改变的时候使用<code>let</code>关键字，当变量要保持常量的时候使用<code>const</code>关键字。同时，对使用<code>const</code>声明的变量进行最佳实践的重命名，变量名中的字母应该都是大写的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code>在代码中不存在。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'<code>var</code>在代码中不存在。');
  - text: <code>SENTENCE</code>应该是使用<code>const</code>声明的常量。
    testString: getUserInput => assert(getUserInput('index').match(/(const SENTENCE)/g), '<code>SENTENCE</code>应该是使用<code>const</code>声明的常量。');
  - text: <code>i</code>应该是使用<code>let</code>声明的变量。
    testString: getUserInput => assert(getUserInput('index').match(/(let i)/g), '<code>i</code>应该是使用<code>let</code>声明的变量。');
  - text: <code>console.log</code>应该修改为用于打印<code>SENTENCE</code>变量。
    testString: getUserInput => assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g), '<code>console.log</code>应该修改为用于打印<code>SENTENCE</code>变量。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              