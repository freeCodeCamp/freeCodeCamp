---
title: Clojure   Vectors
localeTitle: Vetores de Clojure
---
Um vetor é talvez o tipo mais simples de coleção no Clojure. Você pode pensar nisso como uma matriz em JavaScript. Vamos definir um vetor simples:
```
(def a-vector [1 2 3 4 5]) 
 ;; Alternatively, use the vector function: 
 (def another-vector (vector 1 2 3 4 5)) 
 ;; You can use commas to separate items, since Clojure treats them as whitespace. 
 (def comma-vector [1, 2, 3, 4, 5]) 
```

Você verá que ele usa colchetes, assim como uma matriz em JS. Como o Clojure, como o JS, é digitado dinamicamente, os vetores podem conter elementos de qualquer tipo, incluindo outros vetores.
```
(def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"]) 
```

## Adicionando itens a um vetor

Você pode acrescentar itens a um vetor usando `conj` . Você também pode preceder a uma lista usando `into` , mas note que `into` destina-se a fusão de dois vetores, para que ambos os seus argumentos devem ser vetores, e usando `into` é mais lento do que usar `conj` .
```
(time (conj [1 2] 3)) 
 ; => "Elapsed time: 0.032206 msecs" 
 ;    [1 2 3] 
 (time (into [1] [2 3])) 
 ; => "Elapsed time: 0.078499 msecs" 
 ;    [1 2 3] 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/wBSUEd)

## Recuperando itens de um vetor

Você pode recuperar itens de um vetor usando `get` . Isso é equivalente a usar a notação de colchetes para acessar itens em uma matriz em muitas linguagens imperativas. Itens em um vetor são indexados em 0, contados a partir da esquerda.
```
var arr = [1, 2, 3, 4, 5]; 
 arr[0]; 
 // => 1 
```

No Clojure, isso seria escrito da seguinte forma:
```
(def a-vector [1 2 3 4 5]) 
 (get a-vector 0) 
 ; => 1 
```

Você também pode dar `get` um valor padrão, se você dar-lhe um índice que não está na matriz.
```
;; the list doesn't have 2147483647 elements, so it'll return a string instead. 
 (get a-vector 2147483646 "sorry, not found!") 
 ; => "sorry, not found!" 
```

## Convertendo outras coleções em vetores

Estruturas de dados não vetoriais podem ser convertidas em vetores usando a função `vec` . Com hashmaps, isso produz um vetor 2D contendo pares de chaves e valores.
```
(vec '(1 2 3 4 5)) 
 ; => [1 2 3 4 5] 
 (vec {:jack "black" :barry "white"}) 
 ; => [[:jack "black"] [:barry "white"]] 
```

## Quando usar um vetor?

Um vetor deve ser usado em quase todos os casos, se você precisar de uma coleção, porque eles têm os menores tempos de acesso aleatório, o que facilita a recuperação de itens de um vetor. Note que os vetores são ordenados. Se a ordem não importa, pode ser melhor usar um conjunto. Observe também que os vetores são projetados para anexar itens; Se você precisar inserir os itens, talvez queira usar uma lista.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |  
| [Listas](//forum.freecodecamp.com/t/clojure-lists-they-are-everything/18417) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Hashmaps](//forum.freecodecamp.com/t/clojure-hashmaps/18414) |