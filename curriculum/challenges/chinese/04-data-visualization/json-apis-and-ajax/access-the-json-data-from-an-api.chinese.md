---
id: 587d7fae367417b2b2512be4
title: Access the JSON Data from an API
challengeType: 6
videoUrl: ''
localeTitle: 从API访问JSON数据
---

## Description
<section id="description">在之前的挑战中，您了解了如何从freeCodeCamp Cat Photo API获取JSON数据。现在，您将仔细查看返回的数据，以便更好地理解JSON格式。回想一下JavaScript中的一些表示法： <blockquote> []  - &gt;方括号代表一个数组<br> {}  - &gt;圆括号代表一个对象<br> “” - &gt;双引号代表一个字符串。它们还用于JSON中的键名</blockquote>了解API返回的数据结构非常重要，因为它会影响您检索所需值的方式。在右侧，单击“获取消息”按钮，将freeCodeCamp Cat Photo API JSON加载到HTML中。您在JSON数据中看到的第一个和最后一个字符是方括号<code>[ ]</code> 。这意味着返回的数据是一个数组。 JSON数据中的第二个字符是一个卷曲<code>{</code>括号，它启动一个对象。仔细观察，您可以看到有三个独立的对象。 JSON数据是一个包含三个对象的数组，其中每个对象都包含有关猫照片的信息。您之前了解到，对象包含以逗号分隔的“键值对”。在Cat Photo示例中，第一个对象具有<code>&quot;id&quot;:0</code>其中“id”是键，0是其对应值。类似地，有“imageLink”，“altText”和“codeNames”的键。每个猫照片对象具有相同的键，但具有不同的值。第一个对象中另一个有趣的“键值对”是<code>&quot;codeNames&quot;:[&quot;Juggernaut&quot;,&quot;Mrs. Wallace&quot;,&quot;ButterCup&quot;]</code> 。这里“codeNames”是键，它的值是三个字符串的数组。可以有对象数组以及带有数组作为值的键。记住如何访问数组和对象中的数据。数组使用括号表示法来访问项目的特定索引。对象使用括号或点表示法来访问给定属性的值。这是打印第一张猫照片的“altText”的示例 - 请注意编辑器中解析的JSON数据保存在名为<code>json</code>的变量中： <blockquote>的console.log（JSON [0] .altText）; <br> //打印“头上戴着绿色头盔形瓜的白猫。” </blockquote></section>

## Instructions
<section id="instructions">对于“id”为2的cat，在<code>codeNames</code>数组中向控制台输出第二个值。您应该在对象上使用括号和点表示法（保存在变量<code>json</code> ）来访问该值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用括号和点符号来访问正确的代码名称，并将“Loki”打印到控制台。
    testString: assert(code.match(/console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g));

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
        document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
        // Add your code below this line


        // Add your code above this line
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
