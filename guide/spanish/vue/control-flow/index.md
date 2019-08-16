---
title: Control Flow
localeTitle: Flujo de control
---
## Flujo de control

### Condicionales

Con Vue.js puedes decidir si mostrar o no un fragmento de código en tu página final, dependiendo de alguna condición. Por ejemplo, imagina una entrada de formulario que requiere un texto de al menos 8 carácteres: si la entrada del usuario tiene menos de 8, debería aparecer un mensaje de error; pero si la entrada es más o igual que 8, el mensaje desaparece.

Vamos a hacer un ejemplo más simple. Queremos condicionar la visualización de un mensaje a un contador:

```html

<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
```

Si vas a la consola y empiezas a incrementar el contador, cuando cruce nuestro límite de 10, ¡se mostrará el mensaje! En cambio, si lo decrementas, Vue.js ocultará el mensaje cuando el contador (`counter`) sea inferior a 10. Para ello, nosotros utilizamos la directiva `v-if` .

Y quizás te preguntes si hay un `else` para ese `if` . Y ahí está el `v-else` . Ten en cuenta que el `v-else` siempre

*   esperará tener un `v-if` previo a él
*   se referirá al `v-if` más cercano en la página

Cambiemos un poco nuestro primer ejemplo para aclarar esto.

```html

<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
  <p v-else> 
    And this is the "otherwise" option 
  </p> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
```

Juega un poco con él cambiando los valores de `counter` y pon atención al mensaje mostrado

Vue.js también tiene la directiva `v-else-if` .

### Bucles

Vue.js también ayuda con la generación de múltiples copias de la misma estructura de código, con bucles. El ejemplo clásico es una lista renderizada dinámicamente.

```html

<div id="app"> 
  <ul> 
    <li v-for="item in list"> 
      {{ item }} 
    </li> 
  </ul> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    list: [ 
      "shave", 
      "do the dishes", 
      "clean the sink", 
      "pay the bill" 
    ] 
  } 
 }); 
```

Es mucho más fácil que insertar una gran cantidad de `<li>` . Y observa que cada vez que la lista (`list`) cambie, el resultado cambiará acordemente. Pruébalo: abre la consola y añade (`push`) alguna cadena a la lista (`list`) con

```javascript
app.list.push("something else"); 
```

Como es de esperar, ¡la página renderizada ahora tiene nuestro nuevo artículo!

### Accediendo al índice actual en bucles

`v-for` también admite un segundo argumento opcional para el índice del elemento actual:

```html
<div id="app">
  <ul>
    <li v-for="(item, index) in items">
      {{ index }}: {{ item }}
    </li>
  </ul>
</div>
```
De esta manera, podemos usar `index` para añadir estilos al primer, al último, o a los elementos pares/impares de la lista de manera diferenciada, o aplicar lógica extra a nuestro componente.
