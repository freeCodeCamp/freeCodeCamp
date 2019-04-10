---
title: Grid Layout
localeTitle: Layout de grade
---
## Layout de grade

CSS Grid Layout, simplesmente conhecido como Grid, é um esquema de layout que é o mais novo e o mais poderoso em CSS. Ele é [suportado por todos os principais navegadores](https://caniuse.com/#feat=css-grid) e fornece uma maneira de posicionar itens na página e movê-los.

Pode atribuir automaticamente itens para _áreas,_ tamanho e redimensioná-las, cuidar da criação de colunas e linhas com base em um padrão que você definir, e fazer todos os cálculos usando o recém-introduzido `fr` unidade.

### Por que grade?

*   Você pode facilmente ter uma grade de 12 colunas com uma linha de CSS. `grid-template-columns: repeat(12, 1fr)`
*   A grade permite que você mova as coisas em qualquer direção. Ao contrário do Flex, onde é possível mover itens horizontalmente ( `flex-direction: row` ) ou verticalmente ( `flex-direction: column` ) - não ambos ao mesmo tempo, o Grid permite mover qualquer _item de grade_ para qualquer _área de grade_ predefinida na página. Os itens que você move não precisam estar adjacentes.
*   Com o CSS Grid, você pode **alterar a ordem dos elementos HTML usando apenas CSS** . Mova algo de cima para baixo, mova elementos que estavam no rodapé para a barra lateral etc. Em vez de mover o `<div>` de `<footer>` para `<aside>` no HTML, você pode apenas alterar seu posicionamento com `grid-area` no Folha de estilo CSS.

### Grelha vs. Flex

*   Flex é unidimensional - horizontal ou vertical, enquanto Grid é bidimensional, o que significa que você pode mover elementos em planos horizontais e verticais
*   No Grid, aplicamos estilos de layout ao contêiner pai e não aos itens. O Flex, por outro lado, tem como alvo o item flexível para definir propriedades como `flex-basis` , `flex-grow` e `flex-shrink`
*   Grid e Flex não são mutuamente exclusivos. Você pode usar os dois no mesmo projeto.

### Verificando a compatibilidade do navegador com `@supports`

Idealmente, quando você cria um site, você o cria com o Grid e usa o Flex como um substituto. Você pode descobrir se o seu navegador suporta a grade com a regra CSS `@support` (também conhecida como consulta de recurso). Aqui está um exemplo:

```css
.container { 
  display: grid; /* display grid by default */ 
 } 
 
 @supports not (display: grid) { /* if grid is not supported by the browser */ 
  .container { 
    display: flex; /* display flex instead of grid */ 
  } 
 } 
```

### Começando

Para tornar qualquer elemento uma grade, você precisa atribuir sua propriedade de `display` à `grid` , da seguinte forma:

```css
.conatiner { 
  display: grid; 
 } 
```

E é isso. Você acabou de fazer seu `.container` uma grade. Todo elemento dentro do `.container` se torna automaticamente um item de grade.

### Definindo Modelos

Linhas e colunas

```css
grid-template-columns: 1fr 1fr 1fr 1fr; 
 grid-template-rows: auto 300px; 
```

Areas

```css
grid-template-areas: 
  "aaaa" 
  "bcde" 
  "bcde" 
  "ffff"; 
```

ou

```css
grid-template-areas: 
  "header header header header" 
  "nav main main sidebar"; 
```

### Áreas da grade

Veja um exemplo de código sobre como definir e atribuir áreas de grade

```css
.site { 
  display: grid; 
  grid-template-areas: /* applied to grid container */ 
    "head head" /* you're assigning cells to areas by giving the cells an area name */ 
    "nav  main" /* how many values kind of depends on how many cells you have in the grid */ 
    "nav  foot"; 
 } 
 
 .site > header { 
  grid-area: head; 
 } 
 
 .site > nav { 
  grid-area: nav; 
 } 
 
 .site > main { 
    grid-area: main; 
 } 
 
 .site > footer { 
    grid-area: foot; 
 } 
```

### A unidade `fr`

Grid introduz uma nova unidade `fr` , que significa _fração_ . A coisa boa sobre o uso da unidade `fr` é que ela cuida dos cálculos para você. Usar o `fr` evita problemas de margem e preenchimento. Com `%` e `em` etc., ele se torna uma equação matemática ao calcular o `grid-gap` . Se você usou `fr` unit, ele calculará automaticamente os tamanhos da coluna e da medianiz e ajustará o tamanho das colunas de acordo, além de não haver intervalos de sangramento no final.

### Exemplos

#### Alterando a ordem dos elementos com base no tamanho da tela

Digamos que você queira mover o rodapé para baixo em pequenas telas e para a direita em telas maiores, e há um monte de outros elementos HTML entre os dois.

A solução simples é alterar as `grid-template-areas` base no tamanho da tela. Você também pode **alterar o número de colunas e linhas com base no tamanho da tela** . Esta é uma alternativa muito mais limpa e simples ao sistema Grid do Bootstrap ( `col-xs-8 col-sm-6 col-md-4 col-lg-3` ).

```css
.site { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-areas: 
    "title title" 
    "main header" 
    "main sidebar" 
 } 
 
 @media screen and (min-width: 34em) { /* If the screen is big enough, use a different template for grid areas */ 
  .site { 
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-areas: 
      "title title title" 
      "main header header" 
      "main sidebar footer" 
  } 
 } 
```

Veja o Pen [CSS Grid pelo exemplo - 2 (grid areas + grid gap)](https://codepen.io/aamnah/pen/RLVVoE/) por Aamnah Akram ( [@aamnah](https://codepen.io/aamnah) ) no [CodePen](https://codepen.io) .

#### Mais Informações:

*   [CSS Grid Palyground by Mozilla](https://mozilladevelopers.github.io/playground/) Grande ponto de partida, se você é novo em CSS Grids. Tem recursos visuais para ajudá-lo a entender a terminologia facilmente
*   [YouTube: Morten Rand-Hendriksen: A grade CSS muda tudo (sobre os layouts da Web)](https://www.youtube.com/watch?v=txZq7Laz7_4) Esta apresentação vai convencê-lo em menos de uma hora por que as CSS Grids são legais e por que / como você deve usá-las
*   [Vídeos: Aprenda Grid Layout Video Series por Rachel Andrew](https://gridbyexample.com/video/) Rachel Andrew é considerado um especialista no assunto. Os títulos de vídeo podem parecer estranhos e esmagadores, mas o conteúdo é curto e direto ao ponto
*   [Livro: Prepare-se para layout de grade CSS por Rachel Andrew](https://abookapart.com/products/get-ready-for-css-grid-layout)