---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
videoUrl: ''
localeTitle: 使用捕获组进行搜索和替换
---

## Description
<section id="description">搜索很有用。但是，当它也更改（或替换）您匹配的文本时，您可以使搜索功能更强大。您可以在字符串上使用<code>.replace()</code>搜索和替换字符串中的文本。 <code>.replace()</code>的输入首先是您要搜索的正则表达式模式。第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。 <blockquote> let wrongText =“天空是银色的。”; <br>让silverRegex = / silver /; <br> wrongText.replace（silverRegex，“blue”）; <br> //返回“天空是蓝色的”。 </blockquote>您还可以使用美元符号（ <code>$</code> ）访问替换字符串中的捕获组。 <blockquote> “Code Camp”.replace（/（\ w +）\ s（\ w +）/，&#39;$ 2 $ 1&#39;）; <br> //返回“营地代码” </blockquote></section>

## Instructions
<section id="instructions">写一个正则表达式，以便它搜索字符串<code>&quot;good&quot;</code> 。然后更新<code>replaceText</code>变量，将<code>&quot;good&quot;</code>替换为<code>&quot;okey-dokey&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该使用<code>.replace()</code>来搜索和替换。
    testString: 'assert(code.match(/\.replace\(.*\)/), "You should use <code>.replace()</code> to search and replace.");'
  - text: 你的正则表达式应该改变<code>&quot;This sandwich is good.&quot;</code> <code>&quot;This sandwich is okey-dokey.&quot;</code>
    testString: 'assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey", "Your regex should change <code>"This sandwich is good."</code> to <code>"This sandwich is okey-dokey."</code>");'
  - text: 你不应该改变最后一行。
    testString: 'assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/), "You should not change the last line.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
