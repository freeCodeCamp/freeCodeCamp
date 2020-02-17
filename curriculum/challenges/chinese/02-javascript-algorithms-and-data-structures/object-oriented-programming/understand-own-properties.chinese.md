---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
videoUrl: ''
localeTitle: 了解自己的属性
---

## Description
<section id="description">在以下示例中， <code>Bird</code>构造函数定义了两个属性： <code>name</code>和<code>numLegs</code> ： <blockquote> function Bird（name）{ <br> this.name = name; <br> this.numLegs = 2; <br> } <br><br>让鸭子=新鸟（“唐纳德”）; <br>让金丝雀=新鸟（“特威蒂”）; </blockquote> <code>name</code>和<code>numLegs</code>称为<code>own</code>属性，因为它们直接在实例对象上定义。这意味着<code>duck</code>和<code>canary</code>每个都有自己独立的这些属性的副本。事实上， <code>Bird</code>每个实例都有自己的这些属性的副本。下面的代码将所有的<code>own</code>的性质<code>duck</code>到阵列<code>ownProps</code> ： <blockquote>让ownProps = []; <br><br> for（let duck in duck）{ <br> if（duck.hasOwnProperty（property））{ <br> ownProps.push（属性）; <br> } <br> } <br><br>的console.log（ownProps）; //打印[“name”，“numLegs”] </blockquote></section>

## Instructions
<section id="instructions">将<code>canary</code> <code>own</code>属性添加到数组<code>ownProps</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ownProps</code>应包含值<code>&quot;numLegs&quot;</code>和<code>&quot;name&quot;</code> 。
    testString: assert(ownProps.indexOf("name") !== -1 && ownProps.indexOf("numLegs") !== -1);
  - text: 无需使用内置方法<code>Object.keys()</code>即可解决此挑战。
    testString: assert(!/\Object.keys/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
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
