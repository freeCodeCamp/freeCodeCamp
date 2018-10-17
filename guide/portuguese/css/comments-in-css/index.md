---
title: Comments in CSS
localeTitle: Comentários em CSS
---
## Comentários em CSS

Os comentários são usados ​​no CSS para explicar um bloco de código ou para fazer alterações temporárias durante o desenvolvimento. O código comentado não é executado.

A sintaxe de comentário no CSS funciona para comentários de uma ou várias linhas. Você pode adicionar tantos comentários à sua folha de estilo quanto quiser.

```css
    /* 
        This is 
        a multi-line 
        comment 
    */ 
 
    /* This is a single line comment*/ 
    .group:after { 
        content: ""; 
        display: table; 
        clear: both; 
    } 
```

Usando comentários CSS para tornar suas folhas de estilo mais legíveis, o CSS será mais fácil de manter no futuro para você ou outro desenvolvedor. É uma boa prática usar comentários CSS para ajudar a identificar partes de qualquer folha de estilo que possa ser difícil de entender para alguém que não escreveu o código.

Você também pode tornar seus comentários mais legíveis estilizando-os.

```css
/* 
 *** 
 * SECTION FOR H2 STYLE 
 *** 
 * A paragraph where I give informations 
 * about everything that someone who reads the code 
 * but didn't write it would need to know. 
 * The asterisk around the paragraph make it more readable. 
 *** 
 */ 
 
 You can add as many comments to your stylesheet as you like. It's good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand from a cursory glance. Comments are especially important when working in a team, when your code must be understood by others. By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future. 
 
 ## Comment Formats 
 
 Comments should be used everyday in your CSS to keep in maintainable and readable by any dev who dives into said CSS. 
 Here are a few exmples to get you started of CSS comments you can use in your daily work to make your life that bit easier. 
```

css / \* ++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ TABELA DE CONTEÚDO DA CSS

1,0 - Reset 2.0 - Fontes 3.0 - Globals 4.0 - Paleta de Cores 5.0 - cabeçalho 6.0 - corpo 6.1 - Sliders 6.2 - Imagens 7.0 - Rodapé ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ \* /

/ 1,0 - Redefinir \* /

/ 2.0 - Fontes \* /

/ 3.0 - Globals \* /

/ 4.0 - Paleta de Cores \* /

/ 5.0 - Cabeçalho \* /

/ 6.0 - corpo \* /
```
/************************************************************************ 
 5.1 - Sliders */ 
 
 /************************************************************************ 
 5.2 - Imagery */ 
```

/ 7,0 - Rodapé \* / \`\` \`css

h2 { tamanho da fonte: 1,2em; font-family: "Ubuntu", serif; text-transform: maiúscula; } \`\` \`

### Mais Informações:

*   [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
*   [Comentários CSS por Adam Roberts](https://www.sitepoint.com/css-comments/)
*   [Diretrizes CSS](https://cssguidelin.es/#commenting)