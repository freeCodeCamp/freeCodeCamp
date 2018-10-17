---
title: Recursive Formulas for Arithmetic Sequences
localeTitle: 算术序列的递归公式
---
## 算术序列的递归公式

### 什么是算术序列？

**序列**是数字列表，其中对一个数字执行相同的操作以获得下一个数字。 **算术序列** 具体是指通过加或减一个值构成的序列 - 称为**公共差异** - 来获得下一个术语。在 为了有效地讨论序列，我们使用一个公式，在放入索引列表时构建序列。通常，这些公式给出一个字母的名称，后跟括号中的参数，以及构建序列的表达式在右手侧。

`a(n) = n + 1`

以上是算术序列的公式的示例。

### 例子

序列|式 --------- | --------- 1,2,3,4，... | a（n）= n + 1 3,8,13,18，... | b（n）= 5n - 2

### 递归公式

注意：数学家从1开始计数，因此按惯例， `n=1`是第一个术语。所以我们必须定义第一个术语是什么。然后我们有 找出并包括共同的差异。再看看这些例子，

序列|公式|递归公式 --------- | --------- | ------------------- 1,2,3,4，... | a（n）= n + 1 | a（n）= a（n-1）+ 1，a（1）= 1 3,8,13,18，... | b（n）= 5n - 2 | b（n）= b（n-1）+ 5，b（1）= 3

### 找到公式（给出第一项的序列）
```
1. Figure out the common difference 
    Pick a term in the sequence and subtract the term that comes before it. 
 2. Construct the formula 
    The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 
```

### 找到公式（给定没有第一项的序列）
```
1. Figure out the common difference 
    Pick a term in the sequence and subtract the term that comes before it. 
 2. Find the first term 
    i. Pick a term in the sequence, call it `k` and call its index `h` 
    ii. first term = k - (h-1)*(common difference) 
 3. Construct the formula 
    The formula has the form: `a(n) = a(n-1) + [common difference], a(1) = [first term]` 
```

#### 更多信息：

有关此主题的更多信息，请访问

*   [维基百科](https://en.wikipedia.org/wiki/Arithmetic_progression)
*   [可汗学院](https://www.khanacademy.org/math/algebra/sequences/constructing-arithmetic-sequences/a/writing-recursive-formulas-for-arithmetic-sequences)