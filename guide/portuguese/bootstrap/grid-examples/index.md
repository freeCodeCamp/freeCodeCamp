---
title: Grid Examples
localeTitle: Exemplos de grade
---
## Exemplos de grade

#### Colunas iguais da árvore

```html

<div class="container"> 
  <div class="row"> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
    <div class="col-sm"> 
      One of three columns 
    </div> 
  </div> 
 </div> 
```

O exemplo acima cria três colunas de largura igual em dispositivos pequenos, médios, grandes e extra grandes usando nossas classes de grade predefinidas. Essas colunas estão centralizadas na página com o `.container` pai.

#### Três colunas desiguais

```html

 <div class="row"> 
  <div class="col-sm-3">.col-sm-3</div> 
  <div class="col-sm-6">.col-sm-6</div> 
  <div class="col-sm-3">.col-sm-3</div> 
 </div> 
```

#### Duas colunas desiguais

```html

 <div class="row"> 
  <div class="col-sm-4">.col-sm-4</div> 
  <div class="col-sm-8">.col-sm-8</div> 
 </div> 
```

#### Duas colunas com duas colunas aninhadas

```html

 <div class="row"> 
  <div class="col-sm-8"> 
    .col-sm-8 
    <div class="row"> 
      <div class="col-sm-6">.col-sm-6</div> 
      <div class="col-sm-6">.col-sm-6</div> 
    </div> 
  </div> 
  <div class="col-sm-4">.col-sm-4</div> 
 </div> 
```

#### Móveis mistos e desktop

\`\` \`html

.col-xs-7 .col-sm-6 .col-lg-8

.col-xs-5 .col-sm-6 .col-lg-4

.col-xs-6 .col-sm-8 .col-lg-10

.col-xs-6 .col-sm-4 .col-lg-2
```
#### Clear Floats 
 
 Clear floats (with the `.clearfix` class) at specific breakpoints to prevent strange wrapping with uneven content: 
```

html

Coluna 1 Redimensione a janela do navegador para ver o efeito.

Coluna 2

Coluna 3

Coluna 4
```
#### Offsetting Columns 
 Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by * columns: 
```

html

.col-sm-5 .col-md-6

.col-sm-5 .col-sm-deslocamento-2 .col-md-6 .col-md-offset-0
```
#### Push And Pull - Change Column Ordering 
 Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes: 
```

html

.col-sm-4 .col-sm-push-8

.col-sm-8 .col-sm-pull-4

\`\` \`

#### Mais Informações:

[Grade de inicialização](https://getbootstrap.com/docs/4.0/layout/grid/)