---
id: 5e44412c903586ffb414c94c
title: 算術格式化
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


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


- Situations that will return an error:
  - If there are **too many problems** supplied to the function. The limit is **five**, anything more will return: `Error: Too many problems.`
  - The appropriate operators the function will accept are **addition** and **subtraction**. Multiplication and division will return an error. Other operators not mentioned in this bullet point will not need to be tested. The error returned will be: `Error: Operator must be '+' or '-'.`
  - Each number (operand) should only contain digits. Otherwise, the function will return: `Error: Numbers must only contain digits.`
  - Each operand (aka number on each side of the operator) has a max of four digits in width. Otherwise, the error string returned will be: `Error: Numbers cannot be more than four digits.`
- If the user supplied the correct format of problems, the conversion you return will follow these rules:
  - There should be a single space between the operator and the longest of the two operands, the operator will be on the same line as the second operand, both operands will be in the same order as provided (the first will be the top one and the second will be the bottom).
  - Numbers should be right-aligned.
  - There should be four spaces between each problem.
  - There should be dashes at the bottom of each problem. The dashes should run along the entire length of each problem individually. (The example above shows what this should look like.)

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
