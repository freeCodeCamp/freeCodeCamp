---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
videoUrl: ''
localeTitle: 实现Passport用户的序列化
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。现在我们没有加载实际的用户对象，因为我们还没有设置我们的数据库。这可以通过许多不同的方式完成，但是对于我们的项目，当我们启动服务器并在应用程序的整个生命周期中保持持久连接时，我们将连接到数据库。为此，请将MongoDB添加为依赖项，并在服务器中将其需要。 （ <code>const mongo = require(&#39;mongodb&#39;).MongoClient;</code> ）现在我们想要连接到我们的数据库，然后开始侦听请求。这样做的目的是在连接数据库之前或者出现数据库错误时不允许请求。要实现此目的，您需要在以下内容中包含序列化和应用程序侦听器： <pre> mongo.connect（process.env.DATABASE，（err，db）=&gt; {
    if（错误）{
        console.log（&#39;数据库错误：&#39;+错误）;
    } else {
        console.log（&#39;成功的数据库连接&#39;）;
<pre> <code> //serialization and app.listen</code> </pre>
<p> }}）; </p></pre>您现在可以在deserializeUser中取消注释该块并删除您的<code>done(null, null)</code> 。确保将.env文件中的<em>DATABASE</em>设置为数据库的连接字符串（例如： <code>DATABASE=mongodb://admin:pass@mlab.com:12345/my-project</code> ）。您可以在<a href="https://mlab.com/welcome/">mLab</a>上设置免费数据库。恭喜 - 您已完成序列化设置！当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/e192e809a1d27cb80dc2c6d3467b7477">在这里查看</a>到目前为止完成的项目。 <p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在数据库连接
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /mongo.connect/gi, 'You should have created a connection to your database'); assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}/gi, 'You should have your app.listen nested at within your database connection at the bottom'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 反序列化现在正确使用DB并且擦除了<code>done(null, null)</code>
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.notMatch(data, /null,( |)null/gi, 'The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out'); }, xhr => { throw new Error(xhr.statusText); })

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
