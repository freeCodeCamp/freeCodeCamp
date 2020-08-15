---
id: 589fc832f9fc0f352b528e78
title: Announce New Users
challengeType: 2
isHidden: false
forumTopicId: 301546
localeTitle: 用户公告
---

## Description
<section id='description'>
注意，本项目在<a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/'>这个 Glitch 项目</a>的基础上进行开发，你也可以从 <a href='https://github.com/freeCodeCamp/boilerplate-socialauth/'>GitHub</a> 上克隆。
许多聊天室都有这个功能：所有已连接到服务器的在线用户都会看到有人加入或退出的提醒。我们已经写好了处理连接和断开事件的代码，只要对这个方法稍作修改就可以实现这个功能。在事件中，我们需要发送这三条信息：连接或断开的用户名、当前用户数量、事件类型（即需要知道用户究竟是连接还是断开）。
<hr>请将事件名称更改为 'user'，其中应包含如下字段：'name'、'currentUsers'、'connected'（布尔值，对于连接是 true，断开是 false）。记得要修改之前我们写好的处理 'user count' 的那部分代码，现在我们应传入布尔值：<code>io.emit('user', {name: socket.request.user.name, currentUsers, connected: true});</code>
现在，我们的客户端已经有足够的信息显示现有用户数量和发送用户上下线通知。接下来我们需要在客户端监听 'user' 事件，然后使用 jQuery 把<code>#num-users</code>节点的文本内容更新为 '{NUMBER} users online'。同时，我们需要为<code>&#60;ul&#62;</code>添加一个 id 为 'messages' 且带有 '{NAME} has {joined/left} the chat.' 文本的<code>&#60;li&#62;</code>：An implementation of this could look like the following:<br>
其中一种实现如下：<br>

```js
socket.on('user', function(data){
  $('#num-users').text(data.currentUsers+' users online');
  var message = data.name;
  if(data.connected) {
    message += ' has joined the chat.';
  } else {
    message += ' has left the chat.';
  }
  $('#messages').append($('<li>').html('<b>'+ message +'<\/b>'));
});
```

完成上述要求后，你就可以在左边提交你的页面链接。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: user 事件应发送包含 name、currentUsers、connected 字段的对象。
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.emit.*('|")user('|").*name.*currentUsers.*connected/gi, 'You should have an event emitted named user sending name, currentUsers, and connected'); }, xhr => { throw new Error(xhr.statusText); })
  - text: '客户端应处理和显示  "user" 对象中的信息。'
    testString: "getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.on.*('|\")user('|\")[^]*num-users/gi, 'You should change the text of #num-users within on your client within the \"user\" even listener to show the current users connected'); assert.match(data, /socket.on.*('|\")user('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"user\" event listener to announce a user came or went'); }, xhr => { throw new Error(xhr.statusText); })"

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
