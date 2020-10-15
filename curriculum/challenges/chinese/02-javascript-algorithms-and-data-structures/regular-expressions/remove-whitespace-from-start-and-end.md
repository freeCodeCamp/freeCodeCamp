---
id: 587d7dbb367417b2b2512bac
challengeType: 1
forumTopicId: 301362
title: 删除开头和结尾的空白
---

## Description
<section id='description'>
有时字符串周围存在的空白字符并不是必需的。字符串的典型处理是删除字符串开头和结尾处的空格。
</section>

## Instructions
<section id='instructions'>
编写一个正则表达式并使用适当的字符串方法删除字符串开头和结尾的空格。
<strong>注意：</strong><br><code>.trim()</code>方法在这里也可以实现同样的效果，但是你需要使用正则表达式来完成此项挑战。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>结果</code>应该等于<code>'Hello, World!'</code>。"
    testString: assert(result == "Hello, World!");
  - text: 你不应该使用<code>.trim()</code>方法。
    testString: assert(!code.match(/\.trim\(.*?\)/));
  - text: <code>结果</code>变量不应该设置为等于字符串。
    testString: assert(!code.match(/result\s*=\s*".*?"/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```

</section>
