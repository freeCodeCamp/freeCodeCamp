---
title: Change Styles Based on Data
localeTitle: 根据数据更改样式
---
## 根据数据更改样式

再次什么是回调函数提醒自己[这](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

使用if-else逻辑或三元运算符可以通过两种方式完成此部分。

**if-else逻辑**

来自[w3school的](https://www.w3schools.com/js/js_if_else.asp)一个例子

\`\`\`的JavaScript

const money = 50;

if（money <50）{

回归“我富有”;

}

其他{

回归“我很穷”;

}
```
What you need to remember is the bracket that the if-else logic associate with, (argument) and {statement} 
 
 **Try Yourself Now**  👩‍💻👨‍💻 
 
 
 
 **Ternary operator** 
 
 A more detailed explanation [here](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff). Ternary operator is a lot more concise and quicker to remember for a simple true or false statement. Read [this](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394) 
```

JavaScript的

条件？值为true：如果为false则为value
```
For someone who still not sure here is a solution by using If-else statement 
```

JavaScript的 .style（“color”，（d）=> { if（d <20）{ 返回'红色' } 其他{ 返回'绿色' } }） \`\`\`