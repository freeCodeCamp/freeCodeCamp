---
title: Data Types in R
localeTitle: R中的数据类型
--- ## 标量

标量是指一次只能容纳一个值的原子量。标量是最基本的数据类型。一些常见类型的标量：

1.  数
    
    > x < - 5 y < - 5.5 类（x）的 \[1\]“数字” 类（y）的 \[1\]“数字” 类（X + Y） \[1\]“数字”
    
2.  逻辑价值
    
    > m < - x> y＃用于检查，x是否大于y？ n < - x <y＃用于检查，x是否小于y？ 米 \[1\]错误 ñ \[1\]是的 类（M） \[1\]“逻辑” class（NA）#NA是另一个逻辑值：'Not Available'/ Missing Values \[1\]“逻辑”
    
3.  字符（串）
    
    > a < - “1”; b < - “2.5” A; B \[1\]“1” \[1\]“2.5” A + B a + b中的错误：二元运算符的非数字参数 （A）类 \[1\]“人物” 类（as.numeric（a））的 \[1\]“数字” 类（as.character（X）） \[1\]“人物”
    

## 向量

它是相同基本类型的数据元素序列。例如：
```
> o <- c(1,2,5.3,6,-2,4)                                 # Numeric vector 
 > p <- c("one","two","three","four","five","six")        # Character vector 
 > q <- c(TRUE,TRUE,FALSE,TRUE,FALSE,TRUE)                # Logical vector 
 > o;p;q 
 [1]  1.0  2.0  5.3  6.0 -2.0  4.0 
 [1] "one"   "two"   "three" "four"  "five"  "six" 
 [1]  TRUE  TRUE FALSE  TRUE FALSE 
```

## 矩阵

它是一个二维矩形数据集。矩阵中的分量也必须与矢量具有相同的基本类型。例如：
```
> m = matrix( c('a','a','b','c','b','a'), nrow = 2, ncol = 3, byrow = TRUE) 
 > m 
 >[,1] [,2] [,3] 
 [1,] "a"  "a"  "b" 
 [2,] "c"  "b"  "a" 
```

## 数据框架

它比矩阵更通用，因为不同的列可以具有不同的基本数据类型。例如：
```
> d <- c(1,2,3,4) 
 > e <- c("red", "white", "red", NA) 
 > f <- c(TRUE,TRUE,TRUE,FALSE) 
 > mydata <- data.frame(d,e,f) 
 > names(mydata) <- c("ID","Color","Passed") 
 > mydata 
 
   ID Color Passed 
 1  1   red   TRUE 
 2  2 white   TRUE 
 3  3   red   TRUE 
 4  4  <NA>  FALSE 
```

## 清单

它是一个R对象，它可以在其中包含许多不同类型的元素，如向量，函数甚至其中的另一个列表。例如：
```
> list1 <- list(c(2,5,3),21.3,sin) 
 > list1 
 [[1]] 
 [1] 2 5 3 
 [[2]] 
 [1] 21.3 
 [[3]] 
 function (x)  .Primitive("sin") 
```

## 参考：

[官方文件](https://cran.r-project.org/manuals.html) [R博主的R中的数据类型](https://www.r-bloggers.com/classes-and-objects-in-r/)