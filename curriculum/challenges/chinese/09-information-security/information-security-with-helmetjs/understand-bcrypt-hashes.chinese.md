---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
videoUrl: ''
localeTitle: 了解BCrypt Hashes
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a>克隆的。 BCrypt哈希非常安全。哈希基本上是原始数据的指纹 - 始终是唯一的。这是通过将原始数据馈送到算法中并返回固定长度的结果来实现的。为了进一步使这个过程复杂化并使其更安全，您还可以<em>加入哈希</em>值。对哈希进行盐析涉及在哈希处理之前将随机数据添加到原始数据，这使得更难破解哈希。 BCrypt哈希总是看起来像<code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>确实有一个结构。第一小部分数据<code>$2a</code>定义了使用何种哈希算法。下一部分<code>$13</code>定义了<em>成本</em> 。成本是计算哈希值所需的功率。它具有2 ^成本的对数标度，并确定通过散列算法放置数据的次数。例如，以10为代价，您可以在普通计算机上每秒散列10个密码，但是每个散列需要花费3秒才能进行散乱...并且需要花费更多时间，成本为31需要多天才能完成哈希。目前，12的成本被认为是非常安全的。哈希<code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>的最后一部分看起来像<code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code>数字，句号和字母，但它实际上是两条独立的信息。前22个字符是纯文本的盐，其余的是哈希密码！ <hr>要开始使用BCrypt，请将其作为项目中的依赖项添加，并在服务器中将其命名为“bcrypt”。当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt是一个依赖
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'bcrypt', 'Your project should list "bcrypt" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 已经适当地要求BCrypt
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /bcrypt.*=.*require.*('|")bcrypt('|")/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
