---
title: Learn About Ruby Numbers
localeTitle: Узнайте о номерах Ruby
---
### Основы:

*   Ruby имеет две категории чисел - целые числа и плавающие точки (также называемые float).
*   Целые числа - это целые числа, которые могут быть положительными или отрицательными, но не могут быть дробями.
*   В зависимости от их размера целые числа могут иметь класс `Fixnum` или `Bignum` .
*   Поплавки - это числа с десятичной точкой.

## Примеры:
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

## Рекомендации:

*   [Официальная документация Ruby для целых чисел](http://ruby-doc.org/core-2.2.0/Integer.html) .
*   [Официальная документация Ruby для поплавков](http://ruby-doc.org/core-2.2.0/Float.html) .