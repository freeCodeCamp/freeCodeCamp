---
title: Python defaultdict
localeTitle: Python defaultdict
---
## Python defaultdict

O dicionário é uma das estruturas de dados mais usadas no Python. Um dicionário é uma coleção desordenada de itens e geralmente temos chaves e valores armazenados em um dicionário. Vejamos alguns exemplos de como o dicionário é normalmente usado.

```python
# dictionary declaration 1 
 dict1 = dict() 
 
 # dictionary declaration 2 
 dict2 = {} 
 
 # Add items to the dictionary 
 # The syntax to add and retrieve items is same for either of the two objects we defined above. 
 key = "X" 
 value = "Y" 
 dict1[key] = value 
 
 # The dictionary doesn't have any specific data-type. 
 # So, the values can be pretty diverse. 
 dict1[key] = dict2 
```

Vamos agora olhar para algumas formas de recuperação.

```python
# Since "X" exists in our dictionary, this will retrieve the value 
 value = dict1[key] 
 
 # This key doesn't exist in the dictionary. 
 # So, we will get a `KeyError` 
 value = dict1["random"] 
```

### Evitando KeyError: Use a função .get

Caso a chave fornecida não exista no dicionário, o Python lançará um `KeyError` . Existe uma solução simples para isso. Vamos ver como podemos evitar o `KeyError` usando o função `.get` embutida para dicionários.

```python
dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 # The most basic way of doing this is to check if the key 
 # exists in the dictionary or not and only retrieve if the 
 # key exists. Otherwise not. 
 if random_key in dict_: 
  print(dict_[random_key]) 
 else: 
  print("Key = {} doesn't exist in the dictionary".format(dict_)) 
```

Muitas vezes, estamos bem recebendo um valor padrão quando a chave não existe. Por exemplo, quando construindo um contador. Existe uma maneira melhor de obter valores padrão do dicionário em caso de faltando chaves em vez de depender do padrão `if-else` .

```python
# Let's say we want to build a frequency counter for items in the following array 
 arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1] 
 
 freq = {} 
 
 for item in arr: 
  # Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value 
  freq[item] = freq.get(item, 0) + 1 
```

Portanto, `get(<key>, <defaultval>)` é uma operação útil para recuperar o valor padrão de qualquer chave do dicionário. O problema com este método vem quando queremos lidar com estruturas de dados mutáveis ​​como valores, por exemplo, `list` ou `set` .

```python
dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 dict_[random_key] = dict_.get(random_key, []).append("Hello World!") 
 print(dict_) # {'random': None} 
 
 dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()).add("Hello World!") 
 print(dict_) # {'random': None} 
```

Você viu o problema?

O novo `set` ou a `list` não são atribuídos à chave do dicionário. Devemos atribuir uma nova `list` ou um `set` para a chave em caso de falta de valor e, em seguida, `append` ou `add` respectivamente. Ley olha para um exemplo disso.

```python
dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
 print(dict_) # {'random': set(['Hello World!'])}. Yay! 
```

### Evitando KeyError: Use defaultdict

Isso funciona na maioria das vezes. No entanto, existe uma maneira melhor de fazer isso. Uma maneira mais `pythonic` . O `defaultdict` é uma subclasse da classe dict incorporada. O `defaultdict` simplesmente atribui o valor padrão que especificamos no caso de uma chave ausente. Então, os dois passos:

```python
dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
```

agora pode ser combinado em um único passo. Por exemplo

```python
from collections import defaultdict 
 
 # Yet another random key 
 random_key = "random_key" 
 
 # list defaultdict 
 list_dict_ = defaultdict(list) 
 
 # set defaultdict 
 set_dict_ = defaultdict(set) 
 
 # integer defaultdict 
 int_dict_ = defaultdict(int) 
 
 list_dict_[random_key].append("Hello World!") 
 set_dict_[random_key].add("Hello World!") 
 int_dict_[random_key] += 1 
 
 """ 
  defaultdict(<class 'list'>, {'random_key': ['Hello World!']}) 
  defaultdict(<class 'set'>, {'random_key': {'Hello World!'}}) 
  defaultdict(<class 'int'>, {'random_key': 1}) 
 """ 
 print(list_dict_, set_dict_, int_dict_) 
```

* * *

[Documentos oficiais](https://docs.python.org/2/library/collections.html)