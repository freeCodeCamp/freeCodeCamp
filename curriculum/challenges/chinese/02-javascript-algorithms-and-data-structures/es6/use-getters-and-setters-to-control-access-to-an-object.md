---
id: 587d7b8c367417b2b2512b54
challengeType: 1
forumTopicId: 301220
title: 使用 getter 和 setter 来控制对象的访问
---

## Description
<section id='description'>
你可以从对象中获得一个值，也可以给对象的属性赋值。
这些通常行为被称为 <dfn>getters</dfn> 以及 <dfn>setters</dfn>。
Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量。
Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。这些修改可以是计算，或者是直接替换之前的值。

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
```

注意我们调用 getter 和 setter 的语法，它们看起来并不像一个函数调用。
Getter 和 Setter 非常重要，因为它们隐藏了内部的实现细节。

<strong>注意：</strong> 通常会在私有变量前添加下划线（<code>_</code>）。这里并没有真正意义上让变量私有。
</section>

## Instructions
<section id='instructions'>
使用<code>class</code>关键字来创建<code>Thermostat</code>类，它的构造函数应该可以接收 fahrenheit（华氏温度）作为参数。
在类中创建 temperature 的 <code>getter</code>和<code>setter</code>，将温度转换成摄氏温度。
温度转换的公式是<code>C = 5/9 * (F - 32)</code>以及<code>F = C * 9.0 / 5 + 32</code>，F 代表华氏温度，C 代表摄氏温度。
<strong>注意：</strong> 当你实现这个作业的时候，你应当在类中使用一个温度标准，无论是华氏温度还是摄氏温度。
是时候展现 getter 和 setter 的威力了——无论你的 API 内部使用的是哪种温度标准，用户都能得到正确的结果。
或者说，你从用户需求中抽象出了实现细节。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Thermostat</code>应该是一个<code>class</code>，并且在其中定义了<code>constructor</code>方法。
    testString: assert(typeof Thermostat === 'function' && typeof Thermostat.constructor === 'function');
  - text: 应该使用 <code>class</code> 关键字。
    testString: assert(code.match(/class/g));
  - text: <code>Thermostat</code>应该可以被实例化。
    testString: assert((() => {const t = new Thermostat(32);return typeof t === 'object' && t.temperature === 0;})());
  - text: 应该定义一个 <code>getter</code>。
    testString: assert((() => {const desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');return !!desc && typeof desc.get === 'function';})());
  - text: 应该定义一个 <code>setter</code>。
    testString: assert((() => {const desc = Object.getOwnPropertyDescriptor(Thermostat.prototype, 'temperature');return !!desc && typeof desc.set === 'function';})());
  - text: 调用 <code>setter</code> 应该设置 temperature。
    testString: assert((() => {const t = new Thermostat(32); t.temperature = 26;return t.temperature !== 0;})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* Alter code below this line */

/* Alter code above this line */

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

/* Alter code below this line */
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```

</section>
