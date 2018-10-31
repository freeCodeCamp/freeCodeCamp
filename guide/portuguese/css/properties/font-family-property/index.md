---
title: Font Family Property
localeTitle: Propriedade da família de fontes
---
## Propriedade da família de fontes

A propriedade da família de fontes é uma propriedade em CSS. Os desenvolvedores o usam para alterar a família de fontes (ou "fonte") do texto de um site ou uma parte do texto de um site.

Exemplos de fontes incluem Arial, Georgia, Times New Roman e muito mais!

Para alterar a fonte de uma parte do texto, digite o seletor do texto específico e um par de chaves. Dentro dos colchetes, digite `font-family:` e, em seguida, o nome da fonte. Se o nome da fonte tiver mais de uma palavra, você precisará usar aspas simples ou duplas. Caso contrário, aspas não são necessárias.

```html

<p>This font will be in Times New Roman.</p> 
```

```css
p { 
  font-family: 'Times New Roman'; 
 } 
```

Mas muitas pessoas diferentes com computadores diferentes navegam na Web globalmente. Isso significa que nem todos terão o Times New Roman instalado em seus computadores. Para ajudar esses usuários, você deve adicionar fontes de fallback. As fontes de fallback são outras fontes que o navegador usará caso a primeira fonte esteja indisponível. Adicione uma vírgula após a primeira fonte e adicione o nome da primeira fonte de fallback. Você pode usar mais de uma fonte de fallback.

```html

<p>This font may or may not be in Lato.</p> 
```

```css
p { 
  font-family: Lato, Helvetica, Georgia; 
  /* Helvetica and Georgia are fallback fonts */ 
 } 
```

Se o usuário não tiver o Lato instalado primeiro, o navegador tentará usar a Helvetica. Se o usuário também não tiver Helvetica, o navegador tentará usar a Geórgia. Se o usuário não tiver a Geórgia, o navegador usará uma fonte instalada no computador do usuário.

Para fontes de fallback, você pode usar fontes nomeadas como Georgia. Você também pode usar tipos gerais como "sans-serif", "serif", "monospace" e outros. Fontes sem serifa, como Lato, são fontes sem linhas pequenas nas extremidades de letras e números. Fontes com serifa, como Times New Roman, usam linhas pequenas nas extremidades de letras e números. Fontes monoespaçadas, como Consolas, possuem letras e números que são todos da mesma largura.

```html

<p>This font may or may not be in Lato.</p> 
```

```css
p { 
  font-family: Lato, sans-serif, monospace; 
 } 

```