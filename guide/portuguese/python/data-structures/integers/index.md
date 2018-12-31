---
title: Python Integers
localeTitle: Inteiros em Python
---
O domínio teórico para números inteiros (integers) em Python vai de infinito negativo até o infinito. Na prática, os valores inteiros são limitados pela quantidade de memória disponível.

No Python 2, havia uma distinção entre números que se encaixam em números _longos_( **`long`**) e **`int`**, de 32 ou 64 bits, limitados pela memória disponível. O Python 3 unificou os dois tipos em apenas **`int`** . Mais informações no [PEP 237](https://www.python.org/dev/peps/pep-0237/) .

**criando `int` usando literais inteiros**

[Literais Inteiros](https://docs.python.org/3/reference/lexical_analysis.html#integer-literals)

_Objetos inteiros_ podem ser criados usando literais inteiros. Números sem adornos e sem decimais são literais inteiros:
```
>>> 1234567890           # Números sem adornos são literais inteiros 
 1234567890 
 >>> type(1234567890) 
 <class 'int'> 
```

Literais numéricos não contêm um sinal. No entanto, é possível criar _objetos inteiros_ negativos prefixando com um operador `-` (menos) sem espaço antes do literal:
```
>>> -1234567890 
 -1234567890 
 >>> type(-1234567890) 
 <class 'int'> 
```

Da mesma forma, objetos inteiros positivos podem ser criados prefixando um operador `+` (mais) sem espaço antes dos dígitos. Normalmente o  `+` é omitido:
```
>>> +1234 
 1234 
```

Os números inteiros binários (base 2, prefixo: `0b` ou `0B` ), octais (base 8, prefixo: `0o` ou `0O` ) e hexadecimais (base 16, prefixo: `0x` ou `0X` ) também podem ser criados usando literais inteiros:
```
>>> 0b1, 0b10, 0b11 
 (1, 2, 3) 
 >>> 0o1, 0o10, 0o11 
 (1, 8, 9) 
 >>> 0x1, 0x10, 0x11 
 (1, 16, 17) 
```

Observe que os 0s iniciais para literais inteiros diferentes de zero **não** são **permitidos**:
```
>>> 0     # Zero sozinho está certo. 
 0 
 >>> 01    # Zero antecedendo o inteiro causa SyntaxError. 
  File "<stdin>", line 1 
    01 
     ^ 
 SyntaxError: invalid token 
```

O [construtor](https://docs.python.org/3/library/functions.html#int) `int` é outra maneira de criar _objetos inteiros_ .
```
class int(x=0) 
 class int(x, base=10) 
```

Criar _objetos inteiros_ com literais inteiros é preferível quando possível:
```
>>> a = 1         # Prefira literais inteiros sempre que possível. 
 >>> type(a) 
 <class 'int'> 
 >>> b = int(1)    # Funciona, mas é desnecessário. 
 >>> type(b) 
 <class 'int'> 
```

No entanto, o construtor permite criar _objetos inteiros_ de outros tipos de números:
```
>>> a = 1.123 
 >>> type(a) 
 <class 'float'> 
 >>> print(a) 
 1.123 
 >>> b = int(1.123) 
 >>> type(b) 
 <class 'int'> 
 >>> print(b) 
 1 
```

Usando o construtor `int` para números de ponto flutuante (`float`) arredondará o número em direção a zero:
```
>>> int(-1.23) 
 -1 
 >>> int(1.23) 
 1 
```

As constantes `boolean` internas são instâncias da classe `bool` e são subclasses da classe `int` , tornando-as uma espécie de tipo numérico:
```
>>> type(True) 
 <class 'bool'> 
 >>> issubclass(bool, int) 
 True 
```

Se isso não faz sentido para você, não se preocupe. Por enquanto, lembre-se de que chamar o construtor int com objetos `boolean` retornará _objetos inteiros_ :
```
>>> int(True) 
 1 
 >>> int(False) 
 0 
```

O construtor `int` também fará _objetos inteiros_ a partir de strings:
```
>>> a = "10" 
 >>> type(a) 
 <class 'str'> 
 >>> b = int("10") 
 >>> type(b) 
 <class 'int'> 
```

As _Strings_ para o construtor `int` devem representar um literal inteiro:

O segundo parâmetro do construtor `int` é especificar uma base (padrão: 10). Bases válidas são 0 e 2-36.

Se uma base explícita for fornecida, o primeiro argumento deve ser uma `string`.
```
>>> int("111", 2) 
 7 
 >>> int(111, 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: int() can't convert non-string with explicit base 
```

A `string` usada para o construtor `int` com uma base explícita deve ser um literal inteiro válido para essa base:
```
>>> int('11', 2) 
 3 
 >>> int('12', 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: invalid literal for int() with base 2: '12' 
```

Ambas as sequências prefixadas e não prefixadas de literais inteiros podem ser usadas. No entanto, se usadas, o prefixo deve corresponder à base fornecida:
```
>>> int('1101', 2) 
 13 
 >>> int('0b1101', 2) 
 13 
 >>> int('0x1101', 2) 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: invalid literal for int() with base 2: '0x1101' 
```

Se uma seqüência de caracteres prefixada e base 0 for usada, o objeto inteiro criado usará a base especificada pelo prefixo. Se nenhum prefixo for usado, então a base assumida é 10:
```
>>> int('100', 0) 
 100 
 >>> int('0b100', 0) 
 4 
 >>> int('0o100', 0) 
 64 

```
