---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
videoUrl: ''
localeTitle: 使用闭包保护对象内的属性不被外部修改
---

## Description
<section id="description">在之前的挑战中， <code>bird</code>有一个公共财产<code>name</code> 。它被认为是公开的，因为它可以在<code>bird</code>的定义之外进行访问和更改。 <blockquote> bird.name =“达菲”; </blockquote>因此，代码的任何部分都可以轻松地将<code>bird</code>的名称更改为任何值。考虑一下代码库的任何部分都可以轻松更改密码和银行帐户等内容。这可能会导致很多问题。使属性私有的最简单方法是在构造函数中创建一个变量。这会将该变量的范围更改为构造函数，而不是全局可用。这样，只能通过构造函数中的方法访问和更改属性。 <blockquote> function Bird（）{ <br>让hatchedEgg = 10; // 私人财产<br><br> this.getHatchedEggCount = function（）{//鸟类对象可以使用的公共可用方法<br>返回hatchedEgg; <br> }; <br> } <br>让ducky = new Bird（）; <br> ducky.getHatchedEggCount（）; //返回10 </blockquote>这里<code>getHachedEggCount</code>是一种特权方法，因为它可以访问私有变量<code>hatchedEgg</code> 。这是可能的，因为<code>hatchedEgg</code>在与<code>getHachedEggCount</code>相同的上下文中<code>getHachedEggCount</code> 。在JavaScript中，函数始终可以访问创建它的上下文。这叫做<code>closure</code> 。 </section>

## Instructions
<section id="instructions">更改<code>Bird</code>函数中声明<code>weight</code>方式，使其成为私有变量。然后，创建一个返回<code>weight</code>值的方法<code>getWeight</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>weight</code>属性应该是私有变量。
    testString: 'assert(!code.match(/this\.weight/g), "The <code>weight</code> property should be a private variable.");'
  - text: 你的代码应该在<code>Bird</code>创建一个名为<code>getWeight</code>的方法来返回<code>weight</code> 。
    testString: 'assert((new Bird()).getWeight() === 15, "Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
