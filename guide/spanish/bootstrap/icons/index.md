---
title: Icons
localeTitle: Iconos
---
## Íconos

El marco de Bootstrap le proporciona Glyphicons para el ícono. Bootstrap no incluye una biblioteca de íconos de forma predeterminada, pero tiene una serie de recomendaciones para que elijas. Si bien la mayoría de los conjuntos de íconos incluyen múltiples formatos de archivo, preferimos las implementaciones SVG por su mejor accesibilidad y compatibilidad con vectores.

### Cómo utilizar

Para usar el ícono de Bootstrap, cree una etiqueta de intervalo con `glyphicon` clase base y una clase de ícono individual. Úselo solo en elementos que no contengan contenido de texto y no tengan elementos secundarios.

**Ejemplo de código:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

`<span class="glyphicon glyphicon-cog"></span>`

El marco de Bootstrap le proporciona más de 250 íconos llamados glifos. Vienen en formato de fuente del conjunto Glyphicon Halflings.

### Cómo utilizar

Para usar los íconos de arranque, simplemente cree la etiqueta `<span>` y aplique la clase CSS correspondiente al ícono. A continuación se proporciona un ejemplo de código.

**Ejemplo de código:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

### Bootstrap Glyphicon lista de clases

Este es un ejemplo de las clases CSS que bootstrap proporciona para los glifos. Más de ellos están disponibles [aquí.](https://getbootstrap.com/docs/3.3/components/#glyphicons)

`.glyphicon glyphicon-plus` Este es el ícono más / agregar de bootstrap.

`.glyphicon glyphicon-trash` Este es el ícono trash / delete de bootstrap.

_Nota: No incluya el punto en el atributo de clase HTML, ya que las clases con un punto solo se usan al ajustar las clases en CSS._

### Icono de Bootstrap en Botones

```html

  <button type="button" class="btn btn-default" aria-label="Left Align"> 
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> 
  </button> 
```

_Nota: el ícono de Glyphicons de Bootstrap no está disponible en bootstrap V4_

### Más información:

*   [Bootstrap Glyphicons Icons Doc](https://getbootstrap.com/docs/3.3/components/#glyphicons)
