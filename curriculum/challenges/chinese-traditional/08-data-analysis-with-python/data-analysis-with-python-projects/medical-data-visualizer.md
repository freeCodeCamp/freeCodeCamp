---
id: 5e46f7f8ac417301a38fb92a
title: 醫療數據可視化工具
challengeType: 10
forumTopicId: 462368
dashedName: medical-data-visualizer
---

# --description--

You will be <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-medical-data-visualizer/" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Gitpod starter code</a>.

我們仍在開發 Python 課程的交互式教學部分。 目前，你可以在 YouTube 上通過 freeCodeCamp.org 上傳的一些視頻學習這個項目相關的知識。

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">每個人視頻課程的 Python</a> (14小時)

- <a href="https://www.freecodecamp.org/news/how-to-analyze-data-with-python-pandas/" target="_blank" rel="noopener noreferrer nofollow">如何使用 Python Pandas 分析數據</a>（10 小時）

# --instructions--

In this project, you will visualize and make calculations from medical examination data using `matplotlib`, `seaborn`, and `pandas`. 數據集的數值是從體檢中收集的。

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

Create a chart similar to `examples/Figure_1.png`, where we show the counts of good and bad outcomes for the `cholesterol`, `gluc`, `alco`, `active`, and `smoke` variables for patients with `cardio=1` and `cardio=0` in different panels.

在 `medical_data_visualizer.py` 中使用數據完成以下任務：

- 給數據添加一列 `overweight`。 要確定一個人是否超重，首先通過將他們的體重（公斤）除以他們的身高（米）的平方來計算他們的 BMI。 如果該值是 > 25，則此人超重。 Use the value `0` for NOT overweight and the value `1` for overweight.
- Normalize the data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is `1`, make the value `0`. If the value is more than `1`, make the value `1`.
- Convert the data into long format and create a chart that shows the value counts of the categorical features using `seaborn`'s `catplot()`. The dataset should be split by `Cardio` so there is one chart for each `cardio` value. 該圖表應該看起來像 `examples/Figure_1.png`。
- 清理數據。 過濾掉以下代表不正確數據的患者段：
  - 舒張壓高於收縮壓（使用 `(df['ap_lo'] <= df['ap_hi'])` 保留正確的數據）
  - 高度小於第 2.5 個百分位數（使用 `(df['height'] >= df['height'].quantile(0.025))` 保留正確的數據）
  - 身高超過第 97.5 個百分位
  - 體重小於第 2.5 個百分位
  - 體重超過第 97.5 個百分位
- 使用數據集創建相關矩陣。 Plot the correlation matrix using `seaborn`'s `heatmap()`. 遮罩上三角。 該圖表應類似於 `examples/Figure_2.png`。

每當變量設置爲 `None` 時，請確保將其設置爲正確的代碼。

Unit tests are written for you under `test_module.py`.

## Instructions
By each number in the `medical_data_visualizer.py` file, add the code from the associated instruction number below.

1. Import the data from `medical_examination.csv` and assign it to the `df` variable
2. Create the `overweight` column in the `df` variable
3. Normalize data by making `0` always good and `1` always bad. If the value of `cholesterol` or `gluc` is 1, set the value to `0`. If the value is more than `1`, set the value to `1`.
4. Draw the Categorical Plot in the `draw_cat_plot` function
5. Create a DataFrame for the cat plot using `pd.melt` with values from `cholesterol`, `gluc`, `smoke`, `alco`, `active`, and `overweight` in the `df_cat` variable.
6. Group and reformat the data in `df_cat` to split it by `cardio`. Show the counts of each feature. You will have to rename one of the columns for the `catplot` to work correctly.
7. Convert the data into `long` format and create a chart that shows the value counts of the categorical features using the following method provided by the seaborn library import : `sns.catplot()`
8. Get the figure for the output and store it in the `fig` variable
9. Do not modify the next two lines
10. Draw the Heat Map in the `draw_heat_map` function
11. Clean the data in the `df_heat` variable by filtering out the following patient segments that represent incorrect data:
    - height is less than the 2.5th percentile (Keep the correct data with `(df['height'] >= df['height'].quantile(0.025))`)
    - height is more than the 97.5th percentile
    - weight is less than the 2.5th percentile
    - weight is more than the 97.5th percentile
12. Calculate the correlation matrix and store it in the `corr` variable
13. Generate a mask for the upper triangle and store it in the `mask` variable
14. Set up the `matplotlib` figure
15. Plot the correlation matrix using the method provided by the `seaborn` library import: `sns.heatmap()`
16. Do not modify the next two lines

## 開發

Write your code in `medical_data_visualizer.py`. For development, you can use `main.py` to test your code.

## 測試

The unit tests for this project are in `test_module.py`. 爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。

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
