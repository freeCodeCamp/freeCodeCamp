---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1

videoUrl: ''
localeTitle: Write Concise Declarative Functions with ES6
---

## Description
<section id='description'>
在 ES5 中，当我们需要在对象中定义一个函数的时候，我们必须如下面这般使用<code>function</code>关键字：
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Taylor",<br>&nbsp;&nbsp;sayHello: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `Hello! My name is ${this.name}.`;<br>&nbsp;&nbsp;}<br>};</blockquote>
在 ES6 语法的对象中定义函数的时候，你可以完全删除<code>function</code>关键字和冒号。请看以下例子：
<blockquote>const person = {<br>&nbsp;&nbsp;name: "Taylor",<br>&nbsp;&nbsp;sayHello() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return `Hello! My name is ${this.name}.`;<br>&nbsp;&nbsp;}<br>};</blockquote>
</section>

## Instructions
<section id='instructions'>
使用以上这种简短的语法，重构在<code>bicycle</code>对象中的<code>setGear</code>函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不应使用<code>function</code>关键字定义方法。
    testString: assert(!getUserInput('index').match(/function/), '不应使用<code>function</code>关键字定义方法。');
  - text: <code>setGear</code>应是一个函数。
    testString: assert(typeof bicycle.setGear === 'function' && getUserInput('index').match(/setGear\s*\(.+\)\s*\{/), '<code>setGear</code>应是一个函数。');
  - text: 执行<code>bicycle.setGear(48)</code>应可以让<code>gear</code>的值变为 48。
    testString: assert((new bicycle.setGear(48)).gear === 48, '执行<code>bicycle.setGear(48)</code>应可以让<code>gear</code>的值变为 48。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              