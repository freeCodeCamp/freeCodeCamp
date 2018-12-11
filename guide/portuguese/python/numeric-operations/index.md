---
title: Python Numeric Operations
localeTitle: Operações Numéricas em Python
---
[Python Docs - Operações Numéricas](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

O Python suporta totalmente a aritmética mista: quando um operador aritmético binário possui operandos de diferentes tipos numéricos, o operando com o tipo "mais restrito" é ampliado para o outro, onde o inteiro é mais estreito que o ponto flutuante, que é mais estreito que complexo. Comparações entre números de tipos mistos usam a mesma regra. [2\] Os construtores int (), float () e complex () podem ser usados ​​para produzir números de um tipo específico.](https://docs.python.org/3/library/functions.html#abs)

Todos os tipos numéricos (exceto complexos) suportam as seguintes operações, classificadas por prioridade crescente (todas as operações numéricas têm uma prioridade mais alta que as operações de comparação):

Operação | Resultados | Notas | Documentação completa  
\----------------- | -------------------------------------------------- ------------------------- | ------ | -------------------------------------------------- ---------------------  
`x + y` | soma de x e y | |  
`x - y` | diferença de x e y | |  
`x * y` | produto de xey | |  
`x / y` | quociente de xey | |  
`x // y` | quociente com piso de xey | (1) |  
`x % y` | restante de x / y | (2)  
`-x` | x negado | |  
`+x` | x inalterado | |  
`abs(x)` | valor absoluto ou magnitude de x | | \[ `abs()`  
`int(x)` | x convertido em inteiro | (3) (6) | [`int()`](https://docs.python.org/3/library/functions.html#int)  
`float(x)` | x convertido em ponto flutuante | (4) (6) | [`float()`](https://docs.python.org/3/library/functions.html#float)  
`complex(re, im)` | um número complexo com parte real re, parte imaginária im. im padrão é zero. | (6) | [`complex()`](https://docs.python.org/3/library/functions.html#complex)  
`c.conjugate()` | conjugado do número complexo c | |  
`divmod(x, y)` | o par (x // y, x% y) | (2) | [`divmod()`](https://docs.python.org/3/library/functions.html#divmod)  
`pow(x, y)` | x para o poder y | (5) | [`pow()`](https://docs.python.org/3/library/functions.html#pow)  
`x ** y` | x para o poder y | (5)

**Notas:**

1.  Também referido como divisão inteira. O valor resultante é um inteiro inteiro, embora o tipo do resultado não seja necessariamente int. O resultado é sempre arredondado para menos infinito: `1//2` é `0` , `(-1)//2` é `-1` , `1//(-2)` é `-1` e `(-1)//(-2)` é `0`
    
2.  Não para números complexos. Em vez disso, converta para carros alegóricos usando `abs()` se apropriado.
    
3.  Conversão de ponto flutuante para inteiro pode arredondar ou truncar como em C; veja as funções [`math.floor()`](https://docs.python.org/3/library/math.html#math.floor) e [`math.ceil()`](https://docs.python.org/3/library/math.html#math.ceil) para conversões bem definidas.
    
4.  `float` também aceita as strings `“nan”` e `“inf”` com um prefixo opcional `“+”` ou `“-”` para Não um número (NaN) e infinito positivo ou negativo.
    
5.  O Python define `pow(0, 0)` e `0 ** 0` como `1` , como é comum em linguagens de programação.
    
6.  Os literais numéricos aceitos incluem os dígitos de 0 a 9 ou qualquer equivalente Unicode (pontos de código com a propriedade `Nd` ).
    

> Veja [Tipo Numérico Derivado de Unicode](http://www.unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt) para uma lista completa de pontos de código com a propriedade `Nd` .