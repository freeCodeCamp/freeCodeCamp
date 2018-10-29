---
title: Clojure More on Functions
localeTitle: Clojure Mais sobre Funções
---
Funções! Eles são muito importantes. É muito difícil fazer qualquer coisa sem uma função. Eles são essenciais para qualquer idioma, mas especialmente para o Clojure, já que é uma linguagem de programação funcional que rejeita o design orientado a objetos. Vamos aprender mais sobre eles!

## Aridade

**Arity** refere-se ao número de argumentos que sua função espera.
```
;; add expects 2 arguments. Its arity is 2. 
 (defn add [xy] (+ xy)) 
 (add 2 2) 
 ; => 4 
 
 ;; + itself is a function, and it can have any number of arguments. 
 (+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16) ;; and so on... 
 ; => 136 
```

Clojure tem alguma sintaxe especial que permite que você deixe sua função fazer coisas diferentes dependendo do número de argumentos que recebe. Isso é chamado de aridade variável.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/sXGplb)

## Funções anônimas

Vamos ver uma função bem simples: uma função que adiciona 1 a um número.
```
;; I've called this function "my-inc" so you don't confuse it with inc. 
 ;; inc is a built-in function that already does this for us. 
 (defn my-inc [n] (+ 1 n)) 
 (inc' 5) 
 ; => 6 
```

Isso parece bem simples. Leva um único parâmetro - `n` - e retorna `n + 1` . Vamos separá-lo.
```
(def my-inc-2 (fn [n] (+ 1 n))) 
 (inc' 5) 
 ; => 6 
```

Você pode ver a partir disso que usar `defn` é apenas uma forma abreviada de usar `(def ... (fn ...))` . Mas isso revela algo interessante. O que estamos realmente fazendo não é 'definir uma função', apenas vincular uma função anônima a um nome especial - `inc'` . E se não dermos um nome?
```
((fn [n] (+ 1 n)) 5) 
 ; => 6 
```

Bam! Estrondo! Kapow! Funções anônimas. Isso pode parecer inútil agora, mas é muito útil mais tarde para aplicar funções a listas usando `map` , `reduce` e `filter` . Dando todas as funções que você escreve, um nome fica chato e pesado, rápido.

Há uma maneira mais curta de escrever funções anônimas, destinadas a funções muito curtas e simples. Não permite desestruturação ou aridade variável. No entanto, é bastante conciso.
```
(#(+ 1 %) 5) 
 ; => 6 
```

`#(...)` é uma forma abreviada de definir uma função anônima. `%` refere-se ao primeiro argumento da função. Se sua função espera vários argumentos, você pode usar `%1, %2, ... %n` .
```
(#(str %1 %2 %3) "foo" "bar" "baz") 
 ; => "foobarbaz" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/roYRgS)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-collections/18411) |  
| [Loop e Recorrente](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Coleções](/http://forum.freecodecamp.com/t/clojure-collections/18411) |