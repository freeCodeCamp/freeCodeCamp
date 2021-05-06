---
id: 587d78b0367417b2b2512b05
title: 製作一個技術文檔頁面
challengeType: 3
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**目標：** 在 [CodePen.io](https://codepen.io) 上創建一個與這個功能類似的 app：<https://codepen.io/freeCodeCamp/full/NdrKKL>。

在滿足以下 [需求](https://en.wikipedia.org/wiki/User_story) 並能通過所有測試的前提下， 你可以根據自己的喜好來美化你的 app。

你可以使用 HTML、JavaScript 以及 CSS 來完成項目。 由於目前你只學到了 CSS 課程，所以我們建議你只使用 CSS 來完成這個項目，同時鞏固一下你之前所學的內容。 你也可以使用 Bootstrap 或者 SASS。 我們不推薦你在這個項目中使用其他技術（比如 jQuery、React、Angular 或 Vue）。 在後續的其他項目中，你將有機會使用像是 React 等其他技術棧。 我們會接受並嘗試修復你在使用推薦技術棧創建項目時報告的問題。 祝你編碼愉快！

**需求 1：** 此 app 中應存在一個 `id="main-doc"` 的 `main` 元素，它包含頁面的主要內容（技術文檔）。

**需求 2：** 在 `#main-doc` 元素內，應有一些 `section` 元素，每個元素的 class 都應爲 `main-section`。 應存在至少 5 個這樣的元素。

**需求 3：** 每個 `.main-section` 內的第一個元素應爲 `header` 元素，其中包含描述該部分主題的內容文本。

**需求 4：** 類名爲 `main-section` 的每個 `section` 元素都應有一個與包含在其中的每個 `header` 的文本相對應的 id， 所有空格都應該被替換爲下劃線（例如，包含標題 “JavaScript and Java” 的 `section` 應有一個相應的 `id="JavaScript_and_Java"`）。

**需求 5：** 所有 `.main-section` 元素內總計應有至少 10 個 `p` 元素。

**需求 6：** 所有 `.main-section` 元素內總計應有至少 5 個 `code` 元素。

**需求 7：** 所有 `.main-section` 元素內總計應有至少 5 個 `li` 元素。

**需求 8：** 此 app 中應存在一個 `id="navbar"` 的 `nav` 元素。

**需求 9：** navbar 元素內應有一個 `header` 元素，其中包含描述技術文檔主題的內容文本。

**需求 10：** 此外，navbar 元素應包含 class 爲 `nav-link` 的 `a` 元素， 每個 class 爲 `main-section` 的元素都需要有一個。

**需求 11：** navbar 中的 `header` 元素應置於 navbar 中所有 `a` 元素之前。

**需求 12：** 所有 class 爲 `nav-link` 的元素都需要包含與 `section` 中 `header` 相應的內容文本。例如，對於一個文本爲 "Hello world" 的一節或標題，你的 navbar 中也應存在一個內容文本爲 "Hello world" 的元素。

**需求 13：** 當點擊 navbar 中一個元素時，頁面應滾動到 `main-doc` 中的相應部分。例如，點擊文本爲 "Hello world" 的 `nav-link` 元素的時候，頁面應滾動到包含相同內容的 `header` 和 id 所處的 `section` 元素。

**需求 14：** 在常規尺寸的設備上（如筆記本電腦和臺式機），`id="navbar"` 的元素應顯示在屏幕左側，且始終對用戶可見。

**需求 15：** 在此 app 中，應至少使用一次媒體查詢。

你可以<a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>使用這個 CodePen 模版</a>創建你自己的項目，點擊 `Save` 即可創建你的新項目。 也可以使用此 CDN 鏈接在任何你喜歡的環境中運行測試：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`。

完成項目並通過所有測試後，請輸入你的項目在 CodePen 上的鏈接並提交。

# --solutions--

```html
// solution required
```
