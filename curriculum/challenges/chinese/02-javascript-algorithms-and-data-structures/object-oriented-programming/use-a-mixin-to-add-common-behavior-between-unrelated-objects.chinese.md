---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
videoUrl: ''
localeTitle: 使用Mixin在不相关的对象之间添加常见行为
---

## Description
<section id="description">如您所见，行为通过继承来共享。但是，有些情况下继承不是最佳解决方案。对于像<code>Bird</code>和<code>Airplane</code>这样的无关对象，继承不起作用。它们都可以飞行，但是<code>Bird</code>不是一种<code>Airplane</code> ，反之亦然。对于不相关的对象，最好使用<code>mixins</code> 。 <code>mixin</code>允许其他对象使用一组函数。 <blockquote>让flyMixin = function（obj）{ <br> obj.fly = function（）{ <br> console.log（“Flying，wooosh！”）; <br> } <br> }; </blockquote> <code>flyMixin</code>接受任何对象并为其提供<code>fly</code>方法。 <blockquote>让bird = { <br>名称：“唐纳德”， <br> numLegs：2 <br> }; <br><br>让plane = { <br>型号：“777”， <br> numPassengers：524 <br> }; <br><br> flyMixin（鸟）; <br> flyMixin（平面）; </blockquote>这里将<code>bird</code>和<code>plane</code>传递给<code>flyMixin</code> ，然后将<code>fly</code>函数分配给每个对象。现在<code>bird</code>和<code>plane</code>都可以飞行： <blockquote> bird.fly（）; //打印“飞行，嗖！” <br> plane.fly（）; //打印“飞行，嗖！” </blockquote>注意<code>mixin</code>如何允许相同的<code>fly</code>方法被不相关的对象<code>bird</code>和<code>plane</code>重用。 </section>

## Instructions
<section id="instructions">创建一个名为<code>glideMixin</code>的<code>mixin</code> ，它定义了一个名为<code>glide</code>的方法。然后使用<code>glideMixin</code>让<code>bird</code>和<code>boat</code>都能够滑行。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该声明一个<code>glideMixin</code>变量，它是一个函数。
    testString: assert(typeof glideMixin === "function");
  - text: 你的代码应该使用<code>bird</code>对象上的<code>glideMixin</code>来为它提供<code>glide</code>方法。
    testString: assert(typeof bird.glide === "function");
  - text: 你的代码应该使用<code>boat</code>对象上的<code>glideMixin</code>来为它提供<code>glide</code>方法。
    testString: assert(typeof boat.glide === "function");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
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
