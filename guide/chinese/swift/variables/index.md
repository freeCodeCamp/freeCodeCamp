---
title: Variables
localeTitle: 变量
---
## 变量

变量将名称与特定类型的值相关联。在Swift中，有两种主要的方法来创建变量。 `let`和`var` 。要声明常量，请使用`let`关键字。要声明可变变量，请使用`var`关键字。

在Swift中存储变量的两种方法的好处是防止变化应该是常量的变量的错误。

\`\`\`斯威夫特 让daysInAWeek = 7 var amountOfMoney = 100

amountOfMoney = 150 // amountOfMoney现在是150

daysInAWeek = 10 //这给了我们一个错误！

\`\`\`

在这种情况下，变量`daysInAWeek`应该是常量，因为一周只有七天，而变量`amountOfMoney`应该是var，因为一个帐户中的金额变化。

常量和变量名称几乎可以包含任何字符，包括Unicode字符：

```Swift
  let π = 3.14159 
  let 你好 = "你好世界" 
  let 🐶🐮 = "dogcow" 
```

要测试变量是否具有正确的值，请使用`print()` 。

```Swift
  let money = 50 
 
  print(money) 
  // This prints 50 
```

#### 更多信息：

*   [Swift编程语言](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID310)