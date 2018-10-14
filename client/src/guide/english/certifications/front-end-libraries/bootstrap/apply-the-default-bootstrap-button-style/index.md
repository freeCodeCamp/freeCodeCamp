---
title: Apply the Default Bootstrap Button Style
---
## Apply the Default Bootstrap Button Style

The last challenge had you creating 6 buttons, 3 in each well element, this time you are required to add classes to those buttons.

### Hint

A class is declared using the following syntax:

```html
<button class="class(es)Name"></button>
```

### Solution

Since you have to add the ``` btn ``` and ``` btn-default ``` classes, the following is the solution:

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```
