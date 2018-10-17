---
title: Control Flow
localeTitle: Flujo de control
---
## Flujo de control

### Condicionales

Con Vue.js puedes decidir si mostrar o no un fragmento de código en tu final Página, dependiendo de alguna condición. Por ejemplo, imagine una entrada de formulario que es requiere un texto de al menos 8 caracteres: si la entrada del usuario es más corta que 8, que debería aparecer un mensaje de error; pero si la entrada es más larga que 8, el el mensaje desaparece

Pero vamos a hacer un ejemplo más simple. Queremos condicionar la exposición de un mensaje a un contador:

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

Si vas a la consola y empiezas a incrementar el contador, cuando cruza nuestro Umbral de 10, se mostrará el mensaje! Entonces, si decrementas el `counter` , Vue.js ocultará el mensaje cuando el `counter` sea ​​inferior a 10. Para eso, nosotros utiliza la directiva `v-if` .

Y quizás te preguntes si hay `else` para eso `if` . Y ahí está el `v-else` Tenga en cuenta que el `v-else` siempre

*   esperar un `v-if` antes de ello
*   se refiere al `v-if` más cercano en la página

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

Juega un poco con eso cambiando los valores de `counter` y pon atención a mensaje mostrado

Vue.js también tiene la directiva `v-else-if` .

### Bucles

Vue.js también ayuda con la generación de copias múltiples del mismo código. Estructura, con bucles. El ejemplo clásico es una lista renderizada dinámicamente.

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

Mucho más fácil que insertar una gran cantidad de `<li>` . Y note que cada vez que la `list` cambios, el resultado cambiará de acuerdo a Pruébalo: abre la consola y `push` alguna cadena a la `list` con

```javascript
app.list.push("something else"); 
```

Como era de esperar, la página renderizada ahora tiene nuestro nuevo artículo!