---
title: Backend File Structures in Angular
localeTitle: Estructuras de archivo de fondo en angular
---
La API de back-end de su aplicación que interactúa con su base de datos se encuentra en **/ server / api**  
Echemos un vistazo a **/ server / api / thing** :

1.  **index.js** : este archivo enruta las solicitudes de la API $ http realizadas desde el front-end de su aplicación a la función apropiada en **thing.controller.js**
2.  **thing.controller.js** : ¡Aquí es donde realmente tratamos la base de datos! Tómese un minuto para mirar aquí y averiguar qué está pasando. Estas funciones: devolverán todos los elementos de una colección, devolverán un solo elemento de una colección cuando pasen su ID, publicarán un artículo en una colección, actualizarán un artículo de la colección (esto no funciona como se esperaba). lo arreglaremos en un minuto) y, por supuesto, eliminaremos un elemento de la colección.
3.  **thing.model.js** : aquí se define la estructura real de un objeto _thing_ . Puede agregar o eliminar cualquier campo que desee del modelo de _objetos_ , y siempre que sean sintácticamente correctos, no romperán nada, incluso si ya hay _elementos_ con diferentes esquemas en su base de datos. ¡Pero! Usted no sólo tiene que editar el modelo _que hay_ que hacer un nuevo tipo de colección, porque el generador-angular-fullstack lo puede hacer por usted!