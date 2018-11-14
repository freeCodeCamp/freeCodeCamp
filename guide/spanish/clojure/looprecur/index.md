---
title: Clojure   Looprecur
localeTitle: Clojure Looprecur
---
Es posible que necesite para entender [`if`](//forum.freecodecamp.com/t/clojure-conditionals/18412) y [`let`](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) de comprender plenamente la recursividad en Clojure.

## `for` y `while`

Clojure no tiene para bucles o mientras bucles. Esto tiene sentido, si lo piensas. Un bucle `for` cambia una variable, y eso no está permitido en Clojure.
```
for (var i = 0; i < 10; i++) { 
  console.log(i); 
 } 
```

`i++` significa que agregamos uno a la variable `i` cada vez que finaliza el bucle, un claro ejemplo de una variable que se está mutando.

`while` bucles dependen menos obviamente de las variables cambiantes, pero lo son, tanto como lo son para los bucles.
```
var i = 0; 
 while (i < 10) { 
  console.log(i); 
  i++; 
 } 
```

`while` bucles siempre tienen una condición, como `i < 10` , y se romperán si esa condición ya no es verdadera. Esto significa que deben tener algún tipo de efecto secundario (como agregar 1 a `i` ) para que la condición sea finalmente falsa; De lo contrario, el bucle duraría para siempre.

## Recursion

Afortunadamente, Clojure tiene una serie de bucles. Estos bucles usan recursión, una función que se llama a sí misma. El algoritmo recursivo más simple es encontrar un factorial de número positivo (5 factorial, por ejemplo, es igual a `5 * 4 * 3 * 2` ).
```
(defn fact [x] 
  (loop [nx prod 1] ;; this works just like a 'let' binding. 
    (if (= 1 n)  ;; this is the base case. 
      prod 
      (recur (dec n) (* prod n))))) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/3iP3tI)

Notarás que `(loop [nx prod 1] ...)` parece bastante a un enlace `let` . En realidad, funciona de la misma manera: aquí, enlazamos `n` a `x` , y `prod` . A 1.

Cada función recursiva tiene un "caso base". Esta es la condición que hace que el bucle se detenga en bucle. En este caso, nuestro bucle se detiene si `n = 1` , y devuelve `prod` . Si `n` no es igual a 1, entonces el bucle se repite.
```
(recur (dec n) (* prod n)) 
```

Esta función de `recur` reinicia el bucle, pero con diferentes enlaces. Esta vez, `n` no está vinculado a `x` , sino que está vinculado a `(dec n)` (lo que significa `decrement n` , o `n - 1` ), y `prod` está vinculado a `(* prod n)` .

Entonces cuando llamamos a la función, esto es lo que sucede:
```
(fact 5) 
 ; Loop 1: 5 != 1, so the loop recurs with 4 (5 - 1) and 5 (1 * 5). 
 ; Loop 2: 4 != 1, so the loop recurs with 3 (4 - 1) and 20 (5 * 4). 
 ; Loop 3: 3 != 1, so the loop recurs with 2 (3 - 1) and 60 (20 * 3). 
 ; Loop 4: 2 != 1, so the loop recurs with 1 (2 - 1) and 120 (60 * 2). 
 ; Loop 5: 1 == 1, so the function returns prod, which is now equal to 120. 
 ; => 120 
```

Lo ingenioso de la recursión es que las variables en sí nunca se cambian. Lo único que cambia es a lo que se _refieren_ `n` y `prod` . Nunca decimos, `n--` , o `n += 2` .

## ¿Por qué usar loop / recurrir?

Quizás se esté preguntando por qué usaría `loop/recur` lugar de simplemente definir una función que se llame a sí misma. Nuestra función factorial podría haberse escrito así:
```
(defn fact-no-loop [n] 
  (if (= 1 n) 
    1 
    (* n (fact-no-loop (dec n))))) 
```

Esto es más conciso, y funciona de una manera similar. ¿Por qué _alguna vez_ usarías loop y recurrir?

### Optimización de llamadas de cola

Si usa `loop/recur` , entonces el compilador (el software que convierte el código Clojure en un código de bytes JVM) sabe que desea crear un bucle recursivo. Esto significa que hace todo lo posible para optimizar su código para la recursión. Comparemos la velocidad de `fact` y `fact-no-loop` :
```
(time (fact 20)) 
 ; => "Elapsed time: 0.083927 msecs" 
 ;    2432902008176640000 
 (time (fact-no-loop 20)) 
 ; => "Elapsed time: 0.064937 msecs" 
 ;    2432902008176640000 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/tpC0Xo)

A esta escala, la diferencia es despreciable. De hecho, el `fact-no-loop` es ocasionalmente más rápido que el `fact` debido a la naturaleza impredecible de la memoria de la computadora. Sin embargo, en una escala más grande, este tipo de optimización puede hacer que su código sea mucho más rápido.

### Anidamiento recursivo dentro de funciones

`fact-no-loop` funciona sin `loop/recur` porque la función completa es recursiva. ¿Qué pasaría si quisiéramos que parte de nuestra función usara un bucle recursivo y luego el resto para hacer algo no recursivo? Tendríamos que definir dos funciones completamente separadas. Usar `loop/recur` nos permite usar una pequeña función anónima en su lugar.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:") |  
| [Dejar enlaces](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | Para ser añadido |