---
title: Mathematics
localeTitle: 数学
---
## 数学

在本节中，我们提供了各种数学概念的指南。

### 编程中的数学

尽管自己创建数学函数是一种很好的做法，但是有许多数学库可用于许多编程语言。这些 具有可用于执行计算的预定功能。在编程中，您通常会在高年级课程中涵盖这些主题 计算理论，算法设计和计算机语言设计。

#### 斐波那契序列（生成函数）

我们都知道递归运动从解决纤维素序列开始。这也是第一个展示动态编程能力的例子。因此，它是一类被称为生成函数的数学的特例。因此，我们将在这里讨论的内容一般适用于所有生成函数。 在数学中有一个概念，“每个生成函数都有一个序列，每个序列都有一个生成函数”。但是，问题出现在第二部分。一般来说，找到生成并不总是那么容易。为了记住这一点，我画了一个非终止有理数的类比“如果你知道十进制形式的数字，找到相应的小数形式并不容易，但如果我们知道分数，总是很容易找到小数形成”。因此，我们通常根据它们的顺序研究一些非常漂亮的生成函数。为什么？因为，我们知道序列很容易通过许多算法范例来处理。已知的一些着名序列是斐波那契，哈达玛（类似于加泰罗尼亚语）等。

### 包括数学库

在本节中，我们将向您展示如何将标准数学库包含在不同语言中，包括如何使用它的简短示例。

#### C

\`\`\`cs 使用System.Math;

公共类计算器{

private int \[\] array = {1,2,3,4,5};

private int CalculatePoweredArray（int power，int \[\] arr）{ var poweredArray = arr; foreach（来自poweredArray的int nmbr）{ nmbr = Math.Pow（nmbr，power）; //第一个参数是要引发的数字，第二个参数是幂 } return poweredArray; }

}
```
Calling the function with a power of 3 will give these results: 
 [1, 8, 27, 64, 125] 
 
 Documentation reference: <a href='https://msdn.microsoft.com/en-us/library/system.math(v=vs.110' target='_blank' rel='nofollow'>MSDN</a>.aspx) 
 
 #### JavaScript 
 With Node.js 
```

JavaScript的 var math = require（'mathjs'）;
```
In the browser 
```

HTML

// use the math.js libary math.sqrt(-4); // result: 2i
```
Documentation reference: <a href='http://mathjs.org/docs/index.html' target='_blank' rel='nofollow'>Math.js documentation</a> 
 
 #### C++ 
```

CPP

# 包括
```
Documentation reference: <a href='http://www.cplusplus.com/reference/cmath/' target='_blank' rel='nofollow'>cplusplus reference</a> 
 
 #### Python 
```

蟒蛇

> > > 导入数学 math.sqrt（9）//只考虑正根 3.0 math.pi //你也可以使用像pi和e这样的数学辅音 3.141592653589793 math.radians（90）//将度数转换为弧度 1.5707963267948966
```
In addition to the standard `math` module, there are several other mathematical helper libraries available on [PyPI](https://pypi.org/). For example: 
```

贝壳 $ pip install numpy $ python

> > > 导入numpy为np np.zeros（（3,4））
```
This returns a 3x4 array populated with 0s. 
 
 #### Java 
```

java的 import java.lang.Math
```
The `math` module can also be imported as follows, and the usage difference is illustrated: 
```

蟒蛇

> > > 从数学导入\* SQRT（4） 2.0 PI 3.141592653589793

\`\`\`

文档参考： [Python 2](https://docs.python.org/2/library/math.html) | [Python 3](https://docs.python.org/3/library/math.html)

### 其他资源

数学概念的动画可视化可以在[3 Blue 1 Brown](http://www.3blue1brown.com/)和[Khan Academy找到](https://www.khanacademy.org/) 。