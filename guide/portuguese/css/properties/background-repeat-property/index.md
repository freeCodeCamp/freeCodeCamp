---
title: Background Repeat Property
localeTitle: Propriedade de repetição de plano de fundo
---
## Propriedade de repetição de plano de fundo

A propriedade CSS de repetição de fundo define como as imagens de fundo são repetidas.

Uma imagem de fundo pode ser repetida ao longo do eixo horizontal, o eixo vertical, ambos os eixos, ou não é repetido de todo. Por padrão, uma imagem de fundo é repetida vertical e horizontalmente.

Sintaxe:

```css
background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit; 
```

*   repeat: A imagem de fundo será repetida vertical e horizontalmente. Este é o padrão
    
*   repeat-x: a imagem de fundo será repetida apenas horizontalmente
    
*   repeat-y: a imagem de fundo será repetida apenas verticalmente.
    
*   no-repeat: a imagem de fundo não será repetida.
    
*   initial: define essa propriedade como seu valor padrão.
    
*   inherit: herda essa propriedade de seu elemento pai.
    

Exemplos: Para repetir a imagem horizontal e verticalmente

```css
body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat; 
 } 
```

Para repetir a imagem horizontalmente

```css
body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat-x; 
 } 
```

#### Mais Informações:

[Para obter mais informações sobre propriedade de repetição de plano de fundo](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)