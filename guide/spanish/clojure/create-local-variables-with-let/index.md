---
title: Clojure Create Local Variables with Let
localeTitle: Clojure Crear variables locales con Let
---
`let` es una parte fundamental de Clojure. Mientras que `def` crea una variable global, `let` crear una variable local.
```
(def x 5) 
 (println x) 
 ; => 5 
 ;    nil 
 (let [x 2] 
  (println x)) 
 ; => 2 
 ;    nil 
 (println x) 
 ; => 5 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/xcNth2)

`x` en este ejemplo nunca se cambia realmente. `x` solo se refiere a algo diferente dentro de nuestra `let` vinculante. Esta puede ser una forma útil de evitar la repetición dentro de una función.

Esto es increíblemente útil. Tener demasiadas variables globales puede llevar a errores desagradables y comportamiento no deseado.
```
(def x 5) 
 (defn add-5 [y] (+ xy)) 
 (add-5 5) 
 ; => 10 
 (defn change-x [] 
  (def x 6)) 
 (change-x) 
 ; => nil 
 (add-5 5) 
 ; => 11 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/MFjA3C)

¡UH oh! ¡Eso ya no agrega 5! Por supuesto, este ejemplo es un poco tonto, pero el uso de demasiadas variables globales puede dar lugar a errores que son tan aterradores como este.

**Nota:** No estamos _reasignando_ realmente `x` aquí, como lo harías en un lenguaje tipo C. Solo estamos creando una nueva variable que también se llama x. Esta es una _muy, muy, **muy**_ mala idea.

## Enlaces múltiples

`let` también puede definir múltiples variables a la vez, y puede asignar variables a expresiones.
```
(let [spam "foo" 
      ham (str "b" "ar")] ; str is a function that concatenates strings 
  (println spam ham))      ; or converts variables into strings. 
 ; => foo bar 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/y5EBIM)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |  
| [Condicionales](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Bucle y repetición](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |