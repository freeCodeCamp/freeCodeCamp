---
title: Strict Mode
localeTitle: modo estrito
---
O Strict Mode foi introduzido no ECMAScript 5 que permite colocar um programa, ou uma função, em um contexto operacional "estrito". Esse contexto restrito impede que determinadas ações sejam tomadas e gera mais exceções.

O modo estrito faz várias alterações na semântica normal do JavaScript.

*   Primeiro, o modo estrito elimina alguns erros silenciosos do JavaScript alterando-os para gerar erros.
*   Em segundo lugar, o modo estrito corrige erros que tornam difícil para os mecanismos JavaScript executar otimizações: código de modo estrito às vezes pode ser executado com mais rapidez do que o código idêntico que não é o modo estrito.
*   Terceiro, o modo estrito proíbe alguma sintaxe que possa ser definida em futuras versões do ECMAScript.

Código de modo estrito e código de modo não estrito podem coexistir em um mesmo script.

```javascript
// Non-strict code... 
 
 (function(){ 
    "use strict"; 
 
    // Define your library strictly... 
 })(); 
 
 // Non-strict code... 
```

## Invocando o modo estrito

O modo estrito aplica-se a _scripts inteiros_ ou a _funções individuais_ .

**Modo estrito para scripts**

```javascript
// Whole-script strict mode syntax 
 
 "use strict"; 
 var v = "Hi!  I'm a strict mode script!"; 
```

**Modo estrito para funções**

```javascript
function strict(){ 
    // Function-level strict mode syntax 
 
    'use strict'; 
    function nested() { return "And so am I!"; } 
    return "Hi!  I'm a strict mode function!  " + nested(); 
 } 
 
 function notStrict() { return "I'm not strict."; } 
```

**Basicamente ajuda a fazer menos erros, detectando coisas que podem levar a quebras que não são detectadas normalmente (modo não-estrito).**

_Para mais informações, confira esta [página do MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) ._