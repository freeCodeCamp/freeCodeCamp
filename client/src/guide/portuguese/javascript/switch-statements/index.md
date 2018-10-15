---
title: Switch Statements
localeTitle: Switch Statements
---
## Switch Statements

Uma instrução `switch` na programação é semelhante a uma instrução `if-else` , mas tem o benefício de, às vezes, ser mais fácil de ler quando há muitas condições. Também permite adicionar um bloco `default` que será executado se nenhuma das outras condições forem verdadeiras.

### Sintaxe:

```javascript
switch(expression) { 
  case 1: 
    console.log('1'); 
    break; 
   case 2: 
     console.log('2'); 
     break; 
   default: 
     console.log('No true condition, default'); 
 } 
```

O snippet acima mostra a sintaxe de uma instrução básica de `switch` . Neste exemplo, existem 3 cenários diferentes para:

*   `expression = 1` : Primeira condição é verdadeira e `1` é impressa no console.
*   `expression = 2` : A segunda condição é verdadeira e `2` é impressa no console.
*   `expression = 'anything else'` : Caso 1 e Caso 2 são ambos falsos, portanto, a condição padrão é executada.

A condição `default` é uma condição que será executada se nenhum dos outros casos forem verdadeiros.

Nota: Um ponto muito importante a notar aqui é que no trecho acima, `case 1:` e `case 2:` pode parecer representar algum tipo de ordem, mas `1` e `2` não são nada além das respostas que a `(expression)` pode ser avaliada . Portanto, em vez de 1 e 2, pode ser qualquer coisa que a `(expression)` possa avaliar e possa ser testada.

Por exemplo:

```javascript
var someValue; 
 var expression = someValue; 
 switch(expression){ 
  case someValue: 
    console.log('10'); // 10 would be printed to the console 
    break; 
  case 23: 
    console.log('12'); 
    break; 
  default: 
    console.log('No matches'); 
 } 
```

Nota: a `expression` no fragmento acima pode ser uma string ou um número.

### Pausa

A palavra-chave `break` é necessária em cada caso para garantir que apenas o código nesse caso seja executado. Sem o intervalo, vários casos poderiam ser executados. Quando o JavaScript atinge uma palavra `break` chave `break` , ele quebra o bloco de switches. Se o `break` foi deixado de fora do exemplo acima, isso é o que aconteceria:

```javascript
var expression = 1; 
 switch(expression) { 
  case 1: 
    console.log('1');  // 1 would be printed to console 
  case 2: // As there is no break after case 1, this case is also executed. 
    console.log('2'); // 2 would be printed to the console. 
    break; // break -> Switch statement is exited 
  default: 
    console.log('No true condition, default'); 
 } 
```

### Execute vários casos:

`switch` instruções `switch` também permitem que o mesmo bloco de código seja executado por vários casos. Isso pode ser feito adicionando 1 ou mais `case :` e `case :` palavras `case :` chave antes de um bloco de código.

Por exemplo:

```javascript
switch (day) { 
  case 4: 
  case 5: 
    console.log('it is nearly the weekend'); 
    break; 
  case 0: 
  case 6: 
    console.log('it is the weekend'); 
    break; 
  default: 
    console.log('Looking forward to the Weekend'); 
 } 
```

No trecho acima:

*   Se o `day` é `4` ou `5` (quinta ou sexta-feira), `it is nearly the weekend` será impresso para o console como o primeiro caso é executado.
*   Se o `day` for `0` ou `6` , (sábado ou domingo), `it is the weekend` impresso no console quando o segundo caso for executado.
*   Se o `day` for qualquer outro valor, `Looking forward to the Weekend` será impresso para o console, como o caso padrão é executado.

### Mais Informações:

[Documentação MDN para switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)