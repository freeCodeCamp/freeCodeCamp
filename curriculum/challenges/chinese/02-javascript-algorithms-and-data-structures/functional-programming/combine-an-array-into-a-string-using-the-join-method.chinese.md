---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1

videoUrl: ''
localeTitle: Combine an Array into a String Using the join Method
---

## Description
<section id='description'>
<code>join</code>方法用来把数组中的所有元素放入一个字符串，并通过指定的分隔符参数进行分隔。
举个例子：
<blockquote>var arr = ["Hello", "World"];<br>var str = arr.join(" ");<br>// Sets str to "Hello World"</blockquote>
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
    testString: assert(code.match(/\.join/g), '应使用<code>join</code>方法。');
  - text: 不能使用<code>replace</code>方法。
    testString: assert(!code.match(/\.replace/g), '不能使用<code>replace</code>方法。');
  - text: "<code>sentensify('May-the-force-be-with-you')</code>应返回一个字符串"
    testString: assert(typeof sentensify("May-the-force-be-with-you") === "string", '<code>sentensify("May-the-force-be-with-you")</code>应返回一个字符串');
  - text: "<code>sentensify('May-the-force-be-with-you')</code>应返回<code>'May the force be with you'</code>。"
    testString: assert(sentensify("May-the-force-be-with-you") === "May the force be with you", '<code>sentensify("May-the-force-be-with-you")</code>应返回<code>"May the force be with you"</code>。');
  - text: "<code>sentensify('The.force.is.strong.with.this.one')</code>应返回<code>'The force is strong with this one'</code>。"
    testString: assert(sentensify("The.force.is.strong.with.this.one") === "The force is strong with this one", '<code>sentensify("The.force.is.strong.with.this.one")</code>应返回<code>"The force is strong with this one"</code>。');
  - text: "<code>sentensify('There,has,been,an,awakening')</code>应返回<code>'There has been an awakening'</code>。"
    testString: assert(sentensify("There,has,been,an,awakening") === "There has been an awakening", '<code>sentensify("There,has,been,an,awakening")</code>应返回<code>"There has been an awakening"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              