---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
videoUrl: ''
localeTitle: 迭代所有属性
---

## Description
<section id="description">您现在已经看到了两种属性： <code>own</code>属性和<code>prototype</code>属性。 <code>Own</code>属性直接在对象实例本身上定义。和<code>prototype</code>属性所定义的<code>prototype</code> 。 <blockquote> function Bird（name）{ <br> this.name = name; //拥有财产<br> } <br><br> Bird.prototype.numLegs = 2; //原型属性<br><br>让鸭子=新鸟（“唐纳德”）; </blockquote>以下是如何将<code>duck</code> <code>own</code>属性添加到数组<code>ownProps</code>和<code>prototype</code>属性到数组<code>prototypeProps</code> ： <blockquote>让ownProps = []; <br>让prototypeProps = []; <br><br> for（let duck in duck）{ <br> if（duck.hasOwnProperty（property））{ <br> ownProps.push（属性）; <br> } else { <br> prototypeProps.push（属性）; <br> } <br> } <br><br>的console.log（ownProps）; //打印[“名称”] <br>的console.log（prototypeProps）; //打印[“numLegs”] </blockquote></section>

## Instructions
<section id="instructions">所有添加<code>own</code>的属性<code>beagle</code>到数组<code>ownProps</code> 。将<code>Dog</code>所有<code>prototype</code>属性添加到数组<code>prototypeProps</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ownProps</code>数组应包含<code>&quot;name&quot;</code> 。
    testString: 'assert(ownProps.indexOf("name") !== -1, "The <code>ownProps</code> array should include <code>"name"</code>.");'
  - text: <code>prototypeProps</code>数组应该包含<code>&quot;numLegs&quot;</code> 。
    testString: 'assert(prototypeProps.indexOf("numLegs") !== -1, "The <code>prototypeProps</code> array should include <code>"numLegs"</code>.");'
  - text: 无需使用内置方法<code>Object.keys()</code>即可解决此挑战。
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

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
// solution required
```
</section>
