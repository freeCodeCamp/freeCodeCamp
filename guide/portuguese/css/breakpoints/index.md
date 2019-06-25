---
title: Breakpoints
localeTitle: Pontos de interrupção
---
## Visão geral

Um ponto de interrupção CSS é um ponto específico no qual o layout de um site é alterado, com base em uma [consulta de mídia](https://guide.freecodecamp.org/css/css3-media-queries) tornando-se ativo.

Geralmente, você especifica um ponto de interrupção quando deseja readaptar o layout do site ao tamanho da porta de visualização do navegador; principalmente, para a largura da janela de visualização.

Por exemplo, se o conteúdo do seu site estiver ótimo em uma viewport estreita (como em um navegador de smartphone), mas ele começar a ficar ruim em telas maiores (por exemplo, talvez o tamanho das fontes seja muito pequeno e difícil de ler), talvez queira introduzir um novo ponto de interrupção para telas maiores que aumentem as fontes:

Pontos de interrupção CSS podem ser considerados como o coração do webdesign responsivo, pois definem como o conteúdo se comporta ou é organizado em uma largura / escala de dispositivo diferente, permitindo que você mostre o melhor layout possível para o usuário.

![Exemplo](https://getflywheel.com/wp-content/uploads/2018/02/css-breakpoints-layouts-01.jpg)

## Definindo Pontos de Quebra

Os pontos de interrupção são amplamente definidos com base em um dos itens a seguir.

*   Pontos de interrupção baseados na largura do dispositivo.
*   Pontos de interrupção baseados em conteúdo.

### Pontos de interrupção baseados na largura do dispositivo

É evidente que todos os nossos dispositivos não possuem tamanhos / larguras de tela iguais. Agora é uma decisão de design incluir um conjunto de dispositivos específicos e codificar as regras de css de acordo. Já temos dispositivos suficientes para nos preocupar, e quando um novo sai com uma largura diferente, voltar ao seu CSS e adicionar um novo ponto de interrupção novamente é demorado.

Aqui está um exemplo
```
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */ 
 
 /* Portrait */ 
 
 @media only screen 
 
 and (min-device-width: 375px) 
 
 and (max-device-width: 667px) 
 
 and (-webkit-min-device-pixel-ratio: 2) 
 
 and (orientation: portrait) { 
 
 } 
 
 /* Landscape */ 
 
 @media only screen 
 
 and (min-device-width: 375px) 
 
 and (max-device-width: 667px) 
 
 and (-webkit-min-device-pixel-ratio: 2) 
 
 and (orientation: landscape) { 
 
 } 
 
 /* ----------- Google Pixel ----------- */ 
 
 /* Portrait */ 
 
 @media screen 
 
 and (device-width: 360px) 
 
 and (device-height: 640px) 
 
 and (-webkit-device-pixel-ratio: 3) 
 
 and (orientation: portrait) { 
 
 } 
 
 /* Landscape */ 
 
 @media screen 
 
 and (device-width: 360px) 
 
 and (device-height: 640px) 
 
 and (-webkit-device-pixel-ratio: 3) 
 
 and (orientation: landscape) { 
 
 } 
```

> Com essa abordagem, você terá uma lista enorme de consultas de mídia.

### Pontos de interrupção baseados no conteúdo

Essa é a opção preferida ao criar ou gravar as regras de ponto de interrupção. Porque é fácil ajustar seu conteúdo de acordo com um layout específico somente quando ele requer uma alteração.
```
@media only screen (min-width: 768px){ 
 ... 
 } 
```

> Este ponto de interrupção significa que o CSS será aplicado quando a largura do dispositivo for 768px ou superior.

#### Você também pode definir um intervalo com pontos de interrupção, portanto, o CSS só será aplicado dentro desses limites.
```
@media only screen and (min-width: 768px) and (max-width: 959px){ 
 
 ... 
 
 } 
```

**Nota** Sempre tente criar pontos de interrupção com base em seu próprio conteúdo, não em dispositivos. Divida-os em uma largura lógica em vez de em uma largura aleatória e mantenha-os em um número gerenciável, portanto, a modificação permanece simples e clara.

**Os pontos de interrupção CSS** são úteis quando você deseja atualizar estilos com base no tamanho da tela. Por exemplo, de um dispositivo que mede 1200px de largura e acima, use o `font-size: 20px;` da `font-size: 20px;` , ou então use o `font-size: 16px;` da `font-size: 16px;` .

O que nós começamos é de mais de 1200px, largura de tela de um laptop comum. Você também pode ter notado que mencionamos 'maior que', significando que estamos de certa forma usando algo como uma instrução ' **se-então** '.

Vamos transformá-lo em código CSS:

```css
.text1 { 
    font-size: 16px; 
 } 
 @media (min-width: 1200px) { 
    .text1 { 
        font-size: 20px; 
    } 
 } 
```

**Para nossa conveniência** , escrevemos primeiro o estilo básico `.text1` ... depois, vamos especificar as regras `@media` .

**Dica** : você pode ver em um Framework CSS comum chamado 'Bootstrap', que eles adotaram **'min-width' e up** em seu Bootstrap v4.0, em comparação com seu antigo Bootstrap v3.0 usando **'max-width' e down** . Isso é apenas uma **preferência** , e não há nada de errado em dizer " _esse_ tamanho e menos que" versus " _esse_ tamanho e maior que".

Não há problema em usar `@media (max-width) {}` . Aqui está um exemplo:

```css
.text1 { 
    font-size: 20px; 
 } 
 @media (max-width: 1199px) { 
    font-size: 16px; 
 } 
```

```css
// Normal, basic styles 
 // that look great on small screens 
 // but not on bigger screens 
 body { 
  font-size: 16px; 
 } 
 
 // Define a new breakpoint, with a media query. 
 // In this case, for when the viewport's width 
 // is at least 512px wide. 
 @media (min-width: 512px) { 
    body { 
        font-size: 20px; 
    } 
 } 
```

Os pontos de interrupção baseados no conteúdo, e não no dispositivo, são menos complicados. Aqui está um trecho simples que é acionado quando a largura do dispositivo é ascendente do `code 700px` aproximadamente da tela do smartphone

```css
@media only screen and (min-width: 700px) { 
  something { 
    something: something; 
  } 
 } 
```

Você também pode definir uma largura mínima e máxima, o que permite que você faça experimentos com intervalos diferentes. Este dispara entre smar-phone e tamanhos maiores de desktops e monitores

```css
@media only screen and (min-width: 700px) and (max-width: 1500px) { 
  something { 
    something: something; 
  } 
 } 
```

#### Mais Informações:

*   [Pontos de interrupção responsivos](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
*   [artigo freecodecamp.org sobre como usar pontos de interrupção CSS](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)
*   [Consultas de mídia CSS3](https://guide.freecodecamp.org/css/css3-media-queries)
*   [Definindo pontos de interrupção](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/)
*   [CSS-Tricks: @media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
*   [w3schools: pontos de interrupção típicos do dispositivo](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)