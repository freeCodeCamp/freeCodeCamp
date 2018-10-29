---
title: Clojure the Basics
localeTitle: Clojure, o básico
---
### Começando

Antes de começar, você pode querer [instalar o Clojure](http://clojure.org/guides/getting_started) e o [Leiningen](http://leiningen.org/#install) (que é uma ferramenta para gerenciar projetos no Clojure). Isso permitirá executar o Clojure na linha de comando usando um REPL (Read-Evaluate-Print-Loop).

## Definindo Variáveis

O pão e a manteiga de qualquer linguagem de programação são variáveis ​​e funções. Vamos definir uma variável!
```
(def our-string "Hello world!") 
```

Mole-mole. Esse pedaço de código usa a macro `def` para associar uma string ( `"Hello world!"` ) A um símbolo ( `our-string` ). Poderíamos também ter definido um número, como `1` ou `1.1` , um caractere, como `\a` ou `\Z` , ou algo mais complicado, como uma lista ou uma expressão regular ( _uuuugh_ ).

Note que nosso código está dentro de parênteses, como uma lista, porque tudo em um Lisp é uma lista! (Isso será muito importante quando começarmos a falar sobre macros.)

## Definindo Funções

Agora vamos definir uma função!
```
(defn hello-world [] (println our-string)) 
```

Isso é um pouco mais complexo. Como `def` , ele usa uma macro ( `defn` ) para criar uma variável - embora, dessa vez, essa variável seja uma função. O vetor vazio (um vetor é um tipo de lista - pense nisso como um array) depois do `hello-world` define os argumentos para essa função - nesse caso, não temos nenhum. O código depois disso é o que a função faz. Ele avalia `our-string` , que é igual a `"Hello world!"` e imprime no console. Vamos correr!
```
(hello-world) 
 ; => Hello world! 
 ;    nil 
```

Você também pode escrever isto:
```
(def hello-world (fn [] (println our-string))) 
```

`defn` é apenas um atalho para ajudar a manter seu código conciso. `(defn ...)` e `(def ... (fn ...))` são os mesmos na prática.

## Parâmetros

Bem, isso foi legal, mas não foi muito emocionante. Vamos tentar uma função com parâmetros. Que tal um que adiciona 3 números?
```
(defn add [xyz] (+ xyz)) 
 (add 1 2 3) 
 ; => 6 
```

…Aguente. `(+ xyz)` Isso parece engraçado. Bem, Lisps são escritos usando "notação de prefixo", o que significa que a função sempre vem em primeiro lugar. Como todos os operadores matemáticos em Lisp ( `+ - * /` ) são apenas funções, eles também vêm antes de seus argumentos (neste caso, `xyz` ).

Você notará que o nosso vetor tem algumas coisas agora: `[xyz]` ! Sempre que uma função tiver parâmetros, você os define nesse vetor ao lado do nome da função.

### Destruturação

Um ótimo recurso sobre argumentos no Clojure é a desestruturação. Ele permite que você "puxe" elementos de uma lista.
```
(defn add [[xy] z] (+ xyz)) 
 (add [1 2] 3) 
 ; => 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/SWlvKn)

Os argumentos para essa função são uma coleção ( `[xy]` ) e um número ( `z` ). Podemos usar a desestruturação para extrair o primeiro e segundo elementos da lista e chamá-los de `x` e `y` .

### Funções com qualquer número de parâmetros

Você também pode definir uma função com um número arbitrário de argumentos usando `&` .
```
(defn demonstrate-rest [first & rest] 
  (println first) 
  (println rest)) 
 (demonstrate-rest 1 "foo" ["bar" 22]) 
 ; => 1 
 ;    ("foo" ["bar" 22]) 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/VftymP)

Como você pode ver, usando `&` separamos os argumentos da nossa função em uma variável chamada `first` e uma lista de variáveis ​​chamada `rest` . Isso significa que nossa função pode ter vários argumentos!

## Retornando

Você pode ter notado algumas coisas estranhas. Sempre que usamos `println` , parece que `nil` está aparecendo em nossa saída. Além disso, nossa função `add` retorna `6` , mas nunca dissemos para retornar nada.

No Clojure, os retornos são 'implícitos'. Se você já usou Ruby, provavelmente está familiarizado com esse conceito. Em vez de dizer à nossa função para retornar algo, ela avalia todo o código dentro de seu corpo e retorna o resultado. Nossa função `add` , por exemplo, avalia `(+ xyz)` e, em seguida, retorna esse resultado.

A razão pela qual nossas funções que usam `println` output `nil` é porque `println` avaliado como `nil` . ( `nil` é como `null` ou `None` - não representa nada.)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/what-is-clojure/18419) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-conditionals/18412) |  
| [Resumo](//forum.freecodecamp.com/t/what-is-clojure/18419) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Condicionais](//forum.freecodecamp.com/t/clojure-conditionals/18412) |