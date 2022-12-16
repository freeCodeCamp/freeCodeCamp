---
id: 5e46f7f8ac417301a38fb92a
title: 醫療數據可視化工具
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-medical-data-visualizer" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


我們仍在開發 Python 課程的交互式教學部分。 目前，你可以在 YouTube 上通過 freeCodeCamp.org 上傳的一些視頻學習這個項目相關的知識。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a>(14 hours)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">How to Analyze Data with Python Pandas</a> (10 hours)

# --instructions--

在本項目中，您將使用 matplotlib、seaborn 和 pandas 來對體檢數據進行可視化和計算。 數據集的數值是從體檢中收集的。

## 數據說明

數據集中的行代表患者，列代表身體測量、各種血液檢查的結果和生活方式等信息。 您將使用該數據集來探索心臟病、身體測量數據、血液標誌物和對生活方式的選擇之間的關係。

文件名：medical_examination.csv

|    項目    | 變量類型 |      變量名      |         變量值類型         |
|:--------:|:----:|:-------------:|:---------------------:|
|    年齡    | 客觀特徵 |     `age`     |      int (days)       |
|    身高    | 客觀特徵 |   `height`    |       int (cm)        |
|    體重    | 客觀特徵 |   `weight`    |      float (kg)       |
|    性別    | 客觀特徵 |   `gender`    |         分類編碼          |
|   收縮壓    | 檢測特徵 |    `ap_hi`    |          int          |
|   舒張壓    | 檢測特徵 |    `ap_lo`    |          int          |
|   膽固醇    | 檢測特徵 | `cholesterol` | 1：正常，2：高於正常，3：遠遠高於正常值 |
|   血糖值    | 檢測特徵 |    `gluc`     | 1：正常，2：高於正常，3：遠遠高於正常值 |
|   吸菸問題   | 主觀特徵 |    `smoke`    |        binary         |
|   飲酒量    | 主觀特徵 |    `alco`     |        binary         |
|   體育活動   | 主觀特徵 |   `active`    |        binary         |
| 是否有心血管疾病 | 目標變量 |   `cardio`    |        binary         |

## 任務

創建一個類似於 `examples/Figure_1.png` 的圖表，其中我們顯示 `cholesterol`、`gluc`、`alco`、`active` 和 `smoke` 變量，用於不同面板中 heart=1 和 heart=0 的患者。

在 `medical_data_visualizer.py` 中使用數據完成以下任務：

- Add an `overweight` column to the data. To determine if a person is overweight, first calculate their BMI by dividing their weight in kilograms by the square of their height in meters. If that value is > 25 then the person is overweight. Use the value 0 for NOT overweight and the value 1 for overweight.
- Normalize the data by making 0 always good and 1 always bad. If the value of `cholesterol` or `gluc` is 1, make the value 0. If the value is more than 1, make the value 1.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using seaborn's `catplot()`. The dataset should be split by 'Cardio' so there is one chart for each `cardio` value. The chart should look like `examples/Figure_1.png`.
- Clean the data. Filter out the following patient segments that represent incorrect data:
  - diastolic pressure is higher than systolic (Keep the correct data with `(df['ap_lo'] <= df['ap_hi'])`)
  - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
  - height is more than the 97.5th percentile
  - weight is less than the 2.5th percentile
  - weight is more than the 97.5th percentile
- Create a correlation matrix using the dataset. Plot the correlation matrix using seaborn's `heatmap()`. Mask the upper triangle. The chart should look like `examples/Figure_2.png`.

每當變量設置爲 `None` 時，請確保將其設置爲正確的代碼。

單元測試是在 `test_module.py` 下爲你編寫的。

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
