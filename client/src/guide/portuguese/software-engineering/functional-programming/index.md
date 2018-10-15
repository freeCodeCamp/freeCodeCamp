---
title: Functional Programming
localeTitle: Programação Funcional
---
## Programação Funcional

A programação funcional é o processo de construção de software, compondo **funções puras** , evitando **estado compartilhado** , **dados mutáveis** e **efeitos colaterais** . A programação funcional é **declarativa** (dizendo ao computador o que você quer fazer) em vez de **imperativa** (informando ao computador exatamente como fazer isso), e o estado do aplicativo flui através de funções puras. Compare-o com a programação orientada a objetos, em que o estado do aplicativo é geralmente compartilhado e co-localizado com métodos em objetos.

### Por que programação funcional?

*   Geralmente é mais conciso
*   Geralmente é mais previsível
*   É mais fácil testar do que código orientado a objetos

### Adoção por programação de idiomas

Muitas linguagens de programação suportam programação funcional como Haskell, F #, Common Lisp, Clojure, Erlang, OCaml. O JavaScript também possui as propriedades de uma linguagem funcional não tipificada.

### Usos

A programação funcional tem sido popular na academia, mas com poucas aplicações industriais. No entanto, recentemente várias linguagens de programação funcionais proeminentes foram usadas em sistemas comerciais ou industriais. Por exemplo, a linguagem de programação Erlang, que foi desenvolvida pela empresa sueca Ericsson no final dos anos 80, é usada para criar uma variedade de aplicativos em empresas como a T-Mobile, a Nortel, o Facebook, a Eletricité de France e o WhatsApp.

### Funções de ordem superior

Funções de ordem superior são uma grande parte da programação funcional. Uma função de ordem superior é uma função que recebe uma função como parâmetro ou retorna uma função.

### Mapa

`map` é uma função de ordem superior que chama uma função para cada elemento de uma lista e retorna os resultados como uma _nova_ lista.

Aqui está um exemplo de `map` :

```javascript
const myList = [6, 3, 5, 29]; 
 
 let squares = myList.map(num => num * num); // [36, 9, 25, 841] 
```

### Mais Informações:

*   [Wikipedia - Programação Funcional](https://en.wikipedia.org/wiki/Functional_programming#Use_in_industry)
    
*   [KeyCDN - Programação Funcional - O que é e por que isso importa?](https://www.keycdn.com/blog/functional-programming/)
    
*   [Médio - O que é programação funcional?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)