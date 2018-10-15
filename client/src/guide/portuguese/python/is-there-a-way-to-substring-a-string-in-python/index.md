---
title: Is There a Way to Substring a String in Python
localeTitle: Existe uma maneira de subtrair uma string em Python
---
## Existe uma maneira de subtrair uma string em Python

O Python oferece muitas maneiras de substring uma string. Muitas vezes é chamado de "corte".

Segue este modelo:

```python
string[start: end: step] 
```

Onde,

`start` : o índice inicial da substring. O caractere nesse índice está incluído na substring. Se _start_ não for incluído, é assumido como igual a 0.

`end` : O índice de finalização da substring. O caractere neste índice _NÃO_ está incluído na substring. Se _end_ não estiver incluído, ou se o valor especificado exceder o tamanho da string, será assumido que é igual ao comprimento da string por padrão.

`step` : Cada caractere de 'passo' após o caractere atual a ser incluído. O valor padrão é 1. Se o valor do _passo_ for omitido, será considerado igual a 1.

#### Modelo

`string[start:end]` : obtém todos os caracteres do _início_ do índice ao _final de 1_

`string[:end]` : obtém todos os caracteres do começo da string até o _fim de 1_

`string[start:]` : Obtém todos os caracteres do _início_ do índice até o final da string

`string[start:end:step]` : obtém todos os caracteres do _início_ ao _fim de 1_ descontando cada caractere de _passo_

#### Exemplos

*   **Obter os primeiros 5 caracteres de uma string**

```python
string = "freeCodeCamp" 
 print(string[0:5]) 
```

Saída:

```shell
> freeC 
```

Nota: `print(string[:5])` retorna o mesmo resultado da `print(string[0:5])`

*   **Obter uma substring de comprimento 4 do terceiro caractere da string**

```python
string = "freeCodeCamp" 
 print(string[2:6]) 
```

Saída:

```shell
> eeCo 
```

Por favor, note que o índice inicial ou final pode ser um número negativo. Um índice negativo significa que você começa a contar a partir do final da string, em vez do início (ou seja, da direita para a esquerda). O índice -1 representa o último caractere da string, -2 representa o segundo ao último caractere e assim por diante ...

*   **Obter o último caractere da string**

```python
string = "freeCodeCamp" 
 print(string[-1]) 
```

Saída:

```shell
> p 
```

*   **Obter os últimos 5 caracteres de uma string**

```python
string = "freeCodeCamp" 
 print(string[-5:]) 
```

Saída:

```shell
> eCamp 
```

*   **Obtém uma substring que contém todos os caracteres, exceto os últimos 4 caracteres e o primeiro caractere**

```python
string = "freeCodeCamp" 
 print(string[1:-4]) 
```

Saída:

```shell
> reeCode 
```

#### Mais exemplos

```py
str = “freeCodeCamp” 
 
 print str[-5:-2] # prints 'eCa' 
 print str[-1:-2] # prints '' (empty string) 
```

*   **Obter todos os outros caracteres de uma string**

```python
string = "freeCodeCamp" 
 print(string[::2]) 
```

Saída:

```shell
> feCdCm 

```