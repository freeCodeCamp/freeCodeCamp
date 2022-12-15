---
id: 5e444147903586ffb414c94f
title: 多边形面积计算器
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


# --instructions--

在这个项目中，你将使用面向对象的编程来创建 Rectangle（矩形） 类和 Square（正方形） 类。 Square 类应该是 Rectangle 的子类，并继承方法和属性。

## Rectangle 类

创建 Rectangle 对象时，应使用 `width` 和 `height` 属性对其进行初始化。 该类还应包含以下方法：

- `set_width`
- `set_height`
- `get_area`：返回面积（`width * height`）
- `get_perimeter`：返回周长（`2 * width + 2 * height`）
- `get_diagonal`：返回对角线（`(width ** 2 + height ** 2) ** .5`）
- `get_picture`：返回一个字符串，该字符串使用包含 “\*” 的行来表示形状。 行数应等于高度，每行中 “\*” 的数量应等于宽度。 每行末尾应该有一个新行（`\n`）。 如果宽度或高度大于 50，则应返回字符串：“Too big for picture.”。
- `get_amount_inside`：以另一个形状（正方形或矩形）作为参数。 返回传入的形状可以装进该形状的次数（没有旋转）。 例如，一个宽为 4、高为 8 的矩形可以放入两个边长为 4 的正方形。

另外，如果一个 Rectangle 实例被表示为一个字符串，它应该看起来像： `Rectangle(width=5, height=10)`

## Square 类

Square 类应该是 Rectangle 的子类。 创建 Square 对象时，传入单边长度。 `__init__` 方法应该在 Rectangle 类的 `width` 和 `height` 属性中存储边长。

Square 类应该能够访问 Rectangle 类方法，但还应该包含一个 `set_side` 方法。 如果 Square 的实例表示为字符串，则它应该如下所示：`Square(side=9)`

此外，Square 类的 `set_width` 和 `set_height` 方法应该设置宽度和高度。

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

该代码应该返回：

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

此项目的单元测试在 `test_module.py` 中。

## 开发

在 `shape_calculator.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的 `shape_calculator()` 函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

# --hints--

应该创建一个 Rectangle 类和一个 Square 类，并通过所有测试。

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
