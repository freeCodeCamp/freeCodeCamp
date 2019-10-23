---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
videoUrl: ''
localeTitle: 使用构造函数创建对象
---

## Description
<section id="description">这是上一次挑战中的<code>Bird</code>构造函数： <blockquote> function Bird（）{ <br> this.name =“阿尔伯特”; <br> this.color =“blue”; <br> this.numLegs = 2; <br> //构造函数中的“this”始终引用正在创建的对象<br> } <br><br>让blueBird = new Bird（）; </blockquote>请注意，在调用构造函数时使用<code>new</code>运算符。这告诉JavaScript创建一个名为<code>blueBird</code>的<code>Bird</code>新<code>instance</code> 。如果没有<code>new</code>运营商， <code>this</code>在构造函数中不会指向新创建的对象，给人意想不到的效果。现在， <code>blueBird</code>具有在<code>Bird</code>构造函数中定义的所有属性： <blockquote> blueBird.name; // =&gt;艾伯特<br> blueBird.color; // =&gt;蓝色<br> blueBird.numLegs; // =&gt; 2 </blockquote>就像任何其他对象一样，可以访问和修改其属性： <blockquote> blueBird.name =&#39;Elvira&#39;; <br> blueBird.name; // =&gt;埃尔维拉</blockquote></section>

## Instructions
<section id="instructions">使用上一课中的<code>Dog</code>构造函数创建<code>Dog</code>的新实例，将其分配给变量<code>hound</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>Dog</code>构造函数创建<code>hound</code> 。
    testString: 'assert(hound instanceof Dog, "<code>hound</code> should be created using the <code>Dog</code> constructor.");'
  - text: 您的代码应该使用<code>new</code>运算符来创建<code>Dog</code>的<code>instance</code> 。
    testString: 'assert(code.match(/new/g), "Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
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
