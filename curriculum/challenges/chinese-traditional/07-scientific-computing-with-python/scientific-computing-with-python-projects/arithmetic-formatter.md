---
id: 5e44412c903586ffb414c94c
title: 算術格式化
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


# --instructions--

小學生經常把算術題垂直排列，這樣更容易解決。 例如，“235 + 52” 變成：

```py
  235
+  52
-----
```

創建一個函數，接收一個屬於算術問題的字符串列表，並返回垂直和並排排列的問題。 該函數應該接受可選的第二個參數。 當第二個參數設置爲 `True` 時，應顯示答案。

## 示例

函數調用：

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

輸出:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

函數調用：

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

輸出:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## 規則

如果提供的問題格式正確，該函數將返回正確的轉換，否則，它將 **返回** 一個 **字符串** 來描述對用戶有意義的錯誤。


- 會返回錯誤的情況：
  - 如果提供給函數的**問題過多**。 限制爲**五個**，更多的將返回：`Error: Too many problems.`。
  - 函數可以接受的運算符是**加法**和**減法**。 乘法和除法將返回錯誤。 本要點中未提及的其他運算符將不需要進行測試。 返回的錯誤將是：`Error: Operator must be '+' or '-'.`。
  - 每個數字（操作數）應該只包含數字。 否則，該函數將返回：`Error: Numbers must only contain digits.`。
  - 每個操作數（即運算符每一側的數字）的寬度最多爲四位數字。 否則，返回的錯誤字符串將爲：`Error: Numbers cannot be more than four digits.`。
- 如果用戶提供了正確格式的問題，返回的轉換將遵循以下規則：
  - 操作符和兩個操作數中最長的一個之間應該有一個空格，操作符將與第二個操作數在同一行，兩個操作數的順序與提供的相同（第一個是上面的，第二個是下面的）。
  - 數字應該右對齊。
  - 每個問題之間應該有四個空格。
  - 每個問題的底部都應該有破折號。 破折號應該單獨沿着每個問題的整個長度延伸。 （上面的例子展示了這應該是什麼樣子。）

## 開發

在 `arithmetic_arranger.py` 中編寫你的代碼。 對於開發，你可以使用 `main.py` 來測試你的 `arithmetic_arranger()` 函數。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

這個項目的單元測試在 `test_module.py` 中。 爲了你的方便，我們在 `main.py` 中從 `test_module.py` 運行測試。 只要你點擊“運行”按鈕，測試就會自動運行。 或者，你可以通過在控制檯中輸入 `pytest` 來運行測試。

## 提交

複製項目的 URL 並在下面提交。

# --hints--

它應該正確地格式化算術問題並通過所有測試。

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
