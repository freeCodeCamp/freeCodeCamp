---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1

videoUrl: ''
localeTitle: Use Capture Groups to Search and Replace
---

## Description
<section id='description'>
搜索功能是很有用的。但是，当你的搜索也执行更改（或替换）匹配文本的操作时，搜索功能就会显得更加强大。
可以使用字符串上<code>.replace()</code>方法来搜索并替换字符串中的文本。<code>.replace()</code>的输入首先是你想要搜索的正则表达式匹配模式，第二个参数是用于替换匹配的字符串或用于执行某些操作的函数。
<blockquote>let wrongText = "The sky is silver.";<br>let silverRegex = /silver/;<br>wrongText.replace(silverRegex, "blue");<br>// Returns "The sky is blue."</blockquote>
你还可以使用美元符号（<code>$</code>）访问替换字符串中的捕获组。
<blockquote>"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');<br>// Returns "Camp Code"</blockquote>
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
    testString: assert(code.match(/\.replace\(.*\)/), '你应该使用<code>.replace()</code>搜索并替换。');
  - text: "你的正则表达式应该把<code>'This sandwich is good.'</code>变成<code>'This sandwich is okey-dokey.'</code>。"
    testString: assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey", '你的正则表达式应该把<code>"This sandwich is good."</code>变成<code>"This sandwich is okey-dokey."</code>。');
  - text: 你不应该改变最后一行。
    testString: assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/), '你不应该改变最后一行。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              