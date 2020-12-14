---
id: 587d7faf367417b2b2512be9
challengeType: 6
forumTopicId: 301504
title: 使用 XMLHttpRequest 方法发送数据
---

## Description
<section id='description'>
在前面的示例中，你在外部资源获取数据，你也可以将数据发送到外部资源，只要该资源支持 AJAX 请求并且你知道 URL。
JavaScript 的<code>XMLHttpRequest</code>方法也用于将数据发布到服务器，这是个例子：

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```

你在之前见过其中几种方法。这里<code>open</code>方法将请求初始化为对外部资源的给定 URL 的 "POST"，并使用<code>true</code>布尔值使其异步。
<code>setRequestHeader</code>方法设置HTTP请求标头的值，该标头包含有关发送人和请求的信息。它必须在<code>open</code>方法之后调用，但在<code>send</code>方法之前调用。这两个参数是标题的名称和要设置为该标题正文的值。
接下来，<code>onreadystatechange</code>事件侦听器处理请求状态的更改。<code>readyState</code>为 4 表示操作完成，<code>status</code>200表示操作成功。文档的HTML可以更新。
最后，该<code>send</code>方法发送带有<code>userName</code>值的请求，该值由用户在<code>input</code>字段中给出。
</section>

## Instructions
<section id='instructions'>
更新代码以创建并发送 "POST" 请求。然后在输入框中输入你的姓名，你的 AJAX 函数会用服务器返回的数据替换 "Reply from Server will be here"。在这种情况下，你的名字附加 " loves cats"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该创建一个新的<code>XMLHttpRequest</code>。
    testString: assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
  - text: "你的代码应该使用该<code>open</code>方法初始化到服务器的 'POST' 请求。"
    testString: assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
  - text: 你的代码应该使用该<code>setRequestHeader</code>方法。
    testString: assert(code.match(/\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g));
  - text: 你的代码应该有一个<code>onreadystatechange</code>设置为函数的事件处理程序。
    testString: assert(code.match(/\.onreadystatechange\s*?=/g));
  - text: 你的代码应该使用类获取元素<code>message</code>并将其内部HTML更改为<code>responseText</code>。
    testString: assert(code.match(/document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g));
  - text: 你的代码应该使用该<code>send</code>方法。
    testString: assert(code.match(/\.send\(\s*?body\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // 在这行下面添加代码


      // 在这行上面添加代码
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

</div>



</section>

## Solution
<section id='solution'>

```js
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201){
          const serverResponse = JSON.parse(xhr.response);
          document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
       }
     };
     const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
     xhr.send(body);
      // Add your code above this line
    };
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
                    
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>
```

</section>

