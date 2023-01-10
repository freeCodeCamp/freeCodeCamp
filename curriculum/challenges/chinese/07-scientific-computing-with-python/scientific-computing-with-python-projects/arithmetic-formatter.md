---
id: 5e44412c903586ffb414c94c
title: 算术格式化
challengeType: 10
forumTopicId: 462359
dashedName: arithmetic-formatter
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-arithmetic-formatter" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


# --instructions--

小学生经常把算术题垂直排列，这样更容易解决。 例如，“235 + 52” 变成：

```py
  235
+  52
-----
```

创建一个函数，接收一个属于算术问题的字符串列表，并返回垂直和并排排列的问题。 该函数应该接受可选的第二个参数。 当第二个参数设置为 `True` 时，应显示答案。

## 示例

函数调用：

```py
arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
```

输出:

```py
   32      3801      45      123
+ 698    -    2    + 43    +  49
-----    ------    ----    -----
```

函数调用：

```py
arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
```

输出:

```py
  32         1      9999      523
+  8    - 3801    + 9999    -  49
----    ------    ------    -----
  40     -3800     19998      474
```

## 规则

如果提供的问题格式正确，该函数将返回正确的转换，否则，它将 **返回** 一个 **字符串** 来描述对用户有意义的错误。


- 会返回错误的情况：
  - 如果提供给函数的**问题过多**。 限制为**五个**，更多的将返回：`Error: Too many problems.`。
  - 函数可以接受的运算符是**加法**和**减法**。 乘法和除法将返回错误。 本要点中未提及的其他运算符将不需要进行测试。 返回的错误将是：`Error: Operator must be '+' or '-'.`。
  - 每个数字（操作数）应该只包含数字。 否则，该函数将返回：`Error: Numbers must only contain digits.`。
  - 每个操作数（即运算符每一侧的数字）的宽度最多为四位数字。 否则，返回的错误字符串将为：`Error: Numbers cannot be more than four digits.`。
- 如果用户提供了正确格式的问题，返回的转换将遵循以下规则：
  - 操作符和两个操作数中最长的一个之间应该有一个空格，操作符将与第二个操作数在同一行，两个操作数的顺序与提供的相同（第一个是上面的，第二个是下面的）。
  - 数字应该右对齐。
  - 每个问题之间应该有四个空格。
  - 每个问题的底部都应该有破折号。 破折号应该单独沿着每个问题的整个长度延伸。 （上面的例子展示了这应该是什么样子。）

## 开发

在 `arithmetic_arranger.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的 `arithmetic_arranger()` 函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

这个项目的单元测试在 `test_module.py` 中。 为了你的方便，我们在 `main.py` 中从 `test_module.py` 运行测试。 只要你点击“运行”按钮，测试就会自动运行。 或者，你可以通过在控制台中输入 `pytest` 来运行测试。

## 提交

复制项目的 URL 并在下面提交。

# --hints--

它应该正确地格式化算术问题并通过所有测试。

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
