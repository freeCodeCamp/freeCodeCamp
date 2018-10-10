---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
videoUrl: ''
localeTitle: 限制可能的用户名
---

## Description
<section id="description">用户名在互联网上随处可见。它们是用户在自己喜欢的网站上获得独特身份的原因。您需要检查数据库中的所有用户名。以下是用户在创建用户名时必须遵循的一些简单规则。 1）用户名中的唯一数字必须在最后。最后可以有零个或多个。 2）用户名字母可以是小写和大写。 3）用户名必须至少两个字符长。双字母用户名只能使用字母字母。 </section>

## Instructions
<section id="instructions">更改正则表达式<code>userCheck</code>以适合上面列出的约束。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该与<code>JACK</code>匹配
    testString: 'assert(userCheck.test("JACK"), "Your regex should match <code>JACK</code>");'
  - text: 你的正则表达式不应该与<code>J</code>匹配
    testString: 'assert(!userCheck.test("J"), "Your regex should not match <code>J</code>");'
  - text: 你的正则表达式应该与<code>Oceans11</code>匹配
    testString: 'assert(userCheck.test("Oceans11"), "Your regex should match <code>Oceans11</code>");'
  - text: 你的正则表达式应该与<code>RegexGuru</code>匹配
    testString: 'assert(userCheck.test("RegexGuru"), "Your regex should match <code>RegexGuru</code>");'
  - text: 你的正则表达式不应该与<code>007</code>匹配
    testString: 'assert(!userCheck.test("007"), "Your regex should not match <code>007</code>");'
  - text: 你的正则表达式不应该匹配<code>9</code>
    testString: 'assert(!userCheck.test("9"), "Your regex should not match <code>9</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
