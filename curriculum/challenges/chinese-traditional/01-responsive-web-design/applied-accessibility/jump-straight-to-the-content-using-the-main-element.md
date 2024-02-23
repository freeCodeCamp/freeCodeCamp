---
id: 587d774e367417b2b2512a9f
title: 使用 main 元素包裹主題內容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 引入了一些新元素，給予開發者更多的選擇，也包含輔助功能。 HTML5 引入了諸如 `main`、`header`、`footer`、`nav`、`article`、`section` 等大量新標籤。

默認情況下，瀏覽器呈現這些元素的方式類似於普通的 `div`。 但是，在適當的地方使用它們會讓標記文本具有更多的含義。 僅標籤名稱就可以表示它所包含的信息類型，這給內容增加了語義含義。 輔助技術可以獲取這種信息，爲用戶提供更好的頁面摘要或導航選項。

`main` 標籤用於呈現網頁的主體內容，且每個頁面應只有一個。 這是爲了圍繞與頁面中心主題相關的信息， 而不應包含如導航連接、網頁橫幅等需要在多個頁面中重複出現的內容。

`main` 標籤也有一個內嵌的特性，以便輔助技術快速定位到頁面的主體。 如果你在頁面頂部看到過“跳轉到主要內容”鏈接，那麼使用 `main` 標籤會自動讓輔助設備具有這個跳轉的功能。

# --instructions--

Camper Cat 對他的忍者武器頁面有一些新的想法。 請幫他在 `header` 標籤和 `footer` 標籤（在接下來的挑戰中會詳細介紹）之間添加一個有開始和結束標記的 `main` 標籤。 現在保持 `main` 標籤爲空。

# --hints--

應存在一個 `main` 標籤。

```js
assert($('main').length == 1);
```

`main` 標籤應位於 `header` 標籤與 `footer` 標籤之間。

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
