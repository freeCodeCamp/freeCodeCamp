---
title: Clojure   Vectors
localeTitle: Vectores de clojure
---
Un vector es quizás el tipo de colección más simple en Clojure. Puedes considerarlo como una matriz en Javascript. Vamos a definir un vector simple:
```
(def a-vector [1 2 3 4 5]) 
 ;; Alternatively, use the vector function: 
 (def another-vector (vector 1 2 3 4 5)) 
 ;; You can use commas to separate items, since Clojure treats them as whitespace. 
 (def comma-vector [1, 2, 3, 4, 5]) 
```

Verás que usa corchetes, como una matriz en JS. Como Clojure, al igual que JS, se tipifica dinámicamente, los vectores pueden contener elementos de cualquier tipo, incluidos otros vectores.
```
(def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"]) 
```

## Agregar elementos a un vector

Puedes añadir elementos a un vector usando `conj` . También puedes anteponer a una lista utilizando `into` , pero tenga en cuenta que `into` está destinado a la fusión de dos vectores, por lo tanto sus argumentos debe ser vectores, y utilizando `into` es más lento que usar `conj` .
```
(time (conj [1 2] 3)) 
 ; => "Elapsed time: 0.032206 msecs" 
 ;    [1 2 3] 
 (time (into [1] [2 3])) 
 ; => "Elapsed time: 0.078499 msecs" 
 ;    [1 2 3] 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/wBSUEd)

## Recuperar elementos de un vector

Puede recuperar elementos de un vector utilizando `get` . Esto es equivalente a usar la notación de corchete para acceder a los elementos de una matriz en muchos idiomas imperativos. Los ítems en un vector están indexados en 0, contando desde la izquierda.
```
var arr = [1, 2, 3, 4, 5]; 
 arr[0]; 
 // => 1 
```

En Clojure, esto se escribiría así:
```
(def a-vector [1 2 3 4 5]) 
 (get a-vector 0) 
 ; => 1 
```

También puede dar a `get` un valor predeterminado, si le da un índice que no está en la matriz.
```
;; the list doesn't have 2147483647 elements, so it'll return a string instead. 
 (get a-vector 2147483646 "sorry, not found!") 
 ; => "sorry, not found!" 
```

## Convertir otras colecciones en vectores.

Las estructuras de datos no vectoriales se pueden convertir en vectores usando la función `vec` . Con los hashmaps, esto produce un vector 2D que contiene pares de claves y valores.
```
(vec '(1 2 3 4 5)) 
 ; => [1 2 3 4 5] 
 (vec {:jack "black" :barry "white"}) 
 ; => [[:jack "black"] [:barry "white"]] 
```

## ¿Cuándo usar un vector?

Se debe usar un vector en casi todos los casos si necesita una colección, ya que tienen los tiempos de acceso aleatorio más cortos, lo que facilita la recuperación de elementos de un vector. Tenga en cuenta que los vectores están ordenados. Si el orden no importa, puede ser mejor usar un juego. También tenga en cuenta que los vectores están diseñados para agregar elementos; Si necesita anteponer elementos, es posible que desee utilizar una lista.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |  
| [Listas](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Hashmaps](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |