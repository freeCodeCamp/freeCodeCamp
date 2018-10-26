---
title: Collapse
localeTitle: Colapso
---
## Colapso

Collapse es un complemento que te ayuda a ocultar o revelar elementos mediante una animación suave. Los desarrolladores suelen utilizar el colapso bootstrap para ocultar o revelar detalles secundarios de la sección de la página web. Por ejemplo, podría tener una lista de elementos con descripciones muy largas. Mostrar todo consumirá una gran cantidad de espacio, por lo que se puede utilizar el colapso bootstrap para ocultar y revelar la descripción.

El colapso de bootstrap se proporciona como un complemento separado llamado collapse.js, lo que significa que se puede usar fuera del entorno de bootstrap. El complemento se puede encontrar aquí http://getbootstrap.com/2.0.4/javascript.html#collapse.

El colapso Bootstrap se puede utilizar con un par de elementos, un botón, una etiqueta de anclaje o un panel. Para usar el colapso necesitas al menos dos elementos, un elemento controlará el estado de ocultar o revelar el otro elemento.

El complemento de colapso funciona cambiando la clase en el elemento colapsable. Hay tres clases posibles:

*   .collapse - esta clase oculta el elemento
*   .collapsing - esta clase se adjunta durante la transición
*   .collapse.in - esta clase muestra el elemento

### Cómo usarlo

Para usar el colapso puedes hacerlo de dos maneras:

*   Usando `href` en la etiqueta `<a>`
*   Usando `data-target` en la etiqueta `<button>`

El valor en `href` o `data-target` será el selector del elemento a colapsar. Si decide utilizar la etiqueta `<a>` o `<button>` , se requiere `data-toggle="collapse"` .

El elemento a contraer debe contener la clase `.collapse` .

### Ejemplos con botones

```html

<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Link with href 
 </a> 
 <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Button with data-target 
 </button> 
 
 <div class="collapse" id="collapseExample"> 
  <div class="well"> 
    ... 
  </div> 
 </div> 
```

En el ejemplo anterior, usamos un botón y una etiqueta de anclaje para controlar un elemento div. El botón y el ancla que son los elementos de control necesitan dos cosas, un atributo para especificar que el elemento de control es para colapsar y otro atributo para especificar qué elemento controla (oculta o revela).

Ambos tienen un atributo de _alternancia de datos_ con el valor de _colapso_ que especifica que deben usarse para contraer un elemento. La etiqueta de anclaje usa un atributo _href_ para especificar el elemento que controla, mientras que el botón usa un atributo de _destino de datos_ para especificar el elemento que controla.

> Puede ver una demostración del botón aquí https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible&stacked=h
> 
> Puede ver una demostración de la etiqueta de anclaje aquí https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs\_collapsible2&stacked=h

## Ejemplo con acordeon

```html

<div class="panel panel-default"> 
    <div class="panel-heading" role="tab" id="headingOne"> 
      <h4 class="panel-title"> 
        <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
          Collapsible Group Item #1 
        </a> 
      </h4> 
    </div> 
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> 
      <div class="panel-body"> 
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. 
      </div> 
    </div> 
  </div> 
```

En el ejemplo anterior, usamos el colapso bootstrap para crear un acordeón. El acordeón es simplemente un panel de arranque en el que se muestra el encabezado y se utiliza para controlar el cuerpo del panel.

La cabeza del panel contiene una etiqueta de anclaje que se utiliza para controlar el estado de colapso del cuerpo. Por lo tanto, adjuntamos el _conmutador de datos_ para especificar que este elemento se usa para colapsar y _href_ para especificar el elemento que oculta o revela. También podemos tener un grupo de paneles para hacer un grupo de paneles plegable.

> Puede ver una demostración del panel colapsado aquí https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs _colapsable de_ acordeón y apilado = h

### Elemento de contenido

¡Un párrafo!

```html

<p>Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

1.  Agregue la clase `.collapse` para indicar que el párrafo es un elemento colapsable.
2.  Agregue `id` para que este elemento plegable sea accesible para el elemento controlador.

```html

<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p> 
```

### Elemento controlador

¡Un botón!

```html

<button>Click Me To See Some Magic!</button> 
```

1.  Agregue el atributo `data-toggle="collapse"` para controlar el elemento colapsable.
2.  Agregue el atributo `data-target="#id"` para hacer referencia al elemento colapsable con su id.

```html

<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button> 
```

## Ejemplo

```html

<p> 
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Link with href 
  </a> 
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Button with data-target 
  </button> 
 </p> 
 <div class="collapse" id="collapseExample"> 
  <div class="card card-block"> 
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
  </div> 
 </div> 
```

### Usándolo con JavaScript

Este complemento le permite utilizarlo con JavaScript, donde solo tiene que seleccionar el elemento que desea contraer para habilitarlo:

```js
$('.collapsible-element').collapse(); 
```

El método de `collapse` acepta un objeto opcional donde puede establecer el estado inicial del elemento colapsable. Las opciones son:

*   `toggle` : Oculta o muestra el elemento dependiendo de su estado. Si está oculto, se mostrará, si se muestra, se ocultará.
*   `hide` : oculta el elemento.
*   `show` : muestra el elemento.

```js
$('.collapsible-element').collapse('hide'); 
```

También hay algunos métodos expuestos para enganchar en la funcionalidad de colapso:

*   `show.bs.collapse` : se `show.bs.collapse` inmediatamente cuando se llama al método `show` instance.
*   `shown.bs.collapse` : se `shown.bs.collapse` cuando un elemento de colapso se ha hecho visible para el usuario (esperará a que se completen las transiciones de CSS).
*   `hide.bs.collapse` : se `hide.bs.collapse` inmediatamente cuando se llama al método `hide` .
*   `hidden.bs.collapse` : se `hidden.bs.collapse` cuando un elemento de colapso se ha ocultado al usuario (esperará a que se completen las transiciones de CSS).

```js
$('.collapsible-element').on('show.bs.collapse', function() { 
  // for example you want to make an AJAX call to get some data to put in the collapsible element. 
 }) 
```

### Verlo en acción

![Texto alternativo](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### Más información:

[La guía oficial de Bootstrap 4 en Colapso](https://v4-alpha.getbootstrap.com/components/collapse/)