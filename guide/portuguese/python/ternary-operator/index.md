---
title: Python Ternary Operater
localeTitle: Operador Ternário Python
---
# Operador ternário em Python

Operações ternárias no Python, muitas vezes também chamadas de expressões condicionais, permitem ao programador realizar uma avaliação e retornar um valor baseado na verdade da condição dada.

O operador ternário difere de um padrão `if` , `else` , `elif` estrutura no sentido de que não é uma estrutura de fluxo de controle, e se comporta mais como outros operadores como `==` ou `!=` Na linguagem Python.

### Exemplo

Neste exemplo, a string `Even` é retornada se a variável `val` for par, caso contrário, a string `Odd` será retornada. A string retornada é então atribuída à variável `is_even` e impressa no console.

#### Entrada

```python
for val in range(1, 11): 
    is_even = "Even" if val % 2 == 0 else "Odd" 
    print(val, is_even, sep=' = ') 
```

#### Saída
```
1 = Odd 
 2 = Even 
 3 = Odd 
 4 = Even 
 5 = Odd 
 6 = Even 
 7 = Odd 
 8 = Even 
 9 = Odd 
 10 = Even 
```

### Fontes

https://docs.python.org/2.5/whatsnew/pep-308.html