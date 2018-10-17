---
title: pandas
localeTitle: 大熊猫
---
![Everybody loves pandas!](https://pandas.pydata.org/_static/pandas_logo.png "大熊猫")

## 大熊猫

[pandas](http://pandas.pydata.org/)是一个使用数据框进行数据分析的Python库。数据框是数据表，可以在概念上将其与电子表格进行比较。熟悉R的数据科学家会感到宾至如归。大熊猫通常与numpy，pyplot和scikit-learn一起使用。

### 导入大熊猫

使用别名`pd`导入pandas库是一种广泛使用的约定：

```python
import pandas as pd 
```

## 数据框架

数据框由许多行和列组成。每列代表数据集的一个特征，因此具有名称和数据类型。每行表示通过关联特征值的数据点。 pandas库允许您以各种方式处理数据框中的数据。大熊猫有很多可能性，所以以下仅仅是为了给图书馆带来感觉。

## 系列

Series是pandas中的基本数据类型.A系列非常类似于数组（NumPy数组）（实际上它是建立在NumPy数组对象之上）.A系列可以有轴标签，因为它可以被索引没有数字索引的标签，用于数据的位置。它可以包含任何有效的Python对象，如List，Dictionary等。

## 从csv文件加载数据

`.csv`文件是_逗号分隔的值_文件。一种非常常见的存储数据的方法。要将此类数据加载到pandas数据框中，请使用`read_csv`方法：

```python
df = pd.read_csv(file_path) 
```

这里， `file_path`可以是您计算机上csv文件的本地路径，也可以是指向其中的URL。列名可以包含在csv文件中，也可以作为参数传递。有关此内容的更多信息，请查看[文档](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv) 。

## 概述数据框架

要显示数据框的前几行， `head`方法很有用（再一次这对R程序员来说应该是熟悉的）：

```python
df.head() 
```

这将显示数据框的前5行。

要显示超过前5行，只需将要打印的行数放在`head`方法中。

```python
df.head(10) 
```

这将显示数据帧的前10行。

为了显示数据帧的最后几行， `tail`方法很有用（再一次这对R程序员来说应该是熟悉的）：

```python
df.tail() 
```

这将显示数据框的最后5行。

## 子集：按名称获取列

数据帧可以是许多方式的子集。最简单的一个是获得一个列。例如，如果数据框`df`包含名为`age`的列，我们可以按如下方式提取它：

```python
ages=df["age"] 
```

#### 更多信息：

1.  [大熊猫](http://pandas.pydata.org/)
2.  [read\_csv](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_csv.html?highlight=read_csv#pandas.read_csv)
3.  [头](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.head.html?highlight=head#pandas.DataFrame.head)