---
title: ID Selector
localeTitle: Seletor de ID
---
## Seletor de ID

O seletor de ID CSS aplica estilos a um elemento html específico. O seletor de ID CSS deve corresponder ao atributo ID de um elemento HTML. Ao contrário das classes, que podem ser aplicadas a vários elementos em um site, um ID específico pode ser aplicado somente a um único elemento em um site. O ID do CSS substituirá as propriedades da Classe CSS. Para selecionar um elemento com um id específico, escreva um caractere hash (#), seguido pelo id do elemento.

### Sintaxe

```css
#specified_id { /* styles */ } 
```

Você pode combinar o seletor de ID com outros tipos de seletores para estilizar um elemento muito específico.

```css
section#about:hover { color: blue; } 
 
 div.classname#specified_id { color: green; } 
```

### Nota sobre IDs

ID deve ser evitado ao estilizar, se possível. Como tem alta especificidade e pode ser anulada somente se você inline estilos, ou adicionar estilos em `<style>` . O peso dos seletores de classe de substituição de ID e dos seletores de tipo.

Lembre-se de que o seletor de ID deve corresponder ao atributo de ID de um elemento HTML.

```html

<div id="specified_id"><!-- content --></div> 
```

### Especificidade

Os seletores de ID têm alta especificidade, dificultando sua substituição. As classes têm uma especificidade muito menor e geralmente são a maneira preferida de estilizar elementos para evitar problemas de especificidade. [Especificidade em MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

#### Mais Informações:

[freeCodeCamp Challenge - Defina o ID de um elemento](https://www.freecodecamp.org/challenges/set-the-id-of-an-element)

[Desafio freeCodeCamp - Use um atributo de ID para estilizar um elemento](https://www.freecodecamp.org/challenges/use-an-id-attribute-to-style-an-element)

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors)