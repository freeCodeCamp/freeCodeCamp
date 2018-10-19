---
title: Numbers
localeTitle: Números
---
## Números

A implementação do `number` s do JavaScript é baseada no `IEEE 754` , frequentemente chamado de "ponto flutuante".

[IEEE 754 Link da Wikipédia](https://en.wikipedia.org/wiki/IEEE_754) [Visualização de ponto flutuante de precisão dupla IEEE 754](http://bartaz.github.io/ieee754-visualization/)

Os literais numéricos são geralmente expressos como literais decimais de `base-10` .

```javascript
var foo = 47; 
 var bar = 47.9; 
```

A parte inicial de um valor decimal, se `0` , é opcional:

```javascript
var same = 0.47; 
 var stillSame = .47; 
```

Da mesma forma, a parte final (a fracional) de um valor decimal após o `.` , se `0` , é opcional:

```javascript
var a = 47.0; 
 var b = 47.; 
```

Por padrão, a maioria dos números será gerada como decimais de `base-10` , com `0` s fracionários à direita removidos. Assim:

```javascript
var foo = 47.300; 
 var bar = 47.0; 
 
 foo; // 47.3 
 bar; // 47 
```

`numbers` muito grandes ou muito pequenos podem ser escritos como:

```javascript
var foo = 47e8; // 4700000000 
 var baz = 47e-8; // 00.00000047 
```

`toExponential` método pode ser usado para converter um `number` em sua `exponential notation` .

```javascript
var foo = 47e8; 
 foo;  // 4700000000 
 foo.toExponential()   //"47e8" 
```

Os números têm acesso a métodos integrados ao `Number.prototype` .

Por exemplo: `toFixed()` método `toFixed()` formata um número com um número específico de dígitos à direita do decimal.

```javascript
var foo = 47.69; 
 foo.toFixed(0);  // "48" 
 foo.toFixed(1);  // "47.7" 
 foo.toFixed(2);  // "47.69" 
```

> Digite `Number.prototype` no seu navegador e veja outros métodos disponíveis.

#### Mais Informações:

1.  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
2.  [Números JavaScript](https://www.w3schools.com/js/js_numbers.asp)

#### Referências

1.  [Tipos e gramática](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar) por Kyle Simpson.
2.  [Especificação da linguagem ECMAScript: 4.3.20](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.20)
3.  [Especificação da linguagem ECMAScript: 15.7 Number Objects](https://www.ecma-international.org/ecma-262/5.1/#sec-15.7)