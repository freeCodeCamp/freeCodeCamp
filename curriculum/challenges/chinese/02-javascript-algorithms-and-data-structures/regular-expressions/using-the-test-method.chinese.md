---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1

videoUrl: ''
localeTitle: Using the Test Method
---

## Description
<section id='description'>
在编程语言中，正则表达式用于匹配指定的字符串。通过正则表达式创建匹配模式（规则）可以帮你完成指定匹配。
如果你想要在字符串<code>"The dog chased the cat"</code>中匹配到<code>"the"</code>这个单词，你可以使用如下正则表达式：<code>/the/</code>。注意，正则表达式中不需要引号。
JavaScript 中有多种使用正则表达式的方法。测试正则表达式的一种方法是使用<code>.test()</code>方法。<code>.test()</code>方法会把你编写的正则表达式应用到一个字符串（即括号内的内容），如果你的匹配模式成功匹配到字符，则返回<code>true</code>，反之，返回<code>false</code>。
<blockquote>let testStr = "freeCodeCamp";<br>let testRegex = /Code/;<br>testRegex.test(testStr);<br>// Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
使用<code>.test()</code>方法，检测字符串<code>myString</code>是否符合正则表达式<code>myRegex</code>定义的规则。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>.test()</code>方法来检测正则表达式。
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\)/), '你应该使用<code>.test()</code>方法来检测正则表达式。');
  - text: 你的返回结果应该为<code>true</code>。
    testString: assert(result === true, '你的返回结果应该为<code>true</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              