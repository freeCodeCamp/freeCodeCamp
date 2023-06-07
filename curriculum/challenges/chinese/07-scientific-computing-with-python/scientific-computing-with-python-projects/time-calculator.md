---
id: 5e444136903586ffb414c94d
title: 时间计算器
challengeType: 10
forumTopicId: 462360
dashedName: time-calculator
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-time-calculator" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。

# --instructions--

编写一个名为 `add_time` 的函数，它接受两个必需参数和一个可选参数：

- 12 小时制的开始时间（以 AM 或 PM 结束）
- 指示小时数和分钟数的持续时间
- （可选）一周的开始日期，不区分大小写

该函数应将持续时间添加到开始时间并返回结果。

如果结果是第二天，它应该在时间之后显示 `(next day)`。 如果结果将超过一天以后，它应该在时间后面显示 `(n days later)`，其中 "n "是之后的天数。

如果给函数提供了可选的开始日期的星期参数，则输出应显示结果的星期几。 输出中的星期几应出现在时间之后和天数之前。

以下是函数应处理的不同情况的一些示例。 请注意结果的间距和标点符号。

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

不要导入任何 Python 库。 假设开始时间是有效时间。 持续时间中的分钟将是小于 60 的整数，但小时可以是任何整数。

## 开发

在 `time_calculator.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的 `time_calculator()` 函数。 单击“运行”按钮，`main.py` 将运行。

## 测试

这个项目的单元测试在 `test_module.py` 中。 为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

# --hints--

它应该能正确地添加时间，并通过所有测试。

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
