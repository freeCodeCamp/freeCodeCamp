---
title: Global Variables
localeTitle: Variáveis ​​globais
---
Variáveis ​​globais são declaradas fora de uma função para acessibilidade em todo o programa, enquanto variáveis ​​locais são armazenadas dentro de uma função usando `var` para uso somente dentro do [escopo](https://developer.mozilla.org/en-US/docs/Glossary/Scope) dessa função. Se você declarar uma variável sem usar `var` , mesmo que esteja dentro de uma função, ela ainda será vista como global:

```javascript
var x = 5; //global 
 function someThing(y) { 
 var z = x + y; 
 console.log(z); 
 } 
 
 function someThing(y) { 
 x = 5; //still global! 
 var z = x + y; 
 console.log(z); 
 } 
 
 
 function someThing(y) { 
 var x = 5; //local 
 var z = x + y; 
 console.log(z); 
 } 
```

Uma variável global também é um objeto do escopo atual, como a janela do navegador:

```javascript
var dog = “Fluffy”; 
 console.log(dog); //Fluffy; 
 
 var dog = “Fluffy”; 
 console.log(window.dog); //Fluffy 
```

É uma prática recomendada minimizar as variáveis ​​globais. Como a variável pode ser acessada em qualquer lugar do programa, elas podem causar um comportamento estranho.

Referências:

*   [var -Javascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
*   [Você não sabe JavaScript: escopos e fechamentos](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

Informação adicional:

*   [Melhores Práticas JavaScript: Evite Globals](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)

## \* [Qual é a diferença entre um var global e uma janela.variável em javascript?](https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript)

O escopo das variáveis ​​JavaScript é global ou local. As variáveis ​​globais são declaradas FORA da função e seu valor é acessível / modificável em todo o programa.

Você deve sempre usar **var** para declarar suas variáveis ​​(para fazer localmente) senão ele irá instalar GLOBALLY

Tome cuidado com as variáveis ​​globais porque elas são arriscadas. Na maioria das vezes você deve usar encerramentos para declarar suas variáveis. Exemplo:

```javascript
    (function(){ 
      var myVar = true; 
    })(); 
```

#### Mais Informações:

*   [Melhores Práticas JavaScript: Evite Globals](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)
*   [Variáveis ​​globais são ruins](http://c2.com/cgi/wiki?GlobalVariablesAreBad)
*   [MDN - Variáveis ​​Globais](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)