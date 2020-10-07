---
id: 587d7daf367417b2b2512b7d
challengeType: 1
forumTopicId: 301320
title: 迭代所有属性
---

## Description
<section id='description'>
现在你已经了解了两种属性: <code>自身</code>属性和<code>原型</code>属性。<code>自身</code>属性是直接在对象上定义的。而<code>原型</code>属性是定义在<code>prototype</code>上的：

```js
function Bird(name) {
  this.name = name;  // 自身属性
}

Bird.prototype.numLegs = 2; // 原型属性

let duck = new Bird("Donald");
```

这个示例会告诉你如何将<code>duck</code>的<code>自身</code>属性和<code>原型</code>属性分别添加到<code>ownProps</code>数组和<code>prototypeProps</code>数组里面：

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
```

</section>

## Instructions
<section id='instructions'>
将<code>beagle</code>的自身属性都添加到<code>ownProps</code>数组里面去。将<code>Dog</code>的所有<code>原型</code>属性添加到<code>prototypeProps</code>数组中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "这个<code>ownProps</code>数组应该包含<code>'name'</code>这个值。"
    testString: assert(ownProps.indexOf('name') !== -1);
  - text: "这个<code>prototypeProps</code>数组应该包含<code>'numLegs'</code>这个值。"
    testString: assert(prototypeProps.indexOf('numLegs') !== -1);
  - text: 在不使用内置方法<code>Object.keys()</code>的情况下完成这个挑战。
    testString: assert(!/\Object.keys/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line



```

</div>



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
