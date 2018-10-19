---
title: Clojure Lists They Are Everything
localeTitle: Clojure Lists Eles são tudo
---
As listas são fundamentais para o Clojure. Clojure é um Lisp e Lisps foram originalmente usados ​​para processamento de listas. Tudo em um Lisp é uma lista!
```
(def foo "bar") 
```

Esse pedaço de código é na verdade uma lista! Então, é qualquer coisa entre dois colchetes no Clojure. Interessante, não é? Isto é o que torna o Lisps tão interessante - você pode facilmente escrever código que gera um novo código, porque gerar código é tão simples quanto fazer uma lista.

## Fazendo uma lista real

O problema é que, como tudo é uma lista no Clojure, algo assim retornará um erro:
```
(1 2 3 4 5) 
 ; => ClassCastException java.lang.Long cannot be cast to clojure.lang.IFn 
```

Que mensagem de erro horrível. O que a REPL está tentando nos dizer é: "1 não é uma função e não pode ser feita em uma." Como tudo em um Lisp é uma lista, o primeiro item de qualquer lista é tratado como uma função, como `def` , `+` ou `str` , portanto, se escrevermos `(1 2 3 4 5)` , ele trata o primeiro elemento ( `1` ) como uma função. função, o que claramente não é.

Podemos resolver isso de duas maneiras. Uma delas é usar a função `list` para construir uma lista, como usar `str` para concatenar strings juntas.
```
(list 1 2 3 4 5) 
 ; => (1 2 3 4 5) 
```

Você também pode usar aspas. Citando uma lista essencialmente diz ao compilador que essa lista _não_ é uma chamada de função, e não deve avaliar qualquer código dentro dela.
```
'(1 2 3 4 5) 
 ; => (1 2 3 4 5) 
```

Curiosamente, você também pode citar chamadas de função. É assim que as macros funcionam. Eles são bem complexos e merecem seu próprio artigo, então não vamos elaborar aqui.
```
;; Without a ' to quote it, this would return "foobarbaz". 
 '(str "foo" "bar" "baz") 
 ; => (str "foo" "bar" "baz") 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/6c7UxY)

## Adicionando a uma lista

As listas são projetadas para prepending, em vez de anexar. Não há uma maneira real de anexar a uma lista. Você pode preceder a uma lista usando os `cons` . `conj` também funciona, mas isso é para vetores, e `cons` é mais rápido para listas.
```
(cons 1 '(2 3 4)) 
 ; => (1 2 3 4) 
```

## Recuperando das listas

Você recupera itens das listas usando `nth` . `get` não funciona em listas, porque as listas são projetadas para acesso sequencial, em vez de acesso aleatório. Note que o `nth` funciona em vetores, mas é mais lento do que o `get` por causa disso.
```
(nth '(1 2 3 4) 0) 
 ; => 1 
```

## Convertendo outras coleções em listas

A função de `list` não pode converter outras coleções em listas, porque ele tenta construir uma lista usando os argumentos que ela recebe. Passing `list` a collection retornará uma lista contendo essa coleção.
```
(list [1 2 3 4 5]) 
 ; => ([1 2 3 4 5]) 
```

Para converter em uma lista, use a função `seq` .
```
(seq [1 2 3 4 5]) 
 ; => (1 2 3 4 5) 
```

## Sequências preguiçosas

O Clojure tem um recurso brilhante chamado "sequências lentas". Uma sequência preguiçosa é uma lista cujos elementos não são gerados até que você se refira a um elemento da sequência mais tarde, avaliando todos os elementos da sequência até o que você deseja. Isso permite que você construa seqüências "infinitas"!

`range` é talvez a sequência mais simples e preguiçosa. Ele contém todos os números.
```
(range 10) 
 ; => (0 1 2 3 4 5 6 7 8 9) 
 (range -5 5) 
 ; => (-5 -4 -3 -2 -1 0 1 2 3 4) 
```

Você pode usar sequências lentas para fazer coisas bem legais, como gerar uma sequência preguiçosa de todos os números de fibonacci.
```
(def fibs 
     (lazy-cat [0 1] (map + (rest fibs) fibs))) 
 
 (take 10 fibs) ;; this means, "evaluate the first 10 fibonacci numbers." 
 ; => (0 1 1 2 3 5 8 13 21 34) 
```

Este exemplo é um pouco avançado, e não se deve esperar que você entenda se você é um iniciante. É apenas um exemplo de algo legal que você pode fazer com sequências lentas. Talvez você possa descobrir isso de qualquer maneira!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/jwpvt8)

## Quando usar uma lista?

Geralmente, é preferível usar um vetor para usar uma lista, pois não há risco de o compilador avaliar acidentalmente um vetor como uma função e é mais rápido acessar elementos arbitrários de um vetor. As listas são mais úteis em 3 casos:

*   Gerando código usando uma macro.
*   Gerando sequências lentas "infinitas".
*   Prepaçando elementos para uma coleção.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-collections/18411) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-vectors/18421) |  
| [Coleções](//forum.freecodecamp.com/t/clojure-collections/18411) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Vetores](//forum.freecodecamp.com/t/clojure-vectors/18421) |