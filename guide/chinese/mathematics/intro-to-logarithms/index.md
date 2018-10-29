---
title: Intro to Logarithms
localeTitle: 对数简介
---
## 对数简介

对数是用于查找基数被提升到什么功率以便接收特定输出的数学函数。

![日志图](https://cdn.kastatic.org/googleusercontent/CfdIRZu_iMA_DFp7EilcK9igLFA42jd2hksGilRMBdINxoLKxj2LAWCjQxvj8m9E3Ik6tmVfPAFIx4whUTPp-KZw)

_在示例中，变量b是基数，而变量a是期望的输出，变量c是指数。_

日志用于现实世界中的各种事物。它们用于pH范围，地震强度（里氏震级）和许多其他事物的测量。

python中的日志示例：

```python
import math 
 
 # math.log(value, base) - outputs exponent 
 math.log(100, 10) #outputs 2 
 math.log(2, 2) #outputs 1 
```

#### 资料来源：

*   https://betterexplained.com/articles/using-logs-in-the-real-world/
*   https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/a/intro-to-logarithms

### 对数的定义

数字**x**的对数，写入_log（ **x** ）_ ，通常表示您必须使用的数字超过10来获得**x** 。假设您想找到_log（10）_ 。这意味着你想要找到你需要筹码10到10的数字。这给了我们一个等式： _log（10）= x_ 。

我们可以使用它并将其作为双方10的幂。这将等式更改为： _10 log（10） = 10 x_

_10 log（ **x** ）_ ，其中**x**是任意数字，将返回**x** ，因为_10 log_取消。这意味着我们的等式现在 _10 = 10 x_

鉴于_10 x_本身等于10倍_x_次，这意味着10需要与自身相乘足够的时间恰好为10，因此_x_为1.这是因为 _10 1 = 10_

### 自然对数的定义

除了使用的数字之外，这与对数的定义完全相同。在正常对数中，基数通常为10，自然对数中的数字（通常写为_ln_ ）使用_e_ ，euler的数字作为基数。这意味着 _ln（e）= 1_ ，而不是_log（10）= 1_ 。 因此，我们正在找到将_e_提升到_ln（ **x** ）_所需的功率。