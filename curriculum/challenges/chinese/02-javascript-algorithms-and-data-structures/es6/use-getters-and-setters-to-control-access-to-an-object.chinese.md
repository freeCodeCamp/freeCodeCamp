---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
videoUrl: ''
localeTitle: 使用getter和setter来控制对象的访问
---

## Description
<section id="description">您可以从对象获取值，并在对象中设置属性的值。这些通常被称为<dfn>getter</dfn>和<dfn>setter</dfn> 。 Getter函数旨在简单地将对象的私有变量的值返回（获取）给用户，而无需用户直接访问私有变量。 Setter函数用于根据传递给setter函数的值修改（设置）对象私有变量的值。此更改可能涉及计算，甚至完全覆盖先前的值。 <blockquote> class Book { <br>构造函数（作者）{ <br> this._author = author; <br> } <br> // getter <br> get writer（）{ <br> return this._author; <br> } <br> // setter <br> set writer（updatedAuthor）{ <br> this._author = updatedAuthor; <br> } <br> } <br> const lol = new Book（&#39;anonymous&#39;）; <br>的console.log（lol.writer）; //匿名<br> lol.writer =&#39;wut&#39;; <br>的console.log（lol.writer）; //哇</blockquote>注意我们用来调用getter和setter的语法 - 就好像它们甚至不是函数一样。 Getter和setter很重要，因为它们隐藏了内部实现细节。 </section>

## Instructions
<section id="instructions">使用<code>class</code>关键字创建Thermostat类。构造函数接受华氏温度。现在在类中创建<code>getter</code>和<code>setter</code> ，以获得摄氏温度。请记住， <code>C = 5/9 * (F - 32)</code>和<code>F = C * 9.0 / 5 + 32</code> ，其中F是华氏温标的温度值，C是摄氏温度相同温度的值注意当你实现这一点，你将在一个等级中跟踪班级内的温度 - 华氏温度或摄氏温度。这是getter或setter的强大功能 - 您正在为另一个用户创建一个API，无论您追踪哪个用户，都可以获得正确的结果。换句话说，您正在从使用者那里抽象出实现细节。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code>应该是一个<code>class</code>具有限定<code>constructor</code>方法。
    testString: 'assert(typeof Thermostat === "function" && typeof Thermostat.constructor === "function","<code>Thermostat</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: <code>class</code>关键字。
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Thermostat</code>可以实例化。
    testString: 'assert(() => {const t = new Thermostat(32); return typeof t === "object" && t.temperature === 0;}, "<code>Thermostat</code> can be instantiated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
