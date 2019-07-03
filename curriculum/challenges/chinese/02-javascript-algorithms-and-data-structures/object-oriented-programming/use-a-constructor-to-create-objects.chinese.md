---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1

videoUrl: ''
localeTitle: Use a Constructor to Create Objects
---

## Description
<section id='description'>
在上一个挑战中，我们用所学到的知识创建了一个<code>Bird</code>构造函数：
<blockquote>function Bird() {<br>&nbsp;&nbsp;this.name = "Albert";<br>&nbsp;&nbsp;this.color  = "blue";<br>&nbsp;&nbsp;this.numLegs = 2;<br>&nbsp;&nbsp;// 构造函数里面的 "this" 总是指向新创建的实例。<br>}<br><br>let blueBird = new Bird();</blockquote>
注意：通过构造函数创建对象的时候要使用<code>new</code>操作符。因为只有这样，JavaScript 才知道要给<code>Bird</code>这个构造函数创建一个新的<code>实例</code>：<code>blueBird</code>。如果不使用<code>new</code>操作符来新建对象，那么构造函数里面的<code>this</code>就无法指向新创建的这个对象实例，从而产生不可预见的错误。
现在<code>blueBird</code>这个实例就继承了<code>Bird</code>这个构造函数的所有属性，如下：
<blockquote>blueBird.name; // => Albert<br>blueBird.color; // => blue<br>blueBird.numLegs; // => 2</blockquote>
由构造函数创建的实例也和其他对象一样，它的属性可以被访问和修改：
<blockquote>blueBird.name = 'Elvira';<br>blueBird.name; // => Elvira</blockquote>
</section>

## Instructions
<section id='instructions'>
使用上一个课时中的<code>Dog</code>构造函数创建一个<code>Dog</code>的新实例，并把它赋值给变量<code>hound</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hound</code>应该是通过<code>Dog</code>构造函数来创建的。
    testString: assert(hound instanceof Dog, '<code>hound</code>应该是通过<code>Dog</code>构造函数来创建的。');
  - text: 你的代码中应该使用<code>new</code>操作符来创建<code>Dog</code>构造函数的新<code>实例</code>。
    testString: assert(code.match(/new/g), '你的代码中应该使用<code>new</code>操作符来创建<code>Dog</code>构造函数的新<code>实例</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```

</section>
              