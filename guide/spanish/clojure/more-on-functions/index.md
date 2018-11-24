---
title: Clojure More on Functions
localeTitle: Clojure Más sobre funciones
---
Funciones Son muy importantes. Es muy difícil hacer cualquier cosa sin una función. Son integrales para cualquier lenguaje, pero especialmente para Clojure, ya que es un lenguaje de programación funcional que rechaza el diseño orientado a objetos. ¡Aprendamos un poco más sobre ellos!

## Aridad

**Arity se** refiere a la cantidad de argumentos que su función espera.
```
;; add expects 2 arguments. Its arity is 2. 
 (defn add [xy] (+ xy)) 
 (add 2 2) 
 ; => 4 
 
 ;; + itself is a function, and it can have any number of arguments. 
 (+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16) ;; and so on... 
 ; => 136 
```

Clojure tiene una sintaxis especial que le permite permitir que su función realice diferentes tareas dependiendo de la cantidad de argumentos que reciba. Esto se llama aridad variable.
```
(defn foo 
  ([]                               ; if this function gets no arguments... 
    (println "Lisa needs braces!")) ; do this. 
  ([arg1]                           ; if this function gets 1 argument... 
    (println "Dental plan!")))      ; do this instead! 
 (foo) 
 ; => Lisa needs braces! 
 ;    nil 
 (foo "this is a placeholder argument.") 
 ; => Dental plan! 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/sXGplb)

## Funciones anonimas

Veamos una función realmente simple: una función que suma 1 a un número.
```
;; I've called this function "my-inc" so you don't confuse it with inc. 
 ;; inc is a built-in function that already does this for us. 
 (defn my-inc [n] (+ 1 n)) 
 (inc' 5) 
 ; => 6 
```

Esto parece bastante simple. Toma un solo parámetro - `n` - y devuelve `n + 1` . Vamos a desarmarlo.
```
(def my-inc-2 (fn [n] (+ 1 n))) 
 (inc' 5) 
 ; => 6 
```

Puedes ver en esto que usar `defn` es solo una abreviatura para usar `(def ... (fn ...))` . Pero esto revela algo interesante. Lo que realmente estamos haciendo no es 'definir una función', solo es vincular una función anónima a un nombre especial - `inc'` . ¿Y si no le damos un nombre?
```
((fn [n] (+ 1 n)) 5) 
 ; => 6 
```

Bam! ¡Auge! Kapow! Funciones anónimas. Esto puede parecer inútil ahora, pero es bastante útil más adelante para aplicar funciones a listas usando `map` , `reduce` y `filter` . Darle a cada función que escribes un nombre se vuelve aburrido y engorroso, rápido.

Hay una forma más corta de escribir funciones anónimas, destinadas a funciones muy cortas y simples. No permite la desestructuración o aridad variable. Sin embargo, es bastante conciso.
```
(#(+ 1 %) 5) 
 ; => 6 
```

`#(...)` es una forma abreviada de definir una función anónima. `%` refiere al primer argumento de la función. Si su función espera varios argumentos, puede usar `%1, %2, ... %n` .
```
(#(str %1 %2 %3) "foo" "bar" "baz") 
 ; => "foobarbaz" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/roYRgS)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-collections/18411) |  
| [Bucle y repetición](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Colecciones](/http://forum.freecodecamp.com/t/clojure-collections/18411) |