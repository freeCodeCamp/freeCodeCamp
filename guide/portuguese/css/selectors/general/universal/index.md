---
title: Universal
localeTitle: Universal
---
## Universal

O Seletor Universal (\*) seleciona todos os elementos. Também seleciona todos os elementos dentro de um elemento. Você pode anexar seletor universal com qualquer outro seletor.

### Sintaxe do Código

```css
* { 
  css declarations; 
 } 
```

```css
element * { 
  css declarations; 
 } 
```

#### Exemplo de código

Esse seletor corresponde a todos os elementos e define a cor da fonte como verde.

```css
* { 
  color: green; 
 } 
```

Este seletor seleciona todos os elementos div e define a cor da fonte como verde.

```css
div * { 
  color: green; 
 } 
```

Este seletor seleciona todos os elementos cujo valor de atributo de idioma começa com en.

```css
* [lang^=en] { 
  color: green; 
 } 

```