---
title: Grid Examples
localeTitle: Ejemplos de cuadrícula
---
## Ejemplos de cuadrícula

#### Columnas iguales de arbol

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

El ejemplo anterior crea tres columnas de igual ancho en dispositivos pequeños, medianos, grandes y extra grandes utilizando nuestras clases de cuadrícula predefinidas. Esas columnas se centran en la página con el padre `.container` .

#### Tres columnas desiguales

```html

 <div class="row"> 
  <div class="col-sm-3">.col-sm-3</div> 
  <div class="col-sm-6">.col-sm-6</div> 
  <div class="col-sm-3">.col-sm-3</div> 
 </div> 
```

#### Dos columnas desiguales

```html

 <div class="row"> 
  <div class="col-sm-4">.col-sm-4</div> 
  <div class="col-sm-8">.col-sm-8</div> 
 </div> 
```

#### Dos columnas con dos columnas anidadas

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

#### Mixto Móvil y Escritorio

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

Columna 1 Cambiar el tamaño de la ventana del navegador para ver el efecto.

Columna 2

Columna 3

Columna 4
```
#### Offsetting Columns 
 Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by * columns: 
```

html

.col-sm-5 .col-md-6

.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0
```
#### Push And Pull - Change Column Ordering 
 Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes: 
```

html

.col-sm-4 .col-sm-push-8

.col-sm-8 .col-sm-pull-4

\`\` \`

#### Más información:

[Red de arranque](https://getbootstrap.com/docs/4.0/layout/grid/)