---
title: Styling Links
localeTitle: Links de estilo
---
## Links de estilo

Os links podem ser estilizados com qualquer propriedade CSS, como `color` , `font-family` `font-size` e `padding` . Aqui está um exemplo fácil:

```css
a { 
    color: hotpink; 
 } 
```

## Além disso, os links podem ter um estilo diferente, dependendo do estado em que estão.

Os links também têm 4 estados e muitos programadores definem cada estado de maneira diferente. Os quatro estados são:

*   `a:link` : um `a:link` não visitado e não clicado
*   `a:visited` : um link clicado visitado
*   `a:hover` : um link quando o mouse do usuário está sobre ele
*   `a:active` : um link quando é clicado

A propriedade `<a href="">` é responsável por criar URLs e pode ser modificada usando várias propriedades de estilo CSS, embora tenha algumas delas por padrão:

1.  Sublinhado
2.  Cor azul

Você pode alterá-los adicionando as propriedades de `color` e `text-decoration` .

```css
   color: black; 
   text-decoration: none; 
```

Você também pode estilizar o link com base na interação usando essas propriedades, também conhecidas como estados de link:

*   a: link - um link normal não visitado
*   a: visitado - um link que o usuário visitou
*   a: hover - um link quando o usuário passa o mouse sobre ele
*   a: ativo - um link no momento em que é clicado

Aqui está um exemplo de CSS usando os 4 estados:

```css
a:link { color: red; } 
 a:visited { color: blue; } 
 a:hover { color: green; } 
 a:active { color: blue; } 
```

**Observe** que existem algumas _regras de ordenação_ para quando você está definindo o estilo para estados de link.

*   `a:hover` deve vir depois de `a:link` e `a:visited`
    
*   `a:active` deve vir depois de `a:hover`
    
    a: link - um link normal não visitado a: visitado - um link que o usuário visitou a: hover - um link quando o usuário passa o mouse sobre ele a: ativo - um link no momento em que é clicado
    

```css
/* unvisited link */ 
 a:link { 
    color: red; 
 } 
 
 /* visited link */ 
 a:visited { 
    color: green; 
 } 
 
 /* mouse over link */ 
 a:hover { 
    color: hotpink; 
 } 
 
 /* selected link */ 
 a:active { 
    color: blue; 
 } 

```