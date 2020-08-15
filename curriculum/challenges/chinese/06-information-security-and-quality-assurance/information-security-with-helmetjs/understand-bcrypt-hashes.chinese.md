---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
isHidden: false
forumTopicId: 301586
localeTitle: 了解加密哈希
---

## Description
<section id='description'>
温馨提醒，本项目在 <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/'>这个 Glitch 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-bcrypt/'> GitHub </a>上克隆。
BCrypt 哈希非常安全. 哈希其实就是原数据的加密形式，非常安全，这通过把原始数据放进哈希算法然后返回固定长度的字符串实现。为了让这个过程更复杂跟安全，你还可以加你的哈希添加 <em>盐</em>。加盐其实就是给在哈希算法工作前给源数据添加随机的字符串数据，这会让破解哈希更加复杂
BCrypt 看起来像这样子 <code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>，它遵循固定的结构. 前面一小节 <code>$2a</code> 说明了该哈希采用什么算法。下一部分 <code>$13</code> 定义了 <em>代价</em>. 代价就是用多少计算资源来生成哈希。 它的对数刻度是 2^cost 它决定了数据被放入哈希算法多少次。举个例子，如果代价为10也就是说你能够在一个普通的计算机上每秒钟哈希10个密码。然而，如果代价为15，那每个哈希都要3秒钟，再举例子，如果代价是31at a cost of 31，那每次哈希能耗费好几天。通常代价为12就已经足够安全。哈希的最后一部分 <code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>, 看起来像随机字符、句号、字母组成的随机字符串。但实际上它有两部分内容。前面22个字符就是纯文本的盐，剩下的就是加密过的密码！
</section>

## Instructions
<section id='instructions'>
要开始使用 BCrypt, 只需添加到你的依赖列表，然后在你的服务器引入 'bcrypt'
在你觉得已经完成的时候提交页面。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCyrpt 已被添加到依赖列表
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: BCrypt 已经被正确引入
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /bcrypt.*=.*require.*('|")bcrypt('|")/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
