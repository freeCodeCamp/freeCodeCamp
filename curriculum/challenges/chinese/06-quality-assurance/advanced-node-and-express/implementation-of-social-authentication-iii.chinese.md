---
id: 589a8eb3f9fc0f352b528e72
title: Implementation of Social Authentication III
challengeType: 2
videoUrl: ''
localeTitle: 社会认证的实施III
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socialauth/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socialauth/">GitHub</a>克隆的。策略的最后一部分是处理从Github返回的配置文件。我们需要加载用户数据库对象（如果存在）或创建一个（如果不存在）并填充配置文件中的字段，然后返回用户的对象。 Github在每个配置文件中为我们提供了一个唯一的<em>ID</em> ，我们可以使用它来搜索（已经实现）用户序列化。下面是您可以在项目中使用的示例实现 - 它位于作为新策略的第二个参数的函数内，就在<code>console.log(profile);</code>目前是： <pre> db.collection（ &#39;socialusers&#39;）。findAndModify（
    {id：profile.id}，
    {}，
    {$ setOnInsert：{
        id：profile.id，
        name：profile.displayName || &#39;John Doe&#39;，
        照片：profile.photos [0] .value || ”
        电子邮件：profile.emails [0] .value || &#39;没有公开电子邮件&#39;，
        created_on：new Date（），
        provider：profile.provider || “
    } $设置：{
        last_login：新日期（）
    } $ INC {
        login_count：1
    }}，
    {upsert：true，new：true}，
    （错误，doc）=&gt; {
        return cb（null，doc.value）;
    }
）; </pre>使用findAndModify，它允许您搜索对象并对其进行更新，如果对象不存在则将其置换，并在每次回调函数中接收新对象。在这个例子中，我们总是将last_login设置为now，我们总是将login_count增加1，并且只有当我们插入一个新对象（新用户）时，我们才会填充大部分字段。需要注意的是使用默认值。有时，返回的个人资料不会填写所有信息，或者用户会选择保留私密信息;所以在这种情况下我们必须处理它以防止错误。你现在应该可以登录你的应用了 - 试试吧！当您认为自己已经做对时，请提交您的页面。如果你正在运行到错误，您可以检查出的这个小项目的完成代码的例子<a href="https://glitch.com/#!/project/guttural-birch">在这里</a> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Github策略设置完成
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /GitHubStrategy[^]*db.collection/gi, 'Strategy should use now use the database to search for the user'); assert.match(data, /GitHubStrategy[^]*socialusers/gi, 'Strategy should use "socialusers" as db collection'); assert.match(data, /GitHubStrategy[^]*return cb/gi, 'Strategy should return the callback function "cb"'); }, xhr => { throw new Error(xhr.statusText); })

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
