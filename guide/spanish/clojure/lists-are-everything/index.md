---
title: Clojure Lists They Are Everything
localeTitle: Listas de Clojure Son Todo
---
Las listas son fundamentales para Clojure. Clojure es un Lisp, y los Lisps se utilizaron originalmente para el procesamiento de listas. ¡Todo en un Lisp es una lista!
```
(def foo "bar") 
```

¡Ese pedazo de código es en realidad una lista! Así es cualquier cosa entre dos corchetes redondos en Clojure. Interesante, ¿no es así? Esto es lo que hace que Lisps sea tan interesante: puede escribir fácilmente código que genere código nuevo, ya que generar código es tan simple como hacer una lista.

## Hacer una lista real

El problema es que, como todo es una lista en Clojure, algo como esto devolverá un error:
```
(1 2 3 4 5) 
 ; => ClassCastException java.lang.Long cannot be cast to clojure.lang.IFn 
```

Qué horrible mensaje de error. Lo que el REPL está tratando de decirnos es: "1 no es una función, y no se puede convertir en una". Debido a que todo en un Lisp es una lista, el primer elemento de cualquier lista se trata como una función, como `def` , `+` o `str` , así que si escribimos `(1 2 3 4 5)` , trata el primer elemento ( `1` ) como un Función, que claramente no es.

Podemos resolver esto de dos maneras. Una es usar la función de `list` para construir una lista, como usar `str` para concatenar cadenas.
```
(list 1 2 3 4 5) 
 ; => (1 2 3 4 5) 
```

También puede utilizar cotización. Citar una lista esencialmente le dice al compilador que esa lista _no_ es una llamada de función, y no debería evaluar ninguno de los códigos que contiene.
```
'(1 2 3 4 5) 
 ; => (1 2 3 4 5) 
```

Curiosamente, también puede citar llamadas de función. Así es como funcionan las macros. Son bastante complejos y merecen su propio artículo, así que no lo explicaremos aquí.
```
;; Without a ' to quote it, this would return "foobarbaz". 
 '(str "foo" "bar" "baz") 
 ; => (str "foo" "bar" "baz") 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/6c7UxY)

## Agregando a una lista

Las listas están diseñadas para anteponer, en lugar de adjuntar. No hay una manera real de adjuntar a una lista. Puede anteponer a una lista usando `cons` . `conj` también funciona, pero está pensado para vectores, y los `cons` son más rápidos para las listas.
```
(cons 1 '(2 3 4)) 
 ; => (1 2 3 4) 
```

## Recuperando de listas

Usted recupera elementos de listas usando `nth` . `get` no funciona en listas, porque las listas están diseñadas para acceso secuencial, en lugar de acceso aleatorio. Tenga en cuenta que `nth` funciona en vectores, pero es más lento de lo que se `get` debido a esto.
```
(nth '(1 2 3 4) 0) 
 ; => 1 
```

## Convertir otras colecciones en listas.

La función de `list` no puede convertir otras colecciones en listas, porque intenta construir una lista utilizando los argumentos que se le dan. Al pasar una `list` una colección devolverá una lista que contiene esa colección.
```
(list [1 2 3 4 5]) 
 ; => ([1 2 3 4 5]) 
```

Para convertir a una lista, use la función `seq` lugar.
```
(seq [1 2 3 4 5]) 
 ; => (1 2 3 4 5) 
```

## Secuencias perezosas

Clojure tiene una característica brillante llamada 'secuencias perezosas'. Una secuencia perezosa es una lista cuyos elementos no se generan hasta que se refiera a un elemento de la secuencia más adelante, momento en el cual evalúa todos los elementos de la secuencia hasta el que desea. ¡Esto te permite construir secuencias "infinitas"!

`range` es quizás la secuencia perezosa más simple. Contiene todos los números.
```
(range 10) 
 ; => (0 1 2 3 4 5 6 7 8 9) 
 (range -5 5) 
 ; => (-5 -4 -3 -2 -1 0 1 2 3 4) 
```

Puedes usar secuencias perezosas para hacer cosas realmente geniales, como generar una secuencia perezosa de todos los números de fibonacci.
```
(def fibs 
     (lazy-cat [0 1] (map + (rest fibs) fibs))) 
 
 (take 10 fibs) ;; this means, "evaluate the first 10 fibonacci numbers." 
 ; => (0 1 1 2 3 5 8 13 21 34) 
```

Este ejemplo es un poco avanzado y no se debe esperar que lo entiendas si eres un principiante. Es solo un ejemplo de algo genial que puedes hacer con secuencias perezosas. ¡Quizás puedas resolverlo de todos modos!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/jwpvt8)

## ¿Cuándo usar una lista?

Usualmente, es preferible usar un vector que usar una lista, ya que no hay riesgo de que el compilador evalúe accidentalmente un vector como una función, y es más rápido acceder a elementos arbitrarios de un vector. Las listas son más útiles en 3 casos:

*   Generando código usando una macro.
*   Generando secuencias perezosas "infinitas".
*   Prependiendo elementos a una colección.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-collections/18411) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-vectors/18421) |  
| [Colecciones](//forum.freecodecamp.com/t/clojure-collections/18411) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Vectores](//forum.freecodecamp.com/t/clojure-vectors/18421) |