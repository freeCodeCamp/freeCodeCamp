---
id: 587d7fae367417b2b2512be7
title: Pre-filter JSON to Get the Data You Need
challengeType: 6
videoUrl: ''
localeTitle: 预过滤JSON以获取所需的数据
---

## Description
<section id="description">如果您不想渲染来自freeCodeCamp Cat Photo API的每张猫照片，您可以在循环之前预先过滤JSON。鉴于JSON数据存储在数组中，您可以使用<code>filter</code>方法过滤掉“id”键值为1的cat。以下是执行此操作的代码： <blockquote> json = json.filter（function（val）{ <br> return（val.id！== 1）; <br> }）; </blockquote></section>

## Instructions
<section id="instructions">添加代码以<code>filter</code> json数据以删除“id”值为1的cat。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该使用<code>filter</code>方法。
    testString: assert(code.match(/json\.filter/g));

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
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });
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
