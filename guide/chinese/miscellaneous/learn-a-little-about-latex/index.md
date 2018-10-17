---
title: Learn a Little About Latex
localeTitle: 了解乳胶
---
LaTeX专为生产技术和科学文档而设计。您可以创建矩阵，数组或其他几个数学函数。

`$$ (latex language) $$`

您可以在GitterIM中嵌入Latex。例子：

## 排列
```
$$\begin{array} {cc} 
 arr11 & arr12\\ 
 arr21 & arr22\\ 
 \end{array}$$ 
```

## 矩阵
```
$$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$ 
```

## 格式化
```
$$\huge\textstyle\color{#F00}{BigRed}\small\textstyle\color{#0F0}{SmallGreen}$$ 
```

[功能支持](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)

## 细节

[KaTeX Github Repo](https://github.com/Khan/KaTeX) LaTeX是一种高品质的排版系统;它包括为生产技术和科学文档而设计的功能。 LaTeX是科学文献交流和出版的事实标准。他的优点在书籍，论文或论文等长篇文件中都很明显。

Gitter使用Katex（LaTeX的自定义实现），可以使用它来介绍以下代码：
```
$$\begin{array} {cc} 
 item11 & item12\ 
 item21 & item 22\ 
 \end{array} 
 $$ 
```

文本：

*   `$$\huge\textstyle{some text}$$` - > $$ \\ huge \\ textstyle {some text} $$
*   `$$\color{#F90}{some text}$$` - > $$ \\ color {＃F90} {some text} $$