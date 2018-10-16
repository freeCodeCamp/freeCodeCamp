---
title: Exponentiation
localeTitle: Exposiciónción
---
## Exposiciónción

Dados dos enteros a y n, escribe una función para calcular a ^ n.

#### Código

Paradigma algorítmico: Divide y vencerás.

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

Complejidad del tiempo: O (n) | Complejidad del espacio: O (1)

#### Solución optimizada: O (logn)

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

## Exponentiación modular

Dados tres números x, yyp, calculamos (x ^ y)% p

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

Complejidad del tiempo: O (Log y).