---
title: UDP Header
localeTitle: Encabezado UDP
---
## Formato de encabezado UDP

User Datagram Protcol (UDP) es uno de los protocolos más utilizados en la suite de Protocolo de Internet (IP) junto con TCP e ICMP. Las características definitorias de UDP son que es un protocolo rápido, sin conexión. Estas características se facilitan a través del encabezado UDP.

El encabezado UDP se compone de los siguientes cuatro campos:

*   Puerto de origen (16 bits): El puerto utilizado en la computadora del remitente para la conexión UDP también se conoce como el puerto de envío. Cuando se combina con la IP del remitente, permite que la computadora emisora ​​cree múltiples conexiones separadas (conocidas como multiplexación).
    
*   Puerto de destino (16 bits): El puerto utilizado en la computadora receptora para la conexión UDP también se conoce como el puerto receptor. Cuando se combina con los receptores IP, permite la multiplexación.
    
*   Longitud (16 bits): Especifica la longitud del encabezado UDP y los datos.
    
*   Suma de comprobación (16 bits): Se utiliza para la comprobación de errores del encabezado y los datos. Opcional.
    

#### Más informacion

         16 bits               16 bits
 <--------------------> <-------------------->

 +---------------------+---------------------+
 |     puerto origen   |   puerto destino    |
 +-------------------------------------------+
 |        Longitud     | suma de comprobacion|
 +---------------------+---------------------+
 |           Datos de la trama               |
 +-------------------------------------------+
