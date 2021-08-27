---
id: 5b7d72c338cd7e35b63f3e14
title: 通過瀏覽器降級提高兼容性
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

使用 CSS 時可能會遇到瀏覽器兼容性問題。 提供瀏覽器降級方案來避免潛在的問題會顯得很重要。

當瀏覽器解析頁面的 CSS 時，會自動忽視不能識別或者不支持的屬性。 舉個例子，如果使用 CSS 變量來指定站點的背景色，IE 瀏覽器由於不支持 CSS 變量而會忽略背景色。 此時，瀏覽器會嘗試使用其它值。 但如果沒有找到其它值，則會使用默認值，也就是沒有背景色。

這意味着如果想提供瀏覽器降級方案，在聲明之前提供另一個更寬泛的值即可。 這樣老舊的瀏覽器會降級使用這個方案，新的瀏覽器會在後面的聲明裏覆蓋降級方案。

# --instructions--

我們使用了 CSS 變量來定義 `.red-box` 的背景色。 現在，我們通過在現有的聲明之前添加另一個 `background` 聲明，並將它的值設置爲 `red`，來提升瀏覽器的兼容性。

# --hints--

`.red-box` 規則應在現有的 `background` 聲明之前有一個 `background` 的備用屬性，其值爲 `red`。

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
