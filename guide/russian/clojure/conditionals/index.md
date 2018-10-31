---
title: Clojure Conditionals
localeTitle: Clojure Conditionals
---
Вы не собираетесь нигде на язык, если все, что вы можете сделать, это определить функции, которые печатают вещи и выполняют простую арифметику. Условные и логические элементы являются фундаментальной частью создания кода, который делает интересные, полезные вещи. Попробуйте представить мир без логики в программах: вы даже не сможете простыми вещами, например, проверить, равны ли два числа!

## Логические операторы

Clojure, как и большинство языков, имеет 3 логических оператора: `and` , и / `or` `not` . Эти функции принимают логические значения ( `true` или `false` ) в качестве аргументов и возвращают логические значения, основанные на том, что эти логические элементы. Как и все в Lisp, эти операторы используют префиксную нотацию, что означает, что они могут выглядеть странно для вас.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/XfXn8T)

## Если

`if` позволяет выполнить код на основе того, является ли логическое значение `true` или `false` . `if` в Clojure выглядит довольно странно, не потому, что использует префиксную нотацию, а потому, что ключевого слова else нет. Если условие истинно, оно оценивает первое выражение. Если он ложный, он выполняет второй.
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4 
  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4 
 ; => Maths works! 
 ;    nil 
```

Это создает проблему: что, если мы хотим сделать несколько вещей?
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") 
  (println "Maths still works!") 
  (println "UH OH")) 
 ; => CompilerException java.lang.RuntimeException: Too many arguments to if 
```

К счастью, у нас `do` функция `do` чтобы решить эту проблему. `do` оценку нескольких выражений один за другим.
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

**Примечание:** поскольку `if` есть, само выражение, нет необходимости в тройном операторе, например, во многих C-подобных языках.
```
var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH"; 
 console.log(doesMathsWork); 
 // => Maths works! 
```

Теперь, когда вы видели, как это работает, это выглядит не так странно? Это гораздо легче читать и понимать ( не обращая внимания на отсутствие слова `else` ):
```
(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH")) 
 (println does-maths-work) 
 ; => Maths works! 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/5XhcAa)

## Альтернативы if

Clojure также имеет некоторые макросы, которые ведут себя аналогично `if` , и иногда могут быть более краткими.

`if-not` , пожалуй, самый простой пример - это `if` инвертировать. Эти два фрагмента кода абсолютно одинаковы:
```
(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!")) 
 (def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!")) 
```

Первое выражение оценивается, если оно ложно, а второе оценивается, если оно истинно. Обратите внимание на то, что использование `if-not` избегает гнездиться наше состояние внутри `not` , что может помочь облегчить наш код , чтобы понять.

`when` это еще один полезный макрос. Эти два фрагмента кода одинаковы:
```
(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!"))) 
 (when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!")) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/tUVAw3)

**Примечание:** Нет, `when/else` . `when` выполняется _только в том_ случае, если условие истинно.

`cond` позволяет объединить множество условий в одно выражение. Он принимает последовательность пар логического выражения и выражения и оценивает каждое логическое выражение по порядку. Когда он находит логическое выражение, которое оценивает значение `true` , он вычисляет второе выражение пары. После этого никакие другие выражения не оцениваются. Это поведение похоже на логику короткого замыкания в Javascript.
```
(cond (= 0 1) "I'm paired with a false expression and I don't evalute.." 
      (= 1 1) "I'm the first expression paired with a true expression!" 
      (= 2 2) "I don't evalute even though I'm also paired with true ;_;" 
      :else   "I evaluate if no other boolean expressions evaluate to true") 
 ; => "I'm the first expression paired with a true expression!" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/zu5RCq)

Ключевое слово `:else` можно использовать вместо логического выражения в последней паре выражений в `cond` . Это означает, что соответствующее выражение должно быть оценено, если все остальные булевские выражения оцениваются как false. Это то же самое, что `true` в качестве последнего булевского выражения.

## Специальные формы и оценка

Возможно, вы заметили, что правила оценки условных выражений немного отличаются от других выражений. Условное выражение является частью группы выражений, называемых _специальными формами_ . Это означает, что они не соответствуют нормальным правилам оценки Clojure.

Как вы теперь знаете, условное выражение оценивает только подвыражение, которое соответствует логическому результату. Это означает, что неверный код в условном выражении не будет оцениваться в некоторых случаях. Рассмотрим приведенные ниже выражения `if` . Хотя `(+ 1 "failure")` является недопустимым выражением, Clojure генерирует исключение только при условии `false` .
```
(if true "sucess" (+ 1 "failure")) 
 ; => "sucess" 
 (if false "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/n4Ug2S)

Сравните это с поведением `my-if` определенным ниже:
```
(defn my-if [condition true-case false-case] 
  (if condition true-case false-case)) 
 
 (my-if true "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/U7cVI4)

`my-if` - это функция с нормальными правилами оценки, поэтому все ее подвыражения должны быть опровергнуты до того, как их можно будет оценить.

В Clojure есть много полезных макросов, подобных этим для всех видов задач. Попробуйте взглянуть на [документацию Clojure](https://clojuredocs.org/) и посмотреть, сможете ли вы найти ее больше!

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:")](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |  
| [Резюме](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [Содержание](//forum.freecodecamp.com/t/clojure-resources/18422) | [Условные](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |