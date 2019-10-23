---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
videoUrl: ''
localeTitle: 在对象上创建方法
---

## Description
<section id="description"> <code>Objects</code>可以具有特殊类型的<code>property</code> ，称为<code>method</code> 。 <code>Methods</code>是作为函数的<code>properties</code> 。这会为<code>object</code>添加不同的行为。这是一个方法的<code>duck</code>示例： <blockquote>让duck = { <br>名称：“Aflac”， <br> numLegs：2， <br> sayName：function（）{return“这个鸭子的名字是”+ duck.name +“。”;} <br> }; <br> duck.sayName（）; <br> //返回“这个鸭子的名字是Aflac。” </blockquote>该示例添加了<code>sayName</code> <code>method</code> ，该<code>method</code>是一个返回给出<code>duck</code>名称的句子的函数。请注意，该<code>method</code>使用<code>duck.name</code>访问return语句中的<code>name</code>属性。下一个挑战将包括另一种方法。 </section>

## Instructions
<section id="instructions">使用<code>dog</code> <code>object</code> ，给它一个名为<code>sayLegs</code>的方法。该方法应该返回句子“这条狗有4条腿”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code>应该是一个函数。
    testString: 'assert(typeof(dog.sayLegs) === "function", "<code>dog.sayLegs()</code> should be a function.");'
  - text: <code>dog.sayLegs()</code>应返回给定的字符串 - 请注意标点符号和间距很重要。
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string - note that punctuation and spacing matter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
