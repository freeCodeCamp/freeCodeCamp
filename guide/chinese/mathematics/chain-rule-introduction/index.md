---
title: Chain Rule Introduction
localeTitle: 连锁规则介绍
---
# 连锁规则介绍

链规则用于计算函数组合的导数。

设_F_是实值函数，它是两个函数_f_和_g_的复合，即`F(x) = f(g(x))` ，f（x）和g（x）都是可微分的。 令导数D {F（x）}表示为F'（x）。

按链规则，

#### _`F'(x) = f'(g(x)).g'(x)`_

假设，g（x）= t则F（x）= f（g（x））可以重写为F（x）= f（t） 然后在莱布尼兹的符号链规则可以改写为：

#### `d(F)/dx = df/dt . dt/dx`

### 示例1.计算sin的衍生物（ax + b）

解决方案：该功能可以视为两个功能的组合。 F（x）= f（g（x））

t = g（x）= ax + b和f（t）= sin（t）

f（t）= sin（t）=> df / dt = cos（t）

t = g（x）= ax + b => dt / dx = a

现在按链规则：

d（F）/ dx = df / dt。 DT / DX

\=> d（F）/ dx = a。 cost（t）= a.cos（ax + b）

要么

我们可以直接应用公式F'（x）= f'（g（x））。g'（x）= cos（ax + b）。一个

## 对于两个以上函数的函数组合：

设_F_是一个实值函数，它是四个函数的复合_rstu，_即`F(x)=r(s(t(u(x))))`和所有函数_r（x）s（x）t（x）你（x）_是可区分的。 令导数D {F（x）}表示为F'（x）。

按链规则，

#### _`F'(x) = r'(s(t(u(x)))).s'(t(u(x))).t'(u(x)).u'(x)`_

假设，a = u（x），b = t（a），c = s（b）则F（x）= r（s（t（u（x））））可以重写为F（x ）= R（c）中

然后，F（x）= r（c）=> d（F）/ dx = dr / dc。 dc / dx \_\_\_（eqn 1）

c = s（b）=> dc / dx = ds / db。 db / dx \_\_\_（eqn 2）

b = t（a）=> db / dx = dt / da。 da / dx \_\_\_（eqn 3）

a = u（x）=> da / dx = du / dx \_\_\_（eqn 4）

将eqn 2 3 4的值放入方程1中，我们将得到：

#### `d(F)/dx = dr/dc . ds/db . dt/da . du/dx`

### 例2.计算sin的导数（cos（（mx + n）^ 3））

解决方案：该功能可视化为四个功能的组合。 F（x）= r（s（t（u（x））））

其中a = u（x）= mx + n

b = t（a）= a ^ 3

c = s（b）= cos（b）则F（x）= r（s（t（u（x））））可以重写为F（x）= r（c）= sin（c）

现在，按链规则： d（F）/ dx = dr / dc。 ds / db。 dt / da。 DU / DX

\=> d（F）/ dx = cos（c）。 -sin（b）。 3a ^ 2。米

\=> d（F）/ dx = cos（cos（（mx + n）^ 3））。 -sin（（mx + n）^ 3））。 3（mx + n）^ 2。米

要么

我们可以直接应用这个公式，

F'（x）= r'（s（t（u（x））））。s'（t（u（x）））。t'（u（x））。u'（x）= cos（ cos（（mx + n）^ 3））。 -sin（（mx + n）^ 3））。 3（mx + n）^ 2。米