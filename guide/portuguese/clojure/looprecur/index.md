---
title: Clojure   Looprecur
localeTitle: Clojure Looprecur
---
Você pode precisar entender [`if`](//forum.freecodecamp.com/t/clojure-conditionals/18412) e [`let`](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) entender completamente a recursão no Clojure.

## `for` e `while`

O Clojure não possui loops ou loops while. Isso faz sentido, se você pensar sobre isso. Um loop `for` altera uma variável e isso não é permitido no Clojure.
```
for (var i = 0; i < 10; i++) { 
  console.log(i); 
 } 
```

`i++` significa que adicionamos um à variável `i` toda vez que o loop termina - um exemplo claro de uma variável sendo mutada.

`while` loops são menos dependentes de variáveis ​​variáveis, mas são, da mesma forma que os loops.
```
var i = 0; 
 while (i < 10) { 
  console.log(i); 
  i++; 
 } 
```

`while` loops sempre tem uma condição, como `i < 10` , e vai quebrar se essa condição não for mais verdadeira. Isso significa que eles têm que ter algum tipo de efeito colateral (como adicionar 1 a `i` ) para que a condição seja eventualmente falsa; caso contrário, o loop duraria para sempre.

## Recursão

Felizmente, o Clojure tem um loop de algum tipo. Esses loops usam recursão - uma função que chama a si mesma. O algoritmo recursivo mais simples é o de encontrar um fatorial numérico positivo (5 fatorial, por exemplo, igual a `5 * 4 * 3 * 2` ).
```
(defn fact [x] 
  (loop [nx prod 1] ;; this works just like a 'let' binding. 
    (if (= 1 n)  ;; this is the base case. 
      prod 
      (recur (dec n) (* prod n))))) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/3iP3tI)

Você notará que `(loop [nx prod 1] ...)` é bastante semelhante a um `let` binding. Na verdade, funciona da mesma maneira - aqui, ligamos `n` para `x` e `prod` para 1.

Cada função recursiva tem um "caso base". Esta é a condição que faz com que o loop pare de fazer loop. Nesse caso, nosso loop pára se `n = 1` e retorna `prod` . Se `n` não for igual a 1, o loop se repetirá.
```
(recur (dec n) (* prod n)) 
```

Essa função `recur` reinicia o loop, mas com ligações diferentes. Desta vez, `n` não está ligado a `x` , mas está ligado a `(dec n)` (o que significa `decrement n` ou `n - 1` ), e `prod` está ligado a `(* prod n)` .

Então, quando chamamos a função, isso é o que acontece:
```
(fact 5) 
 ; Loop 1: 5 != 1, so the loop recurs with 4 (5 - 1) and 5 (1 * 5). 
 ; Loop 2: 4 != 1, so the loop recurs with 3 (4 - 1) and 20 (5 * 4). 
 ; Loop 3: 3 != 1, so the loop recurs with 2 (3 - 1) and 60 (20 * 3). 
 ; Loop 4: 2 != 1, so the loop recurs with 1 (2 - 1) and 120 (60 * 2). 
 ; Loop 5: 1 == 1, so the function returns prod, which is now equal to 120. 
 ; => 120 
```

A coisa engenhosa sobre a recursão é que as variáveis ​​em si nunca são alteradas. A única coisa que muda é o que `n` e `prod` _referem_ . Nós nunca dizemos, `n--` ou `n += 2` .

## Por que usar loop / recorrer?

Você pode estar se perguntando por que você usaria `loop/recur` vez de simplesmente definir uma função que chama a si mesma. Nossa função fatorial poderia ter sido escrita assim:
```
(defn fact-no-loop [n] 
  (if (= 1 n) 
    1 
    (* n (fact-no-loop (dec n))))) 
```

Isso é mais conciso e funciona de maneira semelhante. Por que você _nunca_ usar loop e se repetem?

### Otimização de Chamadas

Se você usar `loop/recur` , o compilador (o software que transforma o código Clojure em bytecode da JVM) sabe que você deseja criar um loop recursivo. Isso significa que ele tenta o máximo para otimizar seu código para recursão. Vamos comparar a velocidade do `fact` e o `fact-no-loop` :
```
(time (fact 20)) 
 ; => "Elapsed time: 0.083927 msecs" 
 ;    2432902008176640000 
 (time (fact-no-loop 20)) 
 ; => "Elapsed time: 0.064937 msecs" 
 ;    2432902008176640000 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/tpC0Xo)

Nesta escala, a diferença é insignificante. Na verdade, o `fact-no-loop` é ocasionalmente mais rápido que o `fact` devido à natureza imprevisível da memória do computador. No entanto, em uma escala maior, esse tipo de otimização pode tornar seu código muito mais rápido.

### Recursão de aninhamento dentro de funções

`fact-no-loop` funciona sem `loop/recur` porque a função inteira é recursiva. E se quiséssemos que parte de nossa função usasse um loop recursivo e depois o resto fizesse algo não recursivo? Teríamos que definir duas funções totalmente separadas. Usando o `loop/recur` nos permite usar uma função pouco anônima.

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:") |  
| [Vamos Bindings](//forum.freecodecamp.com/t/clojure-create-local-variables-with-let/18415) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | Ser adicionado |