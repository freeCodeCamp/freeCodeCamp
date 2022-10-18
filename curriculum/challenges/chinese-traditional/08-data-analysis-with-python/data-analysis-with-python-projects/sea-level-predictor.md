---
id: 5e4f5c4b570f7e3a4949899f
title: 海平面預報器
challengeType: 10
forumTopicId: 462370
dashedName: sea-level-predictor
---

# --description--

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-sea-level-predictor" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

我們仍在開發 Python 課程的交互式教學部分。 目前，你可以在 YouTube 上通過 freeCodeCamp.org 上傳的一些視頻學習這個項目相關的知識。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

你將分析自 1880 年以來全球平均海平面變化的數據集。 你將使用這些數據來預測到 2050 年的海平面變化。

使用數據完成以下任務：

- 使用 Pandas 從 `epa-sea-level.csv` 導入數據。
- Use matplotlib to create a scatter plot using the `Year` column as the x-axis and the `CSIRO Adjusted Sea Level` column as the y-axix.
- 使用 `scipy.stats` 中的 `linregress` 函數來獲得最佳擬合線的斜率和 y 截距。 在散點圖的頂部繪製最佳擬合線。 使線穿過 2050 年以預測 2050 年的海平面上升。
- 僅使用數據集中從 2000 年到最近一年的數據繪製一條新的最佳擬合線。 如果上升速度繼續與 2000 年一樣，則使該線也經過 2050 年以預測 2050 年的海平面上升。
- The x label should be `Year`, the y label should be `Sea Level (inches)`, and the title should be `Rise in Sea Level`.

單元測試是在 `test_module.py` 下爲你編寫的。

樣板文件還包括保存和返回圖像的命令。

## 開發

對於開發，你可以使用 `main.py` 來測試你的函數。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

## 數據源

<a href="https://datahub.io/core/sea-level-rise" target="_blank" rel="noopener noreferrer nofollow">Global Average Absolute Sea Level Change</a>, 1880-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015.


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
