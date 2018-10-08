---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
localeTitle: Obtenga datos de geolocalización para encontrar las coordenadas GPS de un usuario
challengeType: 6
---

## Description
<section id='description'> 
Otra cosa interesante que puedes hacer es acceder a la ubicación actual de tu usuario. Cada navegador tiene un navegador incorporado que puede proporcionarle esta información. 
El navegador obtendrá la longitud y latitud actual del usuario. 
Verá un aviso para permitir o bloquear este sitio para que no sepa su ubicación actual. El desafío se puede completar de cualquier manera, siempre que el código sea correcto. 
Al seleccionar permitir, verá que el texto del teléfono de salida cambia a su latitud y longitud. 
Aquí está el código que hace esto: 
<blockquote>if (navigator.geolocation){<br>&nbsp;&nbsp;navigator.geolocation.getCurrentPosition(function(position) {<br>&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude +  "&lt;br&gt;longitude: " +  position.coords.longitude;<br>&nbsp;&nbsp;});<br>}</blockquote> 
Primero, comprueba si el objeto <code>navigator.geolocation</code> existe. Si lo hace, se <code>getCurrentPosition</code> método <code>getCurrentPosition</code> en ese objeto, que inicia una solicitud asíncrona para la posición del usuario. Si la solicitud es exitosa, la función de devolución de llamada en el método se ejecuta. Esta función accede a los valores del objeto de <code>position</code> para latitud y longitud usando notación de puntos y actualiza el HTML. 
</section>

## Instructions
<section id='instructions'> 
Agregue el código de ejemplo dentro de las etiquetas de <code>script</code> para verificar la ubicación actual de un usuario e insértelo en el HTML. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Su código debe usar <code>navigator.geolocation</code> para acceder a la ubicación actual del usuario&#39;.
    testString: 'assert(code.match(/navigator\.geolocation\.getCurrentPosition/g), "Your code should use <code>navigator.geolocation</code> to access the user&#39;s current location.");'
  - text: &#39;Su código debe usar <code>position.coords.latitude</code> para mostrar la ubicación latitudinal del usuario&#39;.
    testString: 'assert(code.match(/position\.coords\.latitude/g), "Your code should use <code>position.coords.latitude</code> to display the user&#39;s latitudinal location.");'
  - text: &#39;Su código debe usar <code>position.coords.longitude</code> para mostrar la ubicación longitudinal del usuario&#39;.
    testString: 'assert(code.match(/position\.coords\.longitude/g), "Your code should use <code>position.coords.longitude</code> to display the user&#39;s longitudinal location.");'
  - text: &#39;Debería mostrar la posición del usuario dentro del elemento de <code>data</code> div.&#39;
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
