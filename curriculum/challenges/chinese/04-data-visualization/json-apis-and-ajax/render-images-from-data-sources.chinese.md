---
id: 587d7fae367417b2b2512be6
title: Render Images from Data Sources
challengeType: 6
videoUrl: ''
localeTitle: 从数据源渲染图像
---

## Description
<section id="description">最后几个挑战表明，JSON数组中的每个对象都包含一个<code>imageLink</code>键，其值为cat图像的URL。循环浏览这些对象时，可以使用此<code>imageLink</code>属性在<code>img</code>元素中显示此图像。这是执行此操作的代码： <code>html += &quot;&lt;img src = &#39;&quot; + val.imageLink + &quot;&#39; &quot; + &quot;alt=&#39;&quot; + val.altText + &quot;&#39;&gt;&quot;;</code> </section>

## Instructions
<section id="instructions">添加代码以在<code>img</code>标记中使用<code>imageLink</code>和<code>altText</code>属性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该使用<code>imageLink</code>属性来显示图像。
    testString: assert(code.match(/val\.imageLink/g));

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
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          // Add your code below this line


          // Add your code above this line
          html += "</div><br>";
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
