---
title: Combinations
localeTitle: 组合
---
## 组合

组合是从集合中选择的项目，其中选择的顺序无关紧要。更正式地说：

> 集合S的k-组合是S的k个不同元素的子集。如果集合具有n个元素，则k-组合的数量等于[二项式系数](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) 1

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f "二项式系数")

或者如果您更喜欢使用[阶乘](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) ：

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a "阶乘")

组合指的是一次取k **而不**重复的n个事物的组合。为了引用允许重复的组合，经常使用术语k-选择或k-组合与重复，我们使用以下公式：

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0 "二项式系数")

## 一些例子：

当您想要解决如下组合的组合问题时，组合非常有用：
```
Compute the probability to obtain a poker from 
 a standard fifty-two card deck drawing 5 cards 
 at the same time 
```

为了解决这个简单的问题，您需要使用组合计算5张牌的数量：

![alt text](https://latex.codecogs.com/gif.latex?%5Cfrac%7B13%5Cbinom%7B52%7D%7B4%7D%5Cbinom%7B48%7D%7B1%7D%7D%7B%5Cbinom%7B52%7D%7B5%7D%7D "扑克问题")

记住这一点![alt text](https://latex.codecogs.com/gif.latex?%5Cbinom%7B48%7D%7B1%7D "48对1")根据二项式系数定义，等于48。

### 来源

1 [维基百科组合条目](https://en.wikipedia.org/wiki/Combination)