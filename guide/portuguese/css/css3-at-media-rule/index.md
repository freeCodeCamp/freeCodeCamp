---
title: CSS3 at Media Rule
localeTitle: CSS3 na Regra de Mídia
---
## CSS3 na Regra de Mídia

A regra de mídia CSS3 é uma regra que permite o uso de consultas de mídia. As consultas de mídia podem permitir que você estilize sua página da Web (uma parte ou toda ela) de maneira diferente com base em diferentes tipos de mídia ou dispositivos.

Uma Consulta de Mídia é criada usando a tag `@media` e, em seguida, fornecendo uma regra para verificar coisas como:

*   Largura e altura da viewport atual
*   Orientação do dispositivo (isso se aplica a tablets ou telefones)
*   Resolução atual
*   E mais

Atualmente, existem quatro tipos de mídia possíveis:

*   all (padrão - isso segmentará todos os dispositivos)
*   print (Usado para impressoras; por exemplo, fornecendo estilos de impressão separados)
*   tela (Usado para computadores, telefones, tablets, etc.)
*   fala (Usada para dispositivos de acessibilidade, como o leitor de tela que narra o conteúdo de uma página da Web)

As consultas de mídia são usadas para todos os tipos de objetivos, pois permitem muitos recursos de mídia diferentes. Um dos usos mais comuns de uma consulta de mídia é tornar uma página da Web responsiva; o que significa que se comportará de maneira diferente com base no tamanho da tela.

Um exemplo de consulta de mídia é o seguinte:

```CSS
@media screen and (max-width: 1000px) { 
  body { 
    background: #000; 
  } 
 } 
```

O CSS na regra de Consulta de mídia aplica-se somente quando a regra é verdadeira. Por exemplo, olhando o snippet acima, o plano de fundo do corpo será alterado para `#000` somente quando o usuário visitar a página com um dispositivo com largura de até 1.000px ou menos. Se acima de 1000px, essa regra não será aplicada.

#### Mais Informações:

*   [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
*   [Usando consultas de mídia](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)