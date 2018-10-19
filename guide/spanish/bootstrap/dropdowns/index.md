---
title: Dropdowns
localeTitle: Listas deplegables
---
## Listas deplegables

Bootstrap proporciona Dropdowns como un complemento para mostrar listas de enlaces. El menú desplegable es un botón que alterna la visualización de una lista de enlaces.

Los menús desplegables de Bootstrap están diseñados para ser genéricos y aplicables a una variedad de situaciones. Por ejemplo, es posible crear menús desplegables que contengan campos de búsqueda o formularios de inicio de sesión.

## Ejemplo

```html

<div class="dropdown"> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
    Dropdown example 
  </button> 
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
    <a class="dropdown-item" href="#">Action</a> 
    <a class="dropdown-item" href="#">Another action</a> 
    <a class="dropdown-item" href="#">Something else here</a> 
  </div> 
 </div> 
```

## Ejemplo explicado

La clase _.downdown_ indica un menú desplegable.

Para abrir el menú desplegable, use un botón o un enlace con una clase de _.dropdown-toggle_ y el atributo _desplegable data-toggle = "_ .

La clase _.caret_ crea un icono de flecha de intercalación (▼), que indica que el botón es un menú desplegable.

Agregue la clase _.dropdown-menu_ a un elemento de lista desordenada para construir el menú desplegable.

#### Más información:

https://getbootstrap.com/docs/4.0/components/dropdowns/