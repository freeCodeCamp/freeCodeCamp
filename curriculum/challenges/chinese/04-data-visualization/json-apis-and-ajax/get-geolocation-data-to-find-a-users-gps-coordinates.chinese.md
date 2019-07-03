---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 0

videoUrl: ''
localeTitle: Get Geolocation Data to Find A User's GPS Coordinates
---

## Description
<section id='description'>
你还能做一件很酷的事就是访问你用户当前的地理位置，每个浏览器都有内置的导航器，可以为你提供这些信息。
导航器会获取用户当前的经度和纬度。
您将看到允许或阻止此站点了解您当前位置的提示。只要代码正确，挑战就可以以任何一种方式完成。
通过选择允许，你将看到输出手机上的文本更改为你的纬度和经度
这是执行此操作的代码：
<blockquote>if (navigator.geolocation){<br>&nbsp;&nbsp;navigator.geolocation.getCurrentPosition(function(position) {<br>&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude +  "&lt;br&gt;longitude: " +  position.coords.longitude;<br>&nbsp;&nbsp;});<br>}</blockquote>
首先，它检查<code>navigator.geolocation</code>对象是否存在。如果是，<code>getCurrentPosition</code>则调用该对象上的方法，该方法启动对用户位置的异步请求。如果请求成功，则运行方法中的回调函数。此函数<code>position</code>使用点表示法访问对象的纬度和经度值，并更新页面。
</section>

## Instructions
<section id='instructions'>
在<code>script</code>标记内添加示例代码以检查用户的当前位置并将其插入 HTML
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该用于<code>navigator.geolocation</code>访问用户的当前位置。
    testString: assert(code.match(/navigator\.geolocation\.getCurrentPosition/g), '你的代码应该用于<code>navigator.geolocation</code>访问用户的当前位置。');
  - text: 你的代码应该用于<code>position.coords.latitude</code>显示用户的纬度位置。
    testString: assert(code.match(/position\.coords\.latitude/g), '你的代码应该用于<code>position.coords.latitude</code>显示用户的纬度位置。');
  - text: 你的代码应该用于<code>position.coords.longitude</code>显示用户的经度位置。
    testString: assert(code.match(/position\.coords\.longitude/g), '你的代码应该用于<code>position.coords.longitude</code>显示用户的经度位置。');
  - text: 你应该在<code>data</code>div 元素中显示用户的位置。
    testString: assert(code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g), '你应该在<code>data</code>div 元素中显示用户的位置。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<script>,  // 在这行下面添加代码,  ,  ,  // 在这行上面添加代码,</script>,<h4>You are here:</h4>,<div id="data">,,</div>
```





</div>





</section>

              