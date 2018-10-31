---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
videoUrl: ''
localeTitle: 匹配出现零次或多次的字符
---

## Description
<section id="description">最后一项挑战使用加<code>+</code>号来查找出现一次或多次的字符。还有一个选项可以匹配出现零次或多次的字符。执行此操作的字符是<code>asterisk</code>或<code>star</code> <code>asterisk</code> ： <code>*</code> 。 <blockquote>让soccerWord =“gooooooooal！”; <br>让gPhrase =“直觉”; <br>让oPhrase =“越过月亮”; <br> let goRegex = / go * /; <br> soccerWord.match（goRegex）; //返回[“goooooooo”] <br> gPhrase.match（goRegex）; //返回[“g”] <br> oPhrase.match（goRegex）; //返回null </blockquote></section>

## Instructions
<section id="instructions">创建一个正则表达式<code>chewieRegex</code>使用的<code>*</code>字符匹配所有上下<code>&quot;a&quot;</code>中的字符<code>chewieQuote</code> 。你的正则表达式不需要标志，它不应该与任何其他引号相匹配。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您正则表达式<code>chewieRegex</code>应该使用<code>*</code>字符匹配零个或多个<code>a</code>字符。
    testString: 'assert(/\*/.test(chewieRegex.source), "Your regex <code>chewieRegex</code> should use the <code>*</code> character to match zero or more <code>a</code> characters.");'
  - text: 你的正则表达式<code>chewieRegex</code>应匹配16个字符。
    testString: 'assert(result[0].length === 16, "Your regex <code>chewieRegex</code> should match 16 characters.");'
  - text: 你的正则表达式应该匹配<code>&quot;Aaaaaaaaaaaaaaaa&quot;</code> 。
    testString: 'assert(result[0] === "Aaaaaaaaaaaaaaaa", "Your regex should match <code>"Aaaaaaaaaaaaaaaa"</code>.");'
  - text: '你的正则表达式不应该与<code>&quot;He made a fair move. Screaming about it can&#39;t help you.&quot;</code>中的任何角色相匹配<code>&quot;He made a fair move. Screaming about it can&#39;t help you.&quot;</code>'
    testString: 'assert(!"He made a fair move. Screaming about it can\"t help you.".match(chewieRegex), "Your regex should not match any characters in <code>"He made a fair move. Screaming about it can&#39t help you."</code>");'
  - text: '你的正则表达式不应该与<code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code>中的任何角色相匹配<code>&quot;Let him have it. It&#39;s not wise to upset a Wookiee.&quot;</code>'
    testString: 'assert(!"Let him have it. It\"s not wise to upset a Wookiee.".match(chewieRegex), "Your regex should not match any characters in <code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /change/; // Change this line
let result = chewieQuote.match(chewieRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
