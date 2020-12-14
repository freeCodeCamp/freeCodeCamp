---
id: 587d7dab367417b2b2512b6d
challengeType: 1
forumTopicId: 301227
title: 应用函数式编程将字符串转换为URL片段
---

## Description
<section id='description'>
最后几个挑战中涵盖了许多符合函数式编程原则并在处理数组和字符串中非常有用的方法。我们还学习了强大的、可以将问题简化为更简单形式的<code>reduce</code>方法，从计算平均值到排序，任何数组操作都可以用它来实现。回想一下，<code>map</code>和<code>filter</code>方法都是<code>reduce</code>的特殊实现。
让我们把学到的知识结合起来解决一个实际问题。
许多内容管理站点（CMS）为了让添加书签更简单，会将帖子的标题添加到 URL 上。举个例子，如果你写了一篇标题为 "Stop Using Reduce" 的帖子，URL很可能会包含标题字符串的某种形式 (如：".../stop-using-reduce")，你可能已经在 freeCodeCamp 网站上注意到了这一点。
</section>

## Instructions
<section id='instructions'>
填写<code>urlSlug</code>函数，将字符串<code>title</code>转换成带有连字符号的 URL。您可以使用本节中介绍的任何方法，但不要用<code>replace</code>方法。以下是本次挑战的要求：
输入包含空格和标题大小写单词的字符串
输出字符串，单词之间的空格用连字符(<code>-</code>)替换
输出应该是小写字母
输出不应有任何空格
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>globalTitle</code>变量应保持不变。
    testString: assert(globalTitle === "Winter Is Coming");
  - text: 在此挑战中不能使用<code>replace</code>方法。
    testString: assert(!code.match(/\.replace/g));
  - text: "<code>urlSlug('Winter Is Coming')</code>应返回<code>'winter-is-coming'</code>。"
    testString: assert(urlSlug("Winter Is Coming") === "winter-is-coming");
  - text: "<code>urlSlug(' Winter Is  &nbsp;Coming')</code>应返回<code>'winter-is-coming'</code>。"
    testString: assert(urlSlug(" Winter Is  Coming") === "winter-is-coming");
  - text: "<code>urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone')</code>应返回<code>'a-mind-needs-books-like-a-sword-needs-a-whetstone'</code>。"
    testString: assert(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") === "a-mind-needs-books-like-a-sword-needs-a-whetstone");
  - text: "<code>urlSlug('Hold The Door')</code>应返回<code>'hold-the-door'</code>。"
    testString: assert(urlSlug("Hold The Door") === "hold-the-door");

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
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

</section>
