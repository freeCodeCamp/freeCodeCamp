---
title: How to Create a Dropdown Menu with CSS and JavaScript
localeTitle: Cómo crear un menú desplegable con CSS y JavaScript
---
## Cómo crear un menú desplegable con CSS y JavaScript

En este tutorial, aprenderá cómo crear un menú desplegable simple con Javascript, HTML y CSS de vainilla. Vamos a ver el código HTML, CSS y Javascript, pero prestando más atención a la programación, ya que este es un tutorial de JS. Usaremos solo JS y CSS, sin marcos ni preprocesadores. La única excepción (tipo de) será la importación del archivo CSS de [Font Awesome](https://fontawesome.com/) porque usaremos uno de sus íconos.

Está dirigido a desarrolladores que tienen un promedio de comprensión de HTML, CSS y JS. Traté de hacerlo lo más limpio posible, pero no me centraré demasiado en los detalles aquí. Espero que todos disfruten.

## Capturas de pantalla

Así es como se ve el resultado del código:

Pantalla inicial:

![](https://i.imgur.com/jrnu6mE.png)

Desplegable abierto:

![](https://i.imgur.com/gszPtRa.png)

Desplegable con la opción seleccionada:

![](https://i.imgur.com/TKXxZGF.png)

#### HTML:

En esta sección, discutiremos la implementación del código HTML para la página de demostración. Para empezar, veamos el código `<head>`

```html

<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <title>Dropdown Example</title> 
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css"> 
    <link rel="stylesheet" href="styles.css"> 
 </head> 
```

Básicamente es un encabezado HTML, con la excepción de las etiquetas de `link` cargan las dos hojas de estilo CSS que usaremos en este tutorial: los estilos de Font Awesome y el archivo `styles.css` , donde definiremos los estilos de esta página.

Luego, está el resto del archivo HTML, el cuerpo:

```html

<body> 
    <div class='dropdown'> 
        <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div> 
 
        <div class='menu pointerCursor hide'> 
            <div class='option' id='option1'>Option 1</div> 
            <div class='option' id='option2'>Option 2</div> 
            <div class='option' id='option3'>Option 3</div> 
            <div class='option' id='option4'>Option 4</div> 
        </div> 
 
    </div> 
    <span id='result'>The result is: </span> 
    <script> 
      ... 
    </script> 
 </body> 
 </html> 
```

Esta sección se puede dividir en 3 partes principales:

*   El `.dropdown` div, donde se definirá la estructura del elemento desplegable.
*   El elemento `#result` , que contendrá la opción seleccionada por el usuario, desde el elemento desplegable.
*   El script escrito en la etiqueta `<script>` . Su implementación está oculta aquí, porque sus detalles se explicarán en la última sección de este tutorial.

El elemento desplegable es un `div` contiene un `title` y elementos de `menu` . El primero simplemente define qué texto se presentará en el elemento antes de seleccionar cualquier opción y el último definirá las opciones que serán seleccionables por el elemento.

El elemento de `result` está ahí para mostrarle qué opción está seleccionada actualmente.

#### Estilos:

A continuación puedes consultar el código completo de css. Como puede ver, hace uso de las construcciones de `transition` y `transform` CSS3.

Por favor, preste atención a las definiciones de las clases `.dropdown` . Estos se utilizan para definir el diseño del componente de contenedor desplegable, así como sus elementos internos, como el `.title` y su `.option` .

```css
body{ 
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
 } 
 
 .hide { 
    max-height: 0 !important; 
 } 
 
 .dropdown{ 
    border: 0.1em solid black; 
    width: 10em; 
    margin-bottom: 1em; 
 } 
 
 .dropdown .title{ 
    margin: .3em .3em .3em .3em; 
    width: 100%; 
 } 
 
 .dropdown .title .fa-angle-right{ 
    float: right; 
    margin-right: .7em; 
    transition: transform .3s; 
 } 
 
 .dropdown .menu{ 
    transition: max-height .5s ease-out; 
    max-height: 20em; 
    overflow: hidden; 
 } 
 
 .dropdown .menu .option{ 
    margin: .3em .3em .3em .3em; 
    margin-top: 0.3em; 
 } 
 
 .dropdown .menu .option:hover{ 
    background: rgba(0,0,0,0.2); 
 } 
 
 .pointerCursor:hover{ 
    cursor: pointer; 
 } 
 
 .rotate-90{ 
    transform: rotate(90deg); 
 } 
```

#### JavaScript:

Ahora veremos cómo se implementa la parte de Javascript. Primero veremos las definiciones de funciones. y luego el código que llama a estas funciones para realizar las acciones desplegables.

Básicamente, hay 3 acciones que tienen lugar según la interacción del usuario, ya que sus oyentes se agregan a los elementos DOM:

1.  Haciendo clic en el elemento desplegable.
2.  Seleccionando una de las opciones desplegables
3.  Cambiando la opción actualmente seleccionada

Me gustaría dejar claro que estamos usando las funciones de flecha ( `() => {}` ) y la palabra clave `const` , que son características de ES6. Probablemente sea bueno si está utilizando una versión reciente de su navegador, pero tenga eso en cuenta.

#### 1\. Haciendo clic en el elemento desplegable.

```Javascript
function toggleClass(elem,className){ 
    if (elem.className.indexOf(className) !== -1){ 
        elem.className = elem.className.replace(className,''); 
    } 
    else{ 
        elem.className = elem.className.replace(/\s+/g,' ') +   ' ' + className; 
    } 
 
    return elem; 
 } 
 
 function toggleDisplay(elem){ 
    const curDisplayStyle = elem.style.display; 
 
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){ 
        elem.style.display = 'block'; 
    } 
    else{ 
        elem.style.display = 'none'; 
    } 
 } 
 
 
 function toggleMenuDisplay(e){ 
    const dropdown = e.currentTarget.parentNode; 
    const menu = dropdown.querySelector('.menu'); 
    const icon = dropdown.querySelector('.fa-angle-right'); 
 
    toggleClass(menu,'hide'); 
    toggleClass(icon,'rotate-90'); 
 } 
```

Cuando se hace clic en el elemento desplegable, se abre (si está cerrado) o se cierra (si está abierto). Esto sucede vinculando `toggleMenuDisplay` al detector de eventos de clic en el elemento desplegable. Esta función alterna la visualización de su elemento de `menu` mediante el uso de las funciones `toggleDisplay` y `toggleClass` .

#### 2\. Seleccionando una de las opciones desplegables.

```Javascript
function handleOptionSelected(e){ 
    toggleClass(e.target.parentNode, 'hide'); 
 
    const id = e.target.id; 
    const newValue = e.target.textContent + ' '; 
    const titleElem = document.querySelector('.dropdown .title'); 
    const icon = document.querySelector('.dropdown .title .fa'); 
 
 
    titleElem.textContent = newValue; 
    titleElem.appendChild(icon); 
 
    //trigger custom event 
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change')); 
    //setTimeout is used so transition is properly shown 
    setTimeout(() => toggleClass(icon,'rotate-90',0)); 
 } 
```

#### 3\. Cambiando la opción actualmente seleccionada

```Javascript
function handleTitleChange(e){ 
    const result = document.getElementById('result'); 
 
    result.innerHTML = 'The result is: ' + e.target.textContent; 
 } 
```

La función `handleTitleChange` está vinculada al evento de `change` personalizado en el elemento `.title` , para cambiar el contenido del elemento `#result` siempre que cambie el elemento del título. La activación de este evento se realiza en la sección anterior.

#### Código principal

```Javascript
//get elements 
 const dropdownTitle = document.querySelector('.dropdown .title'); 
 const dropdownOptions = document.querySelectorAll('.dropdown .option'); 
 
 //bind listeners to these elements 
 dropdownTitle.addEventListener('click', toggleMenuDisplay); 
 dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected)); 
 document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange); 
```

En la sección principal solo hay un código simple para obtener el título del desplegable y los elementos de opciones para vincularlos a los eventos analizados en la sección anterior.

## Manifestación

El código completo y la demostración de esta aplicación se pueden encontrar [aquí](https://codepen.io/GCrispino/pen/EEXmYd) .

## Más información

*   [ES6 introducción](https://guide.freecodecamp.org/javascript/es6)
*   [Funciones de flecha](https://guide.freecodecamp.org/javascript/es6/arrow-functions/)
*   [Let y Const](https://guide.freecodecamp.org/javascript/es6/let-and-const/)