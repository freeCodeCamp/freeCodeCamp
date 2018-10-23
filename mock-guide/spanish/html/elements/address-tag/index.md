---
title: Address Tag
localeTitle: Etiqueta de dirección
---
## Etiqueta de dirección

Los controles de formulario de Bootstrap se expanden en nuestros estilos de formulario reiniciados con clases. Utilice estas clases para optar por sus pantallas personalizadas para una representación más coherente en los navegadores y dispositivos.

Asegúrese de usar un atributo de tipo apropiado en todas las entradas (por ejemplo, correo electrónico para la dirección de correo electrónico o número para obtener información numérica) para aprovechar los controles de entrada más nuevos, como la verificación de correo electrónico, la selección de números y más.

Aquí hay un ejemplo rápido para demostrar los estilos de forma de Bootstrap. Sigue leyendo para obtener documentación sobre las clases requeridas, el diseño del formulario y más.

#### Uso

```html

<form> 
  <div class="form-group"> 
    <label for="exampleInputEmail1">Email address</label> 
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> 
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> 
  </div> 
  <div class="form-group"> 
    <label for="exampleInputPassword1">Password</label> 
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> 
  </div> 
  <div class="form-check"> 
    <label class="form-check-label"> 
      <input type="checkbox" class="form-check-input"> 
      Check me out 
    </label> 
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button> 
 </form> 

```