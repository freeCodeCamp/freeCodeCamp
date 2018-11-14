---
title: Font Variant
localeTitle: Variante de Fontes
---
## Propriedade de Variante de Fonte

A propriedade font-variant é mais comumente usada para alterar texto direcionado para small caps. O valor padrão é `normal` .

```css
p { 
  font-variant: small-caps; 
 } 
```

A propriedade também aceita `all-small-caps` , `petite-caps` , `all-petite-caps` , `titling-caps` e `unicase` ; no entanto, eles são novos no CSS3 e ainda não são bem suportados.

Observe que, se você usar maiúsculas na marcação HTML, isso substituirá o valor de maiúsculas pequenas, resultando em letras maiúsculas comuns. Se você quiser manter a marcação em maiúsculas, mas mudar para small caps com CSS, basta definir `text-transform: lowercase` junto com sua declaração small caps.

Enquanto as maiúsculas pequenas podem adicionar um pouco mais de elegância à sua tipografia, os designers recomendam usá-las apenas se forem realmente incorporadas na fonte. As maiúsculas "falsas" são versões reduzidas, geradas por computador, de letras maiúsculas. Por outro lado, as small caps "reais" são desenhadas separadamente pelo designer de tipos e parecem um pouco mais largas e mais largas do que as "falsas".

#### Mais Informações:

[Design para Hackers](https://designforhackers.com/blog/small-caps/)

[Variante de fonte no MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)