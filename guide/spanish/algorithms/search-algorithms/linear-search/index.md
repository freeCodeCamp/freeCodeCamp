---
title: Linear Search
localeTitle: Busqueda lineal
---
## Busqueda lineal

Supongamos que le dan una lista o una matriz de elementos. Usted está buscando un artículo en particular. ¿Cómo haces eso?

Encuentra el número 13 en la lista dada.

![Búsqueda lineal 1](https://i.imgur.com/ThkzYEV.jpg)

¡Basta con mirar la lista y ahí está!

![Búsqueda lineal 2](https://i.imgur.com/K7HfCly.jpg)

Ahora, ¿cómo le dices a una computadora para encontrarlo?

Una computadora no puede mirar más que el valor en un instante dado de tiempo. Por lo tanto, toma un elemento de la matriz y comprueba si es lo mismo que está buscando.

![Búsqueda lineal 3](https://i.imgur.com/ZOSxeZD.jpg)

El primer elemento no coincide. Así que pasa a la siguiente.

![Búsqueda lineal 4](https://i.imgur.com/SwKsPxD.jpg)

Y así…

Esto se hace hasta que se encuentra una coincidencia o hasta que se hayan verificado todos los elementos.

![Búsqueda lineal 5](https://i.imgur.com/3AaViff.jpg)

En este algoritmo, puede detener cuando se encuentra el elemento y, a continuación, no hay necesidad de buscar más.

Entonces, ¿cuánto tiempo tomaría hacer la operación de búsqueda lineal? ¡En el mejor de los casos, podría tener suerte y el elemento que está mirando quizás en la primera posición en la matriz! Pero en el peor de los casos, tendría que mirar todos y cada uno de los elementos antes de encontrar el elemento en el último lugar o antes de darse cuenta de que el elemento no está en la matriz.

La complejidad por lo tanto de la búsqueda lineal es: O (n).

Si el elemento a buscar preside el primer bloque de memoria, entonces la complejidad sería: O (1).

El código para una función de búsqueda lineal en JavaScript se muestra a continuación. Esta función devuelve la posición del elemento que estamos buscando en la matriz. Si el elemento no está presente en la matriz, la función devolverá el valor nulo.

### Ejemplo en Javascript

```javascript
function linearSearch(arr, item) { 
  // Go through all the elements of arr to look for item. 
  for (var i = 0; i < arr.length; i++) { 
    if (arr[i] === item) { // Found it! 
      return i; 
    } 
  } 
 
  // Item not found in the array. 
  return null; 
 } 
```

### Ejemplo en Ruby

```ruby
def linear_search(target, array) 
  counter = 0 
 
  while counter < array.length 
    if array[counter] == target 
      return counter 
    else 
      counter += 1 
    end 
  end 
  return nil 
 end 
```

### Ejemplo en C ++

```cpp
int linear_search(int arr[],int n,int num) 
 { 
    for(int i=0;i<n;i++){ 
        if(arr[i]==num) 
            return i; 
   } 
   // Item not found in the array 
   return -1; 
 } 
```

### Ejemplo en Python

```python
def linear_search(array, num): 
    for i in range(len(array)): 
        if (array[i]==num): 
            return i 
    return -1 
```

## Búsqueda lineal global

¿Qué pasa si estás buscando las múltiples apariciones de un elemento? Por ejemplo, quieres ver cuántos 5 hay en una matriz.

Objetivo = 5

Array = \[1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5\]

Esta matriz tiene 3 apariciones de 5s y queremos devolver los índices (donde están en la matriz) de todos ellos. Esto se denomina búsqueda lineal global y deberá ajustar su código para devolver una matriz de los puntos de índice en los que encuentra el elemento objetivo. Cuando encuentre un elemento de índice que coincida con su objetivo, el punto de índice (contador) se agregará a la matriz de resultados. Si no coincide, el código continuará avanzando al siguiente elemento de la matriz agregando 1 al contador.

```ruby
def global_linear_search(target, array) 
  counter = 0 
  results = [] 
 
  while counter < array.length 
    if array[counter] == target 
      results << counter 
      counter += 1 
    else 
      counter += 1 
    end 
  end 
 
  if results.empty? 
    return nil 
  else 
    return results 
  end 
 end 
```

## ¿Por qué la búsqueda lineal no es eficiente?

No hay duda de que la búsqueda lineal es simple, pero debido a que compara cada elemento uno por uno, consume mucho tiempo y, por lo tanto, no es muy eficiente. Si tenemos que encontrar un número de, digamos, 1000000 números y el número se encuentra en la última ubicación, la técnica de búsqueda lineal sería bastante tediosa. Entonces, también aprende sobre el tipo de burbuja, el tipo rápido, etc.

#### Video relevante:

#### Otros recursos

[Búsqueda lineal - CS50](https://www.youtube.com/watch?v=vZWfKBdSgXI)