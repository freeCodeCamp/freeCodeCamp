---
title: Angular Socketio
localeTitle: Socketio angular
---
Si ha llegado al Back End Project de Stock Charting, es posible que haya notado que el criterio de bonificación es que su lista de acciones se actualice en todos los clientes. Esto se puede lograr con SocketIO, pero eso no es todo lo que SocketIO puede hacer. Recuerde antes, mencioné que cuando usaba _$ http.post,_ ¿tenía que actualizar su matriz local con la versión de la base de datos del elemento que estaba publicando? SocketIO mantiene el entorno del navegador de un usuario sincronizado con su base de datos en tiempo real. Esto tiene dos upshots prácticos:

1.  Ya no tiene que actualizar manualmente sus datos locales con datos de la base de datos; todo se gestiona automáticamente
2.  Puede impulsar cambios de base de datos en vivo a usuarios en diferentes máquinas al mismo tiempo

Aún mejor, si solo incluye SocketIO cuando se le solicite durante la configuración de la pila completa angular de yeoman, no hay absolutamente ningún trabajo involucrado para incluirlo. Funciona fuera de la caja, tiene una demostración en funcionamiento en **main /** route, y usted puede aprender a usarla simplemente observando cómo la incluyen en **main.controller.js** (por lo que no voy a profundizar en el tema). detalle).