---
id: 587d7dae367417b2b2512b79
challengeType: 1
forumTopicId: 18235
title: 扩展构造函数以接收参数
---

## Description
<section id='description'>
上一个挑战中<code>Bird</code>和<code>Dog</code>构造函数运行得不错。但是，注意到没有：所有通过<code>Bird</code>构造函数创建出来的实例<code>Birds</code>都自动的取名为 Albert，颜色都是蓝色，还都有两条腿。如果你想要新创建出来的小鸟们拥有不同的名字和颜色要怎么办呢？当然，手动的去修改每一个小鸟实例自己的属性也是可以实现的，只是会增加很多无谓的工作量：

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

假如你写了一个程序来追踪一个鸟舍里面的几百只甚至几千只不同的小鸟，你将会花费很多时间去创建所有的小鸟实例并给它们的属性一一修改为不同的值。
为了减轻创建不同<code>Bird</code>对象的工作量，你可以给你的<code>Bird</code>设置为可以接收参数的构造函数：

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

然后将值通过参数的方式传递给<code>Bird</code>构造函数来定义每一个唯一的小鸟实例：
<code>let cardinal = new Bird("Bruce", "red");</code>
这给<code>Bird</code>的名字和颜色属性分别赋值为 Bruce 和红色提供了另外一种方法。但<code>numLegs</code>属性被默认赋值为 2。
<code>cardinal</code>有以下这些属性：

```js
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```

这样一来构造函数就变得很灵活了。现在可以直接定义每个<code>Bird</code>实例在创建时的属性，这是 JavaScript 构造函数非常实用的用法之一。它们根据共同或相似的属性和行为将对象归纳为一组，并能够自动的创建各自实例。
</section>

## Instructions
<section id='instructions'>
创建另一个<code>Dog</code>构造函数。这一次，给它设置两个参数：<code>name</code>和<code>color</code>，同时给<code>numLegs</code>赋值为 4。然后创建一个新<code>Dog</code>实例保存为变量名：<code>terrier</code>，再将两个字符串通过参数的形式传入<code>name</code>和<code>color</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code>应该接收一个<code>name</code>参数。
    testString: assert((new Dog('Clifford')).name === 'Clifford');
  - text: <code>Dog</code>应该接收一个<code>color</code>参数。
    testString: assert((new Dog('Clifford', 'yellow')).color === 'yellow');
  - text: <code>Dog</code>应该有一个<code>numLegs</code>属性且值为 4。
    testString: assert((new Dog('Clifford')).numLegs === 4);
  - text: <code>terrier</code>应该是通过<code>Dog</code>构造函数创建的。
    testString: assert(terrier instanceof Dog);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {

}


```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```

</section>
