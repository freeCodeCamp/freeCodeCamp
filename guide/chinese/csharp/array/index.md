---
title: Arrays
localeTitle: 数组
---
# 数组

数组用于存储相同类型的数据集合。这可以用作包含多个值或变量集合的单个变量。

# 数组规则

数组从零开始。数组的第一个元素是0，第二个元素是1，第三个元素是2，依此类推。

数组必须具有相同的数据类型。您可以在数组中使用任何数据类型（例如int，double，float，string，enum）

必须首先声明并初始化新的Array，然后才能调用和访问它。

# 声明一个数组

使用以下格式声明数组： `dataType [] nameOfArray;`

# 初始化一个数组

使用以下格式初始化数组。此方法还声明数组并指出要将多少值存储到数组中。

`dataType [] nameOfArray = new nameOfArray[numberOfElements];`

# 将值分配给数组

您可以使用以下格式直接将值分配给元素：

`nameOfArray[2] = 50;`

将值50直接赋值给元素\[2\]

您可以使用以下格式声明数组时一次分配多个值：

`dataType [] nameOfArray = {5,17,19,92};`

将值5分配给元素\[0\]，将17分配给元素\[1\]，将19分配给元素\[2\]，将92分配给元素\[3\]。

您可以使用以下格式一次声明，初始化和分配数组中的值：

`dataType [] nameOfArray = new nameOfArray[numberOfElements] {value1,value2,value3,value4};`

您可以使用以下格式将数组直接存储到另一个数组中：

`int [] nameOfArray = new nameOfArray[4] {2,9,56,1280};` `int [] nameOfSecondArray = nameOfArray;`