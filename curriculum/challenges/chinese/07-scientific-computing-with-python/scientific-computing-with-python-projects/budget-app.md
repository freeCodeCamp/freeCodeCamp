---
id: 5e44413e903586ffb414c94e
title: 预算应用
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

你将使用<a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">我们在 Replit 的初始化项目</a>来完成这个项目。

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

完成 `budget.py` 中的 `Category` 类。 它应该能够根据不同的预算类别实例化对象，例如 *食物* 、 *服装* 和 *娱乐* 。 创建对象时，它们以类别的名称传递。 该类应该有一个名为 `ledger` 的实例变量，它是一个列表。 该类还应包含以下方法：

- A `deposit` method that accepts an amount and description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of `{"amount": amount, "description": description}`.
- A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. This method should return `True` if the withdrawal took place, and `False` otherwise.
- A `get_balance` method that returns the current balance of the budget category based on the deposits and withdrawals that have occurred.
- A `transfer` method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. This method should return `True` if the transfer took place, and `False` otherwise.
- A `check_funds` method that accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.

打印预算对象时，它应显示：

- A title line of 30 characters where the name of the category is centered in a line of `*` characters.
- A list of the items in the ledger. Each line should show the description and amount. The first 23 characters of the description should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
- A line displaying the category total.

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
