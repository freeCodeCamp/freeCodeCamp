---
title: Location Reload Method
localeTitle: Método de recarga de localização
---
## Método de recarga de localização

`Location.reload()` método JavaScript `Location.reload()` fornece meios para recarregar a página no URL atual.

A sintaxe é a seguinte:

`object.reload(forcedReload);` , onde `forceReload` é um parâmetro opcional.

Para simplesmente recarregar a página, você pode inserir `window.location` como objeto.

Parâmetros opcionais `force reload` é um valor booleano, que se configurado para:

*   `True` recarrega a página do servidor (por exemplo, não armazena os dados em cache pelo navegador):
```
window.location.reload(true); 
```

*   `False` recarrega a página usando a versão da página armazenada em cache pelo navegador.
```
window.location.reload(false); 
```

`False` é o parâmetro padrão, portanto, se deixado em branco, `object.reload()` recarrega a página usando os dados em cache do broswer, ou seja, é idêntico ao uso do método como `object.reload(false)` .

Para criar o efeito da opção "Atualizar" fornecida pelo navegador, convém criar um botão HTML e executar um dos seguintes procedimentos:

*   Anexe `Location.reload()` à marcação de botão HTML, assim:
```
<input type="button" value="Refresh Button" onClick="window.location.reload()"> 
```

*   atribuir um evento no clique ao botão com a função que usa o método, onde o botão é semelhante ao
```
<button type="button" onClick="reloadThePage()">Refresh!</button> 
```

```
<script> 
 function reloadThePage(){ 
    window.location.reload(); 
 } 
 </script> 
```

### Exemplo:

```javascript
// Reload the current resources from the server 
 window.location.reload(true); 
 
 // Reload the current resources from the browser's cache 
 window.location.reload(); 
```

Isso recarregará a página no URL atual do servidor.

#### Mais Informações:

*   [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
*   [Escolas W3](https://www.w3schools.com/jsref/met_loc_reload.asp)