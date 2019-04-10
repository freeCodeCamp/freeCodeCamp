---
title: Euler's Method
localeTitle: 欧拉方法
---
# 欧拉方法

Euler方法是用于求解具有给定初始值的常微分方程（ODE）的一阶数值过程。

## 一般初值问题

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn006.png)

## 方法

欧拉的方法使用简单的公式，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn3.png)

在点`x`处构造切线并获得`y(x+h)` ，其斜率为，

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn008.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/Euler.png)

在欧拉方法中，您可以通过每个区间中的切线（即一系列短线段）以`h`步长逼近解的曲线。

_通常_ ，如果使用小步长，则近似的精度会增加。

## 通式

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn7.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_2.png)

## 任意点`b`功能值，由`y(b)`

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn6.png)

哪里，

*   **n** =步数
*   **h** =间隔宽度（每一步的大小）

### 伪代码

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_1.png)

## 例

找到`y(1)` ，给定

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn007.png)

通过分析求解，解是_**y = e x**_和`y(1)` = `2.71828` 。 （注意：此分析解决方案仅用于比较准确性。）

使用欧拉法，考虑`h` = `0.2` ， `0.1` ， `0.01` ，可以看到以下的图中的结果。

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/comparison.png)

当`h` = `0.2` ， `y(1)` = `2.48832` （误差= 8.46％）

当`h` = `0.1` ， `y(1)` = `2.59374` （误差= 4.58％）

当`h` = `0.01` ， `y(1)` = `2.70481` （误差= 0.50％）

您可以注意到，当步数很小时，准确度如何提高。

## 更多信息：

1.  [求解微分方程的数值方法](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
2.  [欧拉的方法](https://en.wikipedia.org/wiki/Euler_method)