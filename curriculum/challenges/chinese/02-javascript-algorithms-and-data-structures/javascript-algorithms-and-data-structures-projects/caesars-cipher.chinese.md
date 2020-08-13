---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: 凯撒密码
---

## Description
<section id="description">最简单和最广为人知的<dfn>密码之一</dfn>是<code>Caesar cipher</code> ，也称为<code>shift cipher</code> 。在<code>shift cipher</code>中，字母的含义被移动一些设定量。一种常见的现代用途是<a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13</a>密码，其中字母的值移动了13个位置。因此&#39;A&#39;&#39;&#39;N&#39;，&#39;B&#39;&#39;&#39;O&#39;等等。编写一个函数，它将<a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13</a>编码的字符串作为输入并返回一个已解码的字符串。所有字母都是大写的。不要转换任何非字母字符（即空格，标点符号），但要传递它们。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rot13(&quot;SERR PBQR PNZC&quot;)</code>应解码为<code>FREE CODE CAMP</code>
    testString: assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP");
  - text: <code>rot13(&quot;SERR CVMMN!&quot;)</code>应该解码为<code>FREE PIZZA!</code> <code>rot13(&quot;SERR CVMMN!&quot;)</code> <code>FREE PIZZA!</code>
    testString: assert(rot13("SERR CVMMN!") === "FREE PIZZA!");
  - text: <code>rot13(&quot;SERR YBIR?&quot;)</code>应解码为<code>FREE LOVE?</code>
    testString: assert(rot13("SERR YBIR?") === "FREE LOVE?");
  - text: <code>rot13(&quot;GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.&quot;)</code>应该在<code>rot13(&quot;GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.&quot;)</code>解码到<code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
    testString: assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rot13(str) { // LBH QVQ VG!

  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
