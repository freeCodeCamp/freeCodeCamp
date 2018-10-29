---
title: Polynomial Factorization
localeTitle: 多项式因式分解
---
## 多项式因式分解

保理多项式很像是对常规数进行分解。目标是找到从多项式中均匀分出的数字或多项式。与分解相反，您可以简化 像这样的表达式：

![7（x + 4）= 7x + 28](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img1.png?raw=true)

您可以将因子考虑为相反，例如在这个例子中我们首先找到术语（9）的最大公因子（GCF），然后重写多项式：

![9x ^ 2 + 72 = 9（x ^ 2 + 8）](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img2.png?raw=true)

让我们再做一些例子。

![2x  -  10](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img3.png?raw=true)

您可以将第一项计算为（2）（x），将第二项计入（-5）（2）。唯一的共同因素是2。 将公因子移到我们重写的多项式的开头。

![2x  -  10 = 2（](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img4.png?raw=true)

当你从2x中除去2时，你会留下x

![2x  -  10 = 2（x](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img5.png?raw=true)

当你从-10中除以2时，你剩下-5。

![2x  -  10 = 2（x  -  5）](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img6.png?raw=true)

### 常见错误

![x ^ 6y ^ 5 + xy = xy（x ^ 5y ^ 4 + 1）](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img7.png?raw=true)

在进行保理时，通常情况下，您最终会得到一个产生1的除法。确保将其包括在内 括号。