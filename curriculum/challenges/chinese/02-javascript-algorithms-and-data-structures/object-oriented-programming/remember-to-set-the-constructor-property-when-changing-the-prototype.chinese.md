---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
videoUrl: ''
localeTitle: 请记住在更改原型时设置构造函数属性
---

## Description
<section id="description">将<code>prototype</code>手动设置为新对象有一个至关重要的副作用。它擦除了<code>constructor</code>属性！上一个挑战中的代码将为<code>duck</code>打印以下内容： <blockquote>执行console.log（duck.constructor） <br> //打印&#39;undefined&#39; - 哎呀！ </blockquote>要解决此问题，每当手动将原型设置为新对象时，请记住定义<code>constructor</code>属性： <blockquote> Bird.prototype = { <br>构造函数：Bird，//定义构造函数属性<br> numLegs：2， <br>吃：function（）{ <br> console.log（“nom nom nom”）; <br> }， <br> describe：function（）{ <br> console.log（“我的名字是”+ this.name）; <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions">在<code>Dog</code> <code>prototype</code>上定义<code>constructor</code>属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该设置<code>constructor</code>属性。
    testString: 'assert(Dog.prototype.constructor === Dog, "<code>Dog.prototype</code> should set the <code>constructor</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
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
