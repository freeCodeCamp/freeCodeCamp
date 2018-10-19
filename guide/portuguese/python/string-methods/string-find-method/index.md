---
title: String Find Method
localeTitle: String Find Method
---
## String Find Method

Existem duas opções para encontrar uma substring dentro de uma string em Python, `find()` e `rfind()` .

Cada um retornará a posição na qual a substring é encontrada. A diferença entre os dois é que `find()` retorna a posição mais baixa e `rfind()` retorna a posição mais alta.

Argumentos opcionais de início e fim podem ser fornecidos para limitar a pesquisa da subseqüência dentro de partes da cadeia.

Exemplo:

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you') 
 6 
 >>> string.rfind('you') 
 42 
```

Se a substring não for encontrada, -1 será retornado.

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string 
 -1 
```

Mais Informações:

[Documentação de](https://docs.python.org/3/library/stdtypes.html#string-methods) métodos de string.