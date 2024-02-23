---
id: bad87fee1348bd8aedf06756
title: ID 選擇器優先級高於 Class 選擇器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

我們剛剛證明了瀏覽器讀取 CSS 是由上到下的。 這就意味着，如果發生衝突，瀏覽器將會應用最後聲明的樣式。 注意，如果我們在 `h1` 元素的類中，將 `blue-text` 放置在 `pink-text` 之前，它仍然會檢查聲明順序，而不是使用順序！

但我們還沒有完成。 其實還有其他方法可以覆蓋 CSS 樣式。 你還記得 id 屬性嗎？

我們來通過給 `h1` 元素添加 id 屬性，覆蓋 `pink-text` 和 `blue-text` 類，使 `h1` 元素變成橘色。

# --instructions--

給 `h1` 元素添加 `id` 屬性，屬性值爲 `orange-text`。 設置方式如下：

```html
<h1 id="orange-text">
```

`h1` 元素需繼續保留 `blue-text` 和 `pink-text` 這兩個 class。

在 `style` 元素中創建名爲 `orange-text` 的 id 選擇器。 例子如下：

```css
#brown-text {
  color: brown;
}
```

**注意：** 無論在 `pink-text` class 之前或者之後聲明，`id` 選擇器的優先級總是高於 class 選擇器。

# --hints--

`h1` 元素的應有一個 class 爲 `pink-text`。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 元素應包含 `blue-text` class。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 元素的 id 應爲 `orange-text`。

```js
assert($('h1').attr('id') === 'orange-text');
```

應只有一個 `h1` 元素。

```js
assert($('h1').length === 1);
```

應存在名爲 `orange-text` 的 id 選擇器。

```js
assert(code.match(/#orange-text\s*{/gi));
```

不要在 `h1` 元素裏面使用 `style` 屬性。

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1` 元素的字體顏色應爲橘色。

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
