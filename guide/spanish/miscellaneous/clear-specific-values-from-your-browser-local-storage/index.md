---
title: Clear Specific Values from Your Browser Local Storage
localeTitle: Borrar valores específicos de su navegador de almacenamiento local
---
Eliminar valores específicos del almacenamiento local de su navegador solucionará muchos problemas relacionados con el bloqueo o la congelación del navegador en FreeCodeCamp.

Esto resuelve, como ejemplo, un problema común con el navegador que se cuelga en la página de un desafío después de guardar una respuesta con un bucle infinito.

Cuando esto sucede, debe eliminar el valor en `localStorage` que almacena esa respuesta.

## En cromo:

*   En **freecodecamp.com** , abra sus herramientas de desarrollador.
    
    *   Más herramientas> Herramientas de desarrollador (o `Ctrl` + `Shift` + `I` (Windows), `Cmd` + `Opt` + `I` (Mac))
*   Vaya a la pestaña de `Resources`
    
*   Expanda el elemento de `Local Storage` en el panel izquierdo
    
*   Seleccione `http://www.freecodecamp.com`
    
*   Encuentre el desafío que desea eliminar datos en el panel derecho ![Encontrar una clave en LocalStorage Chrome Developer Tools](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8300d3dfcf8a07bc3c1f69e7dd730d99e353972d.png)
    
*   Haz clic derecho en el desafío deseado y selecciona `Delete`
    

## En Firefox:

*   En **freecodecamp.com** , abre tu consola web con
    
    *   `Ctrl` + `Shift` + `K`
*   A partir de ahí, usando directamente la consola:
    
    *   Escriba `console.log(localStorage);` y pulsa `Enter` .
        
    *   Haga clic en el enlace de `Storage` . ![Imprima el objeto localStorage desde la consola web y muestre el almacenamiento](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e3778d1c24e9da6fe506564405b5b1ebc11facc1.png)
        
    *   El panel de **almacenamiento** aparecerá a la derecha.
        
    *   Filtre los resultados para encontrar el algoritmo, el proyecto front-end o el desafío que causa el problema.
        
    *   Cuando esté ubicado, pase el mouse sobre él y haga clic en la `x` a la derecha. ![Haga clic en la x para eliminar la entrada de valor.](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a309e8ec8d92301f3507001ca3a796009d0a00d8.png)
        
    *   Una vez eliminado, compruebe si el problema fue resuelto. Actualice o cierre y abra el navegador si es necesario.
        

**Nota:** Esto también se puede hacer con el [Inspector de almacenamiento](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector) , pero parece que Firefox se cuelga cuando hay tantos valores.