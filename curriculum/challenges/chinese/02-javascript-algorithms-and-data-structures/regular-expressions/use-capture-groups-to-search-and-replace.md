---
id: 587d7dbb367417b2b2512bab
challengeType: 1
forumTopicId: 301368
title: 使用捕获组搜索和替换
---

## Description
<section id='description'>
搜索功能是很有用的。但是，当搜索同时也执行更改（或替换）匹配文本的操作时，搜索功能就会显得更加强大。
可以使用字符串上<code>.replace()</code>方法来搜索并替换字符串中的文本。<code>.replace()</code>的输入首先是想要搜索的正则表达式匹配模式，第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

你还可以使用美元符号（<code>$</code>）访问替换字符串中的捕获组。

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

</section>

## Instructions
<section id='instructions'>
编写一个正则表达式，以搜索字符串<code>"good"</code>。然后更新变量<code>replaceText</code>，用字符串<code>"okey-dokey"</code>替换<code>"good"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>.replace()</code>搜索并替换。
    testString: assert(code.match(/\.replace\(.*\)/));
  - text: "你的正则表达式应该把<code>'This sandwich is good.'</code>变成<code>'This sandwich is okey-dokey.'</code>。"
    testString: assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey");
  - text: 你不应该改变最后一行。
    testString: assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/));

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
let huhText = "This sandwich is good.";
let fixRegex = /good/g; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```

</section>
