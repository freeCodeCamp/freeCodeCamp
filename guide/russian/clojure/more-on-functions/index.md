---
title: Clojure More on Functions
localeTitle: Clojure Больше о функциях
---
Функция! Они очень важны. Очень сложно делать что-либо без функции. Они являются неотъемлемой частью любого языка, но особенно Clojure, поскольку это функциональный язык программирования, который отвергает объектно-ориентированный дизайн. Давайте узнаем еще о них!

## Arity

**Arity** относится к числу аргументов, которые ожидает ваша функция.
```
;; add expects 2 arguments. Its arity is 2. 
 (defn add [xy] (+ xy)) 
 (add 2 2) 
 ; => 4 
 
 ;; + itself is a function, and it can have any number of arguments. 
 (+ 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16) ;; and so on... 
 ; => 136 
```

Clojure имеет специальный синтаксис, который позволяет вам делать свою функцию разными вещами в зависимости от количества аргументов, которые она получает. Это называется переменной arity.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/sXGplb)

## Анонимные функции

Давайте посмотрим на очень простую функцию: функцию, которая добавляет 1 к числу.
```
;; I've called this function "my-inc" so you don't confuse it with inc. 
 ;; inc is a built-in function that already does this for us. 
 (defn my-inc [n] (+ 1 n)) 
 (inc' 5) 
 ; => 6 
```

Это выглядит довольно просто. Он принимает один параметр - `n` - и возвращает `n + 1` . Давайте ее разобьем.
```
(def my-inc-2 (fn [n] (+ 1 n))) 
 (inc' 5) 
 ; => 6 
```

Вы можете видеть из этого, что использование `defn` является просто сокращением для использования `(def ... (fn ...))` . Но это показывает что-то интересное. То, что мы на самом деле делаем, это не «определение функции», а просто привязка анонимной функции к специальному имени - `inc'` . Что, если мы не дадим ему имя?
```
((fn [n] (+ 1 n)) 5) 
 ; => 6 
```

Бам! Boom! Kapow! Анонимные функции. Теперь это может показаться бесполезным, но в конце концов это очень удобно для применения функций списков с использованием `map` , `reduce` и `filter` . Предоставление каждой функции, которую вы пишете, становится скучным и громоздким, быстрым.

Существует более короткий способ писать анонимные функции, предназначенные для очень коротких и простых функций. Это не позволяет деструктурировать или переменную arity. Однако это довольно кратким.
```
(#(+ 1 %) 5) 
 ; => 6 
```

`#(...)` - сокращенный способ определения анонимной функции. `%` относится к первому аргументу функции. Если ваша функция ожидает несколько аргументов, вы можете использовать `%1, %2, ... %n` .
```
(#(str %1 %2 %3) "foo" "bar" "baz") 
 ; => "foobarbaz" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/roYRgS)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:")](//forum.freecodecamp.com/t/clojure-collections/18411) |  
| [Loop и Recur](//forum.freecodecamp.com/t/clojure-loop-recur/18418) | [Содержание](//forum.freecodecamp.com/t/clojure-resources/18422) | [Коллекции](/http://forum.freecodecamp.com/t/clojure-collections/18411) |