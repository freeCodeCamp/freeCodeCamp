---
title: What Is Clojure
localeTitle: Que es clojure
---
## Clojure es un dialecto de Lisp.

Lisps es una familia de idiomas completamente separada a los lenguajes tipo C, como C #, Javascript, Python o Ruby. Esto significa que Lisps puede parecer extraño para los programadores que están más familiarizados con estos lenguajes. Esencialmente, ser un Lisp significa que todo en Clojure es una lista que contiene datos (¡incluso llamadas a funciones!), Tiene escritura dinámica y puede definir _macros_ que le permiten manipular su propio código. Aquí hay un ejemplo simple de algunos Clojure para que los examine:
```
   (defn hello-world [] (println "Hello world!")) 
```

Esto define una función (usando la macro de `defn` ) llamada `hello-world` que no toma ninguna entrada ( `[]` ) e imprime `"Hello world!"` a la consola. Podemos llamarlo así:
```
   (hello-world) 
   ; => Hello world! 
   ;    nil 
```

## Clojure es un lenguaje funcional.

Todas las variables en Clojure son inmutables y no se pueden cambiar utilizando un operador de asignación ( `=` en la mayoría de los lenguajes tipo C) o mediante una función. Todas las funciones pretenden ser _referencialmente transparentes_ , lo que significa que si les da la misma entrada, deberían dar la misma salida sin importar qué. El ejemplo anterior de `hello-world` es referencialmente transparente: siempre imprimirá "¡Hola mundo!" no importa qué. Algo que se basa en un generador de números aleatorios no es referencialmente transparente, porque su salida es aleatoria.
```
  (defn random-function [] 
    (if (> (rand 4) 2)     ; if a random number between 0 and 2 is greater than 2... 
      (println "foo")      ; ...print "foo". otherwise... 
      (println "bar")))    ; ...print "bar" 
```

Si bien no poder cambiar las variables puede parecer una pesadilla, es mucho más fácil de lo que piensa, especialmente si el lenguaje se basa en eso (¡como lo es Clojure!), Y evitar mutaciones innecesarias puede hacer que su código sea mucho menos defectuoso.

## Clojure se ejecuta en la máquina virtual de Java.

La JVM es la máquina virtual que interpreta el código de bytes de Java y lo utiliza para ejecutar un programa. Esto significa que Clojure funciona casi a la perfección con el código diseñado para Java (aunque parece un poco extraño), y también significa que se ejecuta con bastante rapidez en comparación con algunos otros Lisps. Si bien es bastante más lento que Java, aún es mucho más rápido que Python, Ruby o Javascript.
```
  (.indexOf [1 2 3 4] 2) ;; .indexOf is a Java method! 
  ; => 1 
```

## Clojure está diseñado para la concurrencia.

"Concurrencia" aquí significa "un programa que trabaja en varios subprocesos a la vez", lo que puede hacer que su código sea mucho más rápido. También puede hacer que su código sea mucho más aburrido; ¡Imagina si dos funciones diferentes estuvieran cambiando y leyendo desde el mismo objeto a la vez! Sería un caos total. Afortunadamente, en Clojure, las variables son inmutables, lo que significa que no hay posibilidad de que este tipo de caos se desate. El lenguaje también tiene una variedad de características para hacer más fácil el código concurrente, como el sistema de memoria transaccional de software, los agentes y los átomos.

| ![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-the-basics/18410) |  
| | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Fundamentos](//forum.freecodecamp.com/t/clojure-the-basics/18410)