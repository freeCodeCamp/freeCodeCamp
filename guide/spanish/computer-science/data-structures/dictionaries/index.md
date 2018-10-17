---
title: Dictionaries
localeTitle: Los diccionarios
---
## Los diccionarios

Supongamos que tenemos una lista homogénea. Queremos contar cuántas veces aparece cada elemento en la lista. ¿Cómo podemos hacerlo sin utilizar los métodos incorporados de Python, como contar o Contar desde el módulo de colecciones de Python? Una búsqueda en Google de "¿Cómo contar las ocurrencias de un elemento en una lista?" devolverá las respuestas de Desbordamiento de pila indicando el método de conteo y el módulo de colecciones, pero con el fin de aprender, intentemos resolver el problema sin usar estas herramientas.

Aquí está la lista con la que trabajaremos:

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
```

Este código, que utiliza anidados para bucles, produce la respuesta correcta y almacena la respuesta en la lista "recuento":

```python
count = [] 
 for flavor in ice_cream: 
  found = False 
  for entry in count: 
    if entry[0] == flavor: 
      entry[1] += 1 
      found = True 
  if not found: 
      count.append([flavor, 1]) 
 
 # Print. 
 for (entry, total) in count: 
  print (entry, total) 
```

Aunque este código da la respuesta correcta, hay dos cosas que están mal. En primer lugar, es complejo. Cuantos más bucles anidados contenga un programa, más difícil será comprenderlo, corregirlo y extenderlo. Además, es ineficiente. Es posible que esto no sea un problema en este pequeño ejemplo, pero imagine una lista con miles o millones de elementos. Escanear la lista de entradas cada vez que hacemos una observación llevaría mucho, mucho tiempo, sin importar qué tan rápido sea la computadora. Este es un tema que se trata más detalladamente cuando se estudian temas como la notación O grande y se comparan los algoritmos de búsqueda y clasificación.

Una mejor respuesta es usar otra estructura de datos conocida como un **diccionario** o **mapa** . Esta estructura de datos es una colección _desordenado y mutable_ de pares _clave / valor_ . Piense en un diccionario como un directorio telefónico, donde la clave es el nombre de la persona y el valor es el número de teléfono. Las claves en un diccionario forman un conjunto, lo que significa que solo pueden aparecer una vez, y no se pueden cambiar (son inmutables), aunque los valores asociados con una clave se pueden cambiar.

Los diccionarios se crean colocando pares clave / valor dentro de llaves. Para obtener el valor asociado con una clave, coloque la clave entre corchetes.

Aquí hay algunos ejemplos de código:

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1} 
 print (ice_cream) 
 >> {'chocolate' : 3, 'strawberry' : 1} 
 print (ice_cream['strawberry']) 
 >> 1 
```

Para probar si una clave está en un diccionario, use k en d:

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1} 
 if 'chocolate' in ice_cream: 
    print ('chocolate is in the list') 
 ... 
 
 del ice_cream['chocolate'] 
 if 'chocolate' in ice_cream: 
    print ('oops: why is chocolate still there?') 
```

**Actualización y membresía** Para actualizar diccionarios, simplemente asigne un valor a una clave. Si la clave ya está en el diccionario, esto cambia el valor asociado con él.

Si la clave no estaba presente, se agrega, junto con el valor:

```python
ice_cream = {} 
 ice_cream['chocolate'] = 33 
 ice_cream['vanilla'] = 999 # oops 
 print (ice_cream) 
 >> {'chocolate' : 33, vanilla' : 999} 
 ice_cream['vanilla'] = 9 
 print (ice_cream) 
 >> {'chocolate' : 33, vanilla' : 9} 
```

Use _del d \[k\]_ , para eliminar una entrada de un diccionario, donde _d_ es el nombre del diccionario y _k_ es la clave que se está eliminando. Sólo se pueden eliminar las entradas que están presentes; tratar de eliminar uno que no está allí causa un error:

```python
ice_cream = {'chocolate' : 33, vanilla' : 9} 
 del ice_cream['chocolate'] 
 print (ice_cream) 
 >> {'vanilla' : 9} 
 del ice_cream['strawberry'] 
 >> Traceback (most recent call last): 
   File "<stdin>", line 5, in <module> 
   KeyError: 'strawberry' 
```

**Bucles** Ya que los diccionarios son colecciones (junto con listas, tuplas y conjuntos), vamos a querer hacer un bucle sobre sus contenido. Hacemos esto con un bucle for, que a su vez asigna cada una de las claves del diccionario a la variable de bucle:

```python
ice_cream = {'chocolate' : 183, 
             'vanilla' : 71, 
             'strawberry' : 63, 
             'banana', 1} 
 for flavor in ice_cream: 
  print (flavor, ice_cream[flavor]) 
 
 >> 'banana' 1 
   'vanilla' 71 
   'chocolate' 183 
   'strawberry' 63 
```

Al igual que con los elementos establecidos, Python recorre las entradas del diccionario en un orden arbitrario. No hay garantía de que se vean alfabéticamente o en el orden en que se agregaron al diccionario. Tenga en cuenta, por cierto, que el bucle sobre los diccionarios es ligeramente diferente del bucle sobre las listas. Cuando Python se desplaza sobre una lista, los valores de la lista se asignan a la variable de bucle. Cuando recorre un diccionario, por otro lado, asigna las teclas. Los diseñadores de Python eligieron hacer esto porque:

*   recorrer los índices de una lista no es muy interesante, ya que la El programa siempre obtendría la secuencia 0, 1, 2, ...; y
*   Es mucho más fácil pasar de una clave de diccionario al valor asociado que es tomar el valor y encontrar la clave asociada.

**Métodos de diccionario** Los diccionarios son objetos, como listas, tuplas y conjuntos. Algunos métodos comunes de diccionario son:

*   _d.clear ()_ - borrar un diccionario
*   _d.get (x, 99)_ : devuelve el valor asociado a una clave o un valor predeterminado si la clave no está presente.
*   _d.keys ()_ - teclas de retorno
*   _d.items ()_ - devuelve la lista de claves, pares de valores
*   _d.values ​​()_ : devuelve los valores como una lista, los valores pueden no ser únicos
*   _d.update ()_ : actualiza el diccionario con el contenido de otro

Un uso común de los elementos es recorrer las claves y los valores de un diccionario juntos: para (clave, valor) en dictionary.items (): ... hacer algo con la clave y el valor ...

Esto es ineficiente para los diccionarios grandes, ya que los elementos () en realidad construyen una lista de pares (clave, valor). Un método similar llamado _iteritems ()_ devuelve estos pares uno por uno a pedido: para (clave, valor) en dictionary.iteritems (): ... hacer algo con la clave y el valor ...

Regresemos al ejemplo original: ¿cómo contamos el número de elementos en la lista ice\_cream usando un diccionario?

```python
# Count all the flavors. 
 ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
 
 count = {} 
 for flavor in ice_cream: 
  if flavor in count: 
    count[flavor] = count[flavor] + 1 
  else: 
    count[flavor] = 1 
 
 # Print. 
 for b in count: 
  print (b, count[b]) 
```

Para ello, creamos un diccionario que inicialmente está vacío. Cada vez que recorramos la lista ice\_cream, comprobamos para ver si ese sabor ya está en el diccionario de conteo. Si es así, le sumamos uno a su cuenta. Si no es así, agregamos el nombre al diccionario con el valor 1.

Podemos acortar un poco este programa usando el método _dict.get ()_ . Esto devuelve el valor asociado con una clave o algún valor predeterminado que proporcionamos. En este caso, obtenemos la cantidad de veces que hemos visto un sabor o cero, agregamos uno al valor que devuelve el método y lo almacenamos nuevamente en el diccionario:

```python
# Count all the flavors. 
 count = {} 
 for flavor in ice_cream: 
  count[flavor] = count.get(flavor, 0) + 1 
 
 # Print. 
 keys = count.keys() 
 keys.sort() 
 for b in keys: 
  print (b, count[b]) 
 
 # Print. 
 for key in sorted(count): 
  print (key, count[key]) 
```

Tenga en cuenta que estamos utilizando dos formas distintas de imprimir la clave y el valor: una utiliza el método ordenado de Python y la otra no.

Si quisiéramos imprimir los sabores en orden de frecuencia, necesitamos **invertir el diccionario** . Esto significa que necesitamos usar los valores como claves y las claves como valores. Dado que no hay garantía de que los valores sean únicos, debemos tomar medidas para evitar _colisiones_ .

La solución es usar algún tipo de colección, como una lista, para almacenar los valores del diccionario invertido. Si vamos por esta ruta, la inversa del diccionario mostrado anteriormente sería {1: \['a', 'b', 'c'\]}. Aquí hay un programa para hacer lo que queremos:

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
 
 # Count all the flavors. 
 count = {} 
 for flavor in ice_cream: 
  count[flavor] = count.get(flavor, 0) + 1 
 
 # Invert the dictionary. 
 freq = {} 
 for (flavor, times) in count.items(): 
  if times in freq: 
    freq[times].append(flavor) 
  else: 
    freq[times] = [flavor] 
 
 # Print. 
 for key in freq: 
  for flavor in sorted(freq[key]): 
    print (key,":", " ", flavor) 
```

#### Más información: