---
id: 587d78b0367417b2b2512b08
title: 創建一個媒體查詢
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

媒體查詢是 CSS3 中引入的一項新技術，它可以根據不同的視口大小調整內容的佈局。 視口是指瀏覽器中，用戶可見的網頁內容。 視口會隨訪問網站的設備不同而改變。

媒體查詢由媒體類型組成，如果媒體類型與展示網頁的設備類型匹配，則應用對應的樣式。 你可以在媒體查詢中使用各種選擇器和樣式。

下面是一個媒體查詢的例子，當設備寬度小於或等於 `100px` 時返回內容：

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

以下定義的媒體查詢，是當設備高度大於或等於 `350px` 時返回內容：

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

注意，只有當媒體類型與所使用的設備的類型匹配時，媒體查詢中定義的 CSS 才生效。

# --instructions--

請添加一條媒體查詢規則，當設備的高度小於等於 `800px` 時，`p` 標籤的 `font-size` 爲 `10px`。

# --hints--

你應使用 `@media` 聲明媒體查詢，其中應包含 `height` 小於等於 `800px` 的規則。

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

當設備 `height` 小於等於 `800px` 時，`p` 元素的 `font-size` 應爲 `10px`。

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

當設備 `height` 大於 `800px` 時，`p` 元素的 `font-size` 應爲 `20px`。

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
