---
title: List Sort Method
localeTitle: Método de classificação de lista
---
## Método de classificação de lista

As listas do Python possuem um método `sort()` interno que modifica a lista no local e uma função `sorted()` que cria uma nova lista classificada a partir de um iterável.

list.sort (key =…, reverse = \[verdadeiro / falso\])

### Parâmetros

Existem dois parâmetros opcionais para este método _key_ - O valor de entrada para o parâmetro key deve ser uma função que usa um único argumento e retorna um valor usado para comparações para classificar os itens na lista. _reverse = \[valor\]_ _value = True_ : classifica os itens na lista em ordem decrescente _value = False_ : classifica os itens na lista em ordem crescente. Esse é considerado o valor padrão. Por favor, note que o método `sort()` não retorna nenhum valor. Modifica a lista original.

### Exemplo de uso

```py
a = [4, 2, 5, 3, 1] 
 a.sort() 
 print a # prints [1, 2, 3, 4, 5] 
 
 b = ['free', 'code', 'camp'] 
 b.sort() 
 print b # prints ['camp', 'code', 'free'] 
```

Considere um exemplo com o parâmetro **reverso**

```py
a = [4, 2, 5, 3, 1] 
 
 #Sorts the list in descending order 
 a.sort(reverse=True) 
 
 print a # prints [5, 4, 3, 2, 1] 
```

Se você quiser classificar a lista com base em sua própria função, use o parâmetro **key** . Aqui está um exemplo para ordenar as strings na lista por comprimento, em ordem crescente

```py
a = ["hello", "hi", "hey"] 
 
 #The built-in len() function is given as an input to key parameter to sort the strings by length 
 a.sort(key = len) 
 
 print a # prints ['hi', 'hey', 'hello'] 
```

Aqui está outro exemplo, onde a lista contém tuplas (nome, idade). O uso abaixo mostra como ordenar a lista por idade, em ordem crescente.

```py
#Consider the second element in the tuple for sorting 
 >>> def compareByAge(element): 
 ...     return element[1] 
 
 b = [('Adam', 20), ('Rahman', 30), ('Rahul', 25)] 
 
 #Sort the list by age 
 b.sort(key = compareByAge) 
 
 #Output 
 print b # prints [('Adam', 20), ('Rahul', 25), ('Rahman', 30)] 
```

### Noções básicas de classificação

Uma simples ordenação ascendente é muito fácil - basta chamar a função sorted (). Ele retorna uma nova lista classificada:

```python
>>> sorted([5, 2, 3, 1, 4]) 
 [1, 2, 3, 4, 5] 
```

Você também pode usar o método list.sort () de uma lista. Ele modifica a lista no local (e retorna Nenhum para evitar confusão). Geralmente é menos conveniente do que classificado () - mas se você não precisa da lista original, é um pouco mais eficiente.

```python
>>> a = [5, 2, 3, 1, 4] 
 >>> a.sort() 
 >>> a 
 [1, 2, 3, 4, 5] 
```

Outra diferença é que o método list.sort () é definido apenas para listas. Em contraste, a função sorted () aceita qualquer iterável.

```python
>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'}) 
 [1, 2, 3, 4, 5] 
```

#### Detalhes da implementação

Se alguém quiser saber detalhes sobre a implementação da função de classificação, o algoritmo e a complexidade de tempo, etc., referem-se [aqui](http://svn.python.org/projects/python/trunk/Objects/listsort.txt) . Em resumo, a função sort usa o algoritmo TimSort, que de acordo com os desenvolvedores Python, é: -

> um mergesort adaptável, estável e natural, modestamente chamado timsort (ei, eu ganhei ). Tem um desempenho sobrenatural em muitos tipos de matrizes parcialmente ordenadas (menos de lg (N!) comparações necessárias, e tão poucos quanto N-1), mas tão rápido quanto o sampleort anterior do Python híbrido em matrizes aleatórias.

#### sort () Parâmetros

Por padrão, sort () não requer nenhum parâmetro extra. No entanto, ele tem dois parâmetros opcionais:

*   reverse - Se true, a lista classificada é invertida (ou classificada em ordem descendente)
*   key - função que serve como chave para a comparação de classificação

#### Mais Informações:

Mais informações sobre `sort()` podem ser encontradas [aqui](https://docs.python.org/3/library/functions.html#sorted)

Mais informações sobre sort () e sorted () podem ser encontradas [aqui](https://docs.python.org/3.6/tutorial/datastructures.html)

Mais informações sobre sort () e sorted () podem ser encontradas [aqui](https://docs.python.org/3.6/tutorial/datastructures.html) .