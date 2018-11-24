---
title: Clojure   Vectors
localeTitle: Clojure Vectors
---
Вектор, пожалуй, самый простой тип коллекции в Clojure. Вы можете думать об этом как о массиве в Javascript. Определим простой вектор:
```
(def a-vector [1 2 3 4 5]) 
 ;; Alternatively, use the vector function: 
 (def another-vector (vector 1 2 3 4 5)) 
 ;; You can use commas to separate items, since Clojure treats them as whitespace. 
 (def comma-vector [1, 2, 3, 4, 5]) 
```

Вы увидите, что он использует квадратные скобки, как и массив в JS. Так как Clojure, как JS, динамически типизируется, векторы могут содержать элементы любого типа, включая другие векторы.
```
(def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"]) 
```

## Добавление элементов в вектор

Вы можете добавлять элементы к вектору, используя `conj` . Вы также можете добавить к списку, используя `into` , но обратите внимание, что `into` предназначен для слияния двух векторов, поэтому оба его аргумента должны быть векторами, а использование `into` них медленнее, чем использование `conj` .
```
(time (conj [1 2] 3)) 
 ; => "Elapsed time: 0.032206 msecs" 
 ;    [1 2 3] 
 (time (into [1] [2 3])) 
 ; => "Elapsed time: 0.078499 msecs" 
 ;    [1 2 3] 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [IDEOne!](https://ideone.com/wBSUEd)

## Получение элементов из вектора

Вы можете извлекать элементы из вектора с помощью `get` . Это эквивалентно использованию записи в виде скобок для доступа к элементам в массиве на многих императивных языках. Элементы в векторе 0-индексируются, считая слева.
```
var arr = [1, 2, 3, 4, 5]; 
 arr[0]; 
 // => 1 
```

В Clojure это будет написано так:
```
(def a-vector [1 2 3 4 5]) 
 (get a-vector 0) 
 ; => 1 
```

Вы также можете `get` значение по умолчанию, если вы укажете ему индекс, который не находится в массиве.
```
;; the list doesn't have 2147483647 elements, so it'll return a string instead. 
 (get a-vector 2147483646 "sorry, not found!") 
 ; => "sorry, not found!" 
```

## Преобразование других коллекций в векторы

Невекторные структуры данных могут быть преобразованы в векторы с использованием функции `vec` . С hashmaps это создает 2D-вектор, содержащий пары ключей и значений.
```
(vec '(1 2 3 4 5)) 
 ; => [1 2 3 4 5] 
 (vec {:jack "black" :barry "white"}) 
 ; => [[:jack "black"] [:barry "white"]] 
```

## Когда использовать вектор?

Вектор должен использоваться почти во всех случаях, если вам нужна коллекция, потому что у них кратчайшее время произвольного доступа, что позволяет легко извлекать элементы из вектора. Обратите внимание, что векторы упорядочены. Если заказ не имеет значения, лучше использовать набор. Также обратите внимание, что векторы предназначены для добавления элементов; если вам нужно добавить элементы, вы можете использовать список.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:")](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |  
| [Списки](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [Содержание](//forum.freecodecamp.com/t/clojure-resources/18422) | [Hashmaps](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |