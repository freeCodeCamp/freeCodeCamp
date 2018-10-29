---
title: Exponentiation
localeTitle: Возведение
---
## Возведение

Для двух целых чисел a и n, напишите функцию для вычисления a ^ n.

#### Код

Алгоритмическая парадигма: разделите и покорите.

```C
int power(int x, unsigned int y) { 
    if (y == 0) 
        return 1; 
    else if (y%2 == 0) 
        return power(x, y/2)*power(x, y/2); 
    else 
        return x*power(x, y/2)*power(x, y/2); 
 } 
```

Сложность времени: O (n) | Космическая сложность: O (1)

#### Оптимизированное решение: O (logn)

```C
int power(int x, unsigned int y) { 
    int temp; 
    if( y == 0) 
        return 1; 
    temp = power(x, y/2); 
    if (y%2 == 0) 
        return temp*temp; 
    else 
        return x*temp*temp; 
 } 
```

## Модульное возведение в степень

Учитывая три числа x, y и p, вычислить (x ^ y)% p

```C
int power(int x, unsigned int y, int p) { 
    int res = 1; 
    x = x % p; 
    while (y > 0) { 
        if (y & 1) 
            res = (res*x) % p; 
 
        // y must be even now 
        y = y>>1; 
        x = (x*x) % p; 
    } 
    return res; 
 } 
```

Сложность времени: O (Log y).