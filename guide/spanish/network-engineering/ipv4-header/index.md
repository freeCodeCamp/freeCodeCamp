---
title: IPv4 Header 
localeTitle: Encabezado IPv4
---
La traduccion de este articulo fue basado en la version igles, escrito por cmccormack, disponible aqui, https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/network-engineering/ipv4-header/index.md

## Formato de encabezado IPv4

El imagen del formato del encabezado IPv4 segun [RFC791](https://tools.ietf.org/html/rfc791):
![Image of IPv4 Header](https://i.imgur.com/5ys9G3k.png)


##### Version [4-bits]
  * Internet Protocol (IP) version number (decimal 4, binary 0100, hex 4)
  * Numero de version de protocolo de internet (IP) (decimal 4, binario 0100, hex 4)
##### Internet Header Length (IHL) [4-bits]
  * La larga del encabezado IPv4
  * El IHL es medido en 32-bit palabras.
    * A value of 5 specifies the length of the header is 5 * 32-bits = 160bits = 20 bytes
    * Por ejemplo, un valor de 5 significa que la larga del encabezado es 5 * 32 bits = 160 bits = 20 bytes
    * El valor minimo del encabezado IPv4 es 20 bytes

##### Differentiated Services Code Point (DSCP) [6-bits]
  * Este valor es usado por despositivos red para determinar la precedencia de un pacquete IP [[RFC2474](https://tools.ietf.org/html/rfc2474)]
  * Reglas puede ser hehco en despositivos red para manejar valores DSCP deferentes apropriadamente
    * Por ejemplo - trafico VoIP podria dado un valor DSCP de 46 (binario 101110, hex 0x2E) cual puede informar un despositivo red que este paquete deberia dado una proridad alto

##### Explicit Congestion Notification (ECN) [2-bits]
  * Una caracteristica opcional que permite serividores identificar congestion red sin dejando caer paquetes neceariamente.
  * ECN feature is only available if the underlying network infrastructure also supports it.
  * Caracterisitca ECN solo solo esta disponible si la infrastructura de red lo apyoy.
##### Total Length [16-bits]
  * La larga del paqutete entero, incuyendo el encabezado.
  * Este valor es medida en bytes (8-bits), y tiene un valor maximo de 2^16 - 1 = 65,535 bytes
##### Identification [16-bits]
  * Asignado por el remitente servidor para ayudar en reuniendo los fragmentos de un paquete
##### Flags [3-bits]
  * Usado para determinar si el paquete puede ser fragmentado o para informar el servidor destinatario que fragmento addiconales esta de llegada.
  * El bit Do Not Fragment (DF) es usado cuando es necesario que un paquete no es fragmentado. Si un despoitivo tiene que fragmentar el paqute porque es mas grande que el Maximum Transmission Unit (MTU) del enlace, el paquete esta dejado caer.
##### Fragment Offset [13-bits]
  * El offset calculado por un paquete fragementado, relativo al principo del paquete desfragmentado original
  * Medida en bloques de 8-bytes
  * El valor maximo es (2^13 - 1) * 8 = 65,528 bytes
##### Time To Live (TTL) [8-bits]
  * El cantidad de tiempo (en segundos) que un paquete esta permitido quedarse en la red
  * Este valor es aumentao por un segundo en cada despositivo red encontrado
  * Cuando el valor alcanza cero, el paquete esta descartado
##### Protocol [8-bits]
  * Parecido al campo Next Header en IPv6, este campo significa el protocolo encapsulado en el paquete IPv4
  * Por ejemplo, protocolo TCP Numero 6 en binario serio 110, o 0x6 en hex
##### Header Checksum [16-bits]
  * La suma de control es el 16-bit [complemento de unos](https://www.cs.uaf.edu/2004/fall/cs301/notes/node41.html) de la suma del complemento de unos de todas las palabras 16-bit en el encabezado. [[RFC792](https://tools.ietf.org/html/rfc791#page-14)]
##### Source IP Address [32-bits]
  * La direccion IP del remitente del paquete
##### Destination IP Address [32-bits]
  * La direccion IP destino para el destinaatario del paquete
##### Options [32-bits]
  * Espefica opciones adicionales
  * Solo esta presente si el IHL es mas grande que 5, significando que la larga es mas que 5 * 32-bit palabras o 160-bits o 20 bytes - la larga de una IPv4 encabezado estandar sin opcinones
  * Opciones tiene que incluir relleno adicional si no llenan completamente el limite de 32-bit palabras


#### Mas informacion (en ingles):
  * IP Option Numbers [[iana.org]](https://www.iana.org/assignments/ip-parameters/ip-parameters.xhtml)
  * List of IP protocol numbers used in the Next Header [[iana.org]](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)

