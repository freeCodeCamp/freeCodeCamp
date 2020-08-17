---
id: 589fc832f9fc0f352b528e79
title: Send and Display Chat Messages
challengeType: 2
videoUrl: ''
localeTitle: 发送和显示聊天消息
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a>克隆的。是时候开始允许客户端向服务器发送聊天消息以向所有客户端发送消息！已经在您的client.js文件中，您应该看到在提交messgae表单时已经存在一段代码处理！ （ <code>$(&#39;form&#39;).submit(function(){ /*logic*/ });</code> ） <hr>在您处理表单提交的代码中，您应该在定义“messageToSend”之后但在清除文本框<code>#m</code>之前发出事件。该事件应命名为“聊天消息”，数据应为“messageToSend”。 <code>socket.emit(&#39;chat message&#39;, messageToSend);</code>现在，在您的服务器上，您应该收听事件“聊天消息”的套接字，并将数据命名为“message”。一旦接收到事件，应该然后发射所述事件“聊天消息”到所有插座<code>io.emit</code>与数据为含“名称”和“报文”的对象。现在再次在您的客户端上，您现在应该监听事件“聊天消息”，并在收到时，将一个列表项追加到<code>#messages</code> ，其名称为冒号和消息！此时聊天功能齐全，并在所有客户端发送消息！当您认为自己已经做对时，请提交您的页面。如果您遇到错误，可以<a href="https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136">在此处</a>检查项目到此时<a href="https://gist.github.com/JosephLivengood/3e4b7750f6cd42feaa2768458d682136">为服务器</a>和<a href="https://gist.github.com/JosephLivengood/41ba76348df3013b7870dc64861de744">客户端</a> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 服务器侦听“聊天消息”，然后正确发出
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /socket.on.*('|")chat message('|")[^]*io.emit.*('|")chat message('|").*name.*message/gi, 'Your server should listen to the socket for "chat message" then emit to all users "chat message" with name and message in the data object'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 客户端正确处理和显示事件“聊天消息”中的新数据
    testString: "getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")chat message('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"chat message\" event listener to display the new message'); }, xhr => { throw new Error(xhr.statusText); })"

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
