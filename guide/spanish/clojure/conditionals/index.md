---
title: Clojure Conditionals
localeTitle: Condicionales de clojure
---
No vas a llegar a ninguna parte en un idioma si todo lo que puedes hacer es definir funciones que impriman cosas y hagan aritmética simple. Los condicionales y la lógica son una parte fundamental de la creación de código que hace cosas interesantes y útiles. Intente e imagine un mundo sin lógica en los programas: ¡ni siquiera sería capaz de hacer cosas simples, como verificar si dos números son iguales!

## Operadores logicos

Clojure, como la mayoría de los lenguajes, tiene 3 operadores lógicos: `and` , `or` `not` . Estas funciones toman los valores booleanos ( `true` o `false` ) como argumentos, y devuelven valores booleanos según lo que sean esos valores booleanos. Como todo en un Lisp, estos operadores usan la notación de prefijo, lo que significa que pueden parecerte extraños.
```
(and true false) 
 ; => false 
 (and true true) 
 ; => true 
 (or false false) 
 ; => false 
 (or true false) 
 ; => true 
 (not true) 
 ; => false 
 (not false) 
 ; => true 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/XfXn8T)

## Si

`if` permite ejecutar código basado en si un booleano es `true` o `false` . `if` en Clojure parece bastante extraño, no porque use la notación de prefijo, sino porque no hay otra palabra clave. Si la condición es verdadera, evalúa la primera expresión. Si es falso, ejecuta el segundo.
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4 
  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4 
 ; => Maths works! 
 ;    nil 
```

Esto presenta un problema: ¿qué pasa si queremos hacer varias cosas?
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") 
  (println "Maths still works!") 
  (println "UH OH")) 
 ; => CompilerException java.lang.RuntimeException: Too many arguments to if 
```

Afortunadamente, tenemos la función `do` para resolver este problema. `do` evalúa múltiples expresiones, una tras otra.
```
(if (= (+ 2 2) 4) 
  (do                               ; all of this gets evaluated if 2 + 2 = 4 
    (println "Maths works!") 
    (println "Maths still works!")) 
  (println "UH OH")) 
 ; => Maths works! 
 ;    Maths still works! 
 ;    nil 
```

**Nota:** ya que `if` es, en sí misma, una expresión, no hay necesidad de un operador ternario como en muchos lenguajes similares a C.
```
var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH"; 
 console.log(doesMathsWork); 
 // => Maths works! 
```

Ahora que has visto cómo funciona, no parece tan extraño, ¿verdad? Esto es mucho más fácil de leer y entender (ignorando la falta de la palabra `else` ):
```
(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH")) 
 (println does-maths-work) 
 ; => Maths works! 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/5XhcAa)

## Alternativas a si

Clojure también tiene algunas macros que se comportan de manera similar a `if` , y algunas veces pueden ser más concisas.

`if-not` es quizás el ejemplo más simple, es `if` invertido. Estas dos piezas de código son exactamente las mismas:
```
(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!")) 
 (def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!")) 
```

La primera expresión se evalúa si es falsa y la segunda se evalúa si es verdadera. Nótese que el uso de `if-not` evita que anidan dentro de nuestra condición `not` , que puede ayudar a que nuestro código sea más fácil de entender.

`when` es otra macro útil. Estas dos piezas de código también son las mismas:
```
(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!"))) 
 (when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!")) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/tUVAw3)

**Nota:** No hay `when/else` . `when` _solo se_ ejecuta si la condición es verdadera.

`cond` permite combinar muchas condiciones en una sola expresión. Toma una secuencia de expresión lógica y pares de expresión y evalúa cada expresión lógica en orden. Cuando encuentra una expresión lógica que se evalúa como `true` , evalúa la segunda expresión del par. Después de esto, no se evalúan otras expresiones. Este comportamiento es como la lógica de cortocircuito en Javascript.
```
(cond (= 0 1) "I'm paired with a false expression and I don't evalute.." 
      (= 1 1) "I'm the first expression paired with a true expression!" 
      (= 2 2) "I don't evalute even though I'm also paired with true ;_;" 
      :else   "I evaluate if no other boolean expressions evaluate to true") 
 ; => "I'm the first expression paired with a true expression!" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/zu5RCq)

La palabra clave `:else` se puede usar en lugar de una expresión lógica en el último par de expresiones en `cond` . Significa que su expresión correspondiente debe evaluarse si todas las demás expresiones booleanas se evalúan como falsas. Es lo mismo que poner `true` como la última expresión booleana.

## Formas especiales y evaluación

Es posible que haya notado que las reglas para evaluar expresiones condicionales son un poco diferentes de otras expresiones. Las expresiones condicionales son parte de un grupo de expresiones llamadas _formas especiales_ . Esto significa que no siguen las reglas normales de evaluación de Clojure.

Como ya sabe, una expresión condicional solo evalúa la subexpresión que corresponde al resultado booleano. Esto significa que el código no válido dentro de una expresión condicional no se evaluará en algunos casos. Considere los dos `if` las expresiones de abajo. Aunque `(+ 1 "failure")` es una expresión no válida, Clojure solo genera una excepción cuando la condición es `false` .
```
(if true "sucess" (+ 1 "failure")) 
 ; => "sucess" 
 (if false "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/n4Ug2S)

Compare esto con el comportamiento de `my-if` definido a continuación:
```
(defn my-if [condition true-case false-case] 
  (if condition true-case false-case)) 
 
 (my-if true "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [¡IDEAe!](https://ideone.com/U7cVI4)

`my-if` es una función con reglas de evaluación normales, por lo que todas sus subexpresiones se deben evaluar antes de poder evaluarlas.

Clojure tiene un montón de macros útiles como estas para todo tipo de tareas. ¡Intente ver [la documentación de Clojure](https://clojuredocs.org/) y vea si puede encontrar más!

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |  
| [Resumen](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [Tabla de Contenidos](//forum.freecodecamp.com/t/clojure-resources/18422) | [Condicionales](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |