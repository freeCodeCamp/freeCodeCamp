---
title: Make an Image Responsive
localeTitle: Faça uma imagem responsiva
---
## Faça uma imagem responsiva

Seguindo as instruções:

Adicione regras de estilo para a tag img para torná-lo responsivo ao tamanho de seu contêiner. Ele deve exibir como um elemento de nível de bloco, ele deve caber toda a largura de seu contêiner sem esticar e deve manter sua proporção original.

o estilo se torna:

```css
<style> 
  img { 
  max-width: 100%; 
  display: block; 
  height: auto; 
 } 
 </style> 

```