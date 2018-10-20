---
title: Use the flex-basis Property to Set the Initial Size of an Item
localeTitle: Используйте свойство flex-basis для установки начального размера элемента
---
## Используйте свойство flex-basis для установки начального размера элемента

Вы можете добиться того же эффекта, что и предыдущие две проблемы с `flax-basis` . После установки подходящих значений вы увидите, что `#box-2` больше, чем `#box-1` до того, как будет применено любое сжатие или увеличение.

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