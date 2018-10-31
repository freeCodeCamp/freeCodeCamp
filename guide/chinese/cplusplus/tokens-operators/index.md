---
title: Operators
localeTitle: 运营商
---# 经营者：

*   操作员允许您对数据执行操作。
*   正在操作的数据称为_操作数_ 。
*   C ++中不同类型的运算符是：
*   _OPERANDS_是操作员执行某些命令的数据。
*   运算符有3种类型：一元（适用于1个操作数），二元（适用于2个操作数），三元（适用于3个操作数）。

### 1 I / O操作符 -

*   这些运算符允许您直接输入和输出。
    
    ## 输入曝气器“>>”##
    
    用于从标准输入读取数据（“cin”语句）。
    
    ## 输出运算符“<<”
    
    用于在`cout`语句中发送输出。
    

### 2算术运算符 -

*   这些运算符允许您执行基本的算术运算。

1.  `+`运算符_添加_两个操作数。
    
2.  `-`运算符_减去_两个操作数。
    
3.  `*`运算符将两个操作数_相乘_ 。
    
4.  `/`运算符_除以_并给出两个操作数的_商_ 。
    
5.  `%`运算符_除以_并给出两个操作数的_其余部分_ 。 （或者，对于更具数学倾向的读者， `a % b`基本上是“a mod b”的结果
    
    ### 使用算术运算符的示例：
    
    \`\`\`CPP
    

# 包括

使用命名空间std;

int main（） { int a = 5; //第一个操作数 int b = 10; //第二个操作数
```
    cout << "+ operator " << a+b << "\n"; //Add 
    cout << "- operator " << ab << "\n"; //Subtract 
    cout << "* operator " << a*b << "\n"; //Multiply 
    cout << "/ operator " << b/a << "\n"; //Find Quotient 
    cout << "modulus operator " << b%a << "\n"; //Find remainder 
 
    return 0; 
```

} \`\`\`

输出：
```
+ operator 15 
 - operator -5 
 * operator 50 
 / operator 2 
 modulus operator 0 
```

[亲自尝试一下代码吧！ :)](https://repl.it/Mge9)

### 增量运算符：

*   `++`被称为增量运算符。它将整数变量的值增加1。

2种增量：

*   预增量首先递增该值然后使用它。示例： `int a ; ++a;`
*   后增量首先使用变量然后递增它。示例： `int b; b++;`

### 减量运算符：

*   `--`被称为减量运算符。它将整数变量的值减1。

减少的两种类型：

*   预递减首先递减该值然后使用它。示例： `int a ; --a;`
*   后递减首先使用变量然后递减它。示例： `int b; b--;`

递增和递减运算符的示例：

```cpp
#include <iostream> 
 using namespace std; 
 
 int main() 
 { 
        int a = 3 ,b = 4; 
 
         // INCREMENT 
        cout<< "Value of int a PRE INCREMENTED : " << ++a << "\n"; 
        cout<< "Value of int b POST INCREMENTED : " << b++ << "\n"; 
        cout<< "Value of b is changed after using once : " << b << "\n"; 
 
         // DECREMENT 
        cout << "\n"; //go to next line 
        a = 10; //Assigning a new value to a 
        b = 10; //Assigning a new value to b 
        cout << "Value of int a PRE DECREMENTED : " << --a << "\n"; 
        cout << "Value of int b POST DECREMENTED : " << b-- << "\n"; 
        cout << "Value of b is changed after using once : " << b << "\n"; 
 
        return 0; 
 } 
```

输出：
```
Value of int a PRE INCREMENTED : 4 
 Value of int b POST INCREMENTED : 4 
 Value of b is changed after using once : 5 
 
 Value of int a PRE DECREMENTED : 9 
 Value of int b POST DECREMENTED : 10 
 Value of b is changed after using once : 9 
```

[亲自尝试一下代码吧！ :)](https://repl.it/Mgg4/2)

### 3：关系运算符：

*   这些运算符告诉我们两个操作数之间的关系并返回一个布尔值（0或1）。如果关系为`true`则结果为1。如果实现是假的，则结果为0。
    
*   6个关系运算符是：
    
    1.  小于`<`
    2.  大于`>`
    3.  小于或等于`<=`
    4.  大于或等于`>=`
    5.  等于`==`
    6.  不等于`!=`

### 4：逻辑运算符：

*   这些运算符组合了逻辑运算的表达式他们是 ：

1.  逻辑AND `&&` ：如果两个值都为真，则求值为true。
    
2.  逻辑OR `||` ：如果任何值为true，则求值为true。
    
3.  逻辑不`!` ：如果_表达式_为true，则_表达式_为false。该运算符反转了真值，是一元运算符。
    
    ### 5.三元运营商：
    
    `?:`运算符是三元运算符，或_条件运算符_ ，因为它可以用来替换`if else`语句，甚至是`if else if`语句。 语法：
    

`condition ? ValueIfTrue : ValueIfFalse` 。这扩展到：

```cpp
if(condition) 
 ValueIfTrue; 
 else ValueIfFalse; 
```

调用`ValueIfTrue`值有点错误，因为它不必是数字。像这样的东西：

`condition ? FirstLevelTrueValue : ConditionIfFalse ? SecondLevelTrueValue : SecondLevelFalseValue`也有效，并且`if else if`语句被解释为以下`if else if`语句：

```cpp
if(condition) 
 FirstLevelTrueValue; 
 else if(ConditionIfFalse) 
 SecondLevelTrueValue; 
 else SecondLevelFalseValue; 
```

类似地，嵌套的`if`语句也可以使用三元运算符。

_Camper，你现在知道什么是令牌了。下一篇文章将是关于_ _恭喜_

**祝大家好运**

**快乐的编码！ :)**

**随意在FreeCodeCamp的GitHub页面或[FreeCodeCamp的论坛](https://forum.freecodecamp.org/)上询问任何问题[。](https://forum.freecodecamp.org/)**