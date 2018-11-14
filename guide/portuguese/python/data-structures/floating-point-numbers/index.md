---
title: Python Floating Point Numbers
localeTitle: Números de pontos flutuantes em Python
---
Algumas informações gerais sobre números de ponto flutuante e como elas funcionam em Python podem ser encontradas [aqui](https://docs.python.org/3/tutorial/floatingpoint.html) .

Quase todas as implementações do Python seguem a especificação IEEE 754: Standard para aritmética binária de ponto flutuante. Mais informações encontradas no [site](http://grouper.ieee.org/groups/754/) do [IEEE](http://grouper.ieee.org/groups/754/) .

Objetos flutuantes podem ser criados usando o uso de [literais de ponto flutuante](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals) :
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

Literais numéricos não contêm um sinal, no entanto, criar objetos float negativos é possível prefixando com um operador unário `-` (menos) sem espaço antes do literal
```
>>> -3.141592653589793 
 -3.141592653589793 
 >>> type(-3.141592653589793) 
 <class 'float'> 
```

Da mesma forma, objetos float positivos podem ser prefixados com um operador unário `+ (` mais) sem espaço antes do literal. Geralmente `+` é omitido:
```
>>> +3.141592653589793 
 3.141592653589793 
```

Observe que zero (s) inicial e final (es) são válidos para literais de ponto flutuante
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

O [construtor `float`](https://docs.python.org/3/library/functions.html#float) é outra maneira de criar objetos `float` .

Criando `float` objectos com literais de ponto flutuante é preferido quando possível:
```
>>> a = 3.14         # Prefer floating point literal when possible. 
 >>> type(a) 
 <class 'float'> 
 >>> b = int(3.14)    # Works but unnecessary. 
 >>> type(b) 
 <class 'float'> 
```

No entanto, o construtor float permite criar objetos float de outros tipos de números:
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

O construtor `float` também fará objetos `float` de strings que representam literais numéricos:
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

O construtor `float` também pode ser usado para fazer uma representação numérica de `NaN` (Não um Número), `infinity` negativo e `infinity` (cadeias de notas para estas são insensíveis a maiúsculas e minúsculas):
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