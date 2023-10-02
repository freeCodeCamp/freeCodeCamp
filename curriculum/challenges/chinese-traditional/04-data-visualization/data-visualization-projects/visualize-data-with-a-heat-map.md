---
id: bd7188d8c242eddfaeb5bd13
title: 用熱圖可視化數據
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**目標：** 構建一個應用，功能和 <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a> 類似。

完成以下需求，並且通過所有測試。 你可以使用你需要的任何庫或 API。 賦予它你自己的個人風格。

你可以使用 HTML、JavaScript、CSS、以及基於 svg 的 D3 可視化庫來完成這個挑戰。 要求的 DOM 元素在每次測試時都會被查詢。 如果你使用了前端框架（例如 Vue），那麼對於動態的內容測試結果可能不準確。 我們希望最終能夠兼容這些框架，但 D3 項目目前還不支持它們。

**需求 #1：** 熱度圖包含一個具有 `id="title"` 屬性的標題。

**需求 #2：** 熱度圖包含一個具有 `id="description"` 屬性的描述內容。

**需求 #3：** 熱度圖包含一個具有 `id="x-axis"` 屬性的 x 軸。

**需求 #4：** 熱度圖包含一個具有 `id="y-axis"` 屬性的 y 軸。

**需求 #5：** 熱度圖包含一些 `rect` 元素來展示數據，他們具有 `class="cell"` 屬性。

**需求 #6：** 這些單元格元素至少應該有 4 種不同的填充顏色。

**需求 #7：** 每個單元格都有這些屬性：`data-month`、`data-year`、`data-temp`，具有相應的屬性值 `month`、`year`、`temperature`。

**需求 #8：** 每個元素的 `data-month`、`data-year` 屬性應該在數據範圍內。

**需求 #9：** 熱度圖包含與 y 軸上的相應月份對齊的單元格。

**需求 #10：** 熱度圖包含與 x 軸上相應年份對齊的單元格。

**需求 #11：** 熱度圖在 y 軸上有多個刻度標籤，並帶有完整的月份名稱。

**需求 #12：** 熱度圖在 x 軸上有多個刻度標籤，年份在 1754 到 2015 之間。

**需求 #13：** 熱度圖包含一個具有 `id="legend"` 屬性的圖例。

**需求 #14：** 圖例包含一些 `rect` 元素。

**需求 #15：** 圖例中的這些 `rect` 元素應該至少使用 4 種不同的填充顏色。

**需求 #16：** 將鼠標懸停在某個區域上時，可以看到具有 `id="tooltip"` 屬性的提示框，它會顯示有關該區域的更多信息。

**需求 #17：** 提示框應該有 `data-year` 屬性，它對應了當前激活區域的 `data-year` 屬性。

以下是完成此項目所需的數據：`https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>創建你的新項目，點擊 `Save` 即可創建你的新項目。 或者你可以在任何你喜歡的環境中使用以下 CDN 鏈接來運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

當你完成了本項目，並且該項目所有測試運行通過，請提交項目的 URL。

# --solutions--

```js
// solution required
```
