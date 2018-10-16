---
title: The Python Range
localeTitle: O intervalo do Python
---
## Faixas Python

Em vez de ser uma função, um intervalo é, na verdade, um [tipo de sequência imutável](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types) e é comumente usado para fazer um loop de um número específico de vezes em loops forçados.

**Criação:**

`ranges` são criados usando o construtor de `range` . Os parâmetros para o construtor são:

*   `start` : o primeiro valor inclusivo do intervalo (inteiro opcional, o padrão é 0).
*   `stop` : Valor de parada exclusivo, o intervalo é interrompido quando esse valor ou maior for fornecido (inteiro obrigatório).
*   `step` : A quantia adicionada ao valor atual para obter o próximo valor (inteiro opcional, o padrão é 1).

```python
>>> range(10)          # Only the stop parameter is required. 
 range(0, 10) 
 >>> range(0, 10)       # Default for start parameter is 0. 
 range(0, 10) 
 >>> range(0, 10, 1)    # Default for step is 1\. Start parameter is required if 
 step is needed. 
 range(0, 10) 
```

**Exemplos:**

Como os `ranges` são iteráveis, eles podem ser passados ​​para a `list` e os construtores da `tuple` para criar esses tipos de sequências. Usando esse fato, podemos visualizar alguns exemplos:

```python
>>> list(range(10))     # range as argument for list constructor. 
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
 >>> tuple(range(10))    # range as argument for tuple constructor. 
 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) 
```

`ranges` comprimento zero:

```python
>>> list(range(10, 0))        # start greater than stop with postive step. 
 [] 
 >>> list(range(10, 10))       # start equal to stop with postive step. 
 [] 
 >>> list(range(10, 10, -1))   # start equal to stop with negative step. 
 [] 
 >>> list(range(0, 10, -1))    # start less than stop with negative step. 
 [] 
```

`ranges` com argumentos de passo:

```python
>>> list(range(0, 10, 2))       # next value would be 10, stops at 8. 
 [0, 2, 4, 6, 8] 
 >>> list(range(0, 10, 3))       # next value would be 12, stops at 9. 
 [0, 3, 6, 9] 
 >>> list(range(0, 10, 4))       # next value would be 12, stops at 8. 
 [0, 4, 8] 
 >>> list(range(10, 0, -1))      # negative step makes decreasing ranges. 
 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 
 >>> list(range(-5, -30, -3))    # negative integers are valid arguments. 
 [-5, -8, -11, -14, -17, -20, -23, -26, -29] 
```

**Benefícios:**

O benefício de usar o `range` é que, independentemente do tamanho de um intervalo especificado, apenas uma pequena quantidade de memória é necessária para armazenar o `range` , os valores para iniciar, parar e etapa. Os valores individuais dos `ranges` são calculados após a iteração.

```python
>>> import sys 
 >>> a_range = range(1000000) 
 >>> a_list = list(a_range) 
 >>> a_tuple = tuple(a_range) 
 >>> sys.getsizeof(a_range) 
 48 
 >>> sys.getsizeof(a_list) 
 9000112 
 >>> sys.getsizeof(a_tuple) 
 8000048 
```

### Mais Inforamtion:

[Python Doc - Ranges](https://docs.python.org/3/library/stdtypes.html#ranges)

**TODO: os `ranges` métodos executam e não implementam**