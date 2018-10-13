---
title: Add id Attributes to Bootstrap Elements
---
## Add id Attributes to Bootstrap Elements

The last challenge had you adding a class to your button elements, this time you have to add id(s) to the div(s) which have the well class.

### Hint 1

An id is declared as follows:

```html
<element id="id(s)List"></element>
```

### Hint 2

Edit the div tags which have the well class

### Hint 3

Use different id(s) for both wells.

### Hint 4

Give the well on the left the id of ``` left-well ``` and the well on the right the id of ``` right-well ```.

### Solution

Since you have to add id(s) to both the wells and have both with a unique id, the following is the solution:

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
