---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1

videoUrl: ''
localeTitle: Use a Mixin to Add Common Behavior Between Unrelated Objects
---

## Description
<section id='description'>
正如你所见，行为是可以通过继承来共享的。然而，在有些情况下，继承不是最好的解决方案。继承不适用于不相关的对象，比如<code>Bird</code>和<code>Airplane</code>。虽然它们都可以飞行，但是<code>Bird</code>并不是一种<code>Airplane</code>，反之亦然。
对于不相关的对象，更好的方法是使用<code>mixins</code>。<code>mixin</code>允许其他对象使用函数集合。
<blockquote>let flyMixin = function(obj) {<br>&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;}<br>};</blockquote>
<code>flyMixin</code>能接受任何对象，并为其提供<code>fly</code>方法。
<blockquote>let bird = {<br>&nbsp;&nbsp;name: "Donald",<br>&nbsp;&nbsp;numLegs: 2<br>};<br><br>let plane = {<br>&nbsp;&nbsp;model: "777",<br>&nbsp;&nbsp;numPassengers: 524<br>};<br><br>flyMixin(bird);<br>flyMixin(plane);</blockquote>
这里的<code>flyMixin</code>接收了<code>bird</code>和<code>plane</code>对象，然后将<code>fly</code>方法分配给了每一个对象。现在<code>bird</code>和<code>plane</code>都可以飞行了：
<blockquote>bird.fly(); // 输出 "Flying, wooosh!"<br>plane.fly(); // 输出 "Flying, wooosh!"</blockquote>
注意观察<code>mixin</code>是如何允许相同的<code>fly</code>方法被不相关的对象<code>bird</code>和<code>plane</code>重用的。
</section>

## Instructions
<section id='instructions'>
创建一个名为<code>glideMixin</code>的<code>mixin</code>，并定义一个<code>glide</code>方法。然后使用<code>glideMixin</code>来给<code>bird</code>和<code>boat</code>赋予滑行的能力。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该声明一个变量名为<code>glideMixin</code>的函数。
    testString: assert(typeof glideMixin === "function", '你应该声明一个变量名为<code>glideMixin</code>的函数。');
  - text: 你应该在<code>bird</code>上使用<code>glideMixin</code>，以提供<code>glide</code>方法。
    testString: assert(typeof bird.glide === "function", '你应该在<code>bird</code>上使用<code>glideMixin</code>，以提供<code>glide</code>方法。');
  - text: 你应该在<code>boat</code>上使用<code>glideMixin</code>，以提供<code>glide</code>方法。
    testString: assert(typeof boat.glide === "function", '你应该在<code>boat</code>上使用<code>glideMixin</code>，以提供<code>glide</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```

</section>
              