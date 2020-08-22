---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
challengeType: 6
videoUrl: ''
localeTitle: 将JSON数据转换为HTML
---

## Description
<section id="description">现在您正在从JSON API获取数据，您可以在HTML中显示它。您可以使用<code>forEach</code>方法循环数据，因为cat照片对象保存在数组中。当您到达每个项目时，您可以修改HTML元素。首先，使用<code>var html = &quot;&quot;;</code>声明一个html变量<code>var html = &quot;&quot;;</code> 。然后，遍历JSON，将HTML添加到包含<code>strong</code>标记中的键名的变量，然后是值。循环结束后，渲染它。这是执行此操作的代码： <blockquote> json.forEach（function（val）{ <br> var keys = Object.keys（val）; <br> html + =“&lt;div class =&#39;cat&#39;&gt;”; <br> keys.forEach（function（key）{ <br> html + =“&lt;strong&gt;”+ key +“&lt;/ strong&gt;：”+ val [key] +“&lt;br&gt;”; <br> }）; <br> html + =“&lt;/ div&gt; &lt;br&gt;”; <br> }）; </blockquote></section>

## Instructions
<section id="instructions">添加<code>forEach</code>方法以循环JSON数据并创建HTML元素以显示它。这是一些JSON示例<blockquote> [ <br> { <br> “ID”：0， <br> “IMAGELINK”： “https://s3.amazonaws.com/freecodecamp/funny-cat.jpg” <br> “altText”：“头上戴着绿色头盔形状瓜的白猫。”， <br> “codeNames”：[“Juggernaut”，“华莱士夫人”，“毛茛” <br> ] <br> } <br> ] </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该将数据存储在<code>html</code>变量中
    testString: assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g));
  - text: 您的代码应该使用<code>forEach</code>方法来循环API中的JSON数据。
    testString: assert(code.match(/json\.forEach/g));
  - text: 您的代码应将密钥名称包装在<code>strong</code>标记中。
    testString: assert(code.match(/<strong>.+<\/strong>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        // Add your code below this line



        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML=html;
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
