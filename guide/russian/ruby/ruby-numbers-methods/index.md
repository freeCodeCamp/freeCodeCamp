---
title: Ruby Number Methods
localeTitle: Методы номера Ruby
---
Ruby предоставляет множество встроенных методов, которые вы можете использовать для чисел. Ниже приведен неполный список методов [integer](https://ruby-doc.org/core-2.2.0/Integer.html) и [float](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) .

## [Даже](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F) :

Использовать `.even?` для проверки четности [**целого числа**](https://ruby-doc.org/core-2.2.0/Integer.html) . Возвращает `true` или `false` **boolean** .

```Ruby
    15.even? #=> false 
    4.even?  #=> true 
```

## [Нечетный](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F) :

Использовать `.odd?` чтобы проверить, является ли [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) нечетным. Возвращает `true` или `false` **boolean** .

```Ruby
    15.odd? #=> true 
    4.odd?  #=> false 
```

## [Ceil](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) :

`.ceil` метода `.ceil` [**плавают**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **до** ближайшего числа. Возвращает [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    8.3.ceil #=> 9 
    6.7.ceil #=> 7 
```

## [Этаж](https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor) :

В `.floor` метод раундов [**плавает**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **вниз** до ближайшего числа. Возвращает [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    8.3.floor #=> 8 
    6.7.floor #=> 6 
```

## [Далее](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next) :

Используйте `.next` чтобы вернуть следующее последовательное [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    15.next #=> 16 
    2.next  #=> 3 
    -4.next #=> -3 
```

## [Pred](https://ruby-doc.org/core-1.8.7/Integer.html#method-i-pred) :

Используйте `.pred` для возврата предыдущего последовательного [**целого**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    15.pred #=> 14 
    2.pred  #=> 1 
    (-4).pred #=> -5 
```

## [Строка](https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s) :

Использование `.to_s` для числа ( [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) , [**float**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) и т. Д.) Возвращает [строку](https://ruby-doc.org/core-2.2.0/String.html) этого числа.

```Ruby
    15.to_s  #=> "15" 
    3.4.to_s #=> "3.4" 
```

## [Самый большой общий знаменатель](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd) :

Метод `.gcd` обеспечивает наибольший общий делитель (всегда положительный) двух чисел. Возвращает [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) .

```Ruby
    15.gcd(5) #=> 5 
    3.gcd(-7) #=> 1 
```

## [Раунд](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-round) :

Используйте `.round` чтобы вернуть округленное [**целое число**](https://ruby-doc.org/core-2.2.0/Integer.html) или [**float**](https://ruby-doc.org/core-2.2.0/Float.html) .

```Ruby
    1.round        #=> 1 
    1.round(2)     #=> 1.0 
    15.round(-1)   #=> 20 
```

## [Время](http://ruby-doc.org/core-2.2.0/Integer.html#method-i-times) :

Используйте `.times` для итерации заданного блока `int` times.

```Ruby
    5.times do |i| 
      print i, " " 
    end 
    #=> 0 1 2 3 4 

```