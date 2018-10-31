---
title: Onload Event
localeTitle: Evento Onload
---
## Evento Onload

O evento `onload` é usado para executar uma função JavaScript imediatamente após o carregamento de uma página.

### Exemplo:

```javascript
<body onload="myFunction()"> 
 
 <script> 
  function myFunction() { 
    alert('Page finished loading'); 
  } 
 </script> 
```

No exemplo acima, assim que a página da Web for carregada, a função `myFunction` será chamada, mostrando o alerta de `Page finished loading` da `Page finished loading` para o usuário.

o evento `onload` é mais usado no elemento `<body>` para executar o script. Se estiver anexado ao `<body>` , o script será executado assim que a página da web tiver carregado completamente todo o conteúdo (imagens, arquivos de script, arquivos CSS, etc.).

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

#### Outros recursos

[jQuery .on () Anexo do manipulador de eventos](https://api.jquery.com/on/) [Estouro de pilha: window.onload vs. document.onload](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)