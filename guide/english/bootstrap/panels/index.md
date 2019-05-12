---
title: Panels
---
## Panels

The Bootstrap framework provides you with a feature called panels. A panel is a box that has a styled heading and then a body that allows you to display information in an organized manner, through a set of one or more panels.

Panels were dropped in Bootstrap 4 in favor of cards, as were thumbnails and wells. [Relevant section of the Bootstrap 4 migration guide here](https://getbootstrap.com/docs/4.1/migration/#panels)

#### How To Use:
To use Bootstrap Panels you add a `<div>` with a class for your type of panel (class `panel panel-default` or something similar, see the panel examples for more information.) and then two nested `<div>` tags, one for the heading (class `panel panel-heading`) and one for the body (class `panel panel-body`). You may find that the Code Example is easier to understand than a written explanation.

**Code Example**
```html
<div class="panel panel-primary">
  <div class="panel panel-heading">Panel Header</div>
  <div class="panel panel-body"> This is a panel with the primary panel style.</div>
  <div class="panel panel-footer">Panel Footer</div>
</div>
```

#### Panel Examples:
This is a set of examples that shows each type of panel. The CSS Class is displayed above each example.

- default
```html
<div class="panel panel-default">
<div class="panel panel-heading">Panel Default Header</div>
<div class="panel panel-body"> This is a panel with the default panel style.</div>
<div class="panel panel-footer">Panel Default Footer</div>
</div>
```

- primary
```html
<div class="panel panel-primary">
<div class="panel panel-heading">Panel Primary Header</div>
<div class="panel panel-body"> This is a panel with the primary panel style.</div>
<div class="panel panel-footer">Panel Primary Footer</div>
</div>
```

- success
```html
<div class="panel panel-success">
<div class="panel panel-heading">Panel Success Header</div>
<div class="panel panel-body"> This is a panel with the success panel style.</div>
<div class="panel panel-footer">Panel Success Footer</div>
</div>
```

- info
```html
<div class="panel panel-info">
<div class="panel panel-heading">Panel Info Header</div>
<div class="panel panel-body"> This is a panel with the info panel style.</div>
<div class="panel panel-footer">Panel Info Footer</div>
</div>
```

- warning
```html
<div class="panel panel-warning">
<div class="panel panel-heading">Panel Warning Header</div>
<div class="panel panel-body"> This is a panel with the warning panel style.</div>
<div class="panel panel-footer">Panel Warning Footer</div>
</div>
```  

- danger
```html
<div class="panel panel-danger">
<div class="panel panel-heading">Panel Danger Header</div>
<div class="panel panel-body"> This is a panel with the danger panel style.</div>
<div class="panel panel-footer">Panel Danger Footer</div>
</div>
```

### More Information

- [Bootstrap dropdown documentation](https://getbootstrap.com/docs/4.0/components/dropdowns/)
- [Panels have been replaced with the "card" class in Bootstrap 4](https://getbootstrap.com/docs/4.0/components/card/)
- [Bootstrap v4.0.0 Migration Panels](https://getbootstrap.com/docs/4.1/migration/#panels/)
