---
title: Hash Tables and Hashing Functions
localeTitle: Tablas hash y funciones hash
---
### Introducción al hashing.

El hash está diseñado para resolver el problema de la necesidad de encontrar o almacenar un artículo de manera eficiente en una colección.  
Por ejemplo, si tenemos una lista de 10,000 palabras en inglés y queremos verificar si una palabra dada está en la lista, sería ineficiente comparar la palabra con los 10,000 elementos hasta que encontremos una coincidencia. Incluso si la lista de palabras está ordenada lexicográficamente, como en un diccionario, todavía necesitará algo de tiempo para encontrar la palabra que está buscando.  
El hash es una técnica para hacer que las cosas sean más eficientes al reducir efectivamente la búsqueda desde el principio.

## ¿Qué es el hash?

Hashing significa usar alguna función o algoritmo para asignar datos de objetos a algún valor entero representativo.  
Este llamado código hash (o simplemente hash) se puede utilizar como una forma de limitar nuestra búsqueda al buscar el elemento en el mapa.  
En general, estos códigos hash se utilizan para generar un índice, en el que se almacena el valor.

## Como funciona el hash

En las tablas hash, almacena datos en forma de pares de clave y valor. La clave, que se utiliza para identificar los datos, se proporciona como una entrada a la función de hashing. El código hash, que es un número entero, se asigna al tamaño fijo que tenemos.

Las tablas hash tienen que soportar 3 funciones.

*   insertar (clave, valor)
*   obtener la clave)
*   eliminar (clave)

Solo como ejemplo para ayudarnos a comprender el concepto, supongamos que queremos mapear una lista de claves de cadena a valores de cadena (por ejemplo, mapear una lista de países a sus ciudades capitales).  
Así que digamos que queremos almacenar los datos en la tabla en el mapa.

Llave | Valor  
\---------------- | -------------  
Cuba | la Habana  
Inglaterra | Londres  
Francia | París  
España | Madrid  
Suiza | Berna

Y supongamos que nuestra función hash es simplemente tomar la longitud de la cadena.

Para simplificar, tendremos dos matrices: una para nuestras claves y otra para los valores.  
Entonces, para poner un elemento en la tabla hash, calculamos su código hash (en este caso, simplemente contamos el número de caracteres), luego colocamos la clave y el valor en las matrices en el índice correspondiente.  
Por ejemplo, Cuba tiene un código hash (longitud) de 4.  
Así que almacenamos Cuba en la 4ª posición en la matriz de claves, y La Habana en el 4º índice de la matriz de valores, etc. Y terminamos con lo siguiente:

Posición | Matriz de claves | Matriz de valores  
\--------------------- | ------------------ | --------- ------  
1 | |  
2 | |  
3 | |  
4 | Cuba | la Habana  
5 | España | Madrid  
6 | Francia | París  
7 | Inglaterra | Londres  
8 | |  
9 | |  
10 | |  
11 | Suiza | Berna

Ahora, en este ejemplo específico las cosas funcionan bastante bien.  
Nuestra matriz debe ser lo suficientemente grande para acomodar la cadena más larga, pero en este caso solo son 11 ranuras.  
Perdemos un poco de espacio porque, por ejemplo, no hay claves de 1 letra en nuestros datos, ni claves entre 8 y 10 letras. Pero en este caso, el espacio desperdiciado tampoco es tan malo. Tomar la longitud de una cadena es agradable y rápido, y también lo es el proceso de encontrar el valor asociado con una clave dada (ciertamente más rápido que hacer hasta cinco comparaciones de cadenas).

Pero, ¿qué hacemos si nuestro conjunto de datos tiene una cadena que tiene más de 11 caracteres?  
¿Qué pasa si tenemos otra palabra con 5 caracteres, "India", e intente asignarla a un índice usando nuestra función hash? Dado que el índice 5 ya está ocupado, debemos hacer una llamada sobre qué hacer con él. Esto se llama una colisión.

Si nuestro conjunto de datos tuviera una cadena con miles de caracteres y usted creara una matriz de miles de índices para almacenar los datos, se produciría un desperdicio de espacio. Si nuestras claves fueran palabras aleatorias del inglés, donde hay tantas palabras con la misma longitud, usar la longitud como función de hashing sería bastante inútil.

## Manejo de colisiones

Se utilizan dos métodos básicos para manejar las colisiones.

1.  Encadenamiento separado
2.  Direccionamiento abierto

#### Encadenamiento separado

El manejo de la colisión de hash mediante un encadenamiento separado, utiliza una estructura de datos adicional, preferiblemente una lista vinculada para la asignación dinámica, en grupos. En nuestro ejemplo, cuando agregamos India al conjunto de datos, se adjunta a la lista enlazada almacenada en el índice 5, entonces nuestra tabla se vería así.

Posición | Lista de jefes vinculados |  
\--------------------- | ---------------------------- -------- |  
1 | |  
2 | |  
3 | |  
4 | [Cuba-La Habana\] |  
5 | \[España-Madrid\] -> \[India-Delhi\] |  
6 | \[Francia-París\] |  
7 | \[Inglaterra-Londres\] |  
8 | |  
9 | |  
10 | |  
11 | \[Suiza-Berna\] |](https://en.wikipedia.org/wiki/Linear_probing)

Para encontrar un artículo primero vamos al cubo y luego comparamos las claves. Este es un método popular, y si se usa una lista de enlaces, el hash nunca se llena. El costo para `get(k)` es en promedio `O(n)` donde n es el número de claves en el depósito, el número total de claves es N.  
El problema con el encadenamiento separado es que la estructura de datos puede crecer sin límites.

#### Direccionamiento abierto

El direccionamiento abierto no introduce ninguna nueva estructura de datos. Si ocurre una colisión, buscamos disponibilidad en el siguiente punto generado por un algoritmo. El direccionamiento abierto se utiliza generalmente cuando el espacio de almacenamiento es restringido, es decir, procesadores integrados. El direccionamiento abierto no es necesariamente más rápido que el encadenamiento separado.

Métodos de direccionamiento abierto

*   \[Sondeo Lineal
*   [Sondeo cuadrático](https://en.wikipedia.org/wiki/Quadratic_probing)
*   [Doble hash](https://en.wikipedia.org/wiki/Double_hashing)

## Cómo utilizar el hash en tu código.

#### Pitón
```
   # Few languages like Python, Ruby come with an in-built hashing support. 
   # Declaration 
    my_hash_table = {} 
    my_hash_table = dict() 
 
   # Insertion 
    my_hash_table[key] = value 
 
   # Look up 
    value = my_hash_table.get(key) # returns None if the key is not present || Deferred in python 3, available in python 2 
    value = my_hash_table[key] # throws a ValueError exception if the key is not present 
 
    # Deletion 
    del my_hash_table[key] # throws a ValueError exception if the key is not present 
 
    # Getting all keys and values stored in the dictionary 
    keys = my_hash_table.keys() 
    values = my_hash_table.values() 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVtK)

#### Java
```
    // Java doesn't include hashing by default, you have to import it from java.util library 
    // Importing hashmaps 
    import java.util.HashMap; 
 
   // Declaration 
    HashMap<Integer, Integer> myHashTable = new HashMap<Integer, Integer>(); // declares an empty map. 
 
   // Insertion 
    myHashTable.put(key, value); 
 
   // Deletion 
    myHashtable.remove(key); 
 
    // Look up 
    myHashTable.get(key); // returns null if the key K is not present 
    myHashTable.containsKey(key); // returns a boolean value, indicating the presence of a key 
 
    // Number of key, value pairs in the hash table 
    myHashTable.size(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVt1)

## Recursos

*   Para leer más, muchos querrán probar este [enlace](http://geeksquiz.com/hashing-set-1-introduction/) , que explica el hashing usando un ejemplo diferente.
*   [Hashing en 60 segundos](https://www.youtube.com/watch?v=x05KubVlh_M) .
*   [Cashoo Hashing](https://www.youtube.com/watch?v=HRzg0SzFLQQ)
*   [Hashing consistente](https://www.youtube.com/watch?v=jznJKL0CrxM)
*   [Filtros de floración](https://www.youtube.com/watch?v=-SuTGoFYjZs)
*   [Estrategias de Hashing](https://www.youtube.com/watch?v=D65JQ0qQwZk)
*   [Hash de contraseña](https://crackstation.net/hashing-security.htm)
*   [Diferencia entre hash y encriptación.](http://stackoverflow.com/questions/326699/difference-between-hashing-a-password-and-encrypting-it)