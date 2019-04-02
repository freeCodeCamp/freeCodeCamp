---
title: Create a Controlled Input
localeTitle: Crear una entrada controlada
---
## Crear una entrada controlada

Aquí la idea es crear una entrada controlada donde el texto se actualice desde su estado, no desde el navegador.

Entonces, para comenzar tenemos un esqueleto en el que tenemos una clase llamada `ControlledInput` y una variable de estado llamada `input` . Ahora todo lo que necesita hacer es tomar ese estado y cuando se observe un cambio en el cuadro de entrada, active una función que cambie el valor dentro de ese cuadro de entrada y en el párrafo debajo de él.

Entonces, el primer paso será realizar una función que cambie la `input` variable de estado.
```
handleChange(event) { 
    this.setState({ 
      input: event.target.value 
    }); 
 } 
```

Ahora su próximo paso implicará crear un cuadro de entrada y activarlo cuando alguien escriba algo. Afortunadamente, tenemos un evento llamado `onChange()` para cumplir este propósito. PD: Aquí hay otra forma de enlazar `this` en una función.
```
<input onChange = {this.handleChange.bind(this)}/> 
```

Pero esto simplemente no servirá a tu propósito. Aunque puede que sientas que está funcionando. Entonces, lo que está sucediendo aquí son las actualizaciones de texto desde el navegador, no el estado. Entonces, para corregir esto, agregaremos un atributo de `value` y lo estableceremos en `this.state.input` al elemento de entrada que hará que la entrada sea controlada por el estado.
```
<input value = {this.state.input} onChange = {this.handleChange.bind(this)}/> 
```

Puede ser un poco difícil de digerir, pero para aclarar aún más las cosas, intente eliminar todo el tema de `onChange` para que su código se vea así.
```
<input value = {this.state.input}/> 
```

Ahora ejecuta las pruebas de nuevo, ¿puedes escribir algo? La respuesta será "NO", ya que su casilla de entrada obtiene un valor de la `input` variable de estado, ya que no hay cambios en la `input` estado (inicialmente una cadena vacía) que solo ocurrirá cuando active la función `handleChange()` que solo sucede cuando tienes un controlador de eventos como `onChange()` por lo tanto, la cadena dentro del cuadro de entrada permanecerá como es, es decir, una cadena vacía.