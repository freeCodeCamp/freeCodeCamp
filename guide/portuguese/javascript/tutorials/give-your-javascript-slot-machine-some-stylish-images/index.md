---
title: Give Your JavaScript Slot Machine Some Stylish Images
localeTitle: Dê ao seu caça-níqueis JavaScript algumas imagens elegantes
---
Nós já configuramos as imagens para você em uma matriz chamada imagens. Podemos usar diferentes índices para pegar cada um deles.

Veja como definiríamos o primeiro slot para mostrar uma imagem diferente, dependendo de qual número seu número aleatório gera:
```
$($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">'); 

```