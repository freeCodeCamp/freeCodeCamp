---
id: 5900f3a81000cf542c50feba
challengeType: 5
videoUrl: ''
title: 问题59：XOR解密
---

## Description
<section id="description">计算机上的每个字符都分配有唯一的代码，首选标准是ASCII（美国信息交换标准代码）。例如，大写A = 65，星号（*）= 42，小写k = 107.现代加密方法是获取文本文件，将字节转换为ASCII，然后使用给定值对每个字节进行异或，取自密钥。 XOR功能的优点是在密文上使用相同的加密密钥，恢复纯文本;例如，65 XOR 42 = 107，然后107 XOR 42 = 65.对于不可破解的加密，密钥与纯文本消息的长度相同，密钥由随机字节组成。用户将加密的消息和加密密钥保持在不同的位置，并且没有两个“一半”，就不可能解密该消息。不幸的是，这种方法对大多数用户来说是不切实际的，因此修改后的方法是使用密码作为密钥。如果密码短于可能的消息，则密钥在整个消息中循环重复。此方法的余额是使用足够长的密码密钥来保证安全性，但又要足够短，以便令人难忘。您的任务变得简单，因为加密密钥由三个小写字符组成。使用cipher.txt（右键单击并“保存链接/目标为...”），包含加密的ASCII代码的文件，以及纯文本必须包含常用英语单词的知识，解密消息并找到总和原始文本中的ASCII值。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler59()</code>应返回107359。
    testString: assert.strictEqual(euler59(), 107359);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler59() {
  // Good luck!
  return true;
}

euler59();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
