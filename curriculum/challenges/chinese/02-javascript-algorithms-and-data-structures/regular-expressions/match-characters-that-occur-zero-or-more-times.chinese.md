---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
forumTopicId: 301351
localeTitle: 匹配出现零次或多次的字符
---

## Description
<section id='description'>
上一次的挑战中使用了加号<code>+</code>来查找出现一次或多次的字符。还有一个选项可以匹配出现零次或多次的字符。
执行该操作的字符叫做<code>asterisk</code>或<code>star</code>，即<code>*</code>。

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

</section>

## Instructions
<section id='instructions'>
在这个挑战里，<code>chewieQuote</code> 已经被初始化为 "Aaaaaaaaaaaaaaaarrrgh!"。创建一个变量为<code>chewieRegex</code>的正则表达式，使用<code>*</code>符号在<code>chewieQuote</code>中匹配<code>"A"</code>及其之后出现的零个或多个<code>"a"</code>。你的正则表达式不需要使用修饰符，也不需要匹配引号。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的正则表达式<code>chewieRegex</code>应该使用<code>*</code>符号匹配<code>'A'</code>之后出现的零个或多个<code>'a'</code>字符。"
    testString: assert(/\*/.test(chewieRegex.source));
  - text: 正则表达式应当匹配 <code>chewieQuote</code> 里的 <code>"A"</code>。
    testString: assert(result[0][0] === 'A');
  - text: "你的正则表达式应该匹配<code>'Aaaaaaaaaaaaaaaa'</code>。"
    testString: assert(result[0] === 'Aaaaaaaaaaaaaaaa');
  - text: 你的正则表达式<code>chewieRegex</code>应该匹配 16 个字符。
    testString: assert(result[0].length === 16);
  - text: "你的正则表达式在<code>'He made a fair move. Screaming about it can&#39t help you.'</code>中不应该匹配任何字符。"
    testString: assert(!"He made a fair move. Screaming about it can't help you.".match(chewieRegex));
  - text: "你的正则表达式在<code>'Let him have it. It&#39s not wise to upset a Wookiee.'</code>中不应该匹配任何字符。"
    testString: assert(!"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let chewieRegex = /change/; // Only change this line
let result = chewieQuote.match(chewieRegex);
```

</div>

## Before Test
<div id='js-setup'>

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

</div>

</section>

## Solution
<section id='solution'>

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```

</section>
