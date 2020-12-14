---
id: 587d7daa367417b2b2512b6c
challengeType: 1
forumTopicId: 18221
title: 使用 join 方法将数组组合成字符串
---

## Description
<section id='description'>
<code>join</code>方法用来把数组中的所有元素放入一个字符串，并通过指定的分隔符参数进行分隔。
举个例子：

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
```

</section>

## Instructions
<section id='instructions'>
在函数<code>sentensify</code>内用<code>join</code>方法（及其他方法）用字符串<code>str</code>中的单词造句，这个函数应返回一个字符串。举个例子，"I-like-Star-Wars" 会被转换成 "I like Star Wars"。在此挑战中请勿使用<code>replace</code>方法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应使用<code>join</code>方法。
    testString: assert(code.match(/\.join/g));
  - text: 不能使用<code>replace</code>方法。
    testString: assert(!code.match(/\.replace/g));
  - text: "<code>sentensify('May-the-force-be-with-you')</code>应返回一个字符串"
    testString: assert(typeof sentensify("May-the-force-be-with-you") === "string");
  - text: "<code>sentensify('May-the-force-be-with-you')</code>应返回<code>'May the force be with you'</code>。"
    testString: assert(sentensify("May-the-force-be-with-you") === "May the force be with you");
  - text: "<code>sentensify('The.force.is.strong.with.this.one')</code>应返回<code>'The force is strong with this one'</code>。"
    testString: assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one");
  - text: "<code>sentensify('There,has,been,an,awakening')</code>应返回<code>'There has been an awakening'</code>。"
    testString: assert(sentensify("There,has,been,an,awakening") === "There has been an awakening");

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
function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(' ');
  // Add your code above this line
}
```

</section>
