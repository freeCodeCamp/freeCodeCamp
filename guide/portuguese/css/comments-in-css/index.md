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
 ```
 
Você pode adicionar quantos comentários quiser no seu stylesheet. E uma boa prática usar comentários CSS para ajudar a identificar partes de uma stylesheet que possam ser difíceis de entender. Comentários são especialmente importantes quando se está trabalhando em time, quando seu código deve ser entendido por outros. Usando comentários CSS para fazer seu stylesheet mais legível, o código CSS será fácil de fazer manutenção no futuro.

## Formatos de Comentários

Comentários devem ser usados diariamente no seu CSS para manter a facilidade de manutenção e leitura por qualquer desenvolvedor CSS.
Aqui estão alguns exemplos para te ajudar a iniciar seus comentários CSS que você pode usar diariamente para fazer sua vida um pouco mais simples. 

``` css
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   TABELA DE CONTEÚDO DO CSS
   
   1.0 - Redefinir
   2.0 - Fontes
   3.0 - Globals
   4.0 - Paleta de Cores
   5.0 - Cabeçalho
   6.0 - Corpo
       6.1 - Sliders
       6.2 - Imagens
   7.0 - Rodapé
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/****************************************************************************
1.0 - Redefinir */
/****************************************************************************
2.0 - Fontes */
/****************************************************************************
3.0 - Globals */
/****************************************************************************
4.0 - Paleta de Cores */
/****************************************************************************
5.0 - Cabeçalho */
/****************************************************************************
6.0 - Corpo */
    /************************************************************************
    5.1 - Sliders */
    
    /************************************************************************
    5.2 - Imagens */
    
/****************************************************************************
7.0 - Rodapé */

h2 {
    font-size: 1.2em;
    font-family: "Ubuntu", serif;
    text-transform: uppercase;
}
```

### Mais Informações:

*   [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
*   [Comentários CSS por Adam Roberts](https://www.sitepoint.com/css-comments/)
*   [Diretrizes CSS](https://cssguidelin.es/#commenting)
