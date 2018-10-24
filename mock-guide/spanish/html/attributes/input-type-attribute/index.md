---
title: Input Type Attribute
localeTitle: Atributo de tipo de entrada
---
## Atributo de tipo de entrada

El atributo de tipo de entrada especifica el tipo de entrada que el usuario debe poner en su formulario.

### texto

Una línea de un texto.

```html

    <form> 
      <label for="login">Login:</label> 
      <input type="text" name="login"> 
    </form> 
```

### contraseña

Una línea de un texto. El texto se muestra automáticamente como una serie de puntos o asteriscos (depende del navegador y del sistema operativo).

```html

    <form> 
      <label for="password">Password:</label> 
      <input type="password" name="password"> 
    </form> 
```

### correo electrónico

El HTML comprueba si la entrada coincide con el formato de la dirección de correo electrónico (algo @ algo).

```html

    <form> 
      <label for="email">E-mail address:</label> 
      <input type="email" name="email"> 
    </form> 
```

### número

Permitir sólo la entrada numérica. También puede especificar el valor mínimo y máximo permitido. El siguiente ejemplo comprueba que la entrada es un número entre 1 y 120.

```html

    <form> 
      <label for="age">Age:</label> 
      <input type="number" name="age" min="1" max="120"> 
    </form> 
```

### radio

El usuario solo puede seleccionar una opción. El grupo de botones de opción debe tener el mismo atributo de nombre. Puede seleccionar automáticamente una opción utilizando la propiedad `checked` (en el ejemplo debajo del valor Azul seleccionado).

```html

    <form> 
      <label><input type="radio" name="color" value="red">Red</label> 
      <label><input type="radio" name="color" value="green">Green</label> 
      <label><input type="radio" name="color" value="blue" checked>Blue</label> 
    </form> 
```

### caja

El usuario puede seleccionar cero o más opciones del grupo de casillas de verificación. También puede utilizar la propiedad `checked` aquí para una o más opciones.

```html

    <form> 
      <label><input type="checkbox" name="lang" value="english">english</label> 
      <label><input type="checkbox" name="lang" value="spanish">spanish</label> 
      <label><input type="checkbox" name="lang" value="french">french</label> 
    </form> 
```

### botón

La entrada se muestra como un botón, el texto que se debe mostrar en el botón está en el atributo de valor.

```html

    <form> 
      <input type="button" value="click here"> 
    </form> 
```

### enviar

Muestra el botón de envío. El texto que debe mostrarse en el botón está en atributo de valor. Después de hacer clic en el botón, el HTML realiza la validación y, si se aprueba, se envía el formulario.

```html

    <form> 
      <input type="submit" value="SUBMIT"> 
    </form> 
```

### Reiniciar

Muestra el botón de reinicio. El texto que debe mostrarse en el botón está en atributo de valor. Después de hacer clic en el botón, todos los valores del formulario se eliminan.

```html

    <form> 
      <input type="reset" value="CANCEL"> 
    </form> 
```

Hay más tipos de elementos. Para obtener más información, visite MSDN o w3schools .