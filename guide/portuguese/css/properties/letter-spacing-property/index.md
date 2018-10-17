---
title: Letter Spacing Property
localeTitle: Propriedade de espaçamento entre letras
---
## Propriedade de espaçamento entre letras

A propriedade de espaçamento entre letras ajusta o espaço entre todas as letras em um bloco de texto. Ele também é chamado de "rastreamento" em termos de tipografia e em software com opções avançadas de configuração de tipos. A propriedade aceita `em` valores `px` e `em` comprimento, incluindo valores negativos.

```css
.first-example { 
  letter-spacing: 3px; 
 } 
 .second-example { 
  letter-spacing: -1px; 
 } 
 .third-example { 
  letter-spacing: 0.5em; 
 } 
```

![resultado de CSS](https://github.com/kaithrendyle/guide-photos/blob/master/letter-spacing.png)

Em geral, é uma boa prática usar unidades relativas ( `em` ) porque o espaçamento será sempre relativo ao tamanho da fonte que você declarou.

É importante considerar a legibilidade ao ajustar o espaçamento entre letras. Se as letras estiverem muito juntas, elas podem parecer apertadas e difíceis de ler. Por outro lado, se as letras estiverem muito distantes, elas podem não ler como uma palavra, mas como letras individuais. Isso também pode afetar como os leitores de tela lêem o texto em voz alta para pessoas com baixa visão.

Em geral, letras minúsculas normalmente não precisam do espaçamento entre letras ajustado. Você pode precisar de ajustes ao usar seções maiúsculas se o espaçamento estiver muito apertado.

#### Mais Informações: