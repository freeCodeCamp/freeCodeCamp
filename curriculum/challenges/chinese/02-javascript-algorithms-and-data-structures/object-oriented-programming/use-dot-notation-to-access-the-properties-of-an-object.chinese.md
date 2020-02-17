---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
videoUrl: ''
localeTitle: 使用点表示法访问对象的属性
---

## Description
<section id="description">最后一个挑战创建了一个具有各种<code>properties</code>的<code>object</code> ，现在您将看到如何访问这些<code>properties</code>的值。这是一个例子： <blockquote>让duck = { <br>名称：“Aflac”， <br> numLegs：2 <br> }; <br>的console.log（duck.name）; <br> //这会将“Aflac”打印到控制台</blockquote>点符号用于<code>object</code>名称<code>duck</code> ，后跟<code>property</code> <code>name</code> ，以访问“Aflac”的值。 </section>

## Instructions
<section id="instructions">将以下<code>dog</code>对象的两个<code>properties</code>打印到控制台。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该使用<code>console.log</code>来打印<code>dog</code>对象的<code>name</code>属性的值。
    testString: assert(/console.log\(.*dog\.name.*\)/g.test(code));
  - text: 您应该使用<code>console.log</code>来打印<code>dog</code>对象的<code>numLegs</code>属性的值。
    testString: assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
