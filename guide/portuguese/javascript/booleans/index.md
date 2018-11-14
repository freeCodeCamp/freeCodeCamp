---
title: Boolean
localeTitle: boleano
---
## boleano

Os booleanos são um tipo de dados primitivo comumente usado em linguagens de programação de computadores. Por definição, um booleano tem dois valores possíveis: `true` ou `false` .

Em Javascript, há frequentemente coerção de tipo implícito para booleano. Se, por exemplo, você tiver uma instrução if que verifica uma determinada expressão, essa expressão será forçada para um valor booleano:

```javascript
var a = 'a string'; 
 if (a) { 
  console.log(a); // logs 'a string' 
 } 
```

Existem apenas alguns valores que serão coagidos a falsos:

*   falso (não realmente coagido como já é falso)
*   nulo
*   Indefinido
*   NaN
*   0
*   '' (corda vazia)

Todos os outros valores serão coagidos para verdadeiro. Quando um valor é coagido para um valor booleano, também chamamos isso de 'falso' ou 'truthy'.

Uma maneira que o tipo de coerção é usado é com o uso dos operadores ou ( `||` ) `&&` ( `&&` ):

```javascript
var a = 'word'; 
 var b = false; 
 var c = true; 
 var d = 0 
 var e = 1 
 var f = 2 
 var g = null 
 
 console.log(a || b); // 'word' 
 console.log(c || a); // true 
 console.log(b || a); // 'word' 
 console.log(e || f); // 1 
 console.log(f || e); // 2 
 console.log(d || g); // null 
 console.log(g || d); // 0 
 console.log(a && c); // true 
 console.log(c && a); // 'word' 
```

Como você pode ver, o operador _ou_ verifica o primeiro operando. Se isso for verdade ou verdadeiro, ele retorna imediatamente (e é por isso que obtemos 'word' no primeiro caso e true no segundo caso). Se não for verdade ou verdadeiro, devolve o segundo operando (e é por isso que obtemos 'palavra' no terceiro caso).

Com o operador e ele funciona de maneira semelhante, mas para 'e' para ser verdade, ambos os operandos precisam ser verdadeiros. Por isso, sempre retornará o segundo operando se ambos forem verdadeiros / verdadeiros, caso contrário, retornará false. É por isso que no quarto caso nos tornamos verdade e no último caso obtemos "palavra".

## O objeto booleano

Há também um objeto JavaScript nativo que envolve um valor. O valor passado como o primeiro parâmetro é convertido em um valor booleano, se necessário. Se o valor for omitido, 0, -0, nulo, falso, NaN, indefinido ou a cadeia vazia (""), o objeto terá um valor inicial de falso. Todos os outros valores, incluindo qualquer objeto ou a string "false", criam um objeto com um valor inicial de true.

Não confunda os valores Booleanos primitivos true e false com os valores true e false do objeto booleano.

## Mais detalhes

Qualquer objeto cujo valor não seja indefinido ou nulo, incluindo um objeto booleano cujo valor é falso, é avaliado como verdadeiro quando passado para uma instrução condicional. Se for verdade, isso executará a função. Por exemplo, a condição na seguinte declaração if é avaliada como verdadeira:

```javascript
var x = new Boolean(false); 
 if (x) { 
  // this code is executed 
 } 
```

Esse comportamento não se aplica a primitivos booleanos. Por exemplo, a condição na seguinte instrução if é avaliada como falsa:

```javascript
var x = false; 
 if (x) { 
  // this code is not executed 
 } 
```

Não use um objeto booleano para converter um valor não booleano em um valor booleano. Em vez disso, use o Boolean como uma função para executar esta tarefa:

```javascript
var x = Boolean(expression);     // preferred 
 var x = new Boolean(expression); // don't use 
```

Se você especificar qualquer objeto, incluindo um objeto booleano cujo valor seja false, como o valor inicial de um objeto booleano, o novo objeto booleano terá um valor true.

```javascript
var myFalse = new Boolean(false);   // initial value of false 
 var g = new Boolean(myFalse);       // initial value of true 
 var myString = new String('Hello'); // string object 
 var s = new Boolean(myString);      // initial value of true 
```

Não use um objeto booleano no lugar de um primitivo booleano.

### Recursos

*   [Objeto booleano](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
*   [Objeto booleano](https://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html)