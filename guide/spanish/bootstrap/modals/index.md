---
title: Modals
localeTitle: modales
---
## Modales

Los modales son ventanas emergentes para proporcionar información importante antes de continuar.

Para crear dichos diálogos / ventanas emergentes en la parte superior de la página actual, Bootstrap proporciona un complemento modal.

#### Ejemplo de código:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width"> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
 
 <!-- jQuery library --> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
 
 <!-- Latest compiled JavaScript --> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
 </head> 
 
  <body> 
 
 <!-- Triggering the modal popup --> 
   <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Open Modal</button> 
 
  <!-- Modal popup --> 
 
   <div class="modal fade" id="myModal"> 
       <div class="modal-dialog"> 
 
  <!-- Modal Content --> 
            <div class="modal-content"> 
              <div class="modal-header"> 
                <button  type="button" data-dismiss="modal" class="close">&times;</button> 
                <h4 class="modal-title">Modal Header</h4> 
              </div> 
 
              <div class="modal-body"> 
                Do you wish to continue? 
              </div> 
 
              <div class="modal-footer"> 
                <button class="btn btn-default"  data-dismiss="modal">close</button> 
              </div> 
 
            </div> 
        </div> 
 
   </div> 
 
 </body> 
 </html> 
```

#### Entendiendo los atributos y clases utilizadas:

a) `data-toggle = "modal"` : abre el modal.

b) `data-target` : apunta al Id del modal que se abrirá.

c) `data-dismiss="modal"` : Esto hace que la ventana emergente se cierre al hacer clic en el botón de cerrar.

d) la clase `.modal` identifica el contenido de `<div>` como modal.

e) `.modal-dialog` class establece la altura y el ancho adecuados del diálogo.

f) `.modal-content` class style the modal.It contiene las secciones de encabezado, cuerpo y pie de página.

g) `.modal-header` class denota la sección de encabezado del modal (título y botón (×)).

h) `.modal-title` clase de `.modal-title` estilo al encabezado del modal con una altura adecuada.

i) `.modal-body` class da estilo al cuerpo del modal (diálogo / ventana emergente). Puede tener otras marcas como `<p>,<img>,<video>` etc.

j) `.modal-footer` clase de `.modal-footer` el pie de página del modal.

#### Más información :

[Bootstrap Modal](https://bootstrapbay.com/blog/working-bootstrap-modal/)

Si desea explorar **__Bootstrap 4.0 Latest (versión Alpha)__** : [Bootstrap Modal v4.0](https://getbootstrap.com/docs/4.0/components/modal/)