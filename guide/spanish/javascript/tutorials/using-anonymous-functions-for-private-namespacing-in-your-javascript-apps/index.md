---
title: Using Anonymous Functions for Private Namespacing in Your JavaScript Apps
localeTitle: Uso de funciones anónimas para espacios privados en sus aplicaciones JavaScript
---
Echemos un vistazo a lo que es un espacio de nombres cuando se trata de crear aplicaciones JavaScript y algunos de los beneficios de usar un espacio de nombres privado al crear sus aplicaciones.

**Tenga en cuenta que este artículo hace referencia a funciones anónimas de ejecución automática. Si no está al tanto de lo que es esto, lea este excelente artículo de Noah Stokes: [Funciones anónimas autoejecutables o Cómo escribir Javascript limpio](http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write) . En este artículo se detallarán las funciones anónimas de ejecución automática.**

## ¿Qué es un espacio de nombres?

En pocas palabras, un espacio de nombres es solo una sección de código que tiene su propio espacio. Cuando empiezas a escribir aplicaciones JS, generalmente solo escribes el código y lo ejecutas. Esto coloca todo el código en lo que se conoce como **espacio de nombres global** , que contiene todo el código de la ventana en la que está trabajando.

Sin embargo, si mantiene todo su código en el **espacio de nombres global** , puede tener problemas con colisiones, convenciones de nombres, etc., especialmente en aplicaciones / juegos grandes de JS.

Echemos un vistazo a un ejemplo de cómo usar solo el **espacio** de **nombres global** para desarrollar un juego es una mala idea.

Entonces, digamos que tenemos un juego que sigue el seguimiento de los puntos que tiene el jugador:
```
var points = 0; 
```

Una gran cantidad de juegos rastrean puntos para agregar una ventaja competitiva al juego. Simplemente escribiendo esa línea en un script, hemos creado una variable denominada _puntos_ que puede rastrear los puntos ganados por el usuario.

Y todo está bien, pero digamos que tenemos un usuario más avanzado que juega el juego. Este usuario sabe cómo buscar en la fuente de una página web, por lo que esta persona echa un vistazo a la fuente que se encuentra detrás del juego JS y se da cuenta de que la variable de _puntos_ solo está ahí en el **espacio de nombres global** . ¡Una sonrisa malvada desciende a través de su cara mientras contemplan los puntos que pueden lograr! Deciden que no quieren esperar para vencer a algunos malos, o aplastar algunos hongos, o lo que sea, para acumular un montón de puntos. ¡Quieren sus puntos ahora! Bueno, ¡¿cómo suena _un billón de millones de millones de_ puntos ?! Por lo tanto, cargan la consola en su navegador favorito y simplemente escriben en la consola:
```
points = 34750925489459203859095480917458059034; 
```

Una vez que el usuario ingresa, la variable de _puntos_ se actualiza en el juego. Ahora, el usuario tiene una cantidad de puntos verdaderamente enorme y probablemente irreal, en el juego, y puede presumir a sus amigos de que nadie puede superar su increíble puntaje.

Entonces, ¿cómo evitamos que esto ocurra? Aquí es donde **los espacios de nombres privados** entran en juego.

## Espacios de nombres privados

**Los espacios de nombres privados** permiten a los desarrolladores colocar su código en secciones (o **espacios de nombres** ). Estas secciones operan de forma independiente, pero aún pueden leer y escribir desde el **espacio de nombres global** .

Para desglosar esto en términos más simples a partir de un escenario de la vida real, digamos que está trabajando en un edificio de oficinas. Tienes tu propia oficina y ves a otros con sus propias oficinas. Cada oficina está cerrada, y solo la persona que posee la oficina tiene una llave para esta oficina. Digamos también que tiene algún tipo de nuevo bloqueo súper que hace que su oficina sea impenetrable por cualquier otra persona en el edificio. Consideremos el edificio de oficinas como el **espacio de nombres global** y cada oficina como un **espacio de nombres privado** . Usted no tiene acceso a la oficina de nadie más, ni ellos tienen acceso al suyo. Pero, cada uno de ustedes tiene acceso al resto del edificio de oficinas, ya sea para tomar un café, tomar un refrigerio, etc. Cada uno de ustedes puede tomar algo del **espacio de nombres global** (o crear / modificar algo allí), pero puede no cree / modifique / agarre nada de las oficinas de los demás; solo puede crear / modificar / capturar desde su propio **espacio de nombres** / oficina **privado** .

## Lograr un espacio de nombres privado

Entonces, ¿cómo logramos este **espacio** de **nombres privado** en JavaScript? Utilice una función de ejecución automática anónima! Si no leyó el artículo de Noah Stokes, [Funciones anónimas autoejecutables o Cómo escribir Javascript limpio](http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write) , hágalo ahora. En este artículo se detallarán las funciones anónimas de ejecución automática.

Echemos un vistazo al uso de esa variable de _puntos_ anterior, pero separémosla en un **espacio de nombres privado** :
```
//The most common way you'll see an anonymous self-executing function 
 (function () { 
    var points = 0; 
 })(); 
 
 //This is just one of many more alternative ways to use an anonymous self-executing function 
 /* 
 !function () { 
    var points = 0; 
 }(); 
 */ 
```

Ahora, cuando el usuario llega a la página, ¡no podrán abrir la consola en su navegador y cambiar el valor de la variable de puntos como lo deseen! ¡Increíble!

## Espacio de nombres e interacción de documentos

El código anterior no fue más que un uso para usar una función anónima de ejecución automática para dar al código su propio **espacio de nombres privado** . Tenga en cuenta que los espacios de nombres solo afectan el código JS (variables / arrays / objects / etc.), No el código que pertenece al documento en sí.

Cualquier código dentro de un espacio de nombres todavía tiene el mismo acceso al documento HTML y CSS, como lo haría normalmente en el **espacio de nombres global** . Eche un vistazo a las siguientes dos muestras de código. Ambos realizan la misma funcionalidad, y ninguno es más beneficioso o más eficiente que el otro.
```
<script type="text/javascript"> 
    (function () { 
        document.querySelector('body').style.background = 'blue'; 
    })(); 
 </script> 
```

es lo mismo que:
```
<script type="text/javascript"> 
    document.querySelector('body').style.background = 'blue'; 
 </script> 
```

Tenga en cuenta que esta es solo una forma de usar espacios de nombres en aplicaciones JavaScript. Adapte su código a lo que mejor se adapte a la situación en cuestión.