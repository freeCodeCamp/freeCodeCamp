---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
videoUrl: ''
localeTitle: 更新对象属性
---

## Description
<section id="description">在创建JavaScript对象之后，您可以随时更新其属性，就像更新任何其他变量一样。您可以使用点或括号表示法进行更新。例如，让我们看看我们的<code>ourDog</code> ： <blockquote> var ourDog = { <br> “名字”：“露营者”， <br> “腿”：4， <br> “尾巴”：1， <br> “朋友们”：[“一切！”] <br> }; </blockquote>由于他是一只特别开心的狗，让我们改名为“快乐露营者”。以下是我们更新对象名称属性的方法： <code>ourDog.name = &quot;Happy Camper&quot;;</code>或者我们的<code>ourDog[&quot;name&quot;] = &quot;Happy Camper&quot;;</code>现在，当我们评估我们的<code>ourDog.name</code> ，而不是获得“Camper”时，我们将获得他的新名字“Happy Camper”。 </section>

## Instructions
<section id="instructions">更新<code>myDog</code>对象的name属性。让我们将她的名字从“Coder”改为“Happy Coder”。您可以使用点或括号表示法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将<code>myDog</code>的<code>&quot;name&quot;</code>属性更新为“Happy Coder”。
    testString: assert(/happy coder/gi.test(myDog.name));
  - text: 不要编辑<code>myDog</code>定义
    testString: 'assert(/"name": "Coder"/.test(code));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
