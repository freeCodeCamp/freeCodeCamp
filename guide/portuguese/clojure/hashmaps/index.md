---
title: Clojure Hashmaps
localeTitle: Clojure Hashmaps
---
Um hashmap é uma coleção que mapeia chaves para valores. Eles têm vários nomes em outros idiomas; O Python se refere a eles como dicionários, e os objetos JavaScript funcionam essencialmente como hashmaps.

Um hashmap pode, como muitas coleções, ser construído de duas maneiras. Existe a função construtora:
```
;; Note that each argument is *prepended* to the hashmap, not appended. 
 (def a-hashmap (hash-map :a 1 :b 2 :c 3)) 
 a-hashmap 
 ; => {:c 3, :b 2, :a 1} 
```

Você também pode defini-los usando um literal de hashmap. Isso geralmente é mais conciso e claro. É recomendável usar vírgulas para separar pares chave / valor em hashmaps, pois isso pode tornar os limites mais claros.
```
;; This hashmap is actually in the right order, unlike the one above. 
 (def another-hashmap {:a 1, :b 2, :c 3}) 
 another-hashmap 
 ; => {:a 1, :b 2, :c 3} 
```

## Palavras-chave e recuperar valores de hashmaps

Aguarde. O que é isso? `:a` `:b` ? `:c` ? Aqueles parecem estranhos. Essas, você vê, são palavras-chave. Eles são chamados de palavras- _chave_ porque são usados ​​com frequência como chaves em hashmaps.

Por que eles são freqüentemente usados ​​como chaves? Bem, ao contrário das strings, as palavras-chave podem ser usadas como funções para extrair valores de um hashmap; Não há necessidade de `get` ou `nth` !
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

## Convertendo outras coleções para hashmaps

A conversão para um hashmap é complicada. Para demonstrar, vamos tentar usá-lo como `vec` ou `seq` .
```
(hash-map [:a 1 :b 2 :c 3]) 
 ; => IllegalArgumentException No value supplied for key: [:a 1 :b 2 :c 3] 
```

A função `hash-map` pensa que estamos tentando criar um hashmap com `[:a 1 :b 2 :c 3]` como uma das chaves. Veja o que acontece se dermos o número correto de argumentos:
```
(hash-map [:a 1 :b 2 :c 3] "foo") 
 ; => {[:a 1 :b 2 :c 3] "foo"} 
```

Para converter uma sequência em um hashmap, você precisará usar e entender `apply` . Felizmente, isso é bem simples: `apply` essencialmente uma coleção de destrutivos antes de aplicar uma função a ela.
```
;; These two expressions are exactly the same. 
 (+ 1 2 3) 
 ; => 6 
 (apply + [1 2 3]) 
 ; => 6 
```

É assim que você converteria um vetor em um hashmap:
```
(apply hash-map [:a 1 :b 2 :c 3]) 
 ; => {:c 3, :b 2, :a 1} 
 
 ;; This is the same as: 
 (hash-map :a 1 :b 2 :c 3) 
 ; => {:c 3, :b 2, :a 1} 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/k9cOjo)

## Atualizar um hashmap

Você pode atualizar valores dentro de um hashmap usando `assoc` . Isso permite que você anexe novos pares de chave / valor ou altere os antigos.
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

## Quando usar um hashmap?

Um hashmap é útil quando você quer dar nomes às suas variáveis. Se você já pensou em si mesmo: _"E se eu usasse um objeto ..."_ antes de sair dessa e perceber que está usando o Clojure, tente usar um hashmap.

Eles também são úteis se você deseja associar dois valores diferentes entre si. Tomemos, por exemplo, uma cifra ROT13: você poderia associar `\A` com `\N` , `\B` com `\M` , etc. (Isso seria longo e chato de escrever na maioria das linguagens, mas o Clojure tem algumas funções que podem gerá-lo para você e torná-lo _divertido!_ )

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-vectors/18421) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:") |  
| [Vetores](//forum.freecodecamp.com/t/clojure-vectors/18421) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | Ser adicionado |