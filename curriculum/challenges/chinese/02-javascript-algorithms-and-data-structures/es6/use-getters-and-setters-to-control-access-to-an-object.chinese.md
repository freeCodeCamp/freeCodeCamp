---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1

videoUrl: ''
localeTitle: Use getters and setters to Control Access to an Object
---

## Description
<section id='description'>
你可以从对象中获得一个值，也可以给对象的属性赋值。
这些通常行为被称为 <dfn>getters</dfn> 以及 <dfn>setters</dfn>。
Getter 函数的作用是可以让返回一个对象私有变量的值给用户，而不需要直接去访问私有变量。
Setter 函数的作用是可以基于传进的参数来修改对象中私有变量的值。这些修改可以是计算，或者是直接替换之前的值。
<blockquote>class Book {<br>&nbsp;&nbsp;constructor(author) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this._author = author;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;// getter<br>&nbsp;&nbsp;get writer(){<br>&nbsp;&nbsp;&nbsp;&nbsp;return this._author;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;// setter<br>&nbsp;&nbsp;set writer(updatedAuthor){<br>&nbsp;&nbsp;&nbsp;&nbsp;this._author = updatedAuthor;<br>&nbsp;&nbsp;}<br>}<br>const lol = new Book('anonymous');<br>console.log(lol.writer);&nbsp;&nbsp;// anonymous<br>lol.writer = 'wut';<br>console.log(lol.writer);&nbsp;&nbsp;// wut</blockquote>
注意我们调用 getter 和 setter 的语法，它们看起来并不像一个函数调用。
Getter 和 Setter 非常重要，因为它们隐藏了内部的实现细节。
</section>

## Instructions
<section id='instructions'>
使用<code>class</code>关键字来创建<code>Thermostat</code>类，它的构造函数应该可以接收华氏温度作为参数。
在类中创建 <code>getter</code>和<code>setter</code>，将温度转换成摄氏温度。
温度转换的公式是<code>C = 5/9 * (F - 32)</code>以及<code>F = C * 9.0 / 5 + 32</code>，F 代表华氏温度，C 代表摄氏温度。
请注意
当你实现这个作业的时候，你应当在类中使用一个温度标准，无论是华氏温度还是摄氏温度。
是时候展现 getter 和 setter 的威力了——无论你的 API 内部使用的是哪种温度标准，用户都能得到正确的结果。
或者说，你从用户需求中抽象出了实现细节。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code>应该是一个<code>class</code>，并且在其中定义了<code>constructor</code>方法。
    testString: assert(typeof Thermostat === 'function' && typeof Thermostat.constructor === 'function','<code>Thermostat</code>应该是一个<code>class</code>，并且在其中定义了<code>constructor</code>方法。');
  - text: 使用了<code>class</code>关键字。
    testString: getUserInput => assert(getUserInput('index').match(/class/g),'使用了<code>class</code>关键字。');
  - text: <code>Thermostat</code>可以被实例化。
    testString: assert(() => {const t = new Thermostat(32); return typeof t === 'object' && t.temperature === 0;}, '<code>Thermostat</code>可以被实例化。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              