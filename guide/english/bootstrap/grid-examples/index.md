---
title: Grid Examples
---
## Grid Examples

#### Tree equal columns
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
The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent `.container`.

#### Three unequale columns

```html
 <div class="row">
  <div class="col-sm-3">.col-sm-3</div>
  <div class="col-sm-6">.col-sm-6</div>
  <div class="col-sm-3">.col-sm-3</div>
</div> 
```

#### Two Unequal Columns

```html
 <div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-8">.col-sm-8</div>
</div> 
```

#### Two Columns With Two Nested Columns

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
#### Mixed Mobile and Desktop

```html 
 <div class="row">
  <div class="col-xs-7 col-sm-6 col-lg-8">.col-xs-7 .col-sm-6 .col-lg-8</div>
  <div class="col-xs-5 col-sm-6 col-lg-4">.col-xs-5 .col-sm-6 .col-lg-4</div>
</div>

<div class="row">
  <div class="col-xs-6 col-sm-8 col-lg-10">.col-xs-6 .col-sm-8 .col-lg-10</div>
  <div class="col-xs-6 col-sm-4 col-lg-2">.col-xs-6 .col-sm-4 .col-lg-2</div>
</div> 
```
#### Clear Floats

Clear floats (with the `.clearfix` class) at specific breakpoints to prevent strange wrapping with uneven content:
```html
 <div class="row">
  <div class="col-xs-6 col-sm-3">
    Column 1
    <br>
    Resize the browser window to see the effect.
  </div>
  <div class="col-xs-6 col-sm-3">Column 2</div>
  <!-- Add clearfix for only the required viewport -->
  <div class="clearfix visible-xs"></div>
  <div class="col-xs-6 col-sm-3">Column 3</div>
  <div class="col-xs-6 col-sm-3">Column 4</div>
</div> 
```
#### Offsetting Columns
Move columns to the right using `.col-md-offset-*` classes. These classes increase the left margin of a column by * columns:
```html
 <div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">
  .col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
</div> 
```
#### Push And Pull - Change Column Ordering
Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes:
```html
 <div class="row">
  <div class="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>
  <div class="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>
</div> 
```



#### More Information:

[Bootstrap Grid](https://getbootstrap.com/docs/4.1/layout/grid/)

