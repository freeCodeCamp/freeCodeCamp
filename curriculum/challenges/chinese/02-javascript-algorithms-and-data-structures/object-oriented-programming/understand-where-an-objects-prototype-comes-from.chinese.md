---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
videoUrl: ''
localeTitle: 了解对象原型的来源
---

## Description
<section id="description">就像人们从父母那里继承基因一样，一个对象直接从创建它的构造函数继承它的<code>prototype</code> 。例如， <code>Bird</code>构造函数在这里创建<code>duck</code>对象： <blockquote> function Bird（name）{ <br> this.name = name; <br> } <br><br>让鸭子=新鸟（“唐纳德”）; </blockquote> <code>duck</code>从<code>Bird</code>构造函数继承了它的<code>prototype</code> 。您可以使用<code>isPrototypeOf</code>方法显示此关系： <blockquote> Bird.prototype.isPrototypeOf（鸭）; <br> //返回true </blockquote></section>

## Instructions
<section id="instructions">使用<code>isPrototypeOf</code>检查<code>prototype</code>的<code>beagle</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 证明<code>Dog.prototype</code>是<code>beagle</code>的<code>prototype</code>
    testString: 'assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code), "Show that <code>Dog.prototype</code> is the <code>prototype</code> of <code>beagle</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

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
