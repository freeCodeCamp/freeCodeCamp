---
title: Known Issues with Codepen
localeTitle: Problemas conocidos con Codepen
---
Se anima a los estudiantes de Free Code Camp a utilizar [Codepen.io](http://www.codepen.io/) para armar proyectos, y Codepen es un recurso fantástico para armar rápidamente un código utilizable. Sin embargo, Codepen introduce un nivel adicional de abstracción en el proceso de depuración del código. Aquí hay algunos problemas conocidos que pueden hacerle tropezar en Codepen, si no los conoce:

1.  Problema de **URL con etiquetas de anclaje:** CodePen anula los elementos de anclaje `<a href='URL'>` , lo que significa que debe agregar un `target='_blank'` a sus elementos de anclaje; de ​​lo contrario, no funcionarán.
2.  **Problema con el complemento https:** se sabe que la extensión de Chrome "HTTPS Everywhere" (creada por la [Electronic Frontiers Foundation](http://www.eff.org/) ) interfiere con las llamadas AJAX. Debido a que la extensión utiliza automáticamente HTTPS, puede causar un error de "contenido mixto" que impide que se carguen los datos JSON / XML. Si encuentra un error de este tipo, asegúrese de que sus complementos no sean los culpables. Opcionalmente puedes usar [crossorigin.me](http://crossorigin.me) como proxy.
3.  **imgur hotlinking:** si usa imágenes de [http://imgur.com](http://imgur.com) , no se mostrarán la mayor parte del tiempo, esto se debe a sus TOS. Una forma de resolver esto es usar un servicio alternativo como [http://postimg.org](http://postimg.org)
4.  **recarga automática: de** forma predeterminada, cada vez que realiza cambios en las ventanas del editor HTML o JS, se actualiza la ventana de vista previa. Puede desactivar esto y habilitar un "Botón Ejecutar", yendo a Configuración> Comportamiento> "¿Desea un botón Ejecutar?" y desmarcar la caja.
5.  **location.reload:** si se encuentra con un problema de su código que funciona en la vista de depuración o en JSFiddle, pero no en la vista del editor de Codepen o en la vista de página completa, compruebe si utilizó `location.reload()` . Si lo hizo, tiene que encontrar otra forma de lograr lo deseado, ya que Codepen eliminará la `location.reload` Recargue y solo dejará `()` en su código. Lea más [aquí:](https://blog.codepen.io/documentation/editor/things-we-strip/)
6.  **muestre imágenes, agregue archivos css / js, alojados en Github:** Es posible que desee incluir en su hoja de estilo, imagen o archivo js del proyecto Codepen alojados en un Github. Si agrega el enlace Github de su archivo a su configuración en Codepen, o a su html / css, no funcionará fuera de la caja. Lo que necesitas hacer es:
    1.  Ir a la versión "Raw" del archivo.
    2.  Copia la URL
    3.  Cambie `raw.githubusercontent.com` por `rawgit.com`
    4.  usa esa URL para enlazar a un archivo alojado en un github