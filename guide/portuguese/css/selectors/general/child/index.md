---
title: Child
localeTitle: Criança
---
## Criança

O seletor filho é representado por `>` e é colocado entre dois seletores: `parent > child` . Ele corresponde a qualquer segundo seletor que são filhos do primeiro seletor (o pai). O segundo seletor deve ser filho imediato do primeiro.

Aqui está um exemplo da sintaxe:

```css
first selector (parent) > second selector (child) { 
    css declarations; 
 } 
```

Aqui está um exemplo de código que corresponde a todos os elementos de `span` imediata de um pai `div` :

```css
div > span { 
    background-color: red; 
 } 
```

### Mais Informações:

*   [W3C Child Selector Working Draft](https://www.w3.org/TR/CSS22/selector.html#child-selectors)