---
title: Input Tag
localeTitle: Etiqueta de entrada
---
## Entrada

La etiqueta de entrada HTML se puede incluir en un documento HTML como este:

```html

<input type="text"> 
```

Esto crea un área dentro de la cual un usuario puede ingresar información fácilmente. Luego, esta información se envía a una base de datos de back-end y se almacena o utiliza más abajo en el sitio web o la aplicación.

Una entrada con "tipo = 'texto'" producirá un campo de una sola línea donde se puede ingresar cualquier información. Otros tipos comunes de entradas incluyen pero no se limitan a: botón, casilla de verificación, color, correo electrónico y contraseña.

### Los tipos más comunes utilizados.

*   `text` : un campo de texto de una sola línea.
    
*   `button` : Un botón sin comportamiento predeterminado.
    
*   `submit` : un botón que envía el formulario.
    
*   `checkbox` : una casilla de verificación que permite seleccionar / deseleccionar valores.
    
*   `date` : para ingresar una fecha (año, mes y día).
    
*   `email` : para editar una dirección de correo electrónico.
    
*   `file` : permite al usuario seleccionar un archivo.
    
*   `hidden` : no se muestra, pero su valor se envía al servidor.
    
*   `number` : para introducir un número.
    
*   `password` : un campo de texto de una sola línea cuyo valor está oculto.
    
*   `radio` : un botón de radio, que permite seleccionar un solo valor entre múltiples opciones.
    
*   `range` : Un control para ingresar un número.
    
*   `url` : para introducir una URL.
    

Ejemplo:

```html

<input type="button"> 
 <input type="checkbox"> 
 <input type="color"> 
 <input type="email"> 
 <input type="password"> 
```

Las entradas vienen con muchos atributos predeterminados.

Algunos de los atributos que se encuentran comúnmente incluyen autocompletar, verificar y colocar marcadores.

```html

<input type="text" placeholder="This is a placeholder"> 
```

En la instancia anterior, se representa un área dentro de la cual se puede ingresar la entrada, con el marcador de posición que indica "Esto es un marcador de posición". Una vez que se hace clic en la línea de entrada y se presiona una tecla, el marcador de posición desaparece y se reemplaza por su propia entrada.

```html

<input type="checkbox" checked> 
```

En este caso, aparece una casilla de verificación y se marca de forma predeterminada debido al atributo "marcado".

Hay muchos tipos diferentes de entradas y atributos asociados que se pueden encontrar en el enlace que se encuentra a continuación.

#### Más información:

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

https://www.w3schools.com/tags/tag\_input.asp