---
title: Clojure Hashmaps
localeTitle: Clojure Hashmaps
---
Хешмап - это коллекция, которая отображает ключи к значениям. У них разные имена на других языках; Python относится к ним как словарям, а объекты Javascript по существу работают как хэшмапы.

Хешмап может, как и многие коллекции, быть построен двумя способами. Существует функция-конструктор:
```
;; Note that each argument is *prepended* to the hashmap, not appended. 
 (def a-hashmap (hash-map :a 1 :b 2 :c 3)) 
 a-hashmap 
 ; => {:c 3, :b 2, :a 1} 
```

Вы также можете определить их, используя литерал hashmap. Это часто более кратким и ясным. Рекомендуется использовать запятые для разделения пар ключ / значение в хэшмапах, так как это может сделать границы более четкими.
```
;; This hashmap is actually in the right order, unlike the one above. 
 (def another-hashmap {:a 1, :b 2, :c 3}) 
 another-hashmap 
 ; => {:a 1, :b 2, :c 3} 
```

## Ключевые слова и извлечение значений из хэшмапов

Задержать. Что это? `:a` ? `:b` ? `:c` ? Они выглядят странно. Вы видите, это ключевые слова. Их называют _ключевыми_ словами, поскольку они часто используются в качестве ключей в хэшмапах.

Почему они часто используются в качестве ключей? Ну, в отличие от строк, ключевые слова могут использоваться как функции для извлечения значений из хэш-карты; нет необходимости в `get` или `nth` !
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

## Преобразование других коллекций в хэшмапы

Преобразование в hashmap является сложным. Чтобы продемонстрировать, давайте попробуем использовать его как `vec` или `seq` .
```
(hash-map [:a 1 :b 2 :c 3]) 
 ; => IllegalArgumentException No value supplied for key: [:a 1 :b 2 :c 3] 
```

Функция `hash-map` считает, что мы пытаемся создать `hash-map` с `[:a 1 :b 2 :c 3]` качестве одного из ключей. Посмотрите, что произойдет, если мы дадим ему правильное количество аргументов:
```
(hash-map [:a 1 :b 2 :c 3] "foo") 
 ; => {[:a 1 :b 2 :c 3] "foo"} 
```

Чтобы преобразовать последовательность в хэш-карту, вам нужно будет использовать и понимать `apply` . К счастью, это довольно просто: `apply` существу деструкции коллекции перед тем, как применить к ней функцию.
```
;; These two expressions are exactly the same. 
 (+ 1 2 3) 
 ; => 6 
 (apply + [1 2 3]) 
 ; => 6 
```

Вот как вы преобразовали вектор в hashmap:
```
(apply hash-map [:a 1 :b 2 :c 3]) 
 ; => {:c 3, :b 2, :a 1} 
 
 ;; This is the same as: 
 (hash-map :a 1 :b 2 :c 3) 
 ; => {:c 3, :b 2, :a 1} 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/k9cOjo)

## Обновить хэш-карту

Вы можете обновить значения внутри HashMap с помощью `assoc` . Это позволяет добавлять новые пары ключ / значение или изменять старые.
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

## Когда использовать хэш-карту?

Хешмап полезен, когда вы хотите дать имена вашим переменным. Если вы когда-нибудь думаете о себе: _«Что, если я использовал объект ...»,_ прежде чем вы выйдете из него и поймете, что используете Clojure, попробуйте использовать hashmap.

Они также полезны, если вы хотите связать два разных значения друг с другом. Возьмем, к примеру, шифр ROT13: вы можете связать `\A` с `\N` , `\B` с `\M` и т. Д. (Это было бы долго и скучно писать на большинстве языков, но у Clojure есть некоторые функции, которые могут сгенерировать его для вас и сделать это _весело!_ )

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая](//forum.freecodecamp.com/t/clojure-vectors/18421) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:")](//forum.freecodecamp.com/t/clojure-resources/18422) | следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:") |  
| [Векторы](//forum.freecodecamp.com/t/clojure-vectors/18421) | [Содержание](//forum.freecodecamp.com/t/clojure-resources/18422) | Чтобы добавить |