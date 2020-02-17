---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
videoUrl: ''
localeTitle: 重写继承的方法
---

## Description
<section id="description">在前面的课程中，您了解到一个对象可以通过克隆其<code>prototype</code>对象从另一个对象继承其行为（方法）： <blockquote> ChildObject.prototype = Object.create（ParentObject.prototype）; </blockquote>然后， <code>ChildObject</code>通过将它们链接到其<code>prototype</code> <code>ChildObject</code>获得自己的方法： <blockquote> ChildObject.prototype.methodName = function（）{...}; </blockquote>可以覆盖继承的方法。它以相同的方式完成 - 通过使用与要覆盖的方法名称相同的方法名称向<code>ChildObject.prototype</code>添加方法。以下是<code>Bird</code>重写从<code>Animal</code>继承的<code>eat()</code>方法的示例： <blockquote> function Animal（）{} <br> Animal.prototype.eat = function（）{ <br>返回“nom nom nom”; <br> }; <br>函数Bird（）{} <br><br> //继承Animal的所有方法<br> Bird.prototype = Object.create（Animal.prototype）; <br><br> // Bird.eat（）重写Animal.eat（） <br> Bird.prototype.eat = function（）{ <br>返回“peck peck peck”; <br> }; </blockquote>如果你有一个实例，请<code>let duck = new Bird();</code>你调用<code>duck.eat()</code> ，这就是JavaScript在<code>duck&#39;s</code> <code>prototype</code>链上寻找方法的方法： <code>duck.eat()</code> =&gt;这里定义了eat（）吗？ No. 2. Bird =&gt;这里定义了eat（）吗？ =&gt;是的。执行它并停止搜索。 3. Animal =&gt; eat（）也被定义，但JavaScript在达到此级别之前停止搜索。 4. Object =&gt; JavaScript在达到此级别之前停止搜索。 </section>

## Instructions
<section id="instructions">覆盖<code>Penguin</code>的<code>fly()</code>方法，使其返回“唉，这是一只不会飞的鸟”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>penguin.fly()</code>应该返回字符串“唉，这是一只不会飞的鸟”。
    testString: assert(penguin.fly() === "Alas, this is a flightless bird.");
  - text: <code>bird.fly()</code>方法应该返回“我正在飞行！”
    testString: assert((new Bird()).fly() === "I am flying!");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line



// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
