---
id: 5e46f802ac417301a38fb92b
title: 頁面訪問量的時間序列可視化工具
challengeType: 10
forumTopicId: 462369
dashedName: page-view-time-series-visualizer
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-page-view-time-series-visualizer" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


我們仍在開發 Python 課程的交互式教學部分。 目前，你可以在 freeCodeCamp.org 的 YouTube 頻道中通過視頻學習到這個項目相關的所有知識

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">給所有人的 Python 課程</a>（14 小時）

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析數據</a>（10 小時）

# --instructions--

對於這個項目，你將使用線圖、條形圖和箱形圖對時間序列數據進行可視化。 你將使用 Pandas、Matplotlib 和 Seaborn 可視化包含 2016 年 5 月 9 日至 2019 年 12 月 3 日期間 freeCodeCamp.org 論壇上每天的頁面瀏覽量的數據集。 這個數據可視化將幫助你瞭解訪問的模式，並且顯示年增長和月增長情況。

使用數據完成以下任務：

- 使用 Pandas 從 “fcc-forum-pageviews.csv” 導入數據。 將索引設置爲 `date` 列。
- 通過過濾掉頁面瀏覽量位於數據集前 2.5% 或數據集後 2.5% 的日期來清理數據。
- 創建一個 `draw_line_plot` 函數，該函數使用 Matplotlib 繪製類似於 “examples/Figure_1.png” 的折線圖。 標題應爲 `Daily freeCodeCamp Forum Page Views 5/2016-12/2019`。 x 軸上的標籤應爲 `Date`，y 軸上的標籤應爲 `Page Views`。
- 創建一個 `draw_bar_plot` 函數，用於繪製類似於 “examples/Figure_2.png” 的條形圖。 它應該顯示按年份分組的每個月的平均每日頁面瀏覽量。 圖例應顯示月份標籤並具有 `Months` 標題。 在圖表上，x 軸上的標籤應爲 `Years`，y 軸上的標籤應爲 `Average Page Views`。
- 創建一個 `draw_box_plot` 函數，該函數使用 Seaborn 繪製兩個相鄰的箱形圖，類似於 “examples/Figure_3.png”。 這些箱線圖應顯示值在給定年份或月份內的分佈情況以及隨時間推移的比較情況。 第一個圖表的標題應爲 `Year-wise Box Plot (Trend)`，第二個圖表的標題應爲 `Month-wise Box Plot (Seasonality)`。 確保底部的月份標籤從 `Jan` 開始，並且 x 和 y 軸標記正確。 樣板文件包括準備數據的命令。

對於每個圖表，請確保使用數據框的副本。 單元測試是在 `test_module.py` 下爲你編寫的。

樣板文件還包括保存和返回圖像的命令。

## 開發

對於開發，你可以使用 `main.py` 來測試你的函數。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

# --hints--

它應該通過所有的 Python 測試。

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
