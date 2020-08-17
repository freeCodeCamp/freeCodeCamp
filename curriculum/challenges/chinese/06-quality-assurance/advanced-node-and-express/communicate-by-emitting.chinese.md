---
id: 589fc831f9fc0f352b528e75
title: Communicate by Emitting
challengeType: 2
videoUrl: ''
localeTitle: 通过发射进行沟通
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a>克隆的。 <dfn>Emit</dfn>是您将使用的最常见的沟通方式。当您从服务器向&#39;io&#39;发送内容时，会将事件的名称和数据发送到所有连接的套接字。这个概念的一个很好的例子就是每次新用户连接时都会发出连接用户的当前数量！ <hr>首先添加一个变量，以便在您当前正在侦听连接之前跟踪用户。 <code>var currentUsers = 0;</code>现在当有人连接时，你应该在发出计数之前递增计数，这样你就可以在连接监听器中添加增量器。 <code>++currentUsers;</code>最后，在递增计数后，您应该发出事件（仍在连接侦听器中）。该事件应命名为“用户计数”，数据应该只是&#39;currentUsers&#39;。 <code>io.emit(&#39;user count&#39;, currentUsers);</code> <hr>现在，您可以为客户实施一种方式来监听此事件！与在服务器上侦听连接类似，您将使用<em>on</em>关键字。 <pre> socket.on（&#39;user count&#39;，function（data）{
  的console.log（数据）;
}）; </pre>现在尝试加载您的应用并进行身份验证，您应该在客户端控制台中看到“1”代表当前用户数！尝试加载更多客户端并进行身份验证以查看数量是否上升。当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: currentUsers已定义
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /currentUsers/gi, 'You should have variable currentUsers defined');}, xhr => { throw new Error(xhr.statusText); })
  - text: 服务器在每个新连接上发出当前用户计数
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user count('|").*currentUsers/gi, 'You should emit "user count" with data currentUsers'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 您的客户正在侦听“用户计数”事件
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|")user count('|")/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
