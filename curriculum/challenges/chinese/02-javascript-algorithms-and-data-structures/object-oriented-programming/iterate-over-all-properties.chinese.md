---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1

videoUrl: ''
localeTitle: Iterate Over All Properties
---

## Description
<section id='description'>
现在你已经了解了两种属性: <code>自身</code>属性和<code>原型</code>属性。<code>自身</code>属性是直接在对象上定义的。而<code>原型</code>属性是定义在<code>prototype</code>上的：
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name = name;  // 自身属性 <br>}<br><br>Bird.prototype.numLegs = 2; // 原型属性 <br><br>let duck = new Bird("Donald");</blockquote>
这个示例会告诉你如何将<code>duck</code>的<code>自身</code>属性和<code>原型</code>属性分别添加到<code>ownProps</code>数组和<code>prototypeProps</code>数组里面：
<blockquote>let ownProps = [];<br>let prototypeProps = [];<br><br>for (let property in duck) {<br>&nbsp;&nbsp;if(duck.hasOwnProperty(property)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ownProps.push(property);<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;prototypeProps.push(property);<br>&nbsp;&nbsp;}<br>}<br><br>console.log(ownProps); // 输出 ["name"]<br>console.log(prototypeProps); // 输出 ["numLegs"]</blockquote>
</section>

## Instructions
<section id='instructions'>
将<code>beagle</code>的所有属性都添加到<code>ownProps</code>数组里面去。将<code>Dog</code>的所有<code>原型</code>属性添加到<code>prototypeProps</code>数组中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "这个<code>ownProps</code>数组应该包含<code>'name'</code>这个值。"
    testString: assert(ownProps.indexOf('name') !== -1, '这个<code>ownProps</code>属性应该包含<code>"name"</code>这个值。');
  - text: "这个<code>prototypeProps</code>数组应该包含<code>'numLegs'</code>这个值。"
    testString: assert(prototypeProps.indexOf('numLegs') !== -1, '这个<code>prototypeProps</code>数组应该包含<code>"numLegs"</code>这个值。');
  - text: 在不使用内置方法<code>Object.keys()</code>的情况下完成这个挑战。
    testString: assert(!/\Object.keys/.test(code), '在不使用内置方法<code>Object.keys()</code>的情况下完成这个挑战。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```

</section>
              