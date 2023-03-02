---
id: 587d7fa6367417b2b2512bc0
title: 用樹形圖可視化數據
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**目標：** 構建一個應用，功能和 <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a> 類似。

完成以下需求，並且通過所有測試。 使用你需要的任何庫或 API。 賦予它你自己的個人風格。

你可以使用 HTML、JavaScript、CSS、以及基於 svg 的 D3 可視化庫來完成這個挑戰。 該任務需要使用 D3 的座標軸屬性生成座標軸，這個屬性會自動生成沿軸的刻度。 這些刻度是通過 D3 測試所必需的，因爲它們的位置是用來確定圖表元素的對齊方式。 你可以在這裏 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 獲取關於生成座標軸的信息。 要求的 DOM 元素在每次測試時都會被查詢。 如果你使用了前端框架（例如 Vue），那麼對於動態的內容測試結果可能不準確。 我們希望最終能夠兼容這些框架，但 D3 項目目前還不支持它們。

**需求 #1：** 矩陣樹圖包含一個具有 `id="title"` 屬性的標題。

**需求 #2：** 矩陣樹圖包含一個具有 `id="description"` 屬性的描述內容。

**需求 #3：** 矩陣樹圖包含一些具有 `class="tile"` 屬性的 `rect` 元素來展示數據。

**需求 #4：** 這些矩形塊元素至少應該有 2 種不同的填充顏色。

**需求 #5：** 每一個矩形元素應該有 `data-name`、`data-category`、`data-value` 屬性，具有相應的 `name`、`category`、`value` 屬性值。

**需求 #6：** 每個矩形塊的面積和它的 `data-value` 屬性值相對應：`data-value` 值越大的矩形塊面積越大。

**需求 #7：** 矩陣樹圖包含一個具有 `id="legend"` 屬性的圖例。

**需求 #8：** 圖例包含一些具有 `class="legend-item"` 屬性的 `rect` 元素。

**需求 #9：** 圖例中的這些 `rect` 元素至少應該使用 2 種不同的填充顏色。

**需求 #10：** 將鼠標懸停在某個區域上時，可以看到具有 `id="tooltip"` 屬性的提示框，它會顯示有關該區域的更多信息。

**需求 #11：** 提示框應該有 `data-value` 屬性，它對應了當前激活區域的 `data-value` 屬性。

對於此項目，您可以使用以下任何數據集：

-   **Kickstarter Pledges：** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Movie Sales：** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Video Game Sales：** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>創建你的新項目，點擊 `Save` 即可創建你的新項目。 或者你可以在任何你喜歡的環境中使用以下 CDN 鏈接來運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

當你完成了本項目，並且該項目所有測試運行通過，請提交項目的 URL。

# --solutions--

```js
// solution required
```
