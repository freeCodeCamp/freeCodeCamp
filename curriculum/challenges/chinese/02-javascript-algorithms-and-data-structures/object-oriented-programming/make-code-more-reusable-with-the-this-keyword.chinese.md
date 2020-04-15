---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
videoUrl: ''
localeTitle: 使用此关键字使代码更可重用
---

## Description
<section id="description">最后一个挑战为<code>duck</code>对象引入了一个<code>method</code> 。它使用<code>duck.name</code>点表示法来访问return语句中<code>name</code>属性的值： <code>sayName: function() {return &quot;The name of this duck is &quot; + duck.name + &quot;.&quot;;}</code>虽然这是有效的访问对象属性的方法，这里有一个陷阱。如果变量名称更改，则还需要更新引用原始名称的任何代码。在简短的对象定义中，它不是问题，但如果一个对象有很多对其属性的引用，则错误的可能性更大。避免这些问题的方法是使用<code>this</code>关键字： <blockquote>让duck = { <br>名称：“Aflac”， <br> numLegs：2， <br> sayName：function（）{return“这个鸭子的名字是”+ this.name +“。”;} <br> }; </blockquote> <code>this</code>是一个深刻的话题，上面的例子只是一种使用它的方法。在当前上下文中， <code>this</code>指的是与该方法相关联的对象： <code>duck</code> 。如果对象的名称更改为<code>mallard</code> ，则无需在代码中找到<code>duck</code>所有引用。它使代码可重用且易于阅读。 </section>

## Instructions
<section id="instructions">修改<code>dog.sayLegs</code>方法以删除对<code>dog</code>任何引用。使用<code>duck</code>示例进行指导。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code>应该返回给定的字符串。
    testString: assert(dog.sayLegs() === 'This dog has 4 legs.');
  - text: 您的代码应使用<code>this</code>关键字来访问<code>dog</code>的<code>numLegs</code>属性。
    testString: assert(code.match(/this\.numLegs/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
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
