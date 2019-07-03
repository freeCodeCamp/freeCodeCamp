---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1

videoUrl: ''
localeTitle: Understand Own Properties
---

## Description
<section id='description'>
请看下面的实例，<code>Bird</code>构造函数定义了两个属性：<code>name</code>和<code>numLegs</code>：
<blockquote>function Bird(name) {<br>&nbsp;&nbsp;this.name  = name;<br>&nbsp;&nbsp;this.numLegs = 2;<br>}<br><br>let duck = new Bird("Donald");<br>let canary = new Bird("Tweety");</blockquote>
<code>name</code>和<code>numLegs</code>被叫做<code>自身</code>属性，因为他们是直接在实例对象上定义的。这就意味着<code>duck</code>和<code>canary</code>这两个对象分别拥有这些属性的独立副本。
事实上，<code>Bird</code>的这些实例都将拥有这些属性的独立副本。
以下的代码将<code>duck</code>里面所有的<code>自身</code>属性都存到一个叫<code>ownProps</code>的数组里面：
<blockquote>let ownProps = [];<br><br>for (let property in duck) {<br>&nbsp;&nbsp;if(duck.hasOwnProperty(property)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;ownProps.push(property);<br>&nbsp;&nbsp;}<br>}<br><br>console.log(ownProps); // prints [ "name", "numLegs" ]</blockquote>
</section>

## Instructions
<section id='instructions'>
将<code>canary</code>对象里面的<code>自身</code>属性添加到<code>ownProps</code>数组里面。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>ownProps</code>应该包含<code>'numLegs'</code>和<code>'name'</code>两个属性的值。"
    testString: assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1, '<code>ownProps</code>应该包含<code>"numLegs"</code>和<code>"name"</code>两个属性的值。');
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
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];
  
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }
  
  return props;
}

const ownProps = getOwnProps(canary);
```

</section>
              