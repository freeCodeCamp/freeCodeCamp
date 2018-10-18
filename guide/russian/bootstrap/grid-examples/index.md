---
title: Grid Examples
localeTitle: Примеры гридов
---
## Примеры гридов

#### Три равных столбца

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

Вышеприведенный пример создает три столбца равной ширины на малых, средних, больших и дополнительных больших устройствах с использованием наших предопределенных классов сетки. Эти столбцы располагаются на странице с родительским `.container` .

#### Три неравных столбца

```html

 <div class="row"> 
  <div class="col-sm-3">.col-sm-3</div> 
  <div class="col-sm-6">.col-sm-6</div> 
  <div class="col-sm-3">.col-sm-3</div> 
 </div> 
```

#### Два неравных столбца

```html

 <div class="row"> 
  <div class="col-sm-4">.col-sm-4</div> 
  <div class="col-sm-8">.col-sm-8</div> 
 </div> 
```

#### Два столбца с двумя вложенными столбцами

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

#### Смешанный мобильный и рабочий стол

\`\` \`\` HTML

.col-xs-7 .col-sm-6 .col-lg-8

.col-xs-5 .col-sm-6 .col-lg-4

.col-xs-6 .col-sm-8 .col-lg-10

.col-xs-6 .col-sm-4 .col-lg-2
```
#### Clear Floats 
 
 Clear floats (with the `.clearfix` class) at specific breakpoints to prevent strange wrapping with uneven content: 
```

HTML

Столбец 1 Измените размер окна браузера, чтобы увидеть эффект.

Столбец 2

Столбец 3

Столбец 4
```
#### Offsetting Columns 
 Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by * columns: 
```

HTML

.col-sm-5 .col-md-6

.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0
```
#### Push And Pull - Change Column Ordering 
 Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes: 
```

HTML

.col-sm-4 .col-sm-push-8

.col-sm-8 .col-sm-pull-4

\`\` \`

#### Дополнительная информация:

[Бутстрап-сетка](https://getbootstrap.com/docs/4.0/layout/grid/)