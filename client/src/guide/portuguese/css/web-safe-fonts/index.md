---
title: Web Safe Fonts
localeTitle: Fontes seguras da Web
---
## Fontes seguras da Web

As fontes seguras para a Web são fontes incluídas na maioria dos sistemas operacionais, e a implicação dessa alta disponibilidade é que um projetista pode esperar que a tipografia envolvendo fontes seguras da Web apareça exatamente como se destina à maioria dos usuários. Abaixo estão listas não exaustivas de algumas fontes que são consideradas seguras para a Web no momento da escrita, categorizadas por famílias de fontes genéricas CSS.

Fontes serifadas da Web:

*   Geórgia
*   Times New Roman

Fontes sans-serif seguras para a Web:

*   Arial
*   Tahoma
*   Trebuchet MS
*   Verdana

Fontes monoespaçadas seguras na Web:

*   Courier Novo

Vale a pena observar que as pilhas de fontes com opções de fallback, incluindo uma família de fontes genérica, ainda devem ser usadas, mesmo se o design usar apenas fontes seguras da Web. Por exemplo:

```css
p { 
  font-family: Tahoma, Arial, sans-serif; 
 } 
```

#### Uma nota sobre fontes da Web

Só porque algumas fontes são mais seguras do que outras, isso não significa que você deve limitar seus projetos a usar apenas fontes seguras para a web. Projetos modernos com CSS também podem aproveitar as fontes da Web para garantir uma tipografia consistente em todos os sistemas operacionais.

#### Mais Informações:

*   [Documentação MDN: texto fundamental e estilo de fonte](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts)
*   [Documentação MDN: Fontes da Web](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
*   [Fontes seguras da Web](https://www.cssfontstack.com)