---
title: Function.prototype.bind
localeTitle: Function.prototype.bind
---
## Function.prototype.bind

`bind` é um método no protótipo de todas as funções em JavaScript. Ele permite que você crie uma nova função a partir de uma função existente, altere a nova função `this` contexto e forneça quaisquer argumentos com os quais deseja que a nova função seja chamada. Os argumentos fornecidos para `bind` precedem quaisquer argumentos que são passados ​​para a nova função quando ela é chamada.

### Usando `bind` para alterar `this` em uma função

O primeiro argumento fornecida para `bind` é a `this` contexto, a função vai ser obrigado a. Se você não quiser alterar o valor `this` passagem `null` como o primeiro argumento.

Você está encarregado de escrever código para atualizar o número de participantes conforme eles chegam em uma conferência. Você cria uma página da Web simples que possui um botão que, quando clicado, incrementa os `numOfAttendees` propriedade no objeto confrence. Você usa o jQuery para adicionar um manipulador de clique ao seu botão, mas após clicar no botão, o objeto confrence não foi alterado. Seu código pode ser algo como isto.

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees); 
```

Esse é um problema comum quando se trabalha com jQuery e JavaScript. Quando você clica no botão `this` palavra-chave no método que você passou para jQuery `on` método referencia o botão e não o objeto de conferência. Você pode ligar `this` contexto do seu método para resolver o problema.

```javascript
var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember)); 
```

Agora, quando o botão é clicado, `this` referência ao objeto `nodevember` .

### Fornecendo argumentos para uma função com `bind`

Cada argumento passado para `bind` após o primeiro precederá quaisquer argumentos passados ​​quando a função é chamada. Isso permite pré-aplicar argumentos a uma função. No exemplo abaixo, `combineStrings` usa duas strings e as concatena juntas. `bind` é então usado para criar uma função que sempre fornece "Cool" como a primeira string.

```javascript
function combineStrings(str1, str2) { 
  return str1 + " " + str2 
 } 
 
 var makeCool = combineStrings.bind(null, "Cool"); 
 
 makeCool("trick"); // "Cool trick" 
```

O guia sobre [essa referência](https://guide.freecodecamp.org/javascript/this-reference) tem mais informações sobre como as referências a `this` palavra `this` chave podem mudar.

Mais detalhes sobre o método `bind` podem ser encontrados nos [documentos MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) do Mozilla.