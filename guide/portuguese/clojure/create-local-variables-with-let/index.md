---
title: Clojure Create Local Variables with Let
localeTitle: Clojure cria variáveis ​​locais com Let
---
`let` é uma parte fundamental do Clojure. Enquanto `def` cria uma variável global, `let` criar uma variável local.
```
(def x 5) 
 (println x) 
 ; => 5 
 ;    nil 
 (let [x 2] 
  (println x)) 
 ; => 2 
 ;    nil 
 (println x) 
 ; => 5 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/xcNth2)

`x` neste exemplo nunca é alterado. `x` refere-se apenas a algo diferente dentro de nosso `let` binding. Isso pode ser uma maneira útil de evitar a repetição dentro de uma função.

Isso é incrivelmente útil. Ter muitas variáveis ​​globais pode levar a erros desagradáveis ​​e comportamento não intencional.
```
(def x 5) 
 (defn add-5 [y] (+ xy)) 
 (add-5 5) 
 ; => 10 
 (defn change-x [] 
  (def x 6)) 
 (change-x) 
 ; => nil 
 (add-5 5) 
 ; => 11 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/MFjA3C)

Uh oh! Isso não está adicionando mais 5! É claro que este exemplo é um pouco bobo, mas usar muitas variáveis ​​globais pode levar a bugs que são tão assustadores quanto este.

**Nota:** Não estamos _realocando_ `x` aqui, como você faria em uma linguagem semelhante a C. Estamos apenas criando uma nova variável que também é chamada x. Esta é uma ideia _muito, muito, **muito**_ má.

## Múltiplas Ligações

`let` também pode definir múltiplas variáveis ​​de uma só vez, e pode atribuir variáveis ​​a expressões.
```
(let [spam "foo" 
      ham (str "b" "ar")] ; str is a function that concatenates strings 
  (println spam ham))      ; or converts variables into strings. 
 ; => foo bar 
 ;    nil 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [IDEOne isso!](https://ideone.com/y5EBIM)

| [![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:")](//forum.freecodecamp.com/t/clojure-resources/18422) | [Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |  
| [Condicionais](//forum.freecodecamp.com/t/clojure-conditionals/18412) | [Índice](//forum.freecodecamp.com/t/clojure-resources/18422) | [Loop e Recorrente](//forum.freecodecamp.com/t/clojure-loop-recur/18418) |