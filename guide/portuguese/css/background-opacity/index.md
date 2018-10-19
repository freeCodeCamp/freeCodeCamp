---
title: Background Opacity
localeTitle: Opacidade de fundo
---
## Opacidade de fundo

A propriedade opacidade especifica a opacidade / transparência de um elemento, ou seja, o grau em que o conteúdo por trás do elemento é visível.

A propriedade de opacidade pode levar um valor de 0,0 a 1,0. Quanto menor o valor, mais transparente:

Encontre mais detalhes [aqui](https://www.w3schools.com/css/css_image_transparency.asp)

Você pode escolher até que ponto deseja tornar o elemento transparente. Você precisa adicionar a seguinte propriedade CSS para obter os níveis de transparência.

### Propriedade: opacity

**Totalmente opaco**

```css
.nome-da-classe { 
  opacity:1; 
 } 
 
 OR 
 
 .nome-da-classe { 
  opacity:1.0; 
 } 
```

**Translúcido**

```css
.nome-da-classe { 
  opacity:0.5; 
 } 
 Opacity value can be anything between 0 and 1; 
```

**Transparente**

```css
.nome-da-classe { 
  opacity:0; 
 } 
 
 OR 
 
 .nome-da-classe { 
  opacity:0.0; 
 } 
```

### Propriedade: background-color

Alternativamente, você pode usar um valor rgba transparente como este: 
```css
.nome-da-classe {
  background-color: rgba(0,0,0,.5);
}
```
O exemplo acima define o plano de fundo como preto com 50% de opacidade. O último valor de um valor rgba é o valor alfa. Um valor alfa de 1 é igual a 100% e 0.5 (.5 para encurtar) é de 50%. Usamos esse método para adicionar transparência a um elemento sem afetar o conteúdo interno.

[Um exemplo codepen para mostrar intervalos de opacidade em segundo plano](https://codepen.io/lvcoulter/full/dVrwmK/)

#### Mais Informações:

Para mais informações, visite [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) [Propriedade CSS de Opacidade no CSS-Tricks](https://css-tricks.com/almanac/properties/o/opacity/)

Suporte do navegador: [caniuse](https://caniuse.com/#search=opacity)
