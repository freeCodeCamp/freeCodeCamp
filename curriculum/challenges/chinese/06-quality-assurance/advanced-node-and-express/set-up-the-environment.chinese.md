---
id: 589fc830f9fc0f352b528e74
title: Set up the Environment
challengeType: 2
videoUrl: ''
localeTitle: 设置环境
---

## Description
<section id="description">提醒一下，这个项目是基于<a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-socketio/">Glitch</a>的以下入门项目构建的，或者是从<a href="https://github.com/freeCodeCamp/boilerplate-socketio/">GitHub</a>克隆的。将Socket.IO添加为依赖项，并在服务器中要求/实例化它，定义为&#39;io&#39;，并将http服务器作为参数。 <code>const io = require(&#39;socket.io&#39;)(http);</code>需要处理的第一件事是从客户端侦听新连接。 <dfn>on</dfn>关键字就是这样 - 监听特定事件。它需要2个参数：一个包含所发出事件标题的字符串，以及一个用于传递数据的函数。在我们的连接侦听器的情况下，我们使用<em>socket</em>来定义第二个参数中的数据。套接字是连接的个人客户端。要在我们的服务器上侦听连接，请在项目中的注释之间添加以下内容： <pre> io.on（&#39;connection&#39;，socket =&gt; {
  console.log（&#39;用户已连接&#39;）;
}）; </pre>现在，对于客户端进行连接，您只需要将以下内容添加到client.js中，该客户端经过身份验证后由页面加载： <pre> / * global io * /
var socket = io（）; </pre>注释会抑制您通常会看到的错误，因为文件中未定义“io”。我们已经在chat.pug页面上的Socket.IO库中添加了一个可靠的CDN。现在尝试加载您的应用并进行身份验证，您应该在服务器控制台中看到“用户已连接”！ <strong>注意</strong> <br> <code>io()</code>仅在连接到同一URL /服务器上托管的套接字时起作用。要连接到其他地方托管的外部套接字，您可以使用<code>io.connect(&#39;URL&#39;);</code> 。当您认为自己已经做对时，请提交您的页面。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Socket.IO是一个依赖项
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/package.json') .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'socket.io', 'Your project should list "socket.io" as a dependency'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO已得到适当的要求和实例化
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js').then(data => {assert.match(data, /io.*=.*require.*('|")socket.io('|").*http/gi, 'You should correctly require and instantiate socket.io as io.');}, xhr => { throw new Error(xhr.statusText); })
  - text: Socket.IO应该正在监听连接
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /io.on.*('|")connection('|").*socket/gi, 'io should listen for "connection" and socket should be the 2nd arguments variable'); }, xhr => { throw new Error(xhr.statusText); })
  - text: 您的客户端应该连接到您的服务器
    testString: getUserInput => $.get(getUserInput('url')+ '/public/client.js') .then(data => { assert.match(data, /socket.*=.*io/gi, 'Your client should be connection to server with the connection defined as socket'); }, xhr => { throw new Error(xhr.statusText); })

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
