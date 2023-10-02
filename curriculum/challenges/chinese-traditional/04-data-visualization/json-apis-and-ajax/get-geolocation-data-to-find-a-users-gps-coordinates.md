---
id: 587d7faf367417b2b2512be8
title: 根據地理位置數據找到用戶的 GPS 座標
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

你還能做一件很酷的事就是訪問你用戶當前的地理位置。 每個瀏覽器都有內置的導航器，可以爲你提供這些信息。

導航器會獲取用戶當前的經度和緯度。

您將看到允許或阻止此站點了解您當前位置的提示。 只要代碼正確，挑戰就可以以任何一種方式完成。

通過選擇允許，你將看到輸出手機上的文本更改爲你的緯度和經度

這是執行此操作的代碼：

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

首先，它檢查`navigator.geolocation`對象是否存在。 如果是，`getCurrentPosition`則調用該對象上的方法，該方法啓動對用戶位置的異步請求。 如果請求成功，則運行方法中的回調函數。 此函數`position`使用點表示法訪問對象的緯度和經度值，並更新頁面。

# --instructions--

在`script`標記內添加示例代碼以檢查用戶的當前位置並將其插入 HTML

# --hints--

應該使用 `navigator.geolocation` 訪問用戶的當前位置。

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

應該使用 `position.coords.latitude` 顯示用戶的緯度位置。

```js
assert(code.match(/position\.coords\.latitude/g));
```

應該使用 `position.coords.longitude` 顯示用戶的經度位置。

```js
assert(code.match(/position\.coords\.longitude/g));
```

應該在具有 `id="data"` 的 `div` 元素中顯示用戶的位置。

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
