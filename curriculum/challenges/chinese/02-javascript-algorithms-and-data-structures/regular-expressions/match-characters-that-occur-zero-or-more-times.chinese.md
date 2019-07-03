---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1

videoUrl: ''
localeTitle: Match Characters that Occur Zero or More Times
---

## Description
<section id='description'>
上一次的挑战中使用了加号<code>+</code>来查找出现一次或多次的字符。还有一个选项可以匹配出现零次或多次的字符。
执行该操作的字符叫做<code>asterisk</code>或<code>star</code>，即<code>*</code>。
<blockquote>let soccerWord = "gooooooooal!";<br>let gPhrase = "gut feeling";<br>let oPhrase = "over the moon";<br>let goRegex = /go*/;<br>soccerWord.match(goRegex); // Returns ["goooooooo"]<br>gPhrase.match(goRegex); // Returns ["g"]<br>oPhrase.match(goRegex); // Returns null</blockquote>
</section>

## Instructions
<section id='instructions'>
创建一个变量为<code>chewieRegex</code>的正则表达式，使用<code>*</code>符号在<code>chewieQuote</code>中匹配<code>"A"</code>及其之后出现的零个或多个<code>"a"</code>。你的正则表达式不需要使用修饰符，也不需要匹配引号。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的正则表达式<code>chewieRegex</code>应该使用<code>*</code>符号匹配<code>'A'</code>之后出现的零个或多个<code>'a'</code>字符。"
    testString: assert(/\*/.test(chewieRegex.source), '你的正则表达式<code>chewieRegex</code>应该使用<code>*</code>符号匹配<code>"A"</code>之后出现的零个或多个<code>"a"</code>字符。');
  - text: 你的正则表达式<code>chewieRegex</code>应该匹配 16 个字符。
    testString: assert(result[0].length === 16, '你的正则表达式<code>chewieRegex</code>应该匹配 16 个字符。');
  - text: "你的正则表达式应该匹配<code>'Aaaaaaaaaaaaaaaa'</code>。"
    testString: assert(result[0] === 'Aaaaaaaaaaaaaaaa', '你的正则表达式应该匹配<code>"Aaaaaaaaaaaaaaaa"</code>。');
  - text: "你的正则表达式在<code>'He made a fair move. Screaming about it can&#39t help you.'</code>中不应该匹配任何字符。"
    testString: assert(!"He made a fair move. Screaming about it can\'t help you.".match(chewieRegex), '你的正则表达式在<code>"He made a fair move. Screaming about it can&#39t help you."</code>中不应该匹配任何字符。');
  - text: "你的正则表达式在<code>'Let him have it. It&#39s not wise to upset a Wookiee.'</code>中不应该匹配任何字符。"
    testString: assert(!"Let him have it. It\'s not wise to upset a Wookiee.".match(chewieRegex), '你的正则表达式在<code>"Let him have it. It&#39s not wise to upset a Wookiee."</code>中不应该匹配任何字符。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              