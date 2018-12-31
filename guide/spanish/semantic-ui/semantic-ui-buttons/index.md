---
title: Semantic UI Buttons
localeTitle: Botones de interfaz de usuario semántica
---
## Botones de interfaz de usuario semántica

Un botón indica una posible acción del usuario. La IU semántica proporciona una sintaxis fácil de usar que simplifica no solo el estilo de un botón, sino también la semántica del lenguaje natural.

#### Cómo utilizar

La clase de IU semántica simplemente se agrega a un elemento de botón, varios ejemplos se dieron a continuación para indicar cómo usarlo.

#### Los tipos

*   Botón estándar

Botón de interfaz de usuario semántica estándar
```
<button class="ui button">Standard Button</button> 
```

*   Botón de énfasis

Un botón con diferente nivel de énfasis.
```
<button class="ui primary button"> 
```

Otras clases de énfasis son `secondary` , `positive` y `negative`

*   Botón animado

Un botón con animación, mostrando contenidos ocultos.
```
<div class="ui animated fade button" tabindex="0"> 
  <div class="visible content">Sign-up for a Pro account</div> 
  <div class="hidden content">$12.99 a month</div> 
 </div> 
```

La propiedad `tabindex="0"` anterior hace que el teclado del botón se pueda enfocar, ya que no se usó la etiqueta `<button>` .

*   Botón etiquetado

Un botón junto a una etiqueta
```
<div class="ui labeled button" tabindex="0"> 
  <div class="ui button"><i class="heart icon"></i> Like</div> 
  <a class="ui basic label">2,048</a> 
 </div> 
```

el elemento `<i>` se utiliza para especificar un icono, aquí es un icono de corazón `<i class="heart icon"></i>` junto a la etiqueta básica `<a class="ui basic label">2,048</a>`

*   Botón de icono

Un botón de interfaz de usuario semántica puede ser solo un icono
```
<button class="ui icon button"> 
  <i class="camera icon"></i> 
 </button> 
```

Lo de arriba es solo un icono de cámara.

#### Los grupos

Botones de UI semánticos pueden existir en un grupo
```
<div class="ui buttons"> 
  <button class="ui button">One</button> 
  <button class="ui button">Two</button> 
  <button class="ui button">Three</button> 
 </div> 
```

#### Contenido

Los botones de la IU semántica pueden contener condicionales.
```
<div class="ui buttons"> 
  <button class="ui positive button">Yes</button> 
  <div class="or" data-text="or"></div> 
  <button class="ui negative button">No</button> 
 </div> 
```

#### Estados

Los botones de la interfaz de usuario semántica pueden existir en diferentes estados, `active` , `disabled` , `loading` . Simplemente agregue un nombre de estado al atributo `of` `class` `of` elemento \`.
```
<button class="ui loading button">Loading</button> 
```

#### Variaciones

Los botones de la interfaz de usuario semántica existen en una variedad de tamaños: `mini` , `tiny` , `small` , `medium` , `large` , `big` , `huge` y `massive` .
```
<button class="ui massive button">Massive Button</button> 
```

Hay mucho más acerca de los botones de la IU semántica, visite el enlace provisto en la sección Más información para obtener más información.

#### Más información:

*   [Botones de la interfaz de usuario semántica](https://semantic-ui.com/elements/button.html)