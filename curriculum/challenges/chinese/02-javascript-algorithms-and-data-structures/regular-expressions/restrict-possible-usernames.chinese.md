---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1

videoUrl: ''
localeTitle: Restrict Possible Usernames
---

## Description
<section id='description'>
用户名在互联网上随处可见。它们是用户在自己喜欢的网站上的唯一身份。
你需要检查数据库中的所有用户名。以下是用户在创建用户名时必须遵守的一些简单规则。
1) 用户名中的数字必须在最后，且数字可以有零个或多个。
2) 用户名字母可以是小写字母和大写字母。
3) 用户名长度必须至少为两个字符。两位用户名只能使用字母。
</section>

## Instructions
<section id='instructions'>
修改正则表达式<code>userCheck</code>以适合上面列出的约束。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该匹配<code>JACK</code>。
    testString: assert(userCheck.test("JACK"), '你的正则表达式应该匹配<code>JACK</code>。');
  - text: 你的正则表达式不应该匹配<code>J</code>。
    testString: assert(!userCheck.test("J"), '你的正则表达式不应该匹配<code>J</code>。');
  - text: 你的正则表达式应该匹配<code>Oceans11</code>。
    testString: assert(userCheck.test("Oceans11"), '你的正则表达式应该匹配<code>Oceans11</code>。');
  - text: 你的正则表达式应该匹配<code>RegexGuru</code>。
    testString: assert(userCheck.test("RegexGuru"), '你的正则表达式应该匹配<code>RegexGuru</code>。');
  - text: 你的正则表达式不应该匹配<code>007</code>。
    testString: assert(!userCheck.test("007"), '你的正则表达式不应该匹配<code>007</code>。');
  - text: 你的正则表达式不应该匹配<code>9</code>。
    testString: assert(!userCheck.test("9"), '你的正则表达式不应该匹配<code>9</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              