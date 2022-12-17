---
id: 5e44414f903586ffb414c950
title: 概率計算器
challengeType: 10
forumTopicId: 462364
dashedName: probability-calculator
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-probability-calculator" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


# --instructions--

假設有一頂帽子，裏面有 5 個藍球、4 個紅球和 2 個綠球。 隨機抽取的 4 個球中至少包含 1 個紅球和 2 個綠球的概率是多少？ 雖然可以使用高等數學來計算概率，但更簡單的方法是編寫一個程序來執行大量實驗來估計近似概率。

對於這個項目，你將編寫一個程序來確定從帽子中隨機抽取某些球的大致概率。

首先，在`prob_calculator.py` 中創建一個`Hat` 類。 該類應該採用可變數量的參數來指定帽子中每種顏色的球數。 例如，可以通過以下任何一種方式創建類對象：

```py
hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)
```

一頂帽子總是至少有一個球。 創建時傳遞給 hat 對象的參數應轉換爲 `contents` 實例變量。 `contents` 應該是一個字符串列表，其中包含帽子中每個球的一個項目。 列表中的每一項都應該是一個顏色名稱，代表該顏色的單個球。 例如，如果你的帽子是 `{"red": 2, "blue": 1}`，`contents` 應該是 `["red", "red", "blue"]`。

`Hat` 類應該有一個 `draw` 方法，該方法接受一個參數，該參數指示要從帽子中抽取的球數。 此方法應該從 `contents` 中隨機刪除球，並將這些球作爲字符串列表返回。 在抽取過程中球不應回到帽子中，類似於沒有放回的黑盒實驗。 如果要抽的球數量超過可用數量，則返回所有球。

接下來，在 `prob_calculator.py`（不是在 `Hat` 類中）創建一個 `experiment` 函數。 此函數應接受以下參數：

- `hat`：一個包含球的帽子對象，應該在函數內複製。
- `expected_balls`：一個對象，指示嘗試從帽子中抽取的確切球組以進行實驗。 例如，要確定從帽子中抽取 2 個藍球和 1 個紅球的概率，將 `expected_balls` 設置爲 `{"blue":2, "red":1}`。
- `num_balls_drawn`：每次實驗中從帽子中抽出的球數。
- `num_experiments`：要執行的實驗數量。 （進行的實驗越多，近似概率就越準確。）

`experiment` 函數應該返回一個概率。

例如，如果你想確定當你從一個包含 6 個黑球、4 個紅球和 3 個綠球的帽子中抽出 5 個球時，至少得到 2 個紅球和 1 個綠球的概率， 你將進行 `N` 次實驗，記錄其中你至少得到 2 個紅球和 1 個綠球的次數 `M`，並估計概率爲 `M/N`。 每個實驗都包括從一個裝有指定球的帽子開始，抽出幾個球，並檢查你是否抽到了你試圖抽出的球。

以下是基於上面的示例調用 `experiment` 函數的方法，其中包含 2000 個實驗：

```py
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={"red":2,"green":1},
                  num_balls_drawn=5,
                  num_experiments=2000)
```

由於這是基於隨機抽取的，因此每次運行代碼時概率會略有不同。

*提示：考慮使用已經在 `prob_calculator.py` 頂部導入的模塊。 不要在 `prob_calculator.py` 中初始化隨機種子。*

## 開發

在 `prob_calculator.py` 中編寫你的代碼。 對於開發，你可以使用 `main.py` 來測試你的代碼。 單擊“運行”按鈕，`main.py` 將運行。

樣板文件包括 `copy` 和 `random` 模塊的 `import` 語句。 考慮在你的項目中使用它們。

## 測試

這個項目的單元測試在 `test_module.py` 中。 爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

# --hints--

它應該能正確地計算概率，並通過所有測試。

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
