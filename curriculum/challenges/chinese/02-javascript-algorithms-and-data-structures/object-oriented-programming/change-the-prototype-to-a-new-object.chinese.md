---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
videoUrl: ''
localeTitle: 将Prototype更改为新对象
---

## Description
<section id="description">到目前为止，您一直在为<code>prototype</code>添加属性： <blockquote> Bird.prototype.numLegs = 2; </blockquote>经过多个属性后，这变得乏味。 <blockquote> Bird.prototype.eat = function（）{ <br> console.log（“nom nom nom”）; <br> } <br><br> Bird.prototype.describe = function（）{ <br> console.log（“我的名字是”+ this.name）; <br> } </blockquote>更有效的方法是将<code>prototype</code>设置为已包含属性的新对象。这样，一次性添加属性： <blockquote> Bird.prototype = { <br> numLegs：2， <br>吃：function（）{ <br> console.log（“nom nom nom”）; <br> }， <br> describe：function（）{ <br> console.log（“我的名字是”+ this.name）; <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions">添加属性<code>numLegs</code>和两种方法<code>eat()</code>和<code>describe()</code>的<code>prototype</code>的<code>Dog</code>被设置<code>prototype</code>到一个新的对象。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该设置为一个新对象。
    testString: 'assert((/Dog\.prototype\s*?=\s*?{/).test(code), "<code>Dog.prototype</code> should be set to a new object.");'
  - text: <code>Dog.prototype</code>应该具有属性<code>numLegs</code> 。
    testString: 'assert(Dog.prototype.numLegs !== undefined, "<code>Dog.prototype</code> should have the property <code>numLegs</code>.");'
  - text: <code>Dog.prototype</code>应该有方法<code>eat()</code> 。
    testString: 'assert(typeof Dog.prototype.eat === "function", "<code>Dog.prototype</code> should have the method <code>eat()</code>."); '
  - text: <code>Dog.prototype</code>应该有方法<code>describe()</code> 。
    testString: 'assert(typeof Dog.prototype.describe === "function", "<code>Dog.prototype</code> should have the method <code>describe()</code>."); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
