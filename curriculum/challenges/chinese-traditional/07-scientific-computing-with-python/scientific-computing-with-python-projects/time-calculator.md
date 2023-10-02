---
id: 5e444136903586ffb414c94d
title: 時間計算器
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。

# --instructions--

編寫一個名爲 `add_time` 的函數，它接受兩個必需參數和一個可選參數：

- 12 小時制的開始時間（以 AM 或 PM 結束）
- 指示小時數和分鐘數的持續時間
- （可選）一週的開始日期，不區分大小寫

該函數應將持續時間添加到開始時間並返回結果。

如果結果是第二天，它應該在時間之後顯示 `(next day)`。 如果結果將超過一天以後，它應該在時間後面顯示 `(n days later)`，其中 "n "是之後的天數。

如果給函數提供了可選的開始日期的星期參數，則輸出應顯示結果的星期幾。 輸出中的星期幾應出現在時間之後和天數之前。

以下是函數應處理的不同情況的一些示例。 請注意結果的間距和標點符號。

```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

不要導入任何 Python 庫。 假設開始時間是有效時間。 持續時間中的分鐘將是小於 60 的整數，但小時可以是任何整數。

## 開發

在 `time_calculator.py` 中編寫你的代碼。 對於開發，你可以使用 `main.py` 來測試你的 `time_calculator()` 函數。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

這個項目的單元測試在 `test_module.py` 中。 爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

# --hints--

它應該能正確地添加時間，並通過所有測試。

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
