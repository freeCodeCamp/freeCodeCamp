---
title: Data Frames
localeTitle: Marcos de datos
---
## Marcos de datos

Los marcos de datos (marcos) son unidades de datos que se pueden conmutar a través de redes de conmutación de paquetes. Las tramas son unidades de datos de protocolo (PDU) de interconexión de sistemas abiertos (OSI) de capa 2. Los marcos se direccionan utilizando las direcciones de control de acceso de medios (MAC) Hay varios protocolos de comunicaciones de Capa 2 diferentes, cada uno con información de control distinta, pero la mayoría utiliza un formato común.

Los marcos se dividen en información de control y datos (también llamada "carga útil"). La información de control está contenida en el encabezado de la trama y el tráiler que encapsulan la carga útil. La encapsulación es el proceso por el cual un paquete de Capa 3 tiene un encabezado de Capa 2 agregado al frente y un final de Capa 2 agregado al final. Este es el formato estándar para marcos de datos: un encabezado seguido de la carga útil seguido de un remolque.

![Un marco en la capa de enlace de datos](http://www.highteck.net/images/156-Datalink-PDU.jpg)

El encabezado del Marco de datos contiene información específica del protocolo, pero todos los encabezados incluyen el protocolo que se está utilizando y las direcciones MAC de origen / destino. Los protocolos comunes de Capa 2 incluyen Ethernet y Protocolo Punto a Punto (PPP). Los tráilers de cuadros de datos generalmente contienen una secuencia de verificación de cuadros (Frame Check Sequence, FCS) que permite al dispositivo receptor verificar la integridad del cuadro recibido.

#### Más información: