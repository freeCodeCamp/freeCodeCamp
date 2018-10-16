---
title: Learn About Ruby Numbers
localeTitle: 了解Ruby Numbers
---
### 基本：

*   Ruby有两类数字 - 整数和浮点数（也称为浮点数）。
*   整数是可以是正数或负数的整数，但不能是分数。
*   根据它们的大小，整数可以具有`Fixnum`或`Bignum`类。
*   浮点数是带小数位的数字。

## 例子：
```
x = 5.5 
 x.class 
 # returns 
 Float 
 
 x = 5 
 x.class 
 # returns 
 Fixnum 
 
 x = 11122233344455566677 
 x.class 
 # returns 
 Bignum # basically, Bignum is a very large number 
 # <a href='http://ruby-doc.org/core-2.0.0/Bignum.html' target='_blank' rel='nofollow'>read this article for more info</a> 
```

## 参考文献：

*   [整数的官方Ruby文档](http://ruby-doc.org/core-2.2.0/Integer.html) 。
*   [浮动的官方Ruby文档](http://ruby-doc.org/core-2.2.0/Float.html) 。