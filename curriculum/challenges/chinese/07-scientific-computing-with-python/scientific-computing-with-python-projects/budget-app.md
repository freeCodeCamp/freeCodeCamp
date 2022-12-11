---
id: 5e44413e903586ffb414c94e
title: 预算应用
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   首先在 Replit 中导入项目。
-   接着，你将看到一个 `.replit` 窗口。
-   选择 `Use run command` 并点击 `Done` 按钮。


# --instructions--

完成 `budget.py` 中的 `Category` 类。 它应该能够根据不同的预算类别实例化对象，例如 *食物* 、 *服装* 和 *娱乐* 。 创建对象时，它们以类别的名称传递。 该类应该有一个名为 `ledger` 的实例变量，它是一个列表。 该类还应包含以下方法：

- 接受金额和描述的 `deposit` 方法。 如果没有给出描述，它应该默认为一个空字符串。 该方法应以 `{"amount": amount, "description": description}` 的形式将对象附加到账本列表。
- `withdraw` 方法类似于 `deposit` 方法，但传入的金额应作为负数存储在账本中。 如果没有足够的资金，则不应向账本添加任何内容。 如果取款发生，此方法应返回 `True`，否则返回 `False`。
- `get_balance` 方法，根据发生的存款和取款返回预算类别的当前余额。
- `transfer` 方法，它接受一个金额和另一个预算类别作为参数。 该方法应添加带有金额和描述 “Transfer to [目的地预算类别]”的提款。 然后，该方法应将存款添加到其他预算类别，其金额和描述为 “Transfer from [来源预算类别]”。 如果没有足够的资金，则不应向任一账本添加任何内容。 如果转账发生，此方法应返回 `True`，否则返回 `False`。
- 接受金额作为参数的 `check_funds` 方法。 如果金额大于预算类别的余额，则返回 `False`，否则返回 `True`。 `withdraw` 方法和 `transfer` 方法都应该使用此方法。

打印预算对象时，它应显示：

- 30 个字符的标题行，类别名称居中在一行 `*` 字符中。
- 账本中的项目列表。 每行应显示描述和金额。 应显示描述的前 23 个字符，然后是金额。 金额应右对齐，包含两位小数，最多显示 7 个字符。
- 一行显示类别总数。

下面是一个输出示例：

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

除了 `Category` 类之外，创建一个名为 `create_spend_chart` 的函数（在类之外），它将类别列表作为参数。 它应该返回一个作为条形图的字符串。

该图表应显示在传递给函数的每个类别中花费的百分比。 花费的百分比应该只计算取款而不是存款。 图表左侧应该是标签 0 - 100。 条形图中的“条”应由“o”字符组成。 每个条形的高度应四舍五入到最接近的 10。 条形图下面的水平线应该超过最后一个条形图再多两个空格。 每个类别名称应垂直写在栏下方。 顶部应该有一个标题，上面写着“Percentage spent by category”。

此功能将使用最多四个类别进行测试。

仔细查看下面的示例输出，并确保输出的间距与示例完全匹配。

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

此项目的单元测试在 `test_module.py` 中。

## 开发

在 `budget.py` 中编写你的代码。 对于开发，你可以使用 `main.py` 来测试你的 `Category` 类。 单击“运行”按钮，`main.py` 将运行。

## 测试

为了你的方便，我们将测试从 `test_module.py` 导入到 `main.py`。 只要你点击“运行”按钮，测试就会自动运行。

## 提交

复制项目的 URL 并将其提交给 freeCodeCamp。

# --hints--

它应该创建一个 Category 类并通过所有测试。

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
