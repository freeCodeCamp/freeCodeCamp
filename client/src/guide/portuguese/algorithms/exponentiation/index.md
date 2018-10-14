---
title: Exponentiation
localeTitle: Exponenciação
---
## Exponenciação

Dados dois inteiros a e n, escreva uma função para calcular um ^ n.

#### Código

Paradigma Algorítmico: Divida e conquiste.

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

Complexidade do Tempo: O (n) | Complexidade Espacial: O (1)

#### Solução otimizada: O (logn)

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

## Exponenciação Modular

Dados três números x, y e p, compute (x ^ y)% p

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

Complexidade do Tempo: O (Log y).