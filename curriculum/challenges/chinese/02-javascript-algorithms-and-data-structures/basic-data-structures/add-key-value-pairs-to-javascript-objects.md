---
id: 587d7b7c367417b2b2512b18
challengeType: 1
forumTopicId: 301153
title: 将键值对添加到对象中
---

## Description
<section id='description'>
对象（object）本质上是<dfn>键值对（key-value pair）</dfn>的集合，或者说，一系列被映射到唯一标识符（叫做<dfn>属性（property）</dfn>或者<dfn>键（key）</dfn>）的数据。让我们来看一个很简单的例子：

```js
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
```

上面的代码定义了一个叫做<code>FCC_User</code>的对象，它有 4 个<dfn>属性</dfn>，每个属性映射一个特定的值。如果我们想知道<code>FCC_User</code>有多少<code>followers</code>，我们可以这样访问其<code>followers</code>属性：

```js
let userData = FCC_User.followers;
// userData 等于 572
```

这叫做<dfn>点符号（dot notation）</dfn>。我们还可以用方括号符号来访问对象中的属性：

```js
let userData = FCC_User['followers'];
// userData 等于 572
```

注意，在用<dfn>方括号符号</dfn>时，我们在括号里写的是字符串<code>followers</code>（用引号括起）。方括号符号让我们能用一个变量作为属性名来访问对象的属性（请记住）。若我们在方括号中不写引号而直接写<code>followers</code>，JavaScript 引擎会将其看作一个变量，并抛出一个<code>ReferenceError: followers is not defined</code>的错误。
</section>

## Instructions
<section id='instructions'>
用这样的语法，我们还可以向对象中<em><strong>新增</strong></em>键值对。我们已经创建了一个有 3 个属性的<code>foods</code>对象，请为其新增 3 项：值为<code>13</code>的<code>bananas</code>属性、值为<code>35</code>的<code>grapes</code>属性和值为<code>27</code>的<code>strawberries</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code>应该是一个对象。
    testString: assert(typeof foods === 'object');
  - text: <code>foods</code>应该有一个值为<code>13</code>的<code>&quot;bananas&quot;</code>属性。
    testString: assert(foods.bananas === 13);
  - text: <code>foods</code>应该有一个值为<code>35</code>的<code>&quot;grapes&quot;</code>属性。
    testString: assert(foods.grapes === 35);
  - text: <code>foods</code>应该有一个值为<code>27</code>的<code>&quot;strawberries&quot;</code>属性。
    testString: assert(foods.strawberries === 27);
  - text: 你应该用点符号或者方括号符号来设置对象的属性。
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
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
// change code above this line
```

</section>
