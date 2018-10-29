---
title: Tabs and Pills
localeTitle: Pestañas y pastillas
---
## Pestañas y pastillas

Las pestañas y las píldoras son formas de navegación. Lo que significa que ayudan al usuario final a navegar por el sitio de una manera fácil de usar.

### Pestañas

Para lograr pestañas de arranque, primero necesita un elemento que tenga `.nav` clase `.nav` . Luego simplemente agrega una clase adicional llamada `.nav-tabs` .

```html

<ul class="nav nav-tabs"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Pestañas Bootstrap](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs.PNG)

### Pastillas

Bootstrap Pills se logra de la misma manera que Bootstrap Tabs, excepto que en lugar de `.nav-tabs` , use `.nav-pills` .

```html

<ul class="nav nav-pills"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Píldoras Bootstrap](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills.PNG)

### Pastillas apiladas

Bootstrap Pills también se `.nav stacked` verticalmente usando `.nav stacked` junto con `.nav-pills` .

```html

<ul class="nav nav-pills nav-stacked"> 
  ... 
 </ul> 
```

## ![Píldoras Bootstrap apiladas](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Stacked.PNG)

### Pestañas Bootstrap / pastillas justificadas

Tanto Bootstrap Tabs como Pills pueden tener el mismo ancho que sus padres en pantallas más anchas que 768px usando `.nav-justified` clase `.nav-justified` por `.nav-justified` . En pantallas más pequeñas, los enlaces de navegación se apilan.

```html

<ul class="nav nav-tabs nav-justified"> 
  ... 
 </ul> 
 <ul class="nav nav-pills nav-justified"> 
  ... 
 </ul> 
```

## ![Pestañas Bootstrap / pastillas justificadas](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20And%20Pills%20Justified.PNG)

### Enlaces desactivados

Para cualquier componente de navegación (pestañas o píldoras) agregue `.disabled` para enlaces grises y sin efectos de `.disabled`

```html

<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="disabled"><a href="#">Disabled link</a></li> 
  ... 
 </ul> 
```

## ![Enlaces desactivados](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20and%20Pills%20Disabled%20Link.PNG)

### Pestañas con desplegables

Agrega menús desplegables a tus pestañas de navegación.

```html

<ul class="nav nav-tabs"> 
  ... 
  <li role="presentation" class="dropdown"> 
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> 
      Dropdown <span class="caret"></span> 
    </a> 
    <ul class="dropdown-menu"> 
      ... 
    </ul> 
  </li> 
  ... 
 </ul> 
```

## ![Pestañas con desplegables](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20Dropdown.PNG)

#### Pestañas con desplegables

Agregue menús desplegables a sus píldoras de navegación.

```html

<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="dropdown"> 
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> 
      Dropdown <span class="caret"></span> 
    </a> 
    <ul class="dropdown-menu"> 
      ... 
    </ul> 
  </li> 
  ... 
 </ul> 
```

![Píldoras con Dropdowns](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Dropdown.PNG)