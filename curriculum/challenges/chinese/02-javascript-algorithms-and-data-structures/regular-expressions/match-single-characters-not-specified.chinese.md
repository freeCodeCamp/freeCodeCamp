---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1

videoUrl: ''
localeTitle: Match Single Characters Not Specified
---

## Description
<section id='description'>
到目前为止，你已创建了一个你想要匹配的字符集合，但你也可以创建一个你不想匹配的字符集合。这些类型的字符集称为<code>否定字符集</code>。
要创建<code>否定字符集</code>，你需要在开始括号后面和不想匹配的字符前面放置<code>插入字符</code>（即<code>^</code>）。
例如，<code>/[^aeiou]/gi</code>匹配所有非元音字符。注意，字符<code>.</code>、<code>!</code>、<code>[</code>、<code>@</code>、<code>/</code>和空白字符等也会被匹配，该否定字符集仅排除元音字符。
</section>

## Instructions
<section id='instructions'>
创建一个匹配所有非数字或元音字符的正则表达式。请记得在正则表达式中包含恰当的标志。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式<code>myRegex</code>应该匹配 9 项。
    testString: assert(result.length == 9, '你的正则表达式<code>myRegex</code>应该匹配 9 项。');
  - text: 你的正则表达式<code>myRegex</code>应该使用全局标志。
    testString: assert(myRegex.flags.match(/g/).length == 1, '你的正则表达式<code>myRegex</code>应该使用全局标志。');
  - text: 你的正则表达式<code>myRegex</code>应该使用忽略大小写标志。
    testString: assert(myRegex.flags.match(/i/).length == 1, '你的正则表达式<code>myRegex</code>应该使用忽略大小写标志。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              