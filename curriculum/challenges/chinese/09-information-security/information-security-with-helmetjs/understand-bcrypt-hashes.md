---
id: 58a25bcef9fc0f352b528e7c
challengeType: 2
forumTopicId: 301586
title: 了解 BCrypt 的哈希加密
---

## Description
<section id='description'>
请注意，本项目在 <a href="https://repl.it/github/freeCodeCamp/boilerplate-infosec">这个 Repl.it 项目</a> 的基础上进行开发。你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-infosec/'>GitHub</a> 上克隆。
BCrypt 哈希非常安全。哈希其实就是原数据的加密形式，结果唯一；通过把原始数据放进哈希算法然后返回固定长度的字符串实现。为了让这个过程更加复杂和安全，你还可以加你的哈希添加 <em>盐</em>。加盐其实就是给在哈希算法执行前给源数据添加随机的字符串数据，这会让破解哈希结果更加复杂
BCrypt 的哈希结果会是这样 <code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>。它遵循固定的结构，前面一小节 <code>$2a</code> 说明了该哈希采用什么算法。下一部分 <code>$13</code> 定义了 <em>cost</em>。cost 就是生成此哈希结果所用到的资源数量级；它是 2^cost 的对数，可以表说单位时间内数据放入哈希算法的次数。举个例子，cost 为 10 的意思就是说你能够在一个普通的计算机上每秒钟计算出 10 个密码的哈希结果。然而，如果 cost 为 15，那计算每个哈希结果就要 3 秒钟。再举例子，如果 cost 是 31，那每次哈希运算需要话费好几天才能完成。通常 cost 为 12 的哈希运算就已经足够安全。哈希结果的最后一部分 <code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> 看起来像是由随机数字、点和字母组成的字符串，但实际上它有两部分内容。前面 22 个字符是加入的盐，剩下的就是加密过的密码！
</section>

## Instructions
<section id='instructions'>
要开始使用 BCrypt, 只需将它添加到你的依赖列表，然后在你的服务器引入 'bcrypt'。
请在完成挑战后提交你的页面。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应添加 BCyrpt 至依赖列表
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 应正确引入 BCrypt
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
