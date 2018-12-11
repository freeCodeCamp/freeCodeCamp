---
title: Checking for Hidden Elements
localeTitle: Buscando elementos ocultos
---
Hay ocasiones en las que es posible que deba comprobar si un elemento está visible u oculto en la pantalla para poder realizar alguna acción en él dado su estado. Estaba buscando algunas soluciones en Stack Overflow para intentar determinar si un elemento era visible y no estaba satisfecho con las respuestas que recibí.

Una respuesta fue usar la biblioteca jQuery y luego verificar si el elemento tiene la seudoclase de `:visible` usando este formato: `$(element).is(':visible')` . Esto funciona para los elementos que están ocultos mediante el uso de `display: none;` en ellos, pero no funciona en ningún elemento que tenga su `visibility` configurada como `hidden` . Tampoco funciona si el elemento principal es el único elemento que está oculto a la vista. Si algún elemento padre del elemento probado está oculto, ya sea mediante `visibility` o `display` , el elemento que se está probando volverá a estar visible, a pesar de que no esté visible en la pantalla.

## La solución

Se me ocurrió una función de JavaScript pura que resuelve este problema que no tiene dependencias y es una solución compatible con varios navegadores. Esta función analizará el elemento primero para ver si las propiedades de `display` o `visibility` se muestran como `none` u `hidden` respectivamente. Luego, si regresan a la normalidad, verifica todos los elementos principales hasta el cuerpo del documento. Si un elemento principal del elemento que se está probando está oculto, eso significa que el elemento que se está probando no está visible en el documento.

[Aquí hay un ejemplo de CodePen que demuestra este comportamiento e incluso muestra que la comparación está utilizando la solución jQuery y mi solución de JavaScript puro](http://codepen.io/marcusparsons/pen/bpNqgY) . Observe en el CodePen que aunque el elemento está claramente oculto a la vista, el uso de `.is(':visible')` jQuery no es una opción viable para verificar la visibilidad de cualquier elemento.

Y aquí está la función que he creado:
```
function isVisible (element) { 
    //start with initial element to check visibility and display 
    var el = document.querySelector(element); 
    //display and visibility vary per browser and must be sought in different ways depending on the browser 
    var t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
    var t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
    //if either of these are true, then the element is not visible 
    if (t1 === "hidden" || t2 === "none") { 
        return false; 
    } 
    //This regex is used to scan the parent nodes all the way up to the body element 
    while (!(/body/i).test(el)) { 
        //get the next parent node 
        el = el.parentNode; 
        //grab the values, if available, 
        t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
        t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
        if (t1 === "hidden" || t2 === "none") { 
            return false; 
        } 
    } 
    //if all scans are not successful, then the element is visible 
    return true; 
 } 
```

Y para usar la función, solo necesita llamarla con una cadena de consulta para seleccionar el elemento a probar, es decir,
```
<body> 
    <p style="visibility: hidden;" id="myP">My paragraph</p> 
    <script type="text/javascript"> 
        //include isVisible function 
        alert('Is my paragraph visible? ' + isVisible('#myP')); 
    </script> 
 </body> 
```

Y la alerta resultante será: `Is my paragraph visible? false`