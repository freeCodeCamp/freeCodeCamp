---
id: 5e4f5c4b570f7e3a4949899f
title: 海平面預報器
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


我們仍在開發 Python 課程的交互式教學部分。 目前，你可以在 YouTube 上通過 freeCodeCamp.org 上傳的一些視頻學習這個項目相關的知識。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">給所有人的 Python 課程</a>（14 小時）

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析數據</a>（10 小時）

# --instructions--

你將分析自 1880 年以來全球平均海平面變化的數據集。 你將使用這些數據來預測到 2050 年的海平面變化。

使用數據完成以下任務：

- 使用 Pandas 從 `epa-sea-level.csv` 導入數據。
- 使用 matplotlib 創建散點圖，將 `Year` 列作爲 x 軸，將 `CSIRO Adjusted Sea Level` 列作爲 y 軸。
- 使用 `scipy.stats` 中的 `linregress` 函數來獲得最佳擬合線的斜率和 y 截距。 在散點圖的頂部繪製最佳擬合線。 使線穿過 2050 年以預測 2050 年的海平面上升。
- 僅使用數據集中從 2000 年到最近一年的數據繪製一條新的最佳擬合線。 如果上升速度繼續與 2000 年一樣，則使該線也經過 2050 年以預測 2050 年的海平面上升。
- x 標籤應爲 `Year`，y 標籤應爲 `Sea Level (inches)`，標題應爲 `Rise in Sea Level`。

單元測試是在 `test_module.py` 下爲你編寫的。

樣板文件還包括保存和返回圖像的命令。

## 開發

對於開發，你可以使用 `main.py` 來測試你的函數。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

## 數據源

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">全球平均絕對海平面變化</a>，1880 - 2014 年，來自美國環境保護局，數據來源：CSIRO, 2015; NOAA, 2015。


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
