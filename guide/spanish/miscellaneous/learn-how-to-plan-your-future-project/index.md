---
title: Learn How to Plan Your Future Project
localeTitle: Aprenda cómo planificar su futuro proyecto
---
Una onza de preparación vale una libra de cura. Eso es cierto en medicina, y eso es definitivamente cierto en el desarrollo de software.

Aquí hay un flujo de trabajo estructurado de 10 pasos que lo guiará a través del proceso de planificación de la aplicación, con el objetivo de evitar que escriba muchos códigos innecesarios.

Juntos, planearemos una aplicación web de una sola página "para hacer" simple. También planearemos un backend API para una futura aplicación móvil.

## 1) Crea nuestro tablero Trello.

[Trello](https://trello.com/) es una forma divertida y gratuita de dividir su proceso de planificación y desarrollo en pequeñas tareas que se pueden rastrear.

![Imagen de tablero de trello.](https://lh3.googleusercontent.com/EI4AQ4NINm3B2DHR_YIS29JyKVa5dTPiT3RtITylmndFlpshTHepsKuO8_1KQNfdPDSBjslDReHCuPFeH1GNrDtgOwTyq6ZtGf3DFBmq1AsAhPHKt_0pLXQLf0o4ZbDuKVj4-Bo)

[Así es como se verá nuestro tablero de Trello](https://trello.com/b/O9MZcYyY/todo-app) . Prefiero dividir mis tareas en 3 columnas (dependiendo de la complejidad del proyecto):

*   A hacer - lo que queda por hacer
*   En progreso - tareas en las que la gente está trabajando actualmente
*   Hecho - tareas que están hechas y listas para la prueba

## 2) Escribir historias de usuario

Aquí hay algunos ejemplos de historias de usuarios. Esto guiará cómo pensamos acerca de las características y funcionalidades de nuestra aplicación. Tenga en cuenta que todos siguen una estructura similar: como [persona, puedo \[hacer algo\].](https://lh5.googleusercontent.com/2v6iIMbCrLSKVfqttEToum7OA3YGQCBKWUHcSCB1KEbEcijXxQtKJKY6fhLXeecJiO27P4icOuPlkVc9_uNXolzlzNXOo_TPh09GZsAqRH-JISqPrpx0PZdtbHOr0RIuQUbTbaw)

*   Como usuario registrado, puedo ver la lista de mis tareas pendientes.
*   Como usuario registrado, puedo agregar una nueva tarea pendiente.
*   como usuario registrado, puedo eliminar una tarea pendiente (solo la de mis tareas pendientes, no la de otros usuarios).
*   como usuario registrado, puedo completar una tarea pendiente (solo la de mis tareas pendientes, no la de otros usuarios).
*   Como usuario anónimo, puedo registrarme para una nueva cuenta, recuperar mi contraseña o iniciar sesión en la aplicación con una cuenta existente.

## 3) Crea nuestro modelo de caso de uso.

Nuestro modelo de caso de uso nos ayudará a visualizar nuestras historias de usuario para que podamos entender mejor cómo implementarlas.

! \[Diagrama de caso de usuario anónimo

![Diagrama de caso de usuario autenticado](https://lh6.googleusercontent.com/3V6dVvAcyjqFkaOukimucYOX0CfwBBYNN9SvjmnVy40Pdhs4Wtrr34i3E-9pbV7tFsp4jHm77IFQvFupjq6OWyxqEgCzcQ995Ayh52Msczu6TfwKeNhL9PYHyxSgmPYA1TR6l6Q)

## 4) Crea nuestro diagrama de actividades.

Nuestro diagrama de actividad mostrará las diferentes rutas que nuestros usuarios pueden tomar a través de nuestra aplicación.

![Imagen del diagrama de actividad](https://lh6.googleusercontent.com/jAQL4myqWOPA3gk2iTpGyAQBrO6p1GlPe8BQQ1Se6a-Di40X3Zw1p0wfJewZUL-YyDmedYzX5Lxvo2GW2Qnr6I-6kuKe1sDb9_5F_n46cKoawWReWW_ZoZCIJO6Semc4fvsiuHc)

Un usuario accede a nuestra aplicación de tareas pendientes.

*   Si el usuario no ha iniciado sesión, verá nuestra página de inicio de sesión.
    
*   Si ya tiene una cuenta, puede iniciar sesión.
    
*   Si tiene una cuenta, pero olvidó su contraseña, puede recuperarla.
    
*   Si ella no tiene una cuenta, puede crear una.
    
*   Tanto "crear una cuenta" como "recuperar mi contraseña" requerirán la validación del correo electrónico. Un usuario puede iniciar sesión en nuestra aplicación solo después de que haya confirmado su dirección de correo electrónico.
    
*   Si ha iniciado sesión, verá su lista de tareas pendientes (esto puede estar vacío si aún no ha agregado ninguna tarea pendiente).
    
*   Un usuario registrado:
    
    *   es capaz de ver su lista de tareas
        
    *   es capaz de marcar una tarea de su lista como completada
        
    *   es capaz de buscar dentro de su lista de tareas
        
    *   es capaz de eliminar una tarea de su lista
        
    *   puede cerrar la sesión.
        
*   El usuario puede salir de la aplicación en cualquier momento.
    

## 5) Crea nuestras maquetas

Nuestras maquetas muestran cómo debería ser nuestra aplicación. Es mucho más rápido iterar en una maqueta que hacerlo en código de trabajo.

![Imagen de maqueta](https://lh3.googleusercontent.com/GBFhmBkfr-xM5YSXlR0Fm9y8b24ivdRlUtRWQOHJ8skNxEgjTkAef0e5nZ-CcHKNUq2p4V4hgDuAm9LSEuvbovlVborH1ZioAUXVlEblWZ4hN_d2tGEpxhfTkKH9os2JS1pab4w)

## 6) Elegir las tecnologías adecuadas para nuestro proyecto.

Debido a que esta es una aplicación de una sola página, confiaremos en gran medida, o en este caso exclusivamente, en JavaScript. Vamos a usar una de las pilas de JavaScript más populares: la pila MEAN. Una gran ventaja de la pila MEAN es que todos sus componentes son gratuitos y de código abierto. También hay toneladas de recursos disponibles para aprender la pila MEAN y para depurarla cuando inevitablemente encuentre errores.

Puede tener un [entorno de desarrollo de pila MEAN](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) en funcionamiento en la nube en menos de una hora, de forma gratuita.

Aquí están los componentes que usaremos:

1.  [MongoDB](http://mongodb.org/) para nuestra base de datos
2.  [Node.js](http://nodejs.org/) y [Express.js](http://expressjs.com/) para implementar nuestra API
3.  [AngularJS](http://angularjs.org/) , junto con HTML y CSS (y Bootstrap) para nuestra aplicación del lado del cliente
4.  [Mongoose](http://mongoosejs.com/) para conectar nuestra aplicación a MongoDB

## 7) Diseñar nuestro esquema de base de datos.

Vale la pena el esfuerzo de diseñar un esquema de base de datos, incluso para nuestra aplicación simple.

Tendremos dos colecciones: nuestra colección "Usuarios" alojará nuestros datos de usuario, y nuestra colección "Tareas pendientes" albergará nuestras tareas que deben realizarse. Un usuario puede tener cero, una o muchas tareas en su lista de tareas pendientes, por lo que tendremos una relación de uno a muchos (1: m) entre nuestras dos colecciones.

![Diagrama de esquema de base de datos](https://lh6.googleusercontent.com/5uSb_xnSSc5CWXJD0yyUGVJsL92RRZl3Bex_3wjuzl5Xr69Ks0j3od-yFju24SAd5wWMBNy9uqBrvOzdrUWluOkbcr4H5zFg-ZemJX3ZRWS12D42OowuvWnxA7wWIGrhhzaQ0aw)

## 8) Definir nuestros casos de uso.

1.  ¿Qué sucede con las tareas pendientes relacionadas con un usuario que elimina su cuenta? Cuando el usuario elimina su cuenta, las tareas pendientes relacionadas con ese usuario también deben eliminarse.
2.  No se puede agregar ninguna tarea sin estar adjunto a un usuario confirmado.
3.  Una tarea pendiente solo puede ser eliminada por su propietario.
4.  Ningún usuario puede agregarse con un nombre de usuario o contraseña vacío.
5.  No se puede agregar ninguna tarea con una tarea vacía.

Cosas a tener en cuenta:

1.  Utilice el middleware Mongoose para eliminar documentos dependientes como las tareas pendientes cuando un usuario elimina su cuenta.
2.  Utilice las reglas de validación de Mongoose en los modelos para evitar que los campos vacíos se agreguen a nuestra base de datos.

## 9) Diseñar y probar nuestra API.

Usé un producto gratuito llamado Apiary [para documentar nuestra API](http://docs.fcctodoapp.apiary.io/) .

Aquí está la sintaxis que utilicé para [crear este BluePrint simple](https://jsapi.apiary.io/apis/fcctodoapp.apib) .

Te recomiendo crear una cuenta y comenzar a jugar con ella. Si vincula su cuenta de [GitHub](http://github.com/) con Apiary, puede asegurarse de que su documentación siempre esté actualizada. También podrá probar sus datos visualmente sin la necesidad de llegar a los puntos finales de su API. Si prefiere probar su API desde la línea de comandos, [aquí tiene un ejemplo de cómo hacer esto](http://docs.agendor.apiary.io/) .

Más tarde, una vez que haya implementado su API con Node.js y Express.js, solo tendrá que establecer su URL en Apiary. Entonces puedes comenzar a probar tus llamadas. Nuestra URL de host actual ( [http://fcctodoapp.apiblueprint.org/](http://fcctodoapp.apiblueprint.org/) ) será reemplazada por la URL de su API.

![Imagen demo de la aplicación](https://lh6.googleusercontent.com/hU3ilG_y9FqtL_zajQ_KOjWy8Qx590Go8nkNvA1j0oR50YJTpjJhL1lAPgjyeLTAS06tq6V62EcJrLQyT_TR2BK49DYiX6kksU6s9cqJDvvaS6jvepIM6uiO4JMbXuu-oXhdsas)

## 10) ¡Comience a escribir el código!

Esta es la parte divertida, y ocupará la mayor parte del tiempo de su proyecto. Si necesita ayuda con esto, únase a nosotros y aprenda a codificar.