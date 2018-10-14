---
title: Detect authentic click events
localeTitle: Detectar auténticos eventos click
---
## Detectar auténticos eventos click

Puede haber una situación en la que desee hacer algunas cosas específicas solo si el evento de clic fue realmente activado por un usuario y no por alguna secuencia de comandos para simular un evento de clic.

Hay una solución muy simple para este problema, el objeto de evento javascript nos proporciona una propiedad `.istrusted` , que se puede usar para distinguir la diferencia.

#### Aquí hay un ejemplo del uso de este método.

```javascript
// Assume there is a button in the HTML 
 const button = document.querySelector('button'); 
 
 button.addEventListener('click', (e) => { 
  if (e.isTrusted) { 
    console.log('Button clicked by a real user'); 
  } else { 
    console.log('Button click simulated by a script'); 
  } 
 }); 
 
 button.click() // Outputs "Button click simulated by a script" 

```