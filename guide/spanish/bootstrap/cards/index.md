---
title: Cards
localeTitle: Tarjetas
---
## \# Bootstrap 4 Tarjetas

*   Usando Bootstrap 4 puedes crear tarjetas.
    
*   Las tarjetas son cajas bordeadas con un poco de relleno alrededor del contenido dentro de ellas, que se pueden usar para mostrar convenientemente un conjunto específico de información.
    

##### Para crear una tarjeta básica de Bootstrap 4, debe crear un contenedor `<div>` con la clase `.card` y dentro de otro contenedor `<div>` con la clase de `.card-body`

###### Así es como se verá en un documento html.

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Content</div> 
 </div> 
```

## \### Encabezado y pié de página

La estructura de la tarjeta se puede mejorar mediante la adición de un encabezado y un pie de página. Para agregar uno de estos elementos, debe crear un contenedor `<div>` con la `.card-header` o `.card-footer` .

###### Así es como se verá en un documento html.

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-header">Header content</div> 
  <div class="card-body">Body content</div> 
  <div class="card-footer">Footer content</div> 
 </div> 
```

## \### Tarjetas con imágenes

*   También puede usar clases específicas para mostrar imágenes en tarjetas.
    
*   Hay dos clases para este propósito: card-img-top, que coloca una imagen en la parte superior de la tarjeta, y card-img-bottom, que coloca la imagen en la parte inferior, ambas encajando en el borde redondeado de la tarjeta prolijamente
    
*   Estas clases deben usarse con la etiqueta `<img>` dentro de una tarjeta para que funcione correctamente.
    
*   Tenga en cuenta que si desea que una imagen abarque todo el ancho, debe agregar el contenedor de imagen fuera del contenedor `<div>` con la clase de cuerpo de la tarjeta.
    

###### Así es como se verá en un documento html.

```html

<div class="card"> 
 <!-- content of the card goes here --> 
 <!-- image on the top of the content --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
  <div class="card-body">Body content</div> 
 </div> 
 <div class="card"> 
 <!-- content of the card goes here --> 
  <div class="card-body">Body content</div> 
 <!-- image on the bottom of the content --> 
  <img src="picture.jpg" alt="Picture" class="card-img-bottom"> 
 </div> 
```

## \### Superposición de tarjetas

*   Para hacer una imagen en el fondo de la tarjeta y mostrar el texto encima de ella, necesita utilizar la clase card-img-overlay en el contenido, que desea mostrar sobre la imagen, en lugar de usar la clase de tarjeta de cuerpo. .

###### Así es como se verá en un documento html.

```html

<div class="card"> 
 <!-- content of the card goes here --> 
  <img src="picture.jpg" alt="Picture" class="card-img-top"> 
 <!-- this content is displayed over the image, which is now in the background and covers the whole element --> 
  <div class="card-img-overlay">Overlay content</div> 
 </div> 

```