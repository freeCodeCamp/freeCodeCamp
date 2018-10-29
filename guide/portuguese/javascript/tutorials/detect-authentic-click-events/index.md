---
title: Detect authentic click events
localeTitle: Detectar eventos de cliques autênticos
---
## Detectar eventos de cliques autênticos

Pode haver uma situação em que você queira fazer algumas coisas específicas somente se o evento de clique for realmente acionado por um usuário e não por algum script para simular um evento de clique.

Existe uma solução muito simples para este problema, o objeto de evento javascript nos fornece uma propriedade `.istrusted` , que pode ser usada para diferenciar.

#### Aqui está um exemplo de como usar esse método

```javascript
// Assume there is a button in the HTML 
 const button = document.querySelector('button'); 
 
 button.addEventListener('click', (e) => { 
  if (e.isTrusted) { 
    console.log('Button clicked by a real user'); 
  } else { 
    console.log('Button click simulated by a script'); 
  } 
 }); 
 
 button.click() // Outputs "Button click simulated by a script" 

```