---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: 使用JavaScript XMLHttpRequest方法发布数据
---

## Description
<section id="description">在前面的示例中，您从外部资源接收数据。您也可以将数据发送到外部资源，只要该资源支持AJAX请求并且您知道URL。 JavaScript的<code>XMLHttpRequest</code>方法也用于将数据发布到服务器。这是一个例子： <blockquote> req = new XMLHttpRequest（）; <br> req.open（ “POST”，网址，真实）; <br> req.setRequestHeader（ &#39;内容 - 类型&#39;， &#39;文本/纯&#39;）; <br> req.onreadystatechange =函数（）{ <br> if（req.readyState == 4 &amp;&amp; req.status == 200）{ <br> document.getElementsByClassName（ &#39;信息&#39;）[0] = .innerHTML req.responseText; <br> } <br> }; <br> req.send（用户名）; </blockquote>你以前见过其中几种方法。这里<code>open</code>方法将请求初始化为对外部资源的给定URL的“POST”，并使用<code>true</code>布尔值使其异步。 <code>setRequestHeader</code>方法设置HTTP请求标头的值，该标头包含有关发件人和请求的信息。它必须在<code>open</code>方法之后调用，但在<code>send</code>方法之前调用。这两个参数是标题的名称和要设置为该标题正文的值。接下来， <code>onreadystatechange</code>事件侦听器处理请求状态的更改。 <code>readyState</code>为4表示操作已完成， <code>status</code>为200表示该操作成功。文档的HTML可以更新。最后， <code>send</code>方法使用<code>userName</code>值发送请求，该值由用户在<code>input</code>字段中给出。 </section>

## Instructions
<section id="instructions">更新代码以创建并发送“POST”请求。然后在输入框中输入您的姓名，然后单击“发送消息”。您的AJAX功能将取代“来自服务器的回复将在这里”。与服务器的回复。在这种情况下，你的名字附加“爱猫”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该创建一个新的<code>XMLHttpRequest</code> 。
    testString: assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g));
  - text: 您的代码应使用<code>open</code>方法初始化对服务器的“POST”请求。
    testString: assert(code.match(/\.open\(\s*?('|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g));
  - text: 您的代码应使用<code>setRequestHeader</code>方法。
    testString: assert(code.match(/\.setRequestHeader\(\s*?('|")Content-Type\1\s*?,\s*?('|")application\/json;\s*charset=UTF-8\2\s*?\)/g));
  - text: 您的代码应该将<code>onreadystatechange</code>事件处理程序设置为函数。
    testString: assert(code.match(/\.onreadystatechange\s*?=/g));
  - text: 您的代码应该获取带有类<code>message</code>的元素，并将其内部HTML更改为<code>responseText</code> 。
    testString: assert(code.match(/document\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?.+?\.userName\s*?\+\s*?.+?\.suffix/g));
  - text: 您的代码应使用<code>send</code>方法。
    testString: assert(code.match(/\.send\(\s*?body\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sendMessage').onclick=function(){

      var userName=document.getElementById('name').value;
      // Add your code below this line


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
<h1>Cat Friends</h1>
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
