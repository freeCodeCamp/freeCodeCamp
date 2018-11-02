---
title: Angularjs Interview Questions
localeTitle: Preguntas de la entrevista de Angularjs
---
# Preguntas de la entrevista de Angularjs

Aquí hay una lista de los conceptos que se preguntan con frecuencia en las entrevistas de Angularjs.

*   ¿Qué es AngularJS?
*   ¿Qué es el Model View Controller (MVC)?
*   Enlace de datos bidireccional
*   ¿Qué es la inyección de dependencia y cómo funciona?
*   ¿Qué es $ scope en AngularJS?
*   ¿Qué es $ rootScope en AngularJS?
*   ¿Cómo implementar enrutamiento en angular?
*   Explican directivas
*   ¿Cómo podemos crear una directiva personalizada en Angular?
*   Explica diferencia entre servicio y fábrica.
*   Explique $ q servicio, diferido y promesas.

# Ejemplo de preguntas y respuestas

Pregunta: ¿Listar las directivas en AngularJS? Respuesta: ngBind, ngModel, ngClass, ngApp, ngInit, ngRepeat

Pregunta: ¿Cuál es el alcance de $ en AngularJS? Respuesta: $ scope en AngularJS es un objeto que se refiere a un modelo de aplicación. Es un objeto que enlaza la vista (elemento DOM) con el controlador. En el controlador, se accede a los datos del modelo a través del objeto $ scope. Como sabemos, AngularJS admite el patrón MV \*, el objeto $ scope se convierte en el modelo de MV \*.

Pregunta: ¿Qué es SPA (aplicación de una sola página) en AngularJS? Respuesta: Las aplicaciones de una sola página (SPA) son aplicaciones web que cargan una sola página HTML y actualizan dinámicamente esa página a medida que el usuario interactúa con la aplicación. Los SPA utilizan AJAX y HTML para crear aplicaciones web fluidas y receptivas, sin recargas de página constantes. Sin embargo, esto significa que gran parte del trabajo ocurre en el lado del cliente, en JavaScript. Una sola página HTML aquí significa la página de respuesta de IU del servidor. La fuente puede ser ASP, ASP.NET, ASP.NET MVC, JSP, etc. Sin embargo, una aplicación web de una sola página se entrega como una página al navegador y, por lo general, no requiere que la página se vuelva a cargar cuando el usuario navega a varias partes de la aplicación. Esto permite una navegación más rápida, transferencias de red más eficientes y un mejor rendimiento general para el usuario final.

Pregunta: ¿Qué es el enrutamiento en AngularJS? Respuesta: El enrutamiento es una característica central en AngularJS. Esta característica es útil en la construcción de SPA (aplicación de una sola página) con múltiples vistas. En la aplicación SPA, todas las vistas son archivos Html diferentes y usamos Enrutamiento para cargar diferentes partes de la aplicación y es útil dividir la aplicación de forma lógica y hacerla manejable. En otras palabras, el enrutamiento nos ayuda a dividir nuestra aplicación en vistas lógicas y a vincularlas con diferentes controladores.

Pregunta: Explicar la directiva ng-repeat. Respuesta: La directiva ng-repeat es la característica más utilizada y muy útil de la directiva AngularJS. Se itera sobre una colección de elementos y crea elementos DOM. Supervisa constantemente la fuente de datos para volver a generar una plantilla en respuesta al cambio.

Pregunta: ¿Cuál es la diferencia entre ng-If y ng-show / ng-hide. Respuesta: La directiva ng-If solo procesa el elemento DOM si la condición es verdadera. donde la directiva ng-show / ng-hide renderiza el elemento DOM pero cambia la clase de ng-hide / ng-show para mantener la visibilidad del elemento en la página.

Pregunta: ¿Cómo cancelas un tiempo de espera con AngularJs? Respuesta: $ timeout es el contenedor de AngularJs para window.setTimeout, cancela un tiempo de espera aplicando la función:
```
$timeout.cancel(function (){ 
  // write your code. 
 }); 
```

Pregunta: ¿Qué es la inyección de dependencia? Respuesta: La inyección de dependencia (DI) es un patrón de diseño de software que se ocupa de cómo los componentes adquieren sus dependencias. El subsistema de inyectores AngularJS se encarga de crear componentes, resolver sus dependencias y proporcionarlos a otros componentes según se solicite.

Pregunta: Explicar la directiva ng-app. Respuesta: La directiva ng-app inicia una aplicación AngularJS. Define el elemento raíz. Inicializa o inicia automáticamente la aplicación cuando se carga una página web que contiene la aplicación AngularJS. También se utiliza para cargar varios módulos AngularJS en la aplicación AngularJS.

Pregunta: Explicar la directiva ng-init. Respuesta: La directiva ng-init inicializa los datos de una aplicación AngularJS. Se utiliza para poner valores a las variables que se utilizarán en la aplicación. Por ejemplo: en el siguiente ejemplo, hemos inicializado una matriz de países, utilizando la sintaxis JSON para definir una matriz de países.

```html

<div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]"> 
   ... 
 </div> 
```

Pregunta: ¿Cómo se comparten los datos entre los controladores? Respuesta: Cree un servicio AngularJS que retendrá los datos y los inyectará dentro de los controladores. Usar un servicio es la forma más limpia, rápida y fácil de probar. Sin embargo, hay algunas otras formas de implementar el intercambio de datos entre controladores, como: - Uso de eventos - Usar $ parent, nextSibling, controllerAs, etc. para acceder directamente a los controladores - Usar $ rootScope para agregar los datos (no es una buena práctica)

Pregunta: ¿Cuál es la diferencia entre las directivas ng-if y ng-show / hide? Respuesta: ng-if solo creará y mostrará el elemento DOM cuando su condición sea verdadera, si la condición es falsa o cambia a falso, no creará ni destruirá el creado. ng-show / hide siempre generará el elemento DOM pero aplicará la propiedad de visualización css basada en la evaluación de la condición.

#### Más información:

Aquí puedes encontrar otras preguntas y respuestas:

*   [Preguntas de la entrevista de AngularJS](https://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm)
*   [10 preguntas y respuestas de la entrevista de AngularJS](https://www.upwork.com/i/interview-questions/angularjs/)
*   [Las 50 preguntas más importantes de la entrevista de AngularJS para un 100% de éxito](http://www.techbeamers.com/latest-angularjs-interview-questions-answers/)