---
title: Clojure Create Local Variables with Let
localeTitle: Clojure Создание локальных переменных с Let
---
`let` это фундаментальная часть Clojure. Если `def` создает глобальную переменную, `let` создает локальную переменную.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/xcNth2)

`x` в этом примере никогда не изменяется. `x` просто ссылается на что-то другое внутри нашей привязки `let` . Это может быть полезным способом избежать повторения внутри функции.

Это невероятно полезно. Слишком много глобальных переменных может привести к неприятным ошибкам и непреднамеренному поведению.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/MFjA3C)

О, о! Это больше не добавляет 5! Конечно, этот пример немного глуп, но использование слишком большого числа глобальных переменных может привести к ошибкам, столь же страшным, как этот.

**Примечание.** Мы не _переназначаем_ здесь `x` , как на языке C. Мы просто создаем новую переменную, которая также называется x. Это _очень, очень, **очень**_ плохая идея.

## Множественные привязки

`let` также может определять сразу несколько переменных и может назначать переменные выражениям.
```
(let [spam "foo" 
      ham (str "b" "ar")] ; str is a function that concatenates strings 
  (println spam ham))      ; or converts variables into strings. 
 ; => foo bar 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/y5EBIM)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:")](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |  
| [Условные](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [Содержание](//forum.freecodecamp.com/t/clojure-resources/18422) | [Loop и Recur](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |