---
title: Functions in R
localeTitle: R中的功能
---
函数允许您定义可在程序中多次执行的可重用代码块。

函数可以重复命名和调用，也可以匿名运行（类似于python中的lambda函数）。

充分了解R功能需要了解环境。 环境只是管理对象的一种方式。实际环境的一个示例是您可以使用冗余变量 函数中的名称，如果较大的运行时已具有相同的变量，则不会受到影响。另外，如果一个 函数调用函数中未定义的变量，它将检查该变量的更高级别环境。

### 句法

在R中，函数定义具有以下特征：

1.  关键字`function`
2.  一个功能名称
3.  输入参数（可选）
4.  一些要执行的代码块
5.  返回语句（可选）

```{r}
# a function with no parameters or returned values 
 sayHello() = function(){ 
  "Hello!" 
 } 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 helloWithName = function(name){ 
  paste0("Hello, ", name, "!") 
 } 
 
 helloWithName("Ada")  # calls the function, 'Hello, Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 multiply = function(val1, val2){ 
  val1 * val2 
 } 
 
 multiply(3, 5)  # prints 15 to the console 
```

函数是代码块，只需调用函数即可重用。这使得简单，重复的代码重用成为可能，而无需显式重写代码段。这使代码更易读，使调试更容易，并限制输入错误。

R中的`function`使用`function`关键字以及括号内的函数名和函数参数创建。

函数可以使用`return()`函数返回一个值，通常用于强制提前终止带有返回值的函数。 或者，该函数将返回最终打印值。

```{r}
# return a value explicitly or simply by printing 
 sum = function(a, b){ 
  c = a + b 
  return(c) 
 } 
 
 sum = function(a, b){ 
  a + b 
 } 
 
 
 result = sum(1, 2) 
 # result = 3 
```

您还可以定义参数的默认值，当函数调用期间未指定变量时，R将使用这些值。

```{r}
sum = function(a, b = 3){ 
  a + b 
 } 
 
 result = sum(a = 1) 
 # result = 4 
```

您还可以使用参数名称按所需顺序传递参数。

```{r}
result = sum(b=2, a=2) 
 # result = 4 
```

R还可以使用'...'接受其他可选参数

```{r}
sum = function(a, b, ...){ 
  a + b + ... 
 } 
 
 sum(1, 2, 3) #returns 6 
```

功能也可以匿名运行。这些与'apply'系列函数结合使用非常有用。

```{r}
# loop through 1, 2, 3 - add 1 to each 
 sapply(1:3, 
       function(i){ 
         i + 1 
         }) 
```

### 笔记

*   如果函数定义包含未指定缺省值的参数，则必须包含这些值的值。
    
    ```{r}
    sum = function(a, b = 3){ 
     a + b 
     } 
     
     sum(b = 2) # Error in sum(b = 2) : argument "a" is missing, with no default 
    
    ```
    
*   函数中定义的变量仅存在于该函数的范围内，但如果未指定变量，则将检查更大的环境
    
    ```{r}
    double = function(a){ 
     a * 2 
     } 
     
     double(x)  # Error in double(x) : object 'x' not found 
     
     
     double = function(){ 
     a * 2 
     } 
     
     a = 3 
     double() # 6 
    
    ```
    

## R中的内置函数

*   R带有许多功能，可用于执行随机等复杂任务 采样。
    
*   例如，您可以使用`round()`对数字进行`round()` ，或者计算 它与`factorial()`的`factorial()` 。
    

```r
> round(4.147) 
 [1] 4 
 > factorial(3) 
 [1] 6 
 > round(mean(1:6)) 
 [1] 4 
```

*   传递给函数的数据称为函数的参数。
    
*   您可以使用R的`sample()`函数模拟一卷模具。 `sample()`函数有两个参数：一个名为x的向量和一个名为size的数字。例如：
    

```r
> sample(x = 1:4, size = 2) 
 [] 4 2 
 > sample(x = die, size = 1) 
 [] 3 
 >dice <- sample(die, size = 2, replace = TRUE) 
 >dice 
 [1] 2 4 
 >sum(dice) 
 [1] 6 
```

*   如果您不确定要将哪个名称用于某个函数，则可以查找该函数 与args的争论。

```r
> args(round) 
 [1] function(x, digits=0) 
```

## 资源

[官方文件](https://cran.r-project.org/manuals.html) [快速-R](https://www.statmethods.net/management/functions.html) [CRAN](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Functions) [高级R：功能](http://adv-r.had.co.nz/Functions.html)