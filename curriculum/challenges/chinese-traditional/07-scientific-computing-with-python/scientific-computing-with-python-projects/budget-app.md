---
id: 5e44413e903586ffb414c94e
title: 預算應用
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


# --instructions--

完成 `budget.py` 中的 `Category` 類。 它應該能夠根據不同的預算類別實例化對象，例如 *食物* 、 *服裝* 和 *娛樂* 。 創建對象時，它們以類別的名稱傳遞。 該類應該有一個名爲 `ledger` 的實例變量，它是一個列表。 該類還應包含以下方法：

- 接受金額和描述的 `deposit` 方法。 如果沒有給出描述，它應該默認爲一個空字符串。 該方法應以 `{"amount": amount, "description": description}` 的形式將對象附加到賬本列表。
- `withdraw` 方法類似於 `deposit` 方法，但傳入的金額應作爲負數存儲在賬本中。 如果沒有足夠的資金，則不應向賬本添加任何內容。 如果取款發生，此方法應返回 `True`，否則返回 `False`。
- `get_balance` 方法，根據發生的存款和取款返回預算類別的當前餘額。
- `transfer` 方法，它接受一個金額和另一個預算類別作爲參數。 該方法應添加帶有金額和描述 “Transfer to [目的地預算類別]”的提款。 然後，該方法應將存款添加到其他預算類別，其金額和描述爲 “Transfer from [來源預算類別]”。 如果沒有足夠的資金，則不應向任一賬本添加任何內容。 如果轉賬發生，此方法應返回 `True`，否則返回 `False`。
- 接受金額作爲參數的 `check_funds` 方法。 如果金額大於預算類別的餘額，則返回 `False`，否則返回 `True`。 `withdraw` 方法和 `transfer` 方法都應該使用此方法。

打印預算對象時，它應顯示：

- 30 個字符的標題行，類別名稱居中在一行 `*` 字符中。
- 賬本中的項目列表。 每行應顯示描述和金額。 應顯示描述的前 23 個字符，然後是金額。 金額應右對齊，包含兩位小數，最多顯示 7 個字符。
- 一行顯示類別總數。

下面是一個輸出示例：

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

除了 `Category` 類之外，創建一個名爲 `create_spend_chart` 的函數（在類之外），它將類別列表作爲參數。 它應該返回一個作爲條形圖的字符串。

該圖表應顯示在傳遞給函數的每個類別中花費的百分比。 花費的百分比應該只計算取款而不是存款。 圖表左側應該是標籤 0 - 100。 條形圖中的“條”應由“o”字符組成。 每個條形的高度應四捨五入到最接近的 10。 條形圖下面的水平線應該超過最後一個條形圖再多兩個空格。 每個類別名稱應垂直寫在欄下方。 頂部應該有一個標題，上面寫着“Percentage spent by category”。

此功能將使用最多四個類別進行測試。

仔細查看下面的示例輸出，並確保輸出的間距與示例完全匹配。

```bash
Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
```

此項目的單元測試在 `test_module.py` 中。

## 開發

在 `budget.py` 中編寫你的代碼。 對於開發，你可以使用 `main.py` 來測試你的 `Category` 類。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

# --hints--

它應該創建一個 Category 類並通過所有測試。

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
