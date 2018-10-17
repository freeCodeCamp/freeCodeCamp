---
title: Python Floating Point Numbers
localeTitle: Числа с плавающей запятой Python
---
Некоторая общая информация о числах с плавающей запятой и о том, как они работают на Python, можно найти [здесь](https://docs.python.org/3/tutorial/floatingpoint.html) .

Почти все реализации Python соответствуют спецификации IEEE 754: стандарт для двоичной арифметики с плавающей запятой. Более подробная информация содержится на сайте [IEEE](http://grouper.ieee.org/groups/754/) .

Объекты Float могут быть созданы с использованием [литералов](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals) с [плавающей запятой](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals) :
```
>>> 3.14 
 3.14 
 >>> 314\.    # Trailing zero(s) not required. 
 314.0 
 >>> .314    # Leading zero(s) not required. 
 0.314 
 >>> 3e0 
 3.0 
 >>> 3E0     # 'e' or 'E' can be used. 
 3.0 
 >>> 3e1     # Positive value after e moves the decimal to the right. 
 30.0 
 >>> 3e-1    # Negative value after e moves the decimal to the left. 
 0.3 
 >>> 3.14e+2 # '+' not required but can be used for exponent part. 
 314.0 
```

Числовые литералы не содержат знак, однако создания негативных объектов с плавающей точкой можно предваряя с одноместный `-` (минус) оператором без пробела перед буквальным
```
>>> -3.141592653589793 
 -3.141592653589793 
 >>> type(-3.141592653589793) 
 <class 'float'> 
```

Аналогично, позитивные объекты с плавающей запятой могут иметь префикс унарного `+ (` плюс) оператора без пробела перед литералом. Обычно `+` опущен:
```
>>> +3.141592653589793 
 3.141592653589793 
```

Обратите внимание, что начальный и конечный ноль (ы) действительны для литералов с плавающей запятой
```
>>> 0.0 
 0.0 
 >>> 00.00 
 0.0 
 >>> 00100.00100 
 100.001 
 >>> 001e0010      # Same as 1e10 
 10000000000.0 
```

Конструктор [`float`](https://docs.python.org/3/library/functions.html#float) - это еще один способ создания `float` объектов.

При необходимости предпочтительнее `float` объекты с плавающей точкой с литералами с плавающей запятой:
```
>>> a = 3.14         # Prefer floating point literal when possible. 
 >>> type(a) 
 <class 'float'> 
 >>> b = int(3.14)    # Works but unnecessary. 
 >>> type(b) 
 <class 'float'> 
```

Однако конструктор float позволяет создавать объекты float из других типов номеров:
```
>>> a = 4 
 >>> type(a) 
 <class 'int'> 
 >>> print(a) 
 4 
 >>> b = float(4) 
 >>> type(b) 
 <class 'float'> 
 >>> print(b) 
 4.0 
 >>> float(400000000000000000000000000000000) 
 4e+32 
 >>> float(.00000000000000000000000000000004) 
 4e-32 
 >>> float(True) 
 1.0 
 >>> float(False) 
 0.0 
```

Конструктор `float` также будет создавать объекты `float` из строк, которые представляют числовые литералы:
```
>>> float('1') 
 1.0 
 >>> float('.1') 
 0.1 
 >>> float('3.') 
 3.0 
 >>> float('1e-3') 
 0.001 
 >>> float('3.14') 
 3.14 
 >>> float('-.15e-2') 
 -0.0015 
```

Конструктор `float` также может использоваться для создания числового представления `NaN` (Not a Number), отрицательной `infinity` и `infinity` (строки примечаний для них нечувствительны к регистру):
```
>>> float('nan') 
 nan 
 >>> float('inf') 
 inf 
 >>> float('-inf') 
 -inf 
 >>> float('infinity') 
 inf 
 >>> float('-infinity') 
 -inf 

```