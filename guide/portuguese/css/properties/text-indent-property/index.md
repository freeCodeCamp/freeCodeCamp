---
title: Text Indent Property
localeTitle: Propriedade de recuo de texto
---
## Propriedade de recuo de texto

A propriedade css `text-indent` especifica a quantidade de recuo (espaço vazio) que é colocado antes das linhas de texto em um bloco. Por padrão, isso controla o recuo somente da primeira linha formatada do bloco, mas as palavras `each-line` chave `hanging` e de `each-line` podem ser usadas para alterar esse comportamento.

**Palavras-chave**

`hanging` - O recuo afeta a primeira linha do contêiner do bloco, bem como cada linha após uma quebra de linha forçada, mas não afeta as linhas após uma quebra de quebra automática.

`each-line` - Inverte quais linhas são recuadas. Todas as linhas, exceto a primeira linha, serão recuadas.

**Sintaxe**

```css
  /* <length> values */ 
  text-indent: 40px; 
 
  /* <percentage> value relative to the containing block width */ 
  text-indent: 10%; 
 
  /* Keyword values */ 
  text-indent: 2em each-line; 
  text-indent: 2em hanging; 
  text-indent: 2em hanging each-line; 
```

_Observação: atualmente, o suporte a palavras-chave `hanging` e a `each-line` só está disponível por trás do sinalizador de recursos da Plataforma Web Experimental_

### Mais Informações:

*   [MDN Doc on `text-indent`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
*   [Suporte do navegador para `text-indent`](http://caniuse.com/#feat=css-text-indent)