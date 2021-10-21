---
id: 587d7faf367417b2b2512be8
title: Obtén datos de geolocalización para encontrar las coordenadas GPS de un usuario
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

Otra cosa interesante que puedes hacer es acceder a la ubicación actual de tu usuario. Cada navegador tiene un componente incorporado que puede darte esta información.

El navegador obtendrá la longitud y la latitud actuales del usuario.

Verás un mensaje para permitir o impedir que este sitio conozca tu ubicación actual. El desafío se puede completar de cualquier manera, siempre y cuando el código sea correcto.

Al seleccionar permitir, verás el texto en el teléfono de salida cambiar a tu latitud y longitud.

Este es el código que hace esto:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

Primero, verifica si el objeto `navigator.geolocation` existe. Si lo hace, se llama al método `getCurrentPosition` en ese objeto, que inicia una solicitud asíncrona para la posición del usuario. Si la solicitud se realiza con éxito, se ejecuta la función callback del método. Esta función accede los valores de latitud y longitud del objeto `position` usando notación de puntos y actualiza el HTML.

# --instructions--

Añade el código de ejemplo dentro de las etiquetas `script` para comprobar la ubicación actual de un usuario e insertarlo en el HTML.

# --hints--

Tu código debe usar `navigator.geolocation` para acceder a la ubicación actual del usuario.

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

Tu código debe usar `position.coords.latitude` para acceder a la ubicación actual del usuario.

```js
assert(code.match(/position\.coords\.latitude/g));
```

Tu código debe usar `position.coords.longitude` para acceder a la ubicación actual del usuario.

```js
assert(code.match(/position\.coords\.longitude/g));
```

Debes mostrar la posición del usuario dentro del elemento `div` con `id="data"`.

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
