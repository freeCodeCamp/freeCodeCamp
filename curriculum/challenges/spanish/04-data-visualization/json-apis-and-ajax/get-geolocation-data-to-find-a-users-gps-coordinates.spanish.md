---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
videoUrl: ''
localeTitle: Obtenga datos de geolocalización para encontrar las coordenadas GPS de un usuario
---

## Description
<section id="description"> Otra cosa interesante que puedes hacer es acceder a la ubicación actual de tu usuario. Cada navegador tiene un navegador incorporado que puede proporcionarle esta información. El navegador obtendrá la longitud y latitud actual del usuario. Verá un aviso para permitir o bloquear este sitio para que no sepa su ubicación actual. El desafío se puede completar de cualquier manera, siempre que el código sea correcto. Al seleccionar Permitir, verá que el texto en el teléfono de salida cambia a su latitud y longitud. Aquí está el código que hace esto: <blockquote> if (navigator.geolocation) { <br> navigator.geolocation.getCurrentPosition (función (posición) { <br> document.getElementById (&#39;data&#39;). innerHTML = &quot;latitude:&quot; + position.coords.latitude + &quot;&lt;br&gt; longitude:&quot; + position.coords.longitude; <br> }); <br> } </blockquote> Primero, verifica si el objeto <code>navigator.geolocation</code> existe. Si lo hace, se <code>getCurrentPosition</code> método <code>getCurrentPosition</code> en ese objeto, que inicia una solicitud asíncrona para la posición del usuario. Si la solicitud es exitosa, la función de devolución de llamada en el método se ejecuta. Esta función accede a los valores del objeto de <code>position</code> para latitud y longitud usando notación de puntos y actualiza el HTML. </section>

## Instructions
<section id="instructions"> Agregue el código de ejemplo dentro de las etiquetas de <code>script</code> para verificar la ubicación actual de un usuario e insértelo en el HTML. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar <code>navigator.geolocation</code> para acceder a la ubicación actual del usuario.
    testString: 'assert(code.match(/navigator\.geolocation\.getCurrentPosition/g), "Your code should use <code>navigator.geolocation</code> to access the user&#39;s current location.");'
  - text: Su código debe usar <code>position.coords.latitude</code> para mostrar la ubicación latitudinal del usuario.
    testString: 'assert(code.match(/position\.coords\.latitude/g), "Your code should use <code>position.coords.latitude</code> to display the user&#39;s latitudinal location.");'
  - text: Su código debe usar <code>position.coords.longitude</code> para mostrar la ubicación longitudinal del usuario.
    testString: 'assert(code.match(/position\.coords\.longitude/g), "Your code should use <code>position.coords.longitude</code> to display the user&#39;s longitudinal location.");'
  - text: Debería mostrar la posición del usuario dentro del elemento div de <code>data</code> .
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")data\1\s*?\)\.innerHTML/g), "You should display the user&#39;s position within the <code>data</code> div element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
