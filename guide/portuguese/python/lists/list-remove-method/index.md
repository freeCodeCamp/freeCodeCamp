---
title: List Remove Method
localeTitle: List Remove Method
---
## List Remove Method

O método remove `remove()` remove o argumento dado a ele da lista.

#### Exemplo de uso

```py
words = ["I", "love", "Python"] 
 words.remove("I") 
 print(words) 
```

#### Saída

```py
["love","Python"] 
```

Observe que ele retornará um erro se o elemento a ser removido não for encontrado na lista, conforme ilustrado no exemplo abaixo.

```py
kiss = ["keep", "it", "simple", "stupid"] 
 kiss.remove("complex") 
 print(kiss) 
```

#### Saída
```
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: list.remove(x): x not in list 
```

#### Mais Informações:

Mais informações sobre `remove()` podem ser encontradas [aqui](https://docs.python.org/3.6/tutorial/datastructures.html)