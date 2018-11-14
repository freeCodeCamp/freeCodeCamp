---
title: Units
localeTitle: Unidades
---
## Unidades

Muitas propriedades CSS, como `width` , `margin` , `padding` , `font-size` etc., têm comprimento. O CSS tem uma maneira de expressar o tamanho em várias unidades. O comprimento é uma combinação de um número e uma unidade sem espaço em branco. Por exemplo, `5px` , `0.9em` etc.

### comprimento

#### Unidades de Comprimento Comum

Existem várias unidades usadas pelo CSS para expressar o comprimento. Os mais antigos, suportados por todos os navegadores, são:

*   **rem** - "r" significa "root": "root em" -, que é igual ao tamanho da fonte fixado ao elemento raiz (quase sempre `<html>` ).
*   **vh** e **vw** - Muitas técnicas de design da Web responsivas dependem muito de regras de porcentagem. No entanto, as medidas de porcentagem de CSS nem sempre são a melhor solução para todos os problemas. A medida **vh** é igual a 1/100 da altura da viewport. Assim, por exemplo, se a altura do navegador for 800px, 1vh é igual a 8px e, de forma semelhante, se a largura da viewport for 650px, 1vw será equivalente a 6.5px.
*   **vmin** e **vmax** - Essas unidades estão relacionadas ao valor máximo ou mínimo de **vh** e **vw** . Por exemplo, se o navegador fosse definido como 1200px de largura e a altura 600px, 1vmin seria 6px e 1vmax seria 12px. No entanto, se a largura foi definida para 700px e a altura definida para 1080px, vmin será igual a 7px e vmax 10.8px.
*   **ex** e **ch** - Essas unidades, semelhantes a **em** e **rem** , dependem da fonte atual e do tamanho da fonte. No entanto, ao contrário de **em** e **rem** , essas unidades também dependem de `font-family` , pois são determinadas com base em medidas específicas para cada fonte. A unidade **ch** ("unidade de caracteres") é definida como a largura do caractere zero ("0"). A **ex-** unidade é definida como "a altura-x atual da fonte atual ou a metade de 1em". A altura-x de uma determinada fonte é a altura do "x" minúsculo dessa fonte. Geralmente é a marca do meio da fonte.

| Unidade | Descrição | | --------------- | ----------------------- | | em | 1 em é o valor computado do tamanho da fonte no elemento em que é usado. | | ex | 1 ex é a altura x da fonte atual. A altura x é geralmente (mas nem sempre, por exemplo, se não houver 'x' na fonte) igual à altura de um 'x' minúsculo | | ch | 1 ch é o avanço do glifo '0' (zero) na fonte atual. 'ch' significa caráter. | | rem | 1 rem é o valor calculado da propriedade font-size para o elemento raiz do documento. | vw | 1vw é 1% da largura da viewport. 'vw' significa 'largura da janela de visualização'. | | vh | 1vh é 1% da altura da viewport. 'vh' significa 'altura da janela de visualização'. | | vmin | Igual ao menor de 'vw' ou 'vh' | | vmax | Igual ao maior de 'vw' ou 'vh' |

Existem dois tipos gerais de unidades usadas para comprimento e tamanho em CSS: relativo e absoluto.

### Unidades Relativas

As unidades relativas mudam em relação ao tamanho atual da fonte do elemento ou a outras configurações. Algumas unidades relativas são

*   `em`
*   a largura de uma letra maiúscula M do `font-size` da `font-size` do elemento atual.
*   Tamanhos de fonte são herdados dos elementos pai.
*   Exemplo: `html div { font-size: 16px; } div h3 { font-size: 2rem; }` Aqui, o `<h3>` será igual a `32px` já que o `font-size` da `font-size` do elemento pai ou atual é `16px` .
*   `rem`
*   raiz `em` , ou a largura de uma letra maiúscula M da base padrão `font-size` .
*   Tamanhos de fonte pai não terão efeito.
*   Exemplo: `html body { font-size: 16px; } p { font-size: 1.5rem; }` Aqui, o `<p>` será igual a `24px` já que o `font-size` padrão da `font-size` básica é `16px` .
*   `%`
*   o tamanho percentual relativo ao tamanho de um pai.
*   Exemplo: `html div { width: 400px; } div p { width: 75%; }` Como a largura do pai é `400px` , a largura do pargraph interno seria `300px` , ou 75% de `400px` .
*   `vw`
*   largura de visualização ou 1/100 da largura da janela de visualização
*   Exemplo: `html body { width: 100vw; }` O `body` preenche a largura da viewport, seja 417 px, 690 px ou qualquer largura.
*   `vh`
*   altura da visualização ou 1/100 da altura da janela de visualização
*   Exemplo: `html div { height: 50vh; }` Este `div` preencherá metade da altura da viewport, seja 1080px, 1300px ou qualquer altura.

### Unidades Absolutas

Unidades absolutas serão as mesmas, independentemente do tamanho da tela ou outras configurações. Algumas unidades absolutas são

*   `px`
*   pixel
*   as contagens de pixels são relativas à qualidade da tela do dispositivo de visualização
*   `in` , `cm` , `mm`
*   polegada, centímetro, milímetro
*   Uma polegada é uma polegada em uma tela pequena ou uma tela grande
*   `pt` , `pc`
*   pontos (1/72 de polegada) e picas (12 pontos)

Exemplo

```html

p { 
  font-size: 24px; 
 } 
 div { 
  width: 3in; 
  border-width: 3pt; 
 } 
```

Um parágrafo com `font-size: 24px` será exibido como 24px em uma tela de telefone, tablet ou desktop.

A `div` aparecerá como 3 polegadas de largura e a `border` na `div` será 3/72 de uma polegada de espessura, independentemente do tamanho da tela.

### Mais Informações:

*   [WebPlatforms Noções básicas sobre pixels e outras unidades CSS](https://webplatform.github.io/docs/tutorials/understanding-css-units/)
*   [Docs Web do MDN - Unidades CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
*   [Tutoriais de Web Design]('https://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573)
*   [Ajuda em HTML em Unidades CSS](http://www.htmlhelp.com/reference/css/units.html)