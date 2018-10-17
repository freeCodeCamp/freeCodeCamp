---
title: Use the flex-basis Property to Set the Initial Size of an Item
localeTitle: Use a propriedade de base flexível para definir o tamanho inicial de um item
---
## Use a propriedade de base flexível para definir o tamanho inicial de um item

Você pode conseguir o mesmo efeito que os dois desafios anteriores com `flax-basis` . Depois de definir os valores apropriados, você verá `#box-2` sendo maior que `#box-1` antes que qualquer redução ou crescimento seja aplicado.

```css
#box-1 { 
  background-color: dodgerblue; 
  height: 200px; 
  flex-basis: 10em; 
 } 
 
 #box-2 { 
  background-color: orangered; 
  height: 200px; 
  flex-basis: 20em; 
 } 

```