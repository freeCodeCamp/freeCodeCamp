---
id: 587d78aa367417b2b2512aed
title: 聲明 HTML 的文檔類型
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

之前的挑戰涵蓋了一些 HTML 元素和它們的用法。 另外有些元素爲頁面提供了整體結構，每個 HTML 文檔中都應該有這些元素。

在文檔的頂部，我們需要告訴瀏覽器網頁所使用的 HTML 的版本。 HTML 是一個在不停發展的語言，大部分瀏覽器都支持 HTML 的最新標準，也就是 HTML5。 大部分主流瀏覽器都支持最新的 HTML5 規範。 但是一些陳舊的網頁可能使用的是老版本的 HTML。

你可以通過 `<!DOCTYPE ...>` 來告訴瀏覽器頁面上使用的 HTML 版本，"`...`" 部分就是版本號。 `<!DOCTYPE html>` 對應的就是 HTML5。

`!` 和大寫的 `DOCTYPE` 是很重要的，尤其是對那些老的瀏覽器。 但 `html` 無論大寫小寫都可以。

所有的 HTML 代碼都必須位於 `html` 標籤中。 其中 `<html>` 位於 `<!DOCTYPE html>` 之後，`</html>` 位於網頁的結尾。

這是一個網頁結構的列子。 你的 HTML 代碼會在兩個 `html` 標籤之間。

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

請在代碼編輯器的頂部添加一個 `DOCTYPE` 爲 HTML5 的聲明。 在它下面添加 `html` 開始和結束標籤，其中包裹一個 `h1` 元素。 標題可以包括任何文本。

# --hints--

網頁中應包含 `<!DOCTYPE html>` 標籤。

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

網頁中應只存在一個 `html` 元素。

```js
assert($('html').length == 1);
```

`h1` 元素應該位於 `html` 元素內部。

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
