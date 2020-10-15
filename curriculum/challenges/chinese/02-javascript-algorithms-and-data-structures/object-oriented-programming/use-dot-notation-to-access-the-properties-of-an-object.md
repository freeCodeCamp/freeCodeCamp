---
id: 587d7dac367417b2b2512b74
challengeType: 1
forumTopicId: 301333
title: 使用点符号来访问对象的属性
---

## Description
<section id='description'>
在上一个挑战中，我们创建了一个拥有不同<code>属性</code>的<code>对象</code>，现在我们来看看该如何访问这些<code>属性</code>：

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// 这段代码会在控制台中输出 "Aflac"
```

我们可以用“点号表示法”来访问对象的属性，只需要在<code>对象</code>名称后面加上<code>.</code>以及<code>属性</code>名即可。比如，<code>duck.name</code>就可以访问到 "Aflac"。
</section>

## Instructions
<section id='instructions'>
请在控制台里面输出<code>dog</code>对象中两个<code>属性</code>对应的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>console.log</code>来将<code>dog</code>对象的<code>name</code>属性值输出到控制台。
    testString: assert(/console.log\(.*dog\.name.*\)/g.test(code));
  - text: 你应该使用<code>console.log</code>来将<code>dog</code>对象的<code>numLegs</code>属性值输出到控制台。
    testString: assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line


```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```

</section>
