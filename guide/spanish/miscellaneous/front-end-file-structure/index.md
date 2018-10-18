---
title: Front End File Structure
localeTitle: Estructura de archivo frontal
---
Lo primero es lo primero: todos sus archivos de usuario y archivos angulares están en **/ client / app /**

1.  **app.js** : define tu aplicación e incluye algunas funciones básicas de toda la aplicación, probablemente no necesites meterte con ella a menos que estés tratando de agregar más dependencias a tu aplicación. No vamos a preocuparnos por eso ahora.
2.  **app.css** : una hoja de estilo para toda la aplicación, puede poner estilos aquí si lo desea, pero le recomiendo que los ponga en **main / main.css** , ya que estos estilos también son para toda la aplicación.
3.  **main /** : esta carpeta contiene lo que el usuario ve primero cuando carga su sitio. **main.html** es la plantilla de la página, **main.js** dirige al usuario a **main.html** cuando el usuario **accede** al directorio de nivel superior de su sitio web, es decir, http: //yourapp.wherever.itis/ sin / other / url / jerarquía . También aprenderá pronto que puede definir su aplicación / url / heirarchy / bastante / arbitrariamente . Realmente no necesitarás editar **main.js** o **main.controller.spec.js** , así que no te preocupes por eso ahora mismo. Si miras a través del archivo **main.html** , verás que usa _ng-repeat_ para mostrar _cosas_ en _awesomeThings_ . ¿De dónde _viene_ cosas _impresionantes_ ?
4.  **main / main.controller.js** : ¡todas las funciones de javascript que desea utilizar para interactuar directamente con el usuario, vaya aquí! _Pondrá_ funciones aquí para interactuar con su API, actualizar las vistas para su usuario, etc. Aquí, las _cosas impresionantes_ se extraen de su base de datos y se agregan al ámbito local para que su vista HTML pueda mostrarlas. ¡Que guay! Podremos agregar objetos personalizados a su base de datos en un minuto.

¡Estupendo! ¡Ahora ya sabes cómo interactuar con el usuario! Pero, ¿qué pasa si quieres que tu aplicación tenga otra página que haga algo más? Tal vez **main.html** muestra la página de inicio, pero ¿desea una página que muestre un formulario para agregar una encuesta? Tal vez http: //yourapp.wherever.itis/newpage ? Aquí es donde el generador de yeoman es útil.

[ANTERIOR](http://forum.freecodecamp.com/t/guides-to-back-end-projects/14265) SIGUIENTE