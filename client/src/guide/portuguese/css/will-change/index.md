---
title: Will Change
localeTitle: Vai mudar
---
## Vai mudar

A propriedade will-change permite que você informe ao navegador quais manipulações ocorrerão com o elemento para otimizá-lo.

```css
.container { 
 will-change: transform; 
 } 
```

A propriedade acima será alterada para a classe `.container` , neste caso, a transformação no elemento pode ou não ocorrer.

No entanto, usando essa propriedade, há um efeito colateral interessante.

Se aplicarmos ao elemento transform: `translateZ (0)` , o elemento criará um novo contexto de sobreposição, e em alguns navegadores ele também adicionará uma camada ao seu próprio fluxo de renderização, o que nos dará um aumento de desempenho, o que estamos alcançando .

Consequentemente, usando `will-change: transform` , o navegador criará um novo contexto de sobreposição, independentemente de termos aplicado a transformação ao elemento ou não.

A principal coisa a observar é que a mudança de vontade criará um novo contexto de sobreposição somente se a propriedade também criar um novo contexto de sobreposição. Como a propriedade transform cria um novo contexto de sobreposição, `will-change: transform` também criará um novo contexto de sobreposição.

Se você usou `will-change: display` , um novo contexto de sobreposição não será criado, já que nenhum valor da propriedade de exibição cria um novo contexto de sobreposição.

Vamos ver outro exemplo: `opacity` . A opacidade com um valor de 1 não cria um novo contexto de sobreposição, mas com um valor mais baixo (por exemplo, 0,9) será criado. Enquanto vai mudar: em qualquer caso, a opacidade criará um novo contexto de sobreposição.

#### Mais Informações:

*   [vai mudar em documentos web MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
*   [O CSS mudará o módulo de nível 1 (rascunho de trabalho)](https://drafts.csswg.org/css-will-change/#will-change)
*   [Posso usar: propriedade de alteração de CSS](https://caniuse.com/#feat=will-change)