---
title: List Index Method
localeTitle: Método do índice de lista
---
## Método do índice de lista

Entre as muitas funções que vêm junto com a estrutura de dados da lista, o `index()` retorna a primeira ocorrência / índice do elemento na lista dada como um argumento para a função.

As listas são a estrutura de dados mais básica do Python e armazenam uma lista de valores em ordem (em comparação aos dicionários, a ordem não importa). Nós recuperamos os itens por índice numérico.

Tendo em mente o fato de que a indexação começa em 0, ou o primeiro elemento é considerado como sendo o índice 0, vamos dar uma olhada em alguns exemplos.

#### Exemplo de uso:

```py
numbers = [1, 2, 2, 3, 9, 5, 6, 10] 
 words = ["I", "love", "Python", "I", "love"] 
 
 print(numbers.index(9)) 
 print(numbers.index(2)) 
 print(words.index("I")) 
 print(words.index("am")) 
```

##### Saída:

```py
4 
 1 
 0 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: 'am' is not in list 
```

Aqui a primeira saída é muito óbvia, mas a segunda e terceira podem parecer confusas no início. Mas lembre-se `index()` retorna a primeira ocorrência do elemento e, portanto, neste caso, `1` e `0` são os índices onde `2` e `"I"` ocorrem primeiro nas listas, respectivamente.

Além disso, se um elemento não for encontrado na lista, um `ValueError` é retornado como no caso da indexação `"am"` na lista de `words` .

#### Argumentos opcionais:

Você também pode usar argumentos opcionais para limitar sua pesquisa a uma subsequência específica da lista, conforme ilustrado neste exemplo:

```py
words = ["I","am", "a", "I", "am", "Pythonista"] 
 
 print(words.index("am",2,5)) 
```

##### Saída:
```
4 
```

Aqui, embora o elemento seja pesquisado entre os índices 2 (inclusive) e 5 (não inclusivo), mas o índice retornado é calculado em relação ao início da lista completa, em vez do argumento inicial.

#### Mais Informações:

A documentação oficial do `index()` pode ser encontrada [aqui](https://docs.python.org/3.6/tutorial/datastructures.html)