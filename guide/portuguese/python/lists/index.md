---
title: Lists
localeTitle: Listas
---
**TODO: `list` informações básicas**

[Documentos do Python - Listas](https://docs.python.org/3/library/stdtypes.html#lists)

**Criação:**

Uma `list` vazia é criada usando um par de colchetes:

```shell
>>> empty_list = [] 
 >>> type(empty_list) 
 <class 'list'> 
 >>> len(empty_list) 
 0 
```

Uma `list` pode ser criada com elementos, colocando uma lista de elementos separados por vírgula com colchetes. As listas permitem que os elementos sejam de tipos diferentes (heterogêneos), mas são mais comumente de um único tipo (homogêneo):

```shell
>>> homogeneous_list = [1, 1, 2, 3, 5, 8] 
 >>> type(homogeneous_list) 
 <class 'list'> 
 >>> print(homogeneous_list) 
 [1, 1, 2, 3, 5, 8] 
 >>> len(homogeneous_list) 
 6 
 >>> heterogeneous_list = [1, "Hello Campers!"] 
 >>> print(heterogeneous_list) 
 [1, "Hello Campers!"] 
 >>> len(heterogeneous_list) 
 2 
```

O construtor de `list` também pode ser usado para criar uma `list` :

```shell
>>> empty_list = list()                            # Creates an empty list 
 >>> print(empty_list) 
 [] 
 >>> list_from_iterable = list("Hello campers!")    # Creates a list from an iterable. 
 >>> print(list_from_iterable) 
 ['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!'] 
```

**Acessando elementos de uma `list` :**

```shell
>>> my_list = [1, 2, 9, 16, 25] 
 >>> print(my_list) 
 [1, 2, 9, 16, 25] 
```

_Zero indexado_

```shell
>>> my_list[0] 
 1 
 >>> my_list[1] 
 2 
 >>> my_list[2] 
 9 
```

_Envolva a indexação_

```shell
>>> my_list[-1] 
 25 
 >>> my_list[-2] 
 16 
```

_Descompactando listas para python-3_

```shell
>>> print(*my_list) 
 1 2 9 16 25 
```

**Mutável:**

`lists` são contêineres mutáveis. Contêineres mutáveis ​​são contêineres que permitem alterações em quais objetos estão contidos pelo contêiner. **TODO: ADICIONAR MAIS?**

_Reorganizando elementos em uma lista_

Elementos de uma `list` podem ser extraídos e reorganizados usando outra `list` como índice.

```shell
>>> my_list = [1, 2, 9, 16, 25, 34, 53, 21] 
 >>> my_index = [5, 2, 0] 
 >>> my_new_list = [my_list[i] for i in my_index] 
 >>> print(my_new_list) 
 [34, 9, 1] 
```

**TODO: Qual destes deve ser discutido aqui:**

[Documentos em Python - Mais em listas](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

*   `list.append(x)` Adiciona um item ao final da lista. Equivalente a um \[len (a):\] = \[x\].
    
*   `list.extend(L)` Estenda a lista anexando todos os itens na lista fornecida. Equivalente a um \[len (a):\] = L.
    
*   `list.insert(i, x)` Insere um item em uma determinada posição. O primeiro argumento é o índice do elemento antes do qual inserir, portanto a.insert (0, x) é inserido na frente da lista, e a.insert (len (a), x) é equivalente a a.append ( x).
    
*   `list.remove(x)` Remove o primeiro item da lista cujo valor é x. É um erro se não houver tal item.
    
*   `list.pop([i])` Remova o item na posição determinada na lista e retorne-o. Se nenhum índice for especificado, a.pop () remove e retorna o último item da lista. (Os colchetes ao redor do i na assinatura do método indicam que o parâmetro é opcional, e não que você deve digitar colchetes nessa posição. Você verá essa notação com frequência na Referência da Biblioteca do Python.)
    
*   `list.clear()` Remove todos os itens da lista. Equivalente a del a \[:\].
    
*   `list.index(x)` Retorna o índice na lista do primeiro item cujo valor é x. É um erro se não houver tal item.
    
*   `list.count(x)` Retorna o número de vezes x aparece na lista.
    
*   `list.sort(key=None, reverse=False)` Ordene os itens da lista (os argumentos podem ser usados ​​para ordenar a customização, veja sorted () para sua explicação).
    
*   `list.reverse()` Inverta os elementos da lista no lugar.
    
*   `list.copy()` Retorna uma cópia superficial da lista. Equivalente a um \[:\].