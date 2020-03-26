---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
videoUrl: ''
localeTitle: 将键值对添加到JavaScript对象
---

## Description
<section id="description">在最基本的情况下，对象只是<dfn>键值对的</dfn>集合，换句话说，映射到我们称为<dfn>属性</dfn>或<dfn>键的</dfn>唯一标识符的数据片段。我们来看一个非常简单的例子： <blockquote>让FCC_User = { <br>用户名：&#39;awesome_coder&#39;， <br>粉丝：572， <br>积分：1741， <br>已完成项目：15 <br> }; </blockquote>上面的代码定义了一个名为<code>FCC_User</code>的对象，它有四个<dfn>属性</dfn> ，每个<dfn>属性</dfn>都映射到一个特定的值。如果我们想知道的数量<code>followers</code> <code>FCC_User</code>了，我们可以通过写访问属性： <blockquote> let userData = FCC_User.followers; <br> // userData等于572 </blockquote>这称为<dfn>点符号</dfn> 。或者，我们也可以使用括号访问该属性，如下所示： <blockquote>让userData = FCC_User [&#39;粉丝&#39;] <br> // userData等于572 </blockquote>请注意，带<dfn>支架的符号</dfn> ，我们封闭<code>followers</code>在引号。这是因为括号实际上允许我们传递一个变量以作为属性名称进行评估（提示：请记住这一点以供日后使用！）。如果我们在没有引号的情况下传递了<code>followers</code> ，那么JavaScript引擎会尝试将其作为变量进行评估，而<code>ReferenceError: followers is not defined</code>将被抛出。 </section>

## Instructions
<section id="instructions">使用相同的语法，我们还<em><strong>可以</strong></em>向对象<em><strong>添加新的</strong></em>键值对。我们用三个条目创建了一个<code>foods</code>对象。再添加三个条目：价值为<code>13</code> <code>bananas</code> ，价值为<code>35</code> <code>grapes</code>和价值为<code>27</code> <code>strawberries</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code>是一个对象
    testString: assert(typeof foods === 'object');
  - text: <code>foods</code>对象有一个值为<code>13</code>的关键<code>&quot;bananas&quot;</code>
    testString: assert(foods.bananas === 13);
  - text: <code>foods</code>对象有一个关键的<code>&quot;grapes&quot;</code> ，价值<code>35</code>
    testString: assert(foods.grapes === 35);
  - text: <code>foods</code>对象有一个关键的<code>&quot;strawberries&quot;</code> ，值为<code>27</code>
    testString: assert(foods.strawberries === 27);
  - text: 应使用点或括号表示法设置键值对
    testString: assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
