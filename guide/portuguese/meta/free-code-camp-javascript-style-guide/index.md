---
title: Free Code Camp JavaScript Style Guide
localeTitle: Guia de Estilo JavaScript Free Code Camp
---
ou como as pessoas legais escrevem JavaScript.

## Recuar

Use sempre dois espaços  
Nenhuma guia dura, nunca. Não, só não faça isso.

## Cintas Encaracoladas

Sempre use chaves quando usar as palavras-chave `if/else/else if` . Isso evita muita ambiguidade e evitará erros de sintaxe em alguns casos de borda.

Mau:
```
if (foo) bar(); 
```

Boa:
```
if (foo) { bar(); } 
```

## Curly Braces Everywhere!

Espaço após a `function` Palavra-chave, exceto em funções anônimas

Boa:
```
function foo() { 
 } 
 
 var foo = function() { 
  // ... 
 }; 
```

Mau:
```
function foo () 
 { 
  // ... 
 } 
 
 var foo = function () { 
  // ... 
 }; 
```

## Comentários

*   sem comentários inline
*   espaço único depois de `//`
*   Não use comentário multilinha `/* */` , estamos reservando-os para uso com jsDocs.

## Palavras-chave

*   espaço imediatamente após if, else, while, etc
*   A chave de abertura deve estar sempre na mesma linha.

Boa:
```
if (true) { 
 // do the thing 
 } 
```

Mau:
```
if(true) 
 { 
 // do the thing 
 } 
```

## Outro

Evite mais e "final cedo". Em JavaScript, muitas vezes há um grande número de recuos (geralmente quando se lida com código assíncrono e chamado "callback hell"). Qualquer coisa que você pode fazer reduzir o número de travessões deve ser feito. Uma coisa é [evitar a](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) palavra-chave [else](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) .

Isso também tem o efeito colateral de tornar o código mais limpo e mais fácil de ler.

Mau:
```
someAsynFunc(function(err, data) { 
  if (err) { 
    callback(err); 
  } else { 
    // do stuff with data 
  } 
 }); 
```

Boa:
```
someAsynFunc(function(err, data) { 
  if (err) { 
    return callback(err); 
  } 
  // do stuff with data 
  // saves one indent 
 }); 
```

## Cordas Longas

Seqüências multilinhas longas devem estar em uma das duas formas:
```
var longString = 
  'long strings should ' + 
  'be in this form, with the ' + 
  'operator ending the line'; 
 
 var foo = 'bar'; 
 
 var longString = [ 
  'long strings with variables such as ', 
  foo, 
  'should ', 
  'be in this form, an array of strings ', 
  'that are joined with the join array instance method', 
 ].join(''); 
```

... mais por vir