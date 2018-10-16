---
title: Window Confirm Method
localeTitle: Janela Confirmar Método
---
## Janela Confirmar Método

Você pode usar o método `confirm` para solicitar que um usuário verifique novamente uma decisão em uma página da web. Quando você chama esse método, o navegador exibirá uma caixa de diálogo com duas opções ao longo das linhas de "OK" e "Cancelar".

Por exemplo, digamos que alguém acabou de clicar em um botão Excluir. Você pode executar o seguinte código:

```javascript
if (window.confirm("Are you sure you want to delete this item?")) { 
  // Delete the item 
 } 
```

A mensagem "Tem certeza de que deseja excluir este item?" aparecerá na caixa de diálogo. Se o usuário clicar em OK, o método confirm retornará `true` e o navegador executará o código dentro da instrução if. Se ele clicar em Cancelar, o método retornará `false` e nada mais acontecerá. Isso fornece alguma proteção contra alguém acidentalmente clicando em Excluir.

#### Mais Informações:

[Documento MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)