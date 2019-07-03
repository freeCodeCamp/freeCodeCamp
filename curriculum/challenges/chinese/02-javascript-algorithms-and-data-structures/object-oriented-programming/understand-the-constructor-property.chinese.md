---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1

videoUrl: ''
localeTitle: Understand the Constructor Property
---

## Description
<section id='description'>
在上一个挑战中创建的实例对象<code>duck</code>和<code>beagle</code>都有一个特殊的<code>constructor</code>属性：
<blockquote>let duck = new Bird();<br>let beagle = new Dog();<br><br>console.log(duck.constructor === Bird);  //输出 true<br>console.log(beagle.constructor === Dog);  //输出 true</blockquote>
需要注意到的是这个<code>constructor</code>属性是对创建这个实例的构造函数的一个引用。
<code>constructor</code>属性存在的一个优势是，我们可以通过检查这个属性来找出它是一个什么样的对象。下面是一个例子，来看看是怎么使用的：
<blockquote>function joinBirdFraternity(candidate) {<br>&nbsp;&nbsp;if (candidate.constructor === Bird) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>&nbsp;&nbsp;}<br>}</blockquote>
<strong>注意：</strong><br>由于<code>constructor</code>属性可以被重写（在下面两节挑战中将会遇到），所以使用<code>instanceof</code>方法来检查对象的类型会更好。
</section>

## Instructions
<section id='instructions'>
写一个<code>joinDogFraternity</code>函数，传入一个<code>candidate</code>参数并使用<code>constructor</code>属性来判断传入的 candidate 是不是<code>Dog</code>创建的对象实例，如果是，就返回<code>true</code>，否则返回<code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code>应该被定义为一个函数。
    testString: assert(typeof(joinDogFraternity) === 'function', '<code>joinDogFraternity</code>应该被定义为一个函数。');
  - text: 如果<code>candidate</code>是<code>Dog</code>的一个对象实例，则<code>joinDogFraternity</code>函数应该返回<code>true</code>。
    testString: assert(joinDogFraternity(new Dog("")) === true, '如果<code>candidate</code>是<code>Dog</code>的一个对象实例，则<code>joinDogFraternity</code>函数应该返回<code>true</code>。');
  - text: <code>joinDogFraternity</code>中应该用到<code>constructor</code>属性。
    testString: assert(/\.constructor/.test(code) && !/instanceof/.test(code), '<code>joinDogFraternity</code>中应该用到<code>constructor</code>属性。');

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
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

</section>
              