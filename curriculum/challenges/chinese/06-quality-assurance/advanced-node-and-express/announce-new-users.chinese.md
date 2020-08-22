---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
videoUrl: ''
localeTitle: 宣布新用户
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a>克隆的。许多聊天室能够在用户连接或断开连接时进行通知，然后将其显示给聊天中的所有连接用户。看起来您已经在连接和断开连接上发出事件，您只需修改此事件即可支持此功能。最合乎逻辑的方法是使用事件发送3个数据：连接/断开用户的名称，当前用户计数以及连接或断开连接的名称。 <hr>将事件名称更改为“user”，并且数据传递一个对象，包含字段&#39;name&#39;，&#39;currentUsers&#39;和boolean&#39;connected&#39;（如果是连接则为true，对于断开发送的用户，则为false）。确保对我们有&#39;用户计数&#39;事件的两个点进行更改，并将断开连接设置为对&#39;field&#39;字段发送false，而不是像在connect上发出的事件那样为true。 <code>io.emit(&#39;user&#39;, {name: socket.request.user.name, currentUsers, connected: true});</code>现在，您的客户端将拥有所有必要信息，以便在用户连接或断开连接时正确显示当前用户数和通知！要在客户端处理此事件，我们应该监听“用户”，然后使用jQuery将<code>#num-users</code>的文本更改为“{NUMBER}在线用户”，并附加<code>&lt;li&gt;</code> ，以更新当前用户数<code>&lt;li&gt;</code>使用ID为&#39;messages&#39;的无序列表，其中&#39;{NAME}已{加/左}聊天。&#39;。此实现可能如下所示： <pre> socket.on（&#39;user&#39;，function（data）{
  $（&#39;＃num-users&#39;）。text（data.currentUsers +&#39;users online&#39;）;
  var message = data.name;
  if（data.connected）{
    消息+ =&#39;已加入聊天。&#39;;
  } else {
    消息+ =&#39;离开了聊天。&#39;;
  }
  $（&#39;＃messages&#39;）。append（$（&#39;&lt;li&gt;&#39;）。html（&#39;&lt;b&gt;&#39;+ message +&#39;&lt;\ / b&gt;&#39;））;
}）; </pre>当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用name，currentUsers和connected发出事件“user”
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user('|").*name.*currentUsers.*connected/gi, 'You should have an event emitted named user sending name, currentUsers, and connected'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 客户正确处理和显示事件'用户'中的新数据
    testString: "getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")user('|\")[^]*num-users/gi, 'You should change the text of #num-users within on your client within the \"user\" even listener to show the current users connected'); assert.match(data, /socket.on.*('|\")user('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"user\" event listener to announce a user came or went'); }, xhr => { throw new Error(xhr.statusText); })"

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
