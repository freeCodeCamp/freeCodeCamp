---
id: 5895f70cf9fc0f352b528e66
title: Serialization of a User Object
challengeType: 2
videoUrl: ''
localeTitle: 用户对象的序列化
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a>克隆的。序列化和反序列化是身份验证方面的重要概念。序列化对象意味着将其内容转换为一个小<em>键，</em>基本上可以将其反序列化为原始对象。这使我们能够知道与服务器通信的人，而无需在每次请求新页面时发送用户名和密码等身份验证数据。要正确设置它，我们需要一个序列化函数和一个反序列化函数。在护照中，我们使用<code>passport.serializeUser( OURFUNCTION )</code>和<code>passport.deserializeUser( OURFUNCTION )</code>创建它们。使用2个参数调用serializeUser，完整的用户对象和护照使用的回调。在回调中返回应该是唯一的键来标识该用户 - 最容易使用的用户是对象中的用户_id，因为它应该是MongoDb生成的唯一用户。类似地，使用该密钥和护照的回调函数调用deserializeUser，但这次我们必须获取该密钥并将用户完整对象返回到回调。要进行查询搜索Mongo _id，您必须创建<code>const ObjectID = require(&#39;mongodb&#39;).ObjectID;</code> ，然后使用它调用<code>new ObjectID(THE_ID)</code> 。一定要将MongoDB添加为依赖项。您可以在以下示例中看到： <pre> passport.serializeUser（（user，done）=&gt; {
   done（null，user._id）;
 }）; </pre><br><pre> passport.deserializeUser（（id，done）=&gt; {
        db.collection（ &#39;用户&#39;）。findOne（
            {_id：new ObjectID（id）}，
            （错误，doc）=&gt; {
                完成（null，doc）;
            }
        ）;
    }）; </pre>注意：这个deserializeUser将抛出一个错误，直到我们在下一步中设置数据库，因此注释掉整个块并在函数deserializeUser中调用<code>done(null, null)</code> 。当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 序列化用户功能正确
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.serializeUser/gi, 'You should have created your passport.serializeUser function'); assert.match(data, /null, user._id/gi, 'There should be a callback in your serializeUser with (null, user._id)'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 反序列化用户功能正确
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /passport.deserializeUser/gi, 'You should have created your passport.deserializeUser function'); assert.match(data, /null,( |)null/gi, 'There should be a callback in your deserializeUser with (null, null) for now'); }, xhr => { throw new Error(xhr.statusText); })
  - text: MongoDB是一个依赖项
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'mongodb', 'Your project should list "mongodb" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Mongodb正确要求包括ObjectId
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require.*("|')mongodb("|')/gi, 'You should have required mongodb'); assert.match(data, /new ObjectID.*id/gi, 'Even though the block is commented out, you should use new ObjectID(id) for when we add the database'); }, xhr => { throw new Error(xhr.statusText); })

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
