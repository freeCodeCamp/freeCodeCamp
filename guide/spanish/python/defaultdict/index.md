---
title: Python defaultdict
localeTitle: Python defaultdict
---
## Python defaultdict

El diccionario es una de las estructuras de datos más utilizadas en Python. Un diccionario es una colección desordenada de elementos y generalmente tenemos claves y valores almacenados en un diccionario. Veamos algunos ejemplos de cómo se usa generalmente el diccionario.

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

Veamos ahora algunas formas de recuperación.

```python
# Since "X" exists in our dictionary, this will retrieve the value 
 value = dict1[key] 
 
 # This key doesn't exist in the dictionary. 
 # So, we will get a `KeyError` 
 value = dict1["random"] 
```

### Evitar KeyError: utilizar la función .get

En caso de que la clave dada no exista en el diccionario, Python lanzará un `KeyError` . Hay una solución simple para esto. Veamos cómo podemos evitar `KeyError` usando el Función `.get` incorporada para diccionarios.

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

Muchas veces estamos bien obteniendo un valor predeterminado cuando la clave no existe. Por ejemplo, cuando construyendo un mostrador. Hay una mejor manera de obtener valores predeterminados del diccionario en caso de faltan claves en lugar de confiar en el estándar `if-else` .

```python
# Let's say we want to build a frequency counter for items in the following array 
 arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1] 
 
 freq = {} 
 
 for item in arr: 
  # Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value 
  freq[item] = freq.get(item, 0) + 1 
```

Por lo tanto, el `get(<key>, <defaultval>)` es una operación útil para recuperar el valor predeterminado para cualquier clave dada del diccionario. El problema con este método viene cuando queremos tratar con estructuras de datos mutables como valores, por ejemplo, `list` o `set` .

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

¿Viste el problema?

El nuevo `set` o la `list` no se asignan a la clave del diccionario. Debemos asignar una nueva `list` o un `set` a la clave en caso de que falte valor y luego `append` o `add` respectivamente. La mirada de Ley a un ejemplo para esto.

```python
dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
 print(dict_) # {'random': set(['Hello World!'])}. Yay! 
```

### Evitando KeyError: Use defaultdict

Esto funciona la mayoría de las veces. Sin embargo, hay una mejor manera de hacer esto. Una forma más `pythonic` . El valor `defaultdict` es una subclase de la clase dict incorporada. El `defaultdict` simplemente asigna el valor predeterminado que se especifica en el caso de una llave perdida. Entonces, los dos pasos:

```python
dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
```

Ahora se puede combinar en un solo paso. Por ejemplo

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

[Documentos oficiales](https://docs.python.org/2/library/collections.html)