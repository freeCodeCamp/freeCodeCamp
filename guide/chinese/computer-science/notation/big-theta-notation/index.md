---
title: Big Theta Notation
localeTitle: 大Theta表示法
---
## 大Theta表示法

Big Omega告诉我们函数运行时的下限，Big O告诉我们上限。通常，它们是不同的，我们不能对运行时提供保证 - 它将在两个边界和输入之间变化。但是当它们相同时会发生什么？然后我们可以给出一个**θ** （Θ）绑定 - 无论我们给出什么输入，我们的函数都将在那个时间运行。一般来说，我们总是希望在可能的情况下给出一个θ界限，因为它是最准确和最严格的界限。如果我们不能给出一个theta界限，那么下一个最好的事情就是最严格的O界限。

例如，以一个在数组中搜索值为0的函数：

```python
def containsZero(arr): #assume normal array of length n with no edge cases 
  for num x in arr: 
    if x == 0: 
       return true 
  return false 
```

1.  什么是最好的情况？好吧，如果我们给它的数组有0作为第一个值，它将需要恒定的时间：Ω（1）
2.  什么是最坏的情况？如果数组不包含0，我们将遍历整个数组：O（n）

我们给它一个欧米茄和O绑定，那么theta呢？我们不能给它一个！根据我们提供的数组，运行时将介于常量和线性之间。

我们稍微改变一下我们的代码吧。

```python
def printNums(arr): #assume normal array of length n with no edge cases 
  for num x in arr: 
    print(x) 
```

你能想到最好的情况和最坏的情况吗？ 我不能！无论我们给出什么数组，我们都必须迭代数组中的每个值。因此该函数至少花费n次（Ω（n）），但我们也知道它不会花费n次（O（n））。这是什么意思？我们的函数将**恰好** n时间：Θ（N）。

如果界限混乱，请考虑这样。我们有2个数字，x和y。我们得到x <= y且y <= x。如果x小于或等于y，并且y小于或等于x，则x必须等于y！

如果您熟悉链接列表，请测试自己并考虑每个功能的运行时！

1.  得到
2.  去掉
3.  加

当您考虑双重链接列表时，事情变得更加有趣！

#### 更多信息：

https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation https://stackoverflow.com/questions/10376740/what-exactly-does-big-%D3%A8-notation-represent https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/