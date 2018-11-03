---
title: Clojure Hashmaps
localeTitle: Hashmaps Clojure
---
Un hashmap es una colección que asigna claves a valores. Tienen varios nombres en otros idiomas; Python se refiere a ellos como diccionarios, y los objetos de Javascript funcionan esencialmente como hashmaps.

Un mapa hash, como muchas colecciones, puede construirse de dos maneras. Existe la función constructora:
```
;; Note that each argument is *prepended* to the hashmap, not appended. 
 (def a-hashmap (hash-map :a 1 :b 2 :c 3)) 
 a-hashmap 
 ; => {:c 3, :b 2, :a 1} 
```

También puedes definirlos usando un literal de hashmap. Esto suele ser más conciso y claro. Se recomienda usar comas para separar los pares clave / valor en los hashmaps, ya que puede aclarar los límites.
```
;; This hashmap is actually in the right order, unlike the one above. 
 (def another-hashmap {:a 1, :b 2, :c 3}) 
 another-hashmap 
 ; => {:a 1, :b 2, :c 3} 
```

## Palabras clave y recuperación de valores de hashmaps.

Sostener. ¿Que es esto? `:a` ? `:b` ? `:c` ? Esos se ven extraños. Esas, ya ves, son palabras clave. Se llaman palabras _clave_ porque a menudo se usan como claves en los hashmaps.

¿Por qué se usan a menudo como llaves? Bueno, a diferencia de las cadenas, las palabras clave se pueden usar como funciones para extraer valores de un hashmap; no hay necesidad de `get` o `nth` !
```
(def string-hashmap {"a" 1, "b" 2, "c" 3}) 
 ("a" string-hashmap) 
 ; => ClassCastException java.lang.String cannot be cast to clojure.lang.IFn 
 
 (def keyword-hashmap {:a 1, :b 2, :c 3}) 
 (:a keyword-hashmap) 
 ; => 1 
 
 ;; You can also pass a keyword a default value in case it's not found, just like get. 
 (:not-in-the-hashmap keyword-hashmap "not found!") 
 ; => "not found!" 
```

## Convertir otras colecciones a hashmaps

Convertir a un hashmap es complicado. Para demostrarlo, intentemos usarlo como `vec` o `seq` .
```
(hash-map [:a 1 :b 2 :c 3]) 
 ; => IllegalArgumentException No value supplied for key: [:a 1 :b 2 :c 3] 
```

La `hash-map` cree que estamos intentando crear un hashmap con `[:a 1 :b 2 :c 3]` como una de las teclas. Mira lo que pasa si le damos el número correcto de argumentos:
```
(hash-map [:a 1 :b 2 :c 3] "foo") 
 ; => {[:a 1 :b 2 :c 3] "foo"} 
```

Para convertir una secuencia en un hashmap, deberá utilizar y comprender `apply` . Afortunadamente, esto es bastante simple: `apply` esencialmente destruye una colección antes de aplicarle una función.
```
;; These two expressions are exactly the same. 
 (+ 1 2 3) 
 ; => 6 
 (apply + [1 2 3]) 
 ; => 6 
```

Así es como convertirías un vector a un hashmap:
```
(apply hash-map [:a 1 :b 2 :c 3]) 
 ; => {:c 3, :b 2, :a 1} 
 
 ;; This is the same as: 
 (hash-map :a 1 :b 2 :c 3) 
 ; => {:c 3, :b 2, :a 1} 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/k9cOjo)

## Actualizar un hashmap

Puedes actualizar los valores dentro de un hashmap usando `assoc` . Esto le permite agregar nuevos pares clave / valor o cambiar los antiguos.
```
(def outdated-hashmap {:a 1, :b 2, :c 3}) 
 
 (def newer-hashmap (assoc outdated-hashmap :d 4)) 
 newer-hashmap 
 ; => {:a 1, :b 2, :c 3, :d 4} 
 
 (def newest-hashmap (assoc newer-hashmap :a 22)) 
 newest-hashmap 
 ; => {:a 22, :b 2, :c 3, :d 4} 
 
 ;; Note that outdated-hashmap has not been mutated by any of this. 
 ;; Assoc is pure and functional. 
 outdated-hashmap 
 ; => {:a 1, :b 2, :c 3} 
```

## ¿Cuándo usar un hashmap?

Un hashmap es útil cuando quiere dar nombres a sus variables. Si alguna vez piensas para ti mismo, _"¿Qué pasaría si usara un objeto ..."_ antes de que salgas de él y te des cuenta de que estás usando Clojure, intenta usar un hashmap?

También son útiles si desea asociar dos valores diferentes entre sí. Tome, por ejemplo, un cifrado ROT13: podría asociar `\A` con `\N` , `\B` con `\M` , etc. (Esto sería largo y aburrido de escribir en la mayoría de los idiomas, pero Clojure tiene algunas funciones que pueden generarlo por usted) y hazlo _divertido!_ )

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-vectors/18421) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:") |  
| [Vectores](//forum.freecodecamp.com/t/clojure-vectors/18421) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | Para ser añadido |