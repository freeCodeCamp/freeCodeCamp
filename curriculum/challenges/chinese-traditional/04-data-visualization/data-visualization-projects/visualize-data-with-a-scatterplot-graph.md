---
id: bd7178d8c242eddfaeb5bd13
title: 用散點圖可視化數據
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**目標：** 構建一個應用，功能和 <a href="https://scatterplot-graph.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://scatterplot-graph.freecodecamp.rocks</a> 類似。

完成以下需求，並且通過所有測試。 你可以使用你需要的任何庫或 API。 賦予它你自己的個人風格。

你可以使用 HTML、JavaScript、CSS、以及基於 svg 的 D3 可視化庫來完成這個挑戰。 該任務需要使用 D3 的座標軸屬性生成座標軸，這個屬性會自動生成沿軸的刻度。 這些刻度是通過 D3 測試所必需的，因爲它們的位置是用來確定圖表元素的對齊方式。 你可以在這裏 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 獲取關於生成座標軸的信息。 要求的 DOM 元素在每次測試時都會被查詢。 如果你使用了前端框架（例如 Vue），因爲內容是動態渲染的，試結果可能不準確。 我們希望最終能夠兼容這些框架，但 D3 框架目前還不支持它們。

**需求 #1：** 散點圖包含一個具有 `id="title"` 屬性的標題元素。

**需求 #2：** 散點圖包含一個具有 `id="x-axis"` 屬性的 x 軸。

**需求 #3：** 散點圖包含一個具有 `id="y-axis"` 屬性的 y 軸。

**需求 #4：** 散點圖包含一些點，每個點都有一個值爲 `dot` 的 class 屬性，它代表了被繪製的數據。

**需求 #5：** 每個點都應具有 `data-xvalue` 屬性和 `data-yvalue` 屬性，具有相應的屬性值 `x` 和 `y`。

**需求 #6：** 每個點的 `data-xvalue` 屬性和 `data-yvalue` 屬性應該在實際數據的範圍內，並且數據格式應該正確無誤。 對於`data-xvalue` ，可以接受整數（全年）或 `Date` 對象進行測試評估。 對於 `data-yvalue`（分鐘），應使用 `Date` 對象。

**需求 #7：** `data-xvalue` 屬性和它對應的點應該和 x 軸上的點或值對齊。

**需求 #8：** `data-yvalue`屬性和它對應的點應該和 y 軸上的點或值對齊。

**需求 #9：** 散點圖的 y 軸上有多個時間格式爲 `%M:%S` 的刻度標籤。

**需求 #10：** 散點圖的 x 軸上有多個顯示年份的刻度標籤。

**需求 #11：** 散點圖的 x 軸標籤的範圍在實際 x 軸數據的範圍內。

**需求 #12：** 散點圖的 y 軸標籤的範圍在實際 y 軸數據的範圍內。

**需求 #13：** 散點圖包含一個包含描述性文字的圖例，它具有 `id="legend"` 屬性。

**需求 #14：** 將鼠標懸停在某個區域上時，可以看到具有 `id="tooltip"` 屬性的提示框，它會顯示有關該區域的更多信息。

**需求 #15：** 提示框應該有 `data-year` 屬性，它對應了當前激活區域的 `data-xvalue` 屬性。

以下是完成此項目所需的數據：`https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>創建你的新項目，點擊 `Save` 即可創建你的新項目。 或者你可以在任何你喜歡的環境中使用以下 CDN 鏈接來運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

當你完成了本項目，並且項目通過所有測試，請提交項目的 URL。

# --solutions--

```js
// solution required
```
