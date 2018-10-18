---
title: Add Font Awesome Icons to all of our Buttons
localeTitle: Añadir iconos impresionantes de fuente a todos nuestros botones
---
## Añadir iconos impresionantes de fuente a todos nuestros botones

### Explicación del problema

Use Font Awesome para agregar un ícono de `info-circle` de información a su botón de información y un ícono de `trash` a su botón de eliminar.

#### Enlaces relevantes:

*   [Fuente impresionante](https://fontawesome.com/)
*   [Diferente entre Font Awesome v4 y v5](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4)

### Insinuación

*   La hoja de estilo de Font Awesome de esta página es la versión 4.5.0, por lo que debe usar el prefijo `fa` lugar de los nuevos `fas` . Consulte el [enlace](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4) para obtener más información sobre la diferencia entre v4 y v5 nuevo.
*   Los logotipos y las clases de CSS relevantes para los logotipos se pueden encontrar [aquí](https://fontawesome.com/icons?d=gallery) .
*   Agregar un espacio entre la etiqueta `<i>` y el texto le dará un espacio agradable.

## ¡Alerta de spoiler!

**¡Solución por delante!**

### Solución:

```html

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> 
 <style> 
  h2 { 
    font-family: Lobster, Monospace; 
  } 
 
  .thick-green-border { 
    border-color: green; 
    border-width: 10px; 
    border-style: solid; 
    border-radius: 50%; 
  } 
 </style> 
 
 <div class="container-fluid"> 
  <div class="row"> 
    <div class="col-xs-8"> 
      <h2 class="text-primary text-center">CatPhotoApp</h2> 
    </div> 
    <div class="col-xs-4"> 
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a> 
    </div> 
  </div> 
  <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera."> 
  <div class="row"> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i>Info</button> 
    </div> 
    <div class="col-xs-4"> 
      <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i>Delete</button> 
    </div> 
  </div> 
  <p>Things cats <span class="text-danger">love:</span></p> 
  <ul> 
    <li>cat nip</li> 
    <li>laser pointers</li> 
    <li>lasagna</li> 
  </ul> 
  <p>Top 3 things cats hate:</p> 
  <ol> 
    <li>flea treatment</li> 
    <li>thunder</li> 
    <li>other cats</li> 
  </ol> 
  <form action="/submit-cat-photo"> 
    <label><input type="radio" name="indoor-outdoor"> Indoor</label> 
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label> 
    <label><input type="checkbox" name="personality"> Loving</label> 
    <label><input type="checkbox" name="personality"> Lazy</label> 
    <label><input type="checkbox" name="personality"> Crazy</label> 
    <input type="text" placeholder="cat photo URL" required> 
    <button type="submit">Submit</button> 
  </form> 
 </div> 

```