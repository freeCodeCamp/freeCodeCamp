---
title: Evented Servers
localeTitle: Servidores de Eventos
---
## Servidores de Eventos

Los servidores de eventos ejecutan un solo bucle de eventos que controla eventos para todos los clientes conectados. Esto se opone a los servidores de subprocesos, que utilizan múltiples subprocesos que se ejecutan simultáneamente, donde cada subproceso maneja una solicitud de cliente.

En términos simples, los servidores de eventos tienen solo un hilo principal que se comparte entre todas las solicitudes de los clientes. Lo que es especial con los servidores de eventos es el hecho de que pueden priorizar el trabajo que debe realizarse con las solicitudes de los clientes. Ilustraremos esto con un ejemplo.

Supongamos que usted es el propietario de una empresa de taxis (que se conozca como el Servidor) y que haya personas que llamen a su compañía (que se conozcan como Clientes) y que quieran organizar una recogida (que se conozca como Solicitudes). Usted contrata operadores (que se conozcan como Procesos / Subprocesos) para tomar pedidos de los Clientes. La lógica de su negocio indica que su operador debe permanecer en la línea hasta que el conductor del taxi haya sido enviado al cliente. Básicamente, desearía contratar tantos operadores como la cantidad de conductores de taxi que pueda enviar.

Con un servidor Evented, solo hay un operador que puede tomar los detalles de recolección de los clientes, pero sabe que debe devolver la llamada al cliente una vez que se le haya enviado el conductor del taxi.

Este tipo de servidores utilizan devoluciones de llamada para avisar a los clientes cuando se han atendido sus solicitudes.

#### Más información:

[Arquitectura impulsada en forma pareja en Wikipedia](https://en.wikipedia.org/wiki/Event-driven_architecture)