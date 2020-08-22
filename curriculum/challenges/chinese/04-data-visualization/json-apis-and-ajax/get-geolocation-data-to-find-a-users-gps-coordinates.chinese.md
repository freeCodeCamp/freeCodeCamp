---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
videoUrl: ''
localeTitle: 获取地理位置数据以查找用户的GPS坐标
---

## Description
<section id="description">您可以做的另一件很酷的事情是访问您用户的当前位置。每个浏览器都有一个内置的导航器，可以为您提供此信息。导航器将获得用户当前的经度和纬度。您将看到允许或阻止此站点了解您当前位置的提示。只要代码正确，挑战就可以以任何一种方式完成。通过选择允许，您将看到输出手机上的文本更改为您的纬度和经度。这是执行此操作的代码： <blockquote> if（navigator.geolocation）{ <br> navigator.geolocation.getCurrentPosition（function（position）{ <br> document.getElementById（&#39;data&#39;）。innerHTML =“latitude：”+ position.coords.latitude +“&lt;br&gt;经度：”+ position.coords.longitude; <br> }）; <br> } </blockquote>首先，它检查<code>navigator.geolocation</code>对象是否存在。如果是，则调用该对象上的<code>getCurrentPosition</code>方法，该方法启动对用户位置的异步请求。如果请求成功，则运行方法中的回调函数。此函数使用点表示法访问<code>position</code>对象的纬度和经度值，并更新HTML。 </section>

## Instructions
<section id="instructions">在<code>script</code>标记内添加示例代码以检查用户的当前位置并将其插入HTML。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>navigator.geolocation</code>来访问用户的当前位置。
    testString: assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
  - text: 您的代码应使用<code>position.coords.latitude</code>来显示用户的纬度位置。
    testString: assert(code.match(/position\.coords\.latitude/g));
  - text: 您的代码应使用<code>position.coords.longitude</code>来显示用户的纵向位置。
    testString: assert(code.match(/position\.coords\.longitude/g));
  - text: 您应该在<code>data</code> div元素中显示用户的位置。
    testString: assert(code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
