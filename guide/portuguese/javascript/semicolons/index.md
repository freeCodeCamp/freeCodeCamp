---
title: Semicolons
localeTitle: Ponto e vírgula
---
Pontos-e-vírgulas não são necessários em Javascript. Isso ocorre porque o Javascript tem um recurso chamado "Automatic Semicolon Insertion" ou ASI abreviado. ASI coloca ponto e vírgula no seu Javascript para você. Está sempre ativo por padrão e faz parte do idioma e não pode ser desativado.

O ASI tem um conjunto de regras que ele usa para determinar onde deve inserir ponto e vírgula. Se já houver um ponto e vírgula, isso não mudará nada. Veja [esta resposta do StackOverflow](http://stackoverflow.com/a/2846298/3467946) para mais informações sobre como o ASI funciona.

Há apenas um caso em que o ASI falha: quando uma linha começa com um colchete de abertura `(` . Para evitar isso causando erros, quando uma linha começa com um colchete de abertura, você pode colocar um ponto-e-vírgula no início da linha que possui o colchete de abertura :

```js
;(function() { 
  console.log('Hi!') 
 }) 
```

Observe que isso é necessário apenas se você não usar ponto e vírgula.

Um estilo de codificação consistente torna o código mais legível. Decida se você irá ou não usar ponto-e-vírgula e faça isso em todos os lugares.

## Erros que você pode encontrar

Quando o Javascript foi feito pela primeira vez, foi feito para ajudar os iniciantes a entrarem na programação. Ninguém quer procurar por um ponto-e-vírgula no código quando começa a programar. Assim, a escolha do ponto e vírgula foi implementada, como dito acima, eles estão tecnicamente lá.

Por exemplo: `javasctipt function foo(x) { return function(y) { return x + y; } } let z = foo(10); z(10)// TypeError z is not a function // Because of Automatic Semicolon Insertion, our inner function does not exist.` Javasctipt irá implementar ponto e vírgula onde eles são esperados.

### Outros recursos

[Uma carta aberta aos líderes do JavaScript em relação a ponto-e-vírgula](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)