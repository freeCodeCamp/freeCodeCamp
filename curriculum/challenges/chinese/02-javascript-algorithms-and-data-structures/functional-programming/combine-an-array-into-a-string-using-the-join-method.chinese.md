---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
videoUrl: ''
localeTitle: 使用join方法将Array组合成String
---

## Description
<section id="description"> <code>join</code>方法用于将数组的元素连接在一起以创建字符串。它需要一个用于分隔字符串中数组元素的分隔符的参数。这是一个例子： <blockquote> var arr = [“你好”，“世界”]; <br> var str = arr.join（“”）; <br> //将str设置为“Hello World” </blockquote></section>

## Instructions
<section id="instructions">使用<code>sentensify</code>函数内的<code>join</code>方法（以及其他方法）从字符串<code>str</code>的单词创建一个句子。该函数应返回一个字符串。例如，“我喜欢星球大战”将被转换为“我喜欢星球大战”。对于此挑战，请勿使用<code>replace</code>方法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>join</code>方法。
    testString: 'assert(code.match(/\.join/g), "Your code should use the <code>join</code> method.");'
  - text: 您的代码不应使用<code>replace</code>方法。
    testString: 'assert(!code.match(/\.replace/g), "Your code should not use the <code>replace</code> method.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code>应该返回一个字符串。
    testString: 'assert(typeof sentensify("May-the-force-be-with-you") === "string", "<code>sentensify("May-the-force-be-with-you")</code> should return a string.");'
  - text: <code>sentensify(&quot;May-the-force-be-with-you&quot;)</code>应该返回<code>&quot;May the force be with you&quot;</code> 。
    testString: 'assert(sentensify("May-the-force-be-with-you") === "May the force be with you", "<code>sentensify("May-the-force-be-with-you")</code> should return <code>"May the force be with you"</code>.");'
  - text: <code>sentensify(&quot;The.force.is.strong.with.this.one&quot;)</code>应该返回<code>&quot;The force is strong with this one&quot;</code> 。
    testString: 'assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one", "<code>sentensify("The.force.is.strong.with.this.one")</code> should return <code>"The force is strong with this one"</code>.");'
  - text: '<code>sentensify(&quot;There,has,been,an,awakening&quot;)</code>应该回归<code>&quot;There has been an awakening&quot;</code> 。'
    testString: 'assert(sentensify("There,has,been,an,awakening") === "There has been an awakening", "<code>sentensify("There,has,been,an,awakening")</code> should return <code>"There has been an awakening"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sentensify(str) {
  // Add your code below this line


  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
