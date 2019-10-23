---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: 使用类语法定义构造函数
---

## Description
<section id="description"> ES6使用关键字<dfn>class</dfn>提供了一种帮助创建对象的新语法。需要注意的是， <code>class</code>语法只是一种语法，而不是面向对象范例的完整的基于类的实现，不像Java，Python或Ruby等语言。在ES5中，我们通常定义一个构造函数function，并使用<code>new</code>关键字实例化一个对象。 <blockquote> var SpaceShuttle = function（targetPlanet）{ <br> this.targetPlanet = targetPlanet; <br> } <br> var zeus = new SpaceShuttle（&#39;Jupiter&#39;）; </blockquote>类语法只是替换构造函数创建： <blockquote> class SpaceShuttle { <br>构造（targetPlanet）{ <br> this.targetPlanet = targetPlanet; <br> } <br> } <br> const zeus = new SpaceShuttle（&#39;Jupiter&#39;）; </blockquote>请注意， <code>class</code>关键字声明了一个新函数，并添加了一个构造函数，该函数将在调用<code>new</code>调用 - 以创建新对象。 </section>

## Instructions
<section id="instructions">使用<code>class</code>关键字并编写适当的构造函数来创建<code>Vegetable</code>类。使用<code>Vegetable</code>可以创建具有属性<code>name</code>的蔬菜对象，以传递给构造函数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code>应该是一个<code>class</code>具有限定<code>constructor</code>方法。
    testString: 'assert(typeof Vegetable === "function" && typeof Vegetable.constructor === "function", "<code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: <code>class</code>关键字。
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Vegetable</code>可以实例化。
    testString: 'assert(() => {const a = new Vegetable("apple"); return typeof a === "object";},"<code>Vegetable</code> can be instantiated.");'
  - text: <code>carrot.name</code>应该返回<code>carrot</code> 。
    testString: 'assert(carrot.name=="carrot","<code>carrot.name</code> should return <code>carrot</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
