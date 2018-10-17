---
title: Mousedown Method
localeTitle: Método Mousedown
---# Método Mousedown

O evento mousedown ocorre quando o botão esquerdo do mouse é pressionado. Para acionar o evento mousedown para o elemento selecionado, use esta sintaxe: `$(selector).mousedown();`

Na maioria das vezes, no entanto, o método mousedown é usado com uma função anexada ao evento mousedown. Aqui está a sintaxe: `$(selector).mousedown(function);` Por exemplo:
```
$(#example).mousedown(function(){ 
   alert("Example was clicked"); 
 }); 
```

Esse código fará com que o alerta da página "Exemplo foi clicado" quando #exemple for clicado.

### Mais Informações

Mais informações podem ser encontradas [aqui](https://www.w3schools.com/jquery/event_mousedown.asp) .