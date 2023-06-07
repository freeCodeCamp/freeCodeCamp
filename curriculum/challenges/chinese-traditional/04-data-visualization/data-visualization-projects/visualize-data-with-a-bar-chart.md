---
id: bd7168d8c242eddfaeb5bd13
title: 用條形圖可視化數據
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**目標：** 構建一個應用，功能和 <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a> 類似。

完成以下需求，並且通過所有測試。 使用你需要的任何庫或 API。 賦予它你自己的個人風格。

你可以使用 HTML、JavaScript、CSS、以及基於 svg 的 D3 可視化庫來完成這個挑戰。 該任務需要使用 D3 的座標軸屬性生成座標軸，這個屬性會自動生成沿軸的刻度。 通過 D3 測試需要這些刻度，因爲它們的位置被用來確定繪製元素的對齊方式。 你可以在這裏 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 獲取關於生成座標軸的信息。 要求的 DOM 元素在每次測試時都會被查詢。 如果你使用了前端框架（例如 Vue），那麼對於動態的內容測試結果可能不準確。 我們希望最終能夠兼容這些框架，但 D3 項目目前還不支持它們。

**需求 #1：** 圖表應該包含一個具有 `id="title"` 屬性的標題。

**需求 #2：** 圖表應該包含一個 `g` 元素作爲 x 軸，並相應地具有 `id="x-axis"` 屬性。

**需求 #3：** 圖表應該包含一個 `g` 元素作爲 y 軸，並相應地具有`id="y-axis"` 屬性。

**需求 #4：** 兩個軸都應包含多個刻度標籤，每個標籤具有 `class="tick"` 屬性。

**需求 #5：** 在圖表裏，每個數據點都應該有一個具有 `class="bar"` 屬性的 `rect` 元素來展示數據。

**需求 #6：** 每個 `.bar` 應該具有值爲 `date` 的 `data-date` 屬性以及值爲 `GDP` 的 `data-gdp` 屬性。

**需求 #7：** `.bar` 元素的 `data-date` 屬性應與提供的數據的順序相匹配。

**需求 #8：** `.bar` 元素的 `data-gdp` 屬性應與提供的數據的順序相匹配。

**需求 #9：** 每個 `.bar` 元素的高度應準確地表示其數據所對應的 `GDP` 值。

**需求 #10：** `data-date` 屬性和它對應的 `.bar` 元素應與 x 軸上的相應的值對齊。

**需求 #11：** `data-gdp` 屬性和它對應的 `.bar` 元素應與 y 軸上的相應的值對齊。

**需求 #12：** 我可以將鼠標懸停在某個區域上，並查看具有 `id="tooltip"` 屬性的提示框，它會顯示有關該區域的更多信息。

**需求 #13：** 提示框應該有 `data-date` 屬性，它對應了當前激活區域的 `data-date` 屬性。

以下是完成此項目所需的數據： `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>創建你的新項目，點擊 `Save` 即可創建你的新項目。 或者你可以在任何你喜歡的環境中使用以下 CDN 鏈接來運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

當你完成了本項目，並且該項目所有測試運行通過，請提交項目的 URL。

# --solutions--

```js
// solution required
```
