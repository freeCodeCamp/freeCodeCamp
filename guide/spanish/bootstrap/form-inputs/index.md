---
title: Form Inputs
localeTitle: Formularios de entrada
---
## Formularios de entrada

Bootstrap soporta los siguientes controles de formulario:

1.  entrada
2.  textarea
3.  caja
4.  radio
5.  seleccionar

## Ejemplo de fragmentos de código

#### 1\. Entrada

Bootstrap admite todos los tipos de entrada HTML5: texto, contraseña, datetime, datetime-local, fecha, mes, hora, semana, número, correo electrónico, url, búsqueda, teléfono y color.

**Nota: ¡Las entradas NO tendrán un estilo completo si su tipo no se declara correctamente!**

El siguiente ejemplo contiene dos elementos de entrada; uno de tipo texto y otro de tipo contraseña:

```html

<div class="form-group"> 
  <label for="usr">Name:</label> 
  <input type="text" class="form-control" id="usr"> 
 </div> 
 <div class="form-group"> 
  <label for="pwd">Password:</label> 
  <input type="password" class="form-control" id="pwd"> 
 </div> 
```

#### 2\. Textarea

El siguiente ejemplo contiene un área de texto:

```html

<div class="form-group"> 
  <label for="comment">Comment:</label> 
  <textarea class="form-control" rows="5" id="comment"></textarea> 
 </div> 
```

#### 3\. Casillas de verificación

Las casillas de verificación se utilizan si desea que el usuario seleccione cualquier número de opciones de una lista de opciones preestablecidas.

El siguiente ejemplo contiene tres casillas de verificación. La última opción está deshabilitada:

```html

<div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 1</label> 
 </div> 
 <div class="checkbox"> 
  <label> 
  <input type="checkbox" value="">Option 2</label> 
 </div> 
 <div class="checkbox disabled"> 
  <label> 
  <input type="checkbox" value="" disabled>Option 3</label> 
 </div> 
```

Use la clase **.checkbox-inline** si desea que las casillas aparezcan en la misma línea:

```html

<label class="checkbox-inline"><input type="checkbox" value="">Option 1</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 2</label> 
 <label class="checkbox-inline"><input type="checkbox" value="">Option 3</label> 
```

#### 4\. Botones de radio

Los botones de opción se utilizan si desea limitar al usuario a solo una selección de una lista de opciones preestablecidas.

El siguiente ejemplo contiene tres botones de radio. La última opción está deshabilitada:

```html

<div class="radio"> 
  <label><input type="radio" name="optradio">Option 1</label> 
 </div> 
 <div class="radio"> 
  <label><input type="radio" name="optradio">Option 2</label> 
 </div> 
 <div class="radio disabled"> 
  <label><input type="radio" name="optradio" disabled>Option 3</label> 
 </div> 
```

Use la clase **.radio-inline** si desea que las casillas de verificación aparezcan en la misma línea:

```html

<label class="radio-inline"><input type="radio" name="optradio">Option 1</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 2</label> 
 <label class="radio-inline"><input type="radio" name="optradio">Option 3</label> 
```

#### 5\. Seleccione (Lista)

Las listas de selección se utilizan si desea permitir que el usuario elija entre varias opciones.

El siguiente ejemplo contiene una lista desplegable (lista de selección):

```html

<div class="form-group"> 
  <label for="sel1">Select list:</label> 
  <select class="form-control" id="sel1"> 
    <option>1</option> 
    <option>2</option> 
    <option>3</option> 
    <option>4</option> 
  </select> 
 </div> 
```

## Cómo hacer que las entradas de Bootstrap sean accesibles

Los campos de entrada deben tener etiquetas o alguna otra forma de identificador, como las etiquetas WAI-ARIA para cumplir con la Web Pautas de accesibilidad del contenido o [WCAG](https://www.w3.org/WAI/tutorials/forms/) para abreviar. En orden para que los lectores de pantalla transmitan con precisión a un usuario qué etiquetas están asociadas con qué entradas las etiquetas Debe hacer referencia a la entrada correspondiente.

Esto se puede hacer utilizando el parámetro `for` en el HTML:

```html

<label for="email-input">Enter Email</label> 
 <input type="email" class="form-control" id="email-input" placeholder="Enter Email"> 
```

La etiqueta `for` atributo **siempre hace** referencia al campo de entrada por su **ID** . Esto le dice al lector de pantalla que esta etiqueta es definitivamente para este campo de entrada que minimizará la confusión para cualquier usuario que esté usando Un lector de pantalla para visitar un sitio web.

### Más información:

Los ejemplos de código son de [W3Schools - Bootstrap Form Inputs](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp) .