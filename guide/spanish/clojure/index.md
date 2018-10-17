---
title: Clojure
localeTitle: Clojure
---
## Empezando con Clojure

Antes de comenzar, es posible que desee [instalar Clojure](http://clojure.org/guides/getting_started) y [Leiningen](http://leiningen.org/#install) (que es una herramienta para administrar proyectos en Clojure). Esto le permitirá ejecutar Clojure en la línea de comando usando un REPL (Read-Evaluate-Print-Loop).

## Definiendo variables

El pan y la mantequilla de cualquier lenguaje de programación son variables y funciones. ¡Definamos una variable!
```
(def our-string "Hello world!") 
```

Pan comido. Ese fragmento de código utiliza la macro `def` para asociar una cadena ( `"Hello world!"` ) A un símbolo ( `our-string` ). También podríamos haber definido un número, como `1` o `1.1` , un carácter, como `\a` o `\Z` , o algo más complicado como una lista o una expresión regular ( _uuuugh_ ).

Tenga en cuenta que nuestro código está entre paréntesis, como una lista, ¡porque todo en un Lisp es una lista! (Eso será muy importante cuando empecemos a hablar de macros).

## Definiendo funciones

Ahora, vamos a definir una función!
```
(defn hello-world [] (println our-string)) 
```

Esto es un poco más complejo. Como `def` , usa una macro ( `defn` ) para crear una variable, aunque esta vez, esa variable es una función. El vector vacío (un vector es un tipo de lista, piénselo como una matriz) después de que `hello-world` define los argumentos de esa función, en este caso, no tenemos ninguno. El código después de eso es lo que hace la función. Evalúa `our-string` , que es igual a `"Hello world!"` , y lo imprime en la consola. ¡Vamos a ejecutarlo!
```
(hello-world) 
 ; => Hello world! 
 ;    nil 
```

También podrías escribir esto:
```
(def hello-world (fn [] (println our-string))) 
```

`defn` es solo un atajo para ayudar a mantener su código conciso. `(defn ...)` y `(def ... (fn ...))` son iguales en la práctica.

## Parámetros

Bueno, eso fue bueno, pero no fue realmente emocionante. Probemos una función con parámetros. ¿Qué tal uno que suma 3 números?
```
(defn add [xyz] (+ xyz)) 
 (add 1 2 3) 
 ; => 6 
```

…Espere. `(+ xyz)` ? Eso se ve gracioso. Bueno, los Lisps se escriben usando "notación de prefijo", lo que significa que la función siempre es lo primero. Dado que todos los operadores matemáticos en Lisp ( `+ - * /` ) son solo funciones, también vienen antes que sus argumentos (en este caso, `xyz` ).

Notarás que nuestro vector tiene algunas cosas ahora: `[xyz]` ! Cada vez que una función tiene parámetros, los define en ese vector junto al nombre de la función.

### Destruccion

Una gran característica sobre los argumentos en Clojure es la desestructuración. Te permite 'sacar' elementos de una lista.
```
(defn add [[xy] z] (+ xyz)) 
 (add [1 2] 3) 
 ; => 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/SWlvKn)

Los argumentos para esa función son una colección ( `[xy]` ) y un número ( `z` ). Podemos usar la desestructuración para sacar los elementos primero y segundo de la lista y llamarlos `x` e `y` .

### Funciones con cualquier número de parámetros.

También puede definir una función con un número arbitrario de argumentos usando `&` .
```
(defn demonstrate-rest [first & rest] 
  (println first) 
  (println rest)) 
 (demonstrate-rest 1 "foo" ["bar" 22]) 
 ; => 1 
 ;    ("foo" ["bar" 22]) 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/VftymP)

Como puede ver, el uso `&` separación de los argumentos de nuestra función en una variable llamada `first` y una lista de variables llamada `rest` . ¡Esto significa que nuestra función podría tener cualquier número de argumentos!

## Volviendo

Es posible que hayas notado algunas cosas extrañas. Siempre que usamos `println` , parece que `nil` está apareciendo en nuestra salida. Además, nuestra función de `add` devuelve `6` , pero nunca le dijimos que devolviera nada.

En Clojure, las devoluciones son 'implícitas'. Si has usado Ruby, probablemente estés familiarizado con este concepto. En lugar de decirle a nuestra función que devuelva algo, evalúa todo el código dentro de su cuerpo y devuelve el resultado. Nuestra función de `add` , por ejemplo, evalúa `(+ xyz)` y luego devuelve ese resultado.

La razón por la que nuestras funciones que utilizan `println` output `nil` se debe a que `println` evalúa como `nil` . ( `nil` es como `null` o `None` - no representa nada).

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/what-is-clojure/18419) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-conditionals/18412) |  
| [Resumen](//forum.freecodecamp.com/t/what-is-clojure/18419) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Condicionales](//forum.freecodecamp.com/t/clojure-conditionals/18412) |