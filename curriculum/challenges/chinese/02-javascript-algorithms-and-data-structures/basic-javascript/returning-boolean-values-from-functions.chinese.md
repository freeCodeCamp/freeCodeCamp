---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: ''
localeTitle: 从函数返回布尔值
---

## Description
<section id="description">您可以从<a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">与Equality运算符的比较中</a>回忆一下，所有比较运算符都返回布尔值<code>true</code>或<code>false</code>值。有时人们使用if / else语句进行比较，如下所示： <blockquote> function isEqual（a，b）{ <br> if（a === b）{ <br>返回true; <br> } else { <br>返回虚假; <br> } <br> } </blockquote>但是有一种更好的方法可以做到这一点。由于<code>===</code>返回<code>true</code>或<code>false</code> ，我们可以返回比较结果： <blockquote> function isEqual（a，b）{ <br>返回a === b; <br> } </blockquote></section>

## Instructions
<section id="instructions">修复函数<code>isLess</code>以删除<code>if/else</code>语句。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>isLess(10,15)</code>应该返回<code>true</code>'
    testString: assert(isLess(10,15) === true);
  - text: '<code>isLess(15,10)</code>应该返回<code>false</code>'
    testString: assert(isLess(15, 10) === false);
  - text: 您不应该使用任何<code>if</code>或<code>else</code>语句
    testString: assert(!/if|else/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
