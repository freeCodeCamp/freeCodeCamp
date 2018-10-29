---
title: The Python Dict
localeTitle: O Dict Python
---
Um Dicionário (também conhecido como "dict") em python é um tipo de dados interno que pode ser usado para armazenar pares de **`key-value`** . Isso permite que você trate um **`dict`** como se fosse um _banco_ de _dados_ para armazenar e organizar dados.

A coisa especial sobre os dicionários é a maneira como eles são implementados. A estrutura tipo mesa de hash facilita a verificação de existência - o que significa que podemos determinar facilmente se uma chave específica está presente no dicionário sem precisar examinar cada elemento. O interpretador Python pode simplesmente ir até a chave de localização e verificar se a chave está lá.

Dicionários podem usar quase todos os tipos de dados arbitrários, como strings, inteiros, etc., para chaves. No entanto, valores que não são hashable, ou seja, valores contendo listas, dicionários ou outros tipos mutáveis ​​(que são comparados por valor em vez de por identidade de objeto) não podem ser usados ​​como chaves. Os tipos numéricos usados ​​para teclas obedecem às regras normais de comparação numérica: se dois números forem iguais (como `1` e `1.0` ), eles poderão ser usados ​​de forma intercambiável para indexar a mesma entrada do dicionário. (Observe, no entanto, que, como os computadores armazenam números de ponto flutuante como aproximações, geralmente é insensato usá-los como chaves de dicionário.)

Um requisito mais importante de um dicionário é que as chaves **devem** ser exclusivos.  
Para criar um dicionário vazio, basta usar um par de chaves:

```python
    >>> teams = {} 
    >>> type(teams) 
    >>> <class 'dict'> 
```

  
Para criar um dicionário não vazio com alguns valores iniciais, coloque uma lista separada por vírgula de pares de valores-chave:

```python
    >>> teams = {'barcelona': 1875, 'chelsea': 1910} 
    >>> teams 
    {'barcelona': 1875, 'chelsea': 1910} 
```

É fácil adicionar pares de valores-chave a um dicionário existente:

```python
    >>> teams['santos'] = 1787 
    >>> teams 
    {'chelsea': 1910, 'barcelona': 1875, 'santos': 1787} # Notice the order - Dictionaries are unordered ! 
    >>> # extracting value - Just provide the key 
    ... 
    >>> teams['barcelona'] 
    1875 
```

  
**`del`** operator é usado para excluir um par de valores-chave do dict. Nos cenários em que uma chave que já está em uso é novamente usada para armazenar valores, o valor antigo associado a essa chave é completamente perdido. Além disso, lembre-se de que é um erro extrair o valor usando uma chave inexistente.

```python
    >>> del teams['santos'] 
    >>> teams 
    {'chelsea': 1910, 'barcelona': 1875} 
    >>> teams['chelsea'] = 2017 # overwriting 
    >>> teams 
    {'chelsea': 2017, 'barcelona': 1875} 
```

  
**`in`** palavra-chave pode ser usado para verificar se existe uma chave no dict ou não:

```python
    >>> 'sanots' in teams 
    False 
    >>> 'barcelona' in teams 
    True 
    >>> 'chelsea' not in teams 
    False 
```

  
**`keys`** é um _método interno_ que pode ser usado para obter as chaves de um determinado dicionário. Para extrair as chaves presentes em um dict como listas:

```python
    >>> club_names = list(teams.keys()) 
    >>> club_names 
    ['chelsea', 'barcelona'] 
```

  
Ainda outra maneira de criar dicionário é usando o método **`dict()`** :

```python
    >>> players = dict( [('messi','argentina'), ('ronaldo','portugal'), ('kaka','brazil')] ) # sequence of key-value pair is passed 
    >>> players 
    {'ronaldo': 'portugal', 'kaka': 'brazil', 'messi': 'argentina'} 
    >>> 
    >>> # If keys are simple strings, it's quite easier to specify pairs using keyword arguments 
    ... 
    >>> dict( totti = 38, zidane = 43 ) 
    {'zidane': 43, 'totti': 38} 
```

As compreensões de ditado podem ser usadas também para criar dicionários a partir de expressões arbitrárias de chave e valor:

```python
    >>> {x: x**2 for x in (2, 4, 6)} 
    {2: 4, 4: 16, 6: 36} 
```

**Looping no dicionário**  
Para simplesmente percorrer as teclas no dicionário, em vez das chaves e valores:

```python
    >>> d = {'x': 1, 'y': 2, 'z': 3} 
    >>> for key in d: 
    ...     print(key) # do something 
    ... 
    x 
    y 
    z 
```

Para repetir a chave e o valor, você pode usar o seguinte:  
Para Python 2.x:

```python
    >>> for key, item in d.iteritems(): 
    ...     print items 
    ... 
    1 
    2 
    3 
```

Use **`items()`** para o Python 3.x:

```python
    >>> for key, item in d.items(): 
    ...     print(key, items) 
    ... 
    x 1 
    y 2 
    z 3 

```