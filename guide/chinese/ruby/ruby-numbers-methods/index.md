---
title: Ruby Number Methods
localeTitle: Ruby编号方法
---
Ruby提供了各种可用于数字的内置方法。以下是[整数](https://ruby-doc.org/core-2.2.0/Integer.html)和[浮点](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil)方法的不完整列表。

## [甚至](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F) ：

使用`.even?`检查[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html)是否是偶数。返回`true`或`false` **布尔值** 。

```Ruby
    15.even? #=> false 
    4.even?  #=> true 
```

## [奇怪的](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F) ：

使用`.odd?`检查[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html)是否为奇数。返回`true`或`false` **布尔值** 。

```Ruby
    15.odd? #=> true 
    4.odd?  #=> false 
```

## [Ceil](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) ：

该`.ceil`方法几轮[**漂浮**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **到**最近的数。返回一个[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html) 。

```Ruby
    8.3.ceil #=> 9 
    6.7.ceil #=> 7 
```

## [楼层](https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor) ：

`.floor`方法将[**浮点数**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **向下** `.floor`入到最接近的数字。返回一个[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html) 。

```Ruby
    8.3.floor #=> 8 
    6.7.floor #=> 6 
```

## [下一个](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next) ：

使用`.next`返回下一个连续的[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html) 。

```Ruby
    15.next #=> 16 
    2.next  #=> 3 
    -4.next #=> -3 
```

## [Pred](https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred) ：

使用`.pred`返回先前的连续[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html) 。

```Ruby
    15.pred #=> 14 
    2.pred  #=> 1 
    (-4).pred #=> -5 
```

## [字符串](https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s) ：

在数字上使用`.to_s` （ [**整数**](https://ruby-doc.org/core-2.2.0/Integer.html) ， [**浮点数**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil)等）会返回该数字的[字符串](https://ruby-doc.org/core-2.2.0/String.html) 。

```Ruby
    15.to_s  #=> "15" 
    3.4.to_s #=> "3.4" 
```

## [最大的共同点](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd) ：

`.gcd`方法提供两个数字的最大公约数（总是正数）。返回一个[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html) 。

```Ruby
    15.gcd(5) #=> 5 
    3.gcd(-7) #=> 1 
```

## [回合](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round) ：

使用`.round`返回舍入的[**整数**](https://ruby-doc.org/core-2.2.0/Integer.html)或[**浮点数**](https://ruby-doc.org/core-2.2.0/Float.html) 。

```Ruby
    1.round        #=> 1 
    1.round(2)     #=> 1.0 
    15.round(-1)   #=> 20 
```

## [时间](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times) ：

使用`.times`迭代给定的块`int`次。

```Ruby
    5.times do |i| 
      print i, " " 
    end 
    #=> 0 1 2 3 4 

```