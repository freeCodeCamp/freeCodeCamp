---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
challengeType: 0

videoUrl: ''
localeTitle: Convert JSON Data to HTML
---

## Description
<section id='description'>
现在你可以从 JSON API 获取数据了，你可以在 HTML 中显示它。
既然 cat photo 对象保存在数组里，你可以使用<code>forEach</code>方法来遍历它。当你拿到每个对象时，你就可以修改 HTML 元素了。
首先，用<code>var html = "";</code>声明一个变量。
接着，遍历 JSON，将 HTML 添加到用<code>strong</code>标记键名的变量，后面跟着值。当循环结束后渲染它。
这是执行此操作的代码：
<blockquote>json.forEach(function(val) {</br>&nbsp;&nbsp;var keys = Object.keys(val);</br>&nbsp;&nbsp;html += "&lt;div class = 'cat'&gt;";</br>&nbsp;&nbsp;keys.forEach(function(key) {</br>&nbsp;&nbsp;&nbsp;&nbsp;html += "&lt;strong&gt;" + key + "&lt;/strong&gt;: " + val[key] + "&lt;br&gt;";</br>&nbsp;&nbsp;});</br>&nbsp;&nbsp;html += "&lt;/div&gt;&lt;br&gt;";</br>});</blockquote>
</section>

## Instructions
<section id='instructions'>
添加一个<code>forEach</code>循环 JSON 数据的方法，并创建 HTML 元素以显示它。
这些是一下 JSON 示例
<blockquote>[</br>&nbsp;&nbsp;{</br>&nbsp;&nbsp;&nbsp;&nbsp;"id":0,</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"altText":"一只头上戴着绿色瓜状头盔的白猫",</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"</br>&nbsp;&nbsp;&nbsp;&nbsp;]</br>&nbsp;&nbsp;}</br>]</blockquote>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该将数据保存在<code>html</code>变量中。
    testString: assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g), '你的代码应该将数据保存在<code>html</code>变量中。');
  - text: 你的代码应该使用<code>forEach</code>方法来遍历 API 中的 JSON 数据。
    testString: assert(code.match(/json\.forEach/g), '你的代码应该使用<code>forEach</code>方法来遍历 API 中的 JSON 数据。');
  - text: 你的代码应该将键名包装在<code>strong</code>标签中。
    testString: assert(code.match(/<strong>.+<\/strong>/g), '你的代码应该将键名包装在<code>strong</code>标签中。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<script>,  document.addEventListener('DOMContentLoaded',function(){,    document.getElementById('getMessage').onclick=function(){,      req=new XMLHttpRequest();,      req.open("GET",'/json/cats.json',true);,      req.send();,      req.onload=function(){,        json=JSON.parse(req.responseText);,        var html = "";,        // 在这行下面添加代码,        ,        ,        ,        // 在这行上面添加代码,        document.getElementsByClassName('message')[0].innerHTML=html;,      };,    };,  });,</script>,<style>,  body {,    text-align: center;,    font-family: "Helvetica", sans-serif;,  },  h1 {,    font-size: 2em;,    font-weight: bold;,  },  .box {,    border-radius: 5px;,    background-color: #eee;,    padding: 20px 5px;,  },  button {,    color: white;,    background-color: #4791d0;,    border-radius: 5px;,    border: 1px solid #4791d0;,    padding: 5px 10px 8px 10px;,  },  button:hover {,    background-color: #0F5897;,    border: 1px solid #0F5897;,  },</style>,<h1>Cat Photo Finder</h1> ,<p class="message box">,  The message will go here,</p>,<p>,  <button id="getMessage">,    Get Message,  </button>,</p>
```





</div>





</section>

              