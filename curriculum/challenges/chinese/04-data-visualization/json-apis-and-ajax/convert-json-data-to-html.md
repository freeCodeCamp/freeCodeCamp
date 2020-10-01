---
id: 587d7fae367417b2b2512be5
challengeType: 6
forumTopicId: 16807
title: 将 JSON 数据转换为 HTML
---

## Description
<section id='description'>
现在你可以从 JSON API 获取数据了，你可以在 HTML 中显示它。
既然 cat photo 对象保存在数组里，你可以使用<code>forEach</code>方法来遍历它。当你拿到每个对象时，你就可以修改 HTML 元素了。
首先，用<code>let html = "";</code>声明一个变量。
接着，遍历 JSON，将 HTML 添加到用<code>strong</code>标记键名的变量，后面跟着值。当循环结束后渲染它。
这是执行此操作的代码：

```js
let html = "";
json.forEach(function(val) {
  const keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});
```

<strong>注意：</strong> 在本挑战需要给页面添加一个新的 HTML 元素，不能使用 `textContent` 方法，这个方法容易遭受跨站脚本攻击，可以用 `innerHTML` 来完成挑战。
</section>

## Instructions
<section id='instructions'>
添加一个<code>forEach</code>循环 JSON 数据的方法，并创建 HTML 元素以显示它。
以下是一个 JSON 示例：

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该将数据保存在<code>html</code>变量中。
    testString: assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g));
  - text: 你的代码应该使用<code>forEach</code>方法来遍历 API 中的 JSON 数据。
    testString: assert(code.match(/json\.forEach/g));
  - text: 你的代码应该将键名包装在<code>strong</code>标签中。
    testString: assert(code.match(/<strong>.+<\/strong>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // 在这行下面添加代码


        // 在这行上面添加代码
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
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

<h1>Cat Photo Finder</h1> 
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line
        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
        });
        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
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

<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

</section>
