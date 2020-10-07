---
id: 587d7fae367417b2b2512be4
challengeType: 6
forumTopicId: 301499
title: 访问来自 API 的 JSON 数据
---

## Description
<section id='description'>
在前面的挑战中，你了解了如何从 freeCodeCamp Cat Photo API 获取 JSON 数据。
现在，你将进一步观察返回的数据来更好的了解 JSON 格式，回忆一下 JavaScript 中的一些符号：
<blockquote>[ ] -> 方括号表示数组<br>{ } -> 大括号表示对象<br>" " -> 双引号表示字符串，它们还用于表示 JSON 中的键名</blockquote>
理解 API 返回数据的结构是必需的，它将影响你如何获取你所需的值。
在右侧，点击 "Get Message" 按钮，将 freeCodeCamp Cat Photo API JSON 加载到页面中。
你看到在 JSON 数据中的第一个和最后一个字符是中括号<code>[ ]</code>，这意味着返回的数据是一个数组。JSON 数据中的第二个符号是一个大括号<code>{</code>，这意味着是一个对象。再仔细看，你会发现有三个独立的对象，这个 JSON 数据是一个包含三个对象的数组，它们各自都包含了 cat photo 的信息。
你之前了解了对象包含了用逗号分隔的 "键值对"。在 Cat Photo 示例中，第一个对象的<code>"id":0</code>"id" 是键，0 是其对应的值，类似的，"imageLink", "altText", 和 "codeNames" 都是对应的键。每个 cat photo 对象具有相同的键，但具有不同的值 
在第一个对象中有一个有趣的 "键值对" 它是<code>"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]</code>。 "codeNames" 是键，它的值是包含三个字符串的数组。对象数组以及数组作为键可以作为值 
记住如何访问数组和对象中的数据，数组使用括号表示法来访问项目的特定索引，对象使用括号或点表示法来访问给定属性的值。这是打印第一张 cat photo 的“altText”的示例 - 请注意，编辑器中解析的 JSON 数据保存在名为<code>json</code>的变量中：

```js
console.log(json[0].altText);
// Prints "A white cat wearing a green helmet shaped melon on its head."
```

</section>

## Instructions
<section id='instructions'>
对于 "id" 是 2 的猫， 打印<code>codeNames</code>数组的第二个值到控制台，你应该在对象上使用括号或者点表示法（保存在变量<code>json</code>中）来访问该值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "你的代码应该使用括号和点表示法来读取正确的代码名称，并将 'Loki' 打印到控制台。"
    testString: assert(code.match(/console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g));

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
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // 在这行下面添加代码

        // 在这行上面添加代码
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
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
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

</section>
