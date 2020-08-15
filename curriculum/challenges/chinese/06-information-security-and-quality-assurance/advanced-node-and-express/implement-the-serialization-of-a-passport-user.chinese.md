---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
isHidden: false
forumTopicId: 301556
localeTitle: 实现 Passport 用户的序列化
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-advancednode/'>GitHub</a> 上克隆。
截至目前，我们还没有配置完数据库，因此还无法加载用户数据。实现这个的方式很多，但对于我们的项目，一旦服务器启动，那么只要有 app 实例在运行，数据库就应一直处于连接状态。
为此，我们要添加 MongoDB 作为依赖，并在 server 中<code>require</code>它，就像这样：<code>const mongo = require('mongodb').MongoClient;</code>。
在连接数据库之后，我们才能让服务器开始监听请求，这样做可以保证服务器在数据库连接前或数据库发生错误时不接受任何请求。为此，我们需要这样写：

```js
mongo.connect(process.env.DATABASE, (err, db) => {
  if(err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');

    //serialization and app.listen
  }
});
```

现在，请把上一个挑战中我们注释掉的<code>deserializeUser</code>中的代码块添加回来，然后删掉<code>done(null, null)</code>。请确保你已经在 .env 文件里配置了<code>DATABASE</code>的数据库连接字段，例如：<code>DATABASE=mongodb://admin:pass@mlab.com:12345/my-project</code>。你可以在 <a href='https://mlab.com/welcome/'>mLab</a> 上创建一个免费的数据库。至此，序列化的创建完成。
完成上述要求后，你就可以在左边提交你的页面链接。如果运行出错，你可以在<a href="https://gist.github.com/JosephLivengood/e192e809a1d27cb80dc2c6d3467b7477">这里</a>检查你的项目完成情况。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应存在数据库连接。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /mongo.connect/gi, 'You should have created a connection to your database'); assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}/gi, 'You should have your app.listen nested at within your database connection at the bottom'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 反序列化应正确使用，且应移除<code>done(null, null)</code>。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.notMatch(data, /null,( |)null/gi, 'The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out'); }, xhr => { throw new Error(xhr.statusText); })

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
