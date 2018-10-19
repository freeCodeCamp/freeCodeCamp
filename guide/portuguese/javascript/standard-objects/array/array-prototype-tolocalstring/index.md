---
title: Array.prototype.toLocaleString
localeTitle: Array.prototype.toLocaleString
---
## Array.prototype.toLocaleString

O método `toLocaleString()` retorna uma string representando os elementos de uma matriz. Todos os elementos são convertidos em Strings usando seus métodos toLocaleString. O resultado de chamar esta função destina-se a ser específico do idioma.

##### Sintaxe:
```
arr.toLocaleString(); 
```

##### Parâmetros

*   `locales` (Opcional) - argumento contendo uma string ou uma matriz de tags de idioma [BCP 47 tag de idioma](http://tools.ietf.org/html/rfc5646) .
*   `options` (Opcional) - objeto com propriedades de configuração

##### Valor de retorno

Uma string representando os elementos da matriz separados por uma String específica de local (como uma vírgula “,”)

## Exemplos

```javascript
var number = 12345; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myString = myArray.toLocaleString(); 
 
 console.log(myString); 
 // OUTPUT '12345,10/25/2017, 4:20:02 PM,foo' 
```

Diferentes saídas podem ser exibidas com base no idioma e no identificador de região (a localidade).

```javascript
var number = 54321; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myJPString = myArray.toLocaleString('ja-JP'); 
 
 console.log(myJPString); 
 // OUTPUT '54321,10/26/2017, 5:20:02 PM,foo' 
```

### Mais Informações:

Fonte: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)