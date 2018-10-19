---
title: What Is Clojure
localeTitle: O que é Clojure
---
## Clojure é um dialeto de Lisp.

Lisps são uma família totalmente separada de linguagens para linguagens semelhantes a C, como C #, Javascript, Python ou Ruby. Isso significa que Lisps pode parecer estranho para os programadores que estão mais familiarizados com esses idiomas. Essencialmente, ser um Lisp significa que tudo no Clojure é uma lista contendo dados (até chamadas de função!), Ele possui digitação dinâmica e você pode definir _macros_ que permitem manipular seu próprio código. Aqui está um exemplo simples de algum Clojure para você examinar:
```
   (defn hello-world [] (println "Hello world!")) 
```

Isso define uma função (usando a macro `defn` ) chamada `hello-world` que não recebe entrada ( `[]` ) e imprime `"Hello world!"` para o console. Podemos chamá-lo assim:
```
   (hello-world) 
   ; => Hello world! 
   ;    nil 
```

## Clojure é uma linguagem funcional.

Todas as variáveis ​​no Clojure são imutáveis ​​e não podem ser alteradas usando um operador de atribuição ( `=` na maioria das linguagens semelhantes ao C) ou por uma função. Todas as funções pretendem ser _referencialmente transparentes_ , o que significa que, se você fornecer a mesma entrada, elas devem fornecer a mesma saída, não importa o quê. O exemplo do `hello-world` acima é referencialmente transparente - sempre será impresso "Hello world!" não importa o que. Algo que depende de um gerador de números aleatórios não é referencialmente transparente, porque sua saída é aleatória.
```
  (defn random-function [] 
    (if (> (rand 4) 2)     ; if a random number between 0 and 2 is greater than 2... 
      (println "foo")      ; ...print "foo". otherwise... 
      (println "bar")))    ; ...print "bar" 
```

Apesar de não ser capaz de alterar variáveis ​​pode parecer um pesadelo, é muito mais fácil do que você pensa, especialmente se a linguagem é baseada em torno dele (como o Clojure é!), E evitar mutações desnecessárias pode tornar seu código muito menos problemático.

## O Clojure é executado na Java Virtual Machine.

A JVM é a máquina virtual que interpreta o bytecode Java e a utiliza para executar um programa. Isso significa que o Clojure funciona quase perfeitamente com código projetado para Java (embora pareça um pouco estranho), e também significa que ele é executado muito rapidamente em comparação com alguns outros Lisps. Embora seja um pouco mais lento que o Java, ainda é muito mais rápido que o Python, Ruby ou Javascript.
```
  (.indexOf [1 2 3 4] 2) ;; .indexOf is a Java method! 
  ; => 1 
```

## O Clojure foi projetado para simultaneidade.

"Concorrência" aqui significa "um programa trabalhando em vários segmentos de uma só vez", o que pode tornar seu código muito mais rápido. Também pode tornar seu código muito mais buggier; imagine se duas funções diferentes estivessem mudando e lendo do mesmo objeto de uma só vez! Seria um caos total. Felizmente, no Clojure, as variáveis ​​são imutáveis, o que significa que não há chance de esse tipo de desordem se soltar. A linguagem também possui uma variedade de recursos para facilitar o código concorrente, como o sistema de memória transacional de software, agentes e átomos.

| ![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-the-basics/18410) |  
| | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Noções básicas](//forum.freecodecamp.com/t/clojure-the-basics/18410) |