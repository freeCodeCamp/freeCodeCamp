---
title: Code Smells
localeTitle: 代码闻起来
---
## 代码闻起来

计算机编程中的代码气味表明您的系统和代码质量可能存在问题。此问题可能需要修复重构。

重要的是要了解有臭味的代码有效，但质量不高。

#### 例子

1.  重复代码 - 已在代码库中复制的代码块。这可能表明您需要将代码概括为函数并在两个地方调用它，或者可能是代码在一个地方工作的方式与它在另一个地方的工作方式完全无关，尽管已被复制。
2.  大类 - 具有太多代码行的类。这可能表明该类正在尝试做太多事情，需要分解成更小的类。

#### 更多信息：

*   _重构：改进现有代码的设计 - Kent Beck，Martin Fowler_
*   _清洁代码：敏捷软件工艺手册 - Martin，Robert C.（2009）。_
*   [维基百科上的代码闻起来](https://en.wikipedia.org/wiki/Code_smell)
*   [代码闻到杰夫阿特伍德的博客（编码恐怖）](https://blog.codinghorror.com/code-smells/)
*   [代码闻到了Ward Cunningham的C2 Wiki](http://wiki.c2.com/?CodeSmell)
*   [Martin Fowler - 代码气味](https://martinfowler.com/bliki/CodeSmell.html)