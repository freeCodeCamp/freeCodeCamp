---
id: 587d7faf367417b2b2512be8
title: 根据地理位置数据找到用户的 GPS 坐标
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

你还能做一件很酷的事就是访问你用户当前的地理位置。 每个浏览器都有内置的导航器，可以为你提供这些信息。

导航器会获取用户当前的经度和纬度。

您将看到允许或阻止此站点了解您当前位置的提示。 只要代码正确，挑战就可以以任何一种方式完成。

通过选择允许，你将看到输出手机上的文本更改为你的纬度和经度

这是执行此操作的代码：

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

首先，它检查`navigator.geolocation`对象是否存在。 如果是，`getCurrentPosition`则调用该对象上的方法，该方法启动对用户位置的异步请求。 如果请求成功，则运行方法中的回调函数。 此函数`position`使用点表示法访问对象的纬度和经度值，并更新页面。

# --instructions--

在`script`标记内添加示例代码以检查用户的当前位置并将其插入 HTML

# --hints--

应该使用 `navigator.geolocation` 访问用户的当前位置。

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

应该使用 `position.coords.latitude` 显示用户的纬度位置。

```js
assert(code.match(/position\.coords\.latitude/g));
```

应该使用 `position.coords.longitude` 显示用户的经度位置。

```js
assert(code.match(/position\.coords\.longitude/g));
```

应该在具有 `id="data"` 的 `div` 元素中显示用户的位置。

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
