---
id: 5e444147903586ffb414c94f
title: 多邊形面積計算器
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

你將使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">我們在 Replit 的初始化項目</a>來完成這個項目。

-   首先在 Replit 中導入項目。
-   接着，你將看到一個 `.replit` 窗口。
-   選擇 `Use run command` 並點擊 `Done` 按鈕。


# --instructions--

在這個項目中，你將使用面向對象的編程來創建 Rectangle（矩形） 類和 Square（正方形） 類。 Square 類應該是 Rectangle 的子類，並繼承方法和屬性。

## Rectangle 類

創建 Rectangle 對象時，應使用 `width` 和 `height` 屬性對其進行初始化。 該類還應包含以下方法：

- `set_width`
- `set_height`
- `get_area`：返回面積（`width * height`）
- `get_perimeter`：返回周長（`2 * width + 2 * height`）
- `get_diagonal`：返回對角線（`(width ** 2 + height ** 2) ** .5`）
- `get_picture`：返回一個字符串，該字符串使用包含 “\*” 的行來表示形狀。 行數應等於高度，每行中 “\*” 的數量應等於寬度。 每行末尾應該有一個新行（`\n`）。 如果寬度或高度大於 50，則應返回字符串：“Too big for picture.”。
- `get_amount_inside`：以另一個形狀（正方形或矩形）作爲參數。 返回傳入的形狀可以裝進該形狀的次數（沒有旋轉）。 例如，一個寬爲 4、高爲 8 的矩形可以放入兩個邊長爲 4 的正方形。

另外，如果一個 Rectangle 實例被表示爲一個字符串，它應該看起來像： `Rectangle(width=5, height=10)`

## Square 類

Square 類應該是 Rectangle 的子類。 創建 Square 對象時，傳入單邊長度。 `__init__` 方法應該在 Rectangle 類的 `width` 和 `height` 屬性中存儲邊長。

Square 類應該能夠訪問 Rectangle 類方法，但還應該包含一個 `set_side` 方法。 如果 Square 的實例表示爲字符串，則它應該如下所示：`Square(side=9)`

此外，Square 類的 `set_width` 和 `set_height` 方法應該設置寬度和高度。

## 使用示例

```py
rect = shape_calculator.Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = shape_calculator.Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))
```

該代碼應該返回：

```bash
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8
```

此項目的單元測試在 `test_module.py` 中。

## 開發

在 `shape_calculator.py` 中編寫你的代碼。 對於開發，你可以使用 `main.py` 來測試你的 `shape_calculator()` 函數。 單擊“運行”按鈕，`main.py` 將運行。

## 測試

爲了你的方便，我們將測試從 `test_module.py` 導入到 `main.py`。 只要你點擊“運行”按鈕，測試就會自動運行。

## 提交

複製項目的 URL 並將其提交給 freeCodeCamp。

# --hints--

應該創建一個 Rectangle 類和一個 Square 類，並通過所有測試。

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
