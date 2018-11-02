---
title: Iterate with JavaScript for Loops
localeTitle: Iterar com JavaScript para loops
---
O tipo mais comum de loop de JavaScript é chamado `for loop` porque é executado `for` um número específico de vezes.
```
var ourArray = []; 
 for(var i = 0; i < 5; i++) { 
  ourArray.push(i); 
 } 
```

ourArray agora conterá \[0,1,2,3,4\]

## Mais sobre for loops
```
for(var i = 0; i < 5; i++) {  // There are 3 parts here 
```

Existem três partes para loop. Eles são separados por ponto e vírgula.

1.  A inicialização: `var i = 0;` - Este código é executado apenas uma vez no início do loop. É geralmente usado para declarar a variável do contador (com `var` ) e inicializar o contador (neste caso, é definido como 0).
    
2.  A condição: `i < 5;` - O loop será executado enquanto isso for `true` . Isso significa que, assim que `i` for igual a 5, o loop parará de fazer loop. Note que o interior do loop nunca verá `i` como 5, porque ele irá parar antes disso. Se esta condição for inicialmente `false` , o loop nunca será executado.
    
3.  O incremento: `i++` - Este código é executado no final de cada loop. Geralmente é um incremento simples (operador `++` ), mas pode ser qualquer transformação matemática. É usado para mover o contador ( `i` ) para frente (ou para trás, ou o que for.