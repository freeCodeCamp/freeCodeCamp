---
title: String Split Method
localeTitle: Método de divisão de string
---
A função `split()` é comumente usada para divisão de strings em Python.

#### O método `split()`

Predefinição: `string.split(separator, maxsplit)`

`separator` : a cadeia do delimitador. Você divide a string com base nesse caractere. Por exemplo Poderia ser " ", ":", ";" etc

`maxsplit` : O número de vezes para dividir a string com base no `separator` . Se não for especificado ou -1, a string será dividida com base em todas as ocorrências do `separator`

Este método retorna uma lista de substrings delimitadas pelo `separator`

#### Exemplos

1) Dividir string no espaço: ""

```python
string = "freeCodeCamp is fun." 
 print(string.split(" ")) 
```

Saída:

```python
['freeCodeCamp', 'is', 'fun.'] 
```

2) Dividir string na vírgula: ","

```python
string = "freeCodeCamp,is fun, and informative" 
 print(string.split(",")) 
```

Saída:

```python
['freeCodeCamp', 'is fun', ' and informative'] 
```

3) Nenhum `separator` especificado

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split()) 
```

Saída:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

Nota: Se nenhum `separator` for especificado, a cadeia será despojada de **todo** espaço em branco

```python
string = "freeCodeCamp        is     fun and    informative" 
 print(string.split()) 
```

Saída:

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

3) Dividir string usando `maxsplit` . Aqui dividimos a string "" duas vezes:

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split(" ", 2)) 
```

Saída:

```python
['freeCodeCamp', 'is', 'fun and informative'] 
```

#### Mais Informações

Confira os [documentos](https://docs.python.org/2/library/stdtypes.html#str.split) do [Python sobre a divisão de strings](https://docs.python.org/2/library/stdtypes.html#str.split)