---
title: Window Open Method
localeTitle: Método Aberto da Janela
---
## Método Aberto da Janela

O método Window `open()` pode ser usado para carregar um recurso especificado no contexto de navegação (janela ou guia) com o nome especificado. Se esse nome não existir, uma nova janela será criada e o recurso será carregado em seu contexto.

## Prameters

`url` Um DOMString indicando o recurso a ser carregado. Este pode ser um caminho ou URL para qualquer recurso que seja suportado pelo navegador.

`windowName` Um DOMString especificando o nome do contexto de navegação (janela ou tabulação) no qual o conteúdo será carregado; se o nome não indicar um contexto existente, uma nova janela será criada e receberá o nome especificado por windowName. Esse nome pode ser usado como destino de links e formulários, especificando-o como o atributo de destino.

`windowFeatures` `optional` Um DOMString contendo uma lista separada por vírgula de recursos de janela fornecidos com seus valores correspondentes no formato "name = value". Esses recursos incluem opções como tamanho e posição padrão da janela, etc.

## Sintaxe

```javascript
  var window =  window.open(url, windowName, [windowFeatures]); 
```

## Exemplo

```javascript
var windowObjectReference; 
 var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
 
 function openRequestedPopup() { 
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures); 
 } 
```

Se já existir uma janela com o nome, o strURL será carregado na janela existente. Nesse caso, o valor de retorno do método é a janela existente e strWindowFeatures é ignorado.

#### Mais Informações:

[Documento MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)