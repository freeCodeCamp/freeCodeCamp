---
title: bitwise operator example
localeTitle: 按位运算符示例
---
# 按位运算符

## 真相表

![truth table](https://4.bp.blogspot.com/-0KPDI41veH0/V-OtObm_UWI/AAAAAAAAAso/CkTS0zUMGKIjlE3gUD0fMhmp-B0zcfBmACLcB/s1600/Bitwise-truthtable-Javaform.jpg "真相表")

按位运算符与逻辑运算符类似，不同之处在于它们的工作规模较小 - 数据的二进制表示。任何数据都可以转换为二进制等价物。虽然二元运算符在二进制级别工作，但它们仅在正常的十进制值之间运行。

## 按位运算符的类型

### 按位OR

按位OR是二元运算符（对两个操作数进行操作）。它用|表示。 |运算符比较两个操作数的相应位。如果其中一个位为1，则给出1.如果不是，则给出0。

### 按位AND

按位AND是二元运算符（对两个操作数进行操作）。用＆表示。 ＆运算符比较两个操作数的相应位。如果两个位都是1，则它给出1.如果其中一个位不是1，则它给出0。

### 按位补充

按位补码是一元运算符（仅适用于一个操作数）。它用〜表示。 〜运算符反转位模式。它使每0到1，每1到0。

### 按位异或

Bitwise XOR是一个二元运算符（在两个操作数上运行）。它用^表示。 ^运算符比较两个操作数的相应位。如果相应的位不同，则给出1.如果相应的位相同，则给出0。

### 左移

左移位运算符<<将位模式向左移位一定数量的指定位，并且零位移位到低位位置。

### 右转

右移位运算符>>将位模式向右移位一定数量的指定位。如果该数字是2的补码有符号数，则符号位移入高位位置。

### 无符号右移

无符号右移运算符>>>将零移至最左侧位置。

### 示例按位运算符：

```java
    int a = 60;          /* 60 = 0011 1100 represents 60 in binary*/ 
    int b = 13;          /* 13 = 0000 1101 */ 
    int c = 0; 
 
    c = a & b;        /* 12 = 0000 1100 */ 
    c = a | b;        /* 61 = 0011 1101 */ 
    c = a ^ b;        /* 49 = 0011 0001 */ 
    c = ~a;           /*-61 = 1100 0011  :Invert all bits */ 
 
    // shift operators : zeros are shifted in to replace the discarded bits 
    c = a << 2;       /* 240 = 1111 0000 : Shift left 2 bits*/ 
    c = a >> 2;       /* 15 = 1111 */ 
    c = a >>> 2;      /* 15 = 0000 1111 : Zero fill right shift*/ 
```

**有关更多信息：请** [单击此处](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html)