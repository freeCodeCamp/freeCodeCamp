---
title: Big Theta Notation
localeTitle: Notación Big Theta
---
## Notación Big Theta

Big Omega nos dice el límite inferior del tiempo de ejecución de una función, y Big O nos dice el límite superior. Muchas veces, son diferentes y no podemos garantizar el tiempo de ejecución; variará entre los dos límites y las entradas. ¿Pero qué pasa cuando son lo mismo? Luego podemos **asignar** un límite **theta** (Θ): nuestra función se ejecutará en ese momento, sin importar qué información le demos. En general, siempre queremos dar un límite theta si es posible porque es el más preciso y el más estricto. Si no podemos dar un límite theta, la mejor opción es el límite O más estrecho posible.

Tomemos, por ejemplo, una función que busca en una matriz el valor 0:

```python
def containsZero(arr): #assume normal array of length n with no edge cases 
  for num x in arr: 
    if x == 0: 
       return true 
  return false 
```

1.  ¿Cuál es el mejor caso? Bueno, si la matriz que le damos tiene 0 como primer valor, tomará tiempo constante: Ω (1)
2.  ¿Cuál es el peor de los casos? Si la matriz no contiene 0, habremos iterado en toda la matriz: O (n)

Le hemos dado un límite de omega y O, ¿y qué hay de theta? ¡No podemos darle uno! Dependiendo de la matriz que le demos, el tiempo de ejecución estará en algún lugar entre constante y lineal.

Cambiemos un poco nuestro código.

```python
def printNums(arr): #assume normal array of length n with no edge cases 
  for num x in arr: 
    print(x) 
```

¿Puedes pensar en un mejor y peor caso? No puedo Independientemente de la matriz que le demos, tenemos que iterar a través de cada valor en la matriz. Por lo tanto, la función tardará AL MENOS n tiempo (Ω (n)), pero también sabemos que no durará más que n tiempo (O (n)). ¿Qué significa esto? Nuestra función tomará **exactamente** n tiempo: Θ (n).

Si los límites son confusos, piénsalo así. Tenemos 2 números, x y y. Se nos da que x <= y y que <= x. Si x es menor o igual que y, y y es menor o igual que x, entonces x tiene que ser igual a y!

Si está familiarizado con las listas enlazadas, pruébese y piense en los tiempos de ejecución para cada una de estas funciones.

1.  obtener
2.  retirar
3.  añadir

¡Las cosas se ponen aún más interesantes si consideras una lista doblemente enlazada!

#### Más información:

https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation https://stackoverflow.com/questions/10376740/what-exactly-does-big-%D3%A8-notation-represent https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/