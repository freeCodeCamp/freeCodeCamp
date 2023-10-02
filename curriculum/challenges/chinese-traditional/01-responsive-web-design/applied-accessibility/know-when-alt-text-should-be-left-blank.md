---
id: 587d774c367417b2b2512a9d
title: 瞭解 Alt 文本留空的情景
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

在上一個挑戰中，我們瞭解到 `img` 標籤必須有一個 `alt` 屬性。 但是，有時圖像通過它們的描述文本被歸類，或者只用於裝飾。 在這些情況下， `alt` 文本可能是多餘的或沒有必要的。

在圖片已經有了文字說明，或者僅僅爲了美化頁面的情況下，`img` 仍然需要一個 `alt` 屬性，但可以設置爲空字符串。 例如：

```html
<img src="visualDecoration.jpeg" alt="">
```

比如，背景圖片通常起裝飾作用。 但這些圖片通常都是通過 CSS 規則而非 HTML 引入的，因此屏幕閱讀器毋需讀取。

**注意：** 對於有標題的圖片，依然需要添加 `alt` 文本，因爲這樣有助於搜索引擎記錄圖片內容。

# --instructions--

Camper Cat 已經大體寫好了博客頁面。 他打算在他的兩篇文章之間添加一個武士劍裝飾圖片，作爲兩篇文章之間的分割線。 爲 `img` 標籤添加 `alt` 屬性，把它的屬性值設爲空 （注意：這裏圖片的 `src` 屬性提供的鏈接是無效的，因此頁面上不會顯示任何武士刀的圖片，不用擔心）。

# --hints--

`img` 標籤應具有 `alt` 屬性。

```js
assert(!($('img').attr('alt') == undefined));
```

`alt` 的屬性值應爲空。

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
