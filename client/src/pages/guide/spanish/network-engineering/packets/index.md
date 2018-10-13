---
title: Packets
localeTitle: Los paquetes
---
## Los paquetes

Un paquete es una unidad básica de comunicación a través de una red digital. Un paquete también se denomina **datagrama, segmento, bloque, celda o trama,** según el protocolo utilizado para la transmisión de datos. Cuando se deben transmitir los datos, se dividen en estructuras de datos similares antes de la transmisión, llamados paquetes, que se vuelven a ensamblar a la porción de datos original una vez que llegan a su destino.

Las redes de conmutación de paquetes son generalmente más eficientes en comparación con las redes de conmutación de circuitos. La red de conmutación de circuitos necesita reservar recursos para la duración de la comunicación. Las redes de conmutación de paquetes pueden enviar paquetes a pedido.

En el modelo OSI, los paquetes corresponden a la capa 3, la capa de red.

## Estructura de un paquete de datos

La estructura de un paquete depende del tipo de paquete y del protocolo. Lea más a continuación en los paquetes y protocolos. Normalmente, un paquete tiene un encabezado y una carga útil.

El encabezado guarda información general sobre el paquete, el servicio y otros datos relacionados con la transmisión. Por ejemplo, la transferencia de datos a través de Internet requiere desglosar los datos en paquetes IP, que se definen en IP (Protocolo de Internet), y un paquete IP incluye:

*   La dirección IP de origen, que es la dirección IP de la máquina que envía los datos.
*   La dirección IP de destino, que es la máquina o dispositivo al que se envían los datos.
*   El número de secuencia de los paquetes, un número que pone los paquetes en orden para que se vuelvan a ensamblar de manera que se recuperen los datos originales exactamente como estaban antes de la transmisión.
*   El tipo de servicio.
*   Banderas
*   Algunos otros datos técnicos.
*   La carga útil, que representa la mayor parte del paquete (todo lo anterior se considera como una sobrecarga), y en realidad es la información que se transporta.

## Paquetes y Protocolos

Los paquetes varían en estructura y funcionalidad dependiendo de los protocolos que los implementen. VoIP utiliza el protocolo IP y, por lo tanto, los paquetes IP. En una red Ethernet, por ejemplo, los datos se transmiten en tramas Ethernet.

En el protocolo IP, los paquetes IP viajan a través de Internet a través de nodos, que son dispositivos y enrutadores (técnicamente llamados nodos en este contexto) que se encuentran en el camino desde el origen hasta el destino.

Cada paquete se enruta hacia el destino según su dirección de origen y destino. En cada nodo, el enrutador decide, basándose en cálculos que involucran estadísticas y costos de la red, a qué nodo vecino es más eficiente enviar el paquete.

Este nodo seleccionado es más eficiente para enviar el paquete. Esto es parte de la conmutación de paquetes que en realidad descarga los paquetes en Internet y cada uno de ellos encuentra su propio camino hacia el destino. Este mecanismo utiliza la estructura subyacente de Internet de forma gratuita, que es la razón principal por la que las llamadas VoIP y las llamadas por Internet son más gratuitas o muy baratas.

Contrariamente a la telefonía tradicional, donde una línea o circuito entre la fuente y el destino debe ser dedicado y reservado (llamado conmutación de circuitos), por lo tanto, la gran conmutación de paquetes explota las redes existentes de forma gratuita.

Otro ejemplo es el TCP (Protocolo de control de transmisión), que funciona con IP en lo que llamamos la suite TCP / IP. TCP es responsable de garantizar que la transferencia de datos sea confiable. Para lograrlo, comprueba si los paquetes han llegado en orden, si faltan paquetes o si se han duplicado, y si hay algún retraso en la transmisión de paquetes. Esto lo controla estableciendo un tiempo de espera y señales llamadas acuses de recibo.

## Conclusión

Los datos viajan en paquetes a través de redes digitales y todos los datos que consumimos, ya sea texto, audio, imágenes o video, se dividen en paquetes que se vuelven a ensamblar en nuestros dispositivos o computadoras. Esta es la razón por la que, por ejemplo, cuando una imagen se carga a través de una conexión lenta, ves fragmentos de ella apareciendo uno tras otro.

#### Más información:

[Todos los conceptos de redes en breves detalles.](https://www.lifewire.com/what-is-a-data-packet-3426310 "Artículo de Lifewire sobre paquetes de datos")