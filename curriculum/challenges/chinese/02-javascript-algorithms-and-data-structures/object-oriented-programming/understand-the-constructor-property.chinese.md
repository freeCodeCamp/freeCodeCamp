---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: 理解构造函数属性
---

## Description
<section id="description">在以前的挑战中创建的对象实例<code>duck</code>和<code>beagle</code>上有一个特殊的<code>constructor</code>属性： <blockquote> let duck = new Bird（）; <br>让beagle = new Dog（）; <br><br> console.log（duck.constructor === Bird）; //打印为true <br> console.log（beagle.constructor === Dog）; //打印为true </blockquote>请注意， <code>constructor</code>属性是对创建实例的构造函数的引用。 <code>constructor</code>属性的优点是可以检查此属性以找出它是什么类型的对象。以下是如何使用它的示例： <blockquote> function joinBirdFraternity（candidate）{ <br> if（candidate.constructor === Bird）{ <br>返回true; <br> } else { <br>返回虚假; <br> } <br> } </blockquote> <strong>注意</strong> <br>由于<code>constructor</code>属性可以被覆盖（将在接下来的两个挑战中讨论），因此通常最好使用<code>instanceof</code>方法来检查对象的类型。 </section>

## Instructions
<section id="instructions">编写一个<code>joinDogFraternity</code>函数，该函数接受<code>candidate</code>参数，并且如果候选者是<code>Dog</code> ，则使用<code>constructor</code>属性返回<code>true</code> ，否则返回<code>false</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code>应该被定义为一个函数。
    testString: assert(typeof(joinDogFraternity) === 'function');
  - text: 如果<code>candidate</code>是<code>Dog</code>一个实例， <code>joinDogFraternity</code>应该返回true。
    testString: assert(joinDogFraternity(new Dog("")) === true);
  - text: <code>joinDogFraternity</code>应该使用<code>constructor</code>属性。
    testString: assert(/\.constructor/.test(code) && !/instanceof/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {

}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
