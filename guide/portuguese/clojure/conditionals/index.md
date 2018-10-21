---
title: Clojure Conditionals
localeTitle: Condicionais de Clojure
---
Você não vai chegar a lugar algum em um idioma, se tudo que você pode fazer é definir funções que imprimem coisas e fazem aritmética simples. Condicionais e lógicos são parte fundamental do código que faz coisas interessantes e úteis. Tente imaginar um mundo sem lógica em programas: você não seria capaz de coisas simples, como verificar se dois números são iguais!

## Operadores lógicos

O Clojure, como a maioria das linguagens, possui 3 operadores lógicos: `and` , `or` e `not` . Essas funções usam booleanos ( `true` ou `false` ) como argumentos e retornam booleanos com base no que esses booleanos são. Como tudo em um Lisp, esses operadores usam a notação de prefixo, o que significa que eles podem parecer estranhos para você.
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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/XfXn8T)

## E se

`if` permite executar código baseado em se um booleano é `true` ou `false` . `if` no Clojure parece bastante estranho, não porque ele usa notação de prefixo, mas porque não há outra palavra-chave. Se a condição for verdadeira, ela avalia a primeira expressão. Se é falso, executa o segundo.
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") ; this gets evaluated if 2 + 2 = 4 
  (println "UH OH"))       ; this gets evaluated if 2 + 2 != 4 
 ; => Maths works! 
 ;    nil 
```

Isso apresenta um problema: e se quisermos fazer várias coisas?
```
(if (= (+ 2 2) 4) 
  (println "Maths works!") 
  (println "Maths still works!") 
  (println "UH OH")) 
 ; => CompilerException java.lang.RuntimeException: Too many arguments to if 
```

Felizmente, temos a `do` a função de resolver este problema. `do` avalia múltiplas expressões, um após o outro.
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

**Nota:** já que `if` é, em si, uma expressão, não há necessidade de um operador ternário como em muitas linguagens semelhantes a C.
```
var doesMathsWork = 2 + 2 === 4 ? "Maths works!" : "UH OH"; 
 console.log(doesMathsWork); 
 // => Maths works! 
```

Agora que você viu como funciona, não parece tão estranho, certo? Isso é muito mais fácil de ler e entender (ignorando a falta da palavra `else` ):
```
(def does-maths-work (if (= (+ 2 2) 4) "Maths works!" "UH OH")) 
 (println does-maths-work) 
 ; => Maths works! 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/5XhcAa)

## Alternativas para se

O Clojure também possui algumas macros que se comportam de forma semelhante a `if` , e às vezes podem ser mais concisas.

`if-not` é talvez o exemplo mais simples - é `if` invertido. Esses dois pedaços de código são exatamente os mesmos:
```
(def does-maths-work (if (not (= (+ 2 2) 4)) "UH OH" "Maths works!")) 
 (def does-maths-work (if-not (= (+ 2 2) 4) "UH OH" "Maths works!")) 
```

A primeira expressão é avaliada se for falsa e a segunda é avaliada se for verdadeira. Observe que o uso `if-not` evita nidificação nossa condição dentro `not` , o que pode ajudar a tornar o nosso código mais fácil de entender.

`when` é outra macro útil. Esses dois pedaços de código também são os mesmos:
```
(if (= (+ 2 2) 4) (do (println "Maths works!") (println "Hooray!"))) 
 (when (= (+ 2 2) 4) (println "Maths works!") (println "Hooray!")) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/tUVAw3)

**Nota:** Não há `when/else` . `when` _só_ executa se a condição é verdadeira.

`cond` permite combinar muitas condições em uma única expressão. Ele usa uma sequência de pares de expressões e expressões lógicas e avalia cada expressão lógica em ordem. Quando encontra uma expressão lógica que avalia como `true` , avalia a segunda expressão do par. Depois disso, nenhuma outra expressão é avaliada. Esse comportamento é como lógica de curto-circuito no Javascript.
```
(cond (= 0 1) "I'm paired with a false expression and I don't evalute.." 
      (= 1 1) "I'm the first expression paired with a true expression!" 
      (= 2 2) "I don't evalute even though I'm also paired with true ;_;" 
      :else   "I evaluate if no other boolean expressions evaluate to true") 
 ; => "I'm the first expression paired with a true expression!" 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/zu5RCq)

A palavra-chave `:else` pode ser usada no lugar de uma expressão lógica no último par de expressões em `cond` . Isso significa que a expressão correspondente deve ser avaliada se todas as outras expressões booleanas forem avaliadas como falsas. É o mesmo que colocar a `true` como a última expressão booleana.

## Formas Especiais e Avaliação

Você deve ter notado que as regras de avaliação de expressões condicionais são um pouco diferentes de outras expressões. A expressão condicional faz parte de um grupo de expressões chamado _formulários especiais_ . Isso significa que eles não seguem as regras normais de avaliação do Clojure.

Como você sabe agora, uma expressão condicional avalia apenas a subexpressão que corresponde ao resultado booleano. Isso significa que o código inválido em uma expressão condicional não será avaliado em alguns casos. Considere as duas expressões `if` abaixo. Embora `(+ 1 "failure")` seja uma expressão inválida, o Clojure apenas gera uma exceção quando a condição é `false` .
```
(if true "sucess" (+ 1 "failure")) 
 ; => "sucess" 
 (if false "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/n4Ug2S)

Compare isso com o comportamento do `my-if` definido abaixo:
```
(defn my-if [condition true-case false-case] 
  (if condition true-case false-case)) 
 
 (my-if true "sucess" (+ 1 "failure")) 
 ; => ClassCastException java.lang.String cannot be cast to java.lang.Number ... 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/U7cVI4)

`my-if` é uma função com regras de avaliação normais, portanto todas as subexpressões devem ser avaliadas antes de poderem ser avaliadas.

O Clojure tem muitas macros úteis como essas para todos os tipos de tarefas. Tente dar uma olhada na [documentação do Clojure](https://clojuredocs.org/) e veja se você pode encontrar mais!

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |  
| [Resumo](//forum.freecodecamp.com/t/clojure-the-basics/18410) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Condicionais](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) |