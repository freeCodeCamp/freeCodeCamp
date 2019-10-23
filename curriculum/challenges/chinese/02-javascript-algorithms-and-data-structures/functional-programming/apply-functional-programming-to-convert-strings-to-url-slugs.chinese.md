---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
videoUrl: ''
localeTitle: 应用函数式编程将字符串转换为URL Slugs
---

## Description
<section id="description">最后几个挑战涵盖了许多遵循函数式编程原理的有用数组和字符串方法。我们还学习了<code>reduce</code> ，这是一种用于将问题简化为更简单形式的强大方法。从计算平均值到排序，可以通过应用它来实现任何阵列操作。回想一下<code>map</code>和<code>filter</code>是<code>reduce</code>特例。让我们结合我们学到的东西来解决实际问题。许多内容管理站点（CMS）将帖子的标题添加到URL的一部分以用于简单的书签目的。例如，如果您编写一个标题为“Stop Using Reduce”的Medium帖子，则URL可能会包含某种形式的标题字符串（“... / stop-using-reduce”）。您可能已经在freeCodeCamp网站上注意到了这一点。 </section>

## Instructions
<section id="instructions">填写<code>urlSlug</code>函数，以便转换字符串<code>title</code>并返回URL的连字符版本。您可以使用本节中介绍的任何方法，也不要使用<code>replace</code> 。以下是要求：输入是一个带空格和标题字的字符串输出是一个字符串，单词之间的空格用连字符替换（ <code>-</code> ）输出应该是所有低位字母输出不应该有任何空格</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>globalTitle</code>变量不应该更改。
    testString: 'assert(globalTitle === "Winter Is Coming", "The <code>globalTitle</code> variable should not change.");'
  - text: 您的代码不应使用<code>replace</code>方法来应对此挑战。
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method for this challenge.");'
  - text: <code>urlSlug(&quot;Winter Is Coming&quot;)</code>应该回归<code>&quot;winter-is-coming&quot;</code> 。
    testString: 'assert(urlSlug("Winter Is Coming") === "winter-is-coming", "<code>urlSlug("Winter Is Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot; Winter Is  Coming&quot;)</code>应该回归<code>&quot;winter-is-coming&quot;</code> 。
    testString: 'assert(urlSlug(" Winter Is  Coming") === "winter-is-coming", "<code>urlSlug(" Winter Is  &nbsp;Coming")</code> should return <code>"winter-is-coming"</code>.");'
  - text: <code>urlSlug(&quot;A Mind Needs Books Like A Sword Needs A Whetstone&quot;)</code>应该回归<code>&quot;a-mind-needs-books-like-a-sword-needs-a-whetstone&quot;</code> 。
    testString: 'assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone", "<code>urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")</code> should return <code>"a-mind-needs-books-like-a-sword-needs-a-whetstone"</code>.");'
  - text: <code>urlSlug(&quot;Hold The Door&quot;)</code>应该返回<code>&quot;hold-the-door&quot;</code> 。
    testString: 'assert(urlSlug("Hold The Door") === "hold-the-door", "<code>urlSlug("Hold The Door")</code> should return <code>"hold-the-door"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {


}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
