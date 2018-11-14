---
title: Python Ord Function
localeTitle: Função Python Ord
---
## Função ord

`ord()` é uma função embutida no Python 3, para converter a string representando um caractere Unicode em inteiro representando o código Unicode do caractere.

#### Exemplos:
```
>>> ord('d') 
 100 
 >>> ord('1') 
 49 
```

## função chr

`chr()` é uma função embutida no Python 3, para converter o inteiro representando o código Unicode em uma string representando um caractere correspondente.

#### Exemplos:
```
>>> chr(49) 
 '1' 
```

Uma coisa é notar que, se o valor inteiro passado para `chr()` estiver fora do intervalo, um ValueError será gerado.
```
>>> chr(-10) 
 'Traceback (most recent call last): 
  File "<pyshell#24>", line 1, in <module> 
    chr(-1) 
 ValueError: chr() arg not in range(0x110000)' 

```