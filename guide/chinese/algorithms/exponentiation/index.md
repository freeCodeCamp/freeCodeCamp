---
title: Exponentiation
localeTitle: 幂
---
## 幂

给定两个整数a和n，写一个函数来计算^ n。

#### 码

算法范式：分而治之。

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

时间复杂度：O（n）|空间复杂度：O（1）

#### 优化的解决方案：O（logn）

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

## 模块化指数

给定三个数字x，y和p，计算（x ^ y）％p

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

时间复杂度：O（Log y）。