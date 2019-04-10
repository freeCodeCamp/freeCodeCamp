---
title: Traceroute
localeTitle: Traceroute
---
**Tabla de contenido**

*   [Traceroute](#traceroute)
*   [Cómo viajan los datos a través de internet](#how-data-travels-across-the-internet)
*   [Algunos ejemplos de uso](#some-examples-for-usage)
*   [Más información](#more-information)

## Traceroute

Traceroute es una herramienta de diagnóstico de red informática para mostrar la ruta (ruta) y medir los retrasos de tránsito de paquetes a través de una red de Protocolo de Internet (IP). El historial de la ruta se registra como los tiempos de ida y vuelta de los paquetes recibidos de cada host sucesivo (nodo remoto) en la ruta (ruta); La suma de los tiempos medios en cada salto es una medida del tiempo total empleado para establecer la conexión. Traceroute continúa a menos que todos los (tres) paquetes enviados se pierdan más de dos veces, luego la conexión se pierde y la ruta no se puede evaluar. Ping, por otro lado, solo calcula los tiempos de ida y vuelta finales desde el punto de destino.

#### Cómo viajan los datos a través de internet

Cada computadora en el traceroute se identifica por su dirección IP, que es el número de nueve dígitos separados por períodos que identifican la conexión de red única de esa computadora. Aquí hay algunos detalles con respecto a un traceroute:
```
- The journey from one computer to another is known as a hop. 
 - The amount of time it takes to make a hop is measured in milliseconds. 
 - The information that travels along the traceroute is known as a packet. 
```

Una lectura de traceroute normalmente mostrará tres columnas separadas para el tiempo de salto, ya que cada traceroute envía tres paquetes separados de información a cada computadora. En la parte superior de la lista, el traceroute dará el límite de cuántas líneas de saltos mostrará: a menudo, 30 saltos es el número máximo.

Cuando un traceroute tenga dificultades para acceder a una computadora, mostrará el mensaje "Tiempo de espera agotado". Cada una de las columnas de salto mostrará un asterisco en lugar de un conteo de milisegundos.

#### Algunos ejemplos de uso

La mayoría de las implementaciones incluyen al menos opciones para especificar el número de consultas a enviar por salto, el tiempo para esperar una respuesta, el límite de salto y el puerto que se debe usar. Al invocar traceroute sin opciones especificadas se muestra la lista de opciones disponibles, mientras que man traceroute presenta más detalles, incluidos los indicadores de error mostrados. Ejemplo simple en Linux:
```
[root@example ~]#  traceroute -w 3 -q 1 -m 16 www.google.com 
 traceroute to www.google.com (216.58.200.36), 16 hops max, 60 byte packets 
 1  192.168.4.2 (192.168.4.2)  0.136 ms 
 2  * 
 3  * 
 4  * 
 5  * 
 6  * 
 7  * 
 8  * 
 9  * 
 10  * 
 11  * 
 12  * 
 13  * 
 14  * 
 15  * 
 16  * 
```

En el ejemplo anterior, las opciones seleccionadas son esperar tres segundos (en lugar de cinco), enviar solo una consulta a cada salto (en lugar de tres), limitar el número máximo de saltos a 16 antes de abandonar (en lugar de 30), con www.google.com como el anfitrión final.

Esto puede ayudar a identificar definiciones de tabla de enrutamiento o firewalls incorrectos que pueden estar bloqueando el tráfico ICMP, o UDP de puerto alto en el ping Unix, a un sitio. Tenga en cuenta que un firewall puede permitir paquetes ICMP pero no permitir paquetes de otros protocolos.

Traceroute también es utilizado por los evaluadores de penetración para recopilar información sobre la infraestructura de red y los rangos de IP alrededor de un host determinado.

También se puede usar cuando se descargan datos, y si hay múltiples réplicas disponibles para el mismo dato, se puede rastrear cada réplica para tener una idea de qué réplica sería la más rápida de usar.

#### Más información

Lea en más información sobre Traceroute:

*   [Cómo usar TRACERT en Windows](https://support.microsoft.com/en-us/help/314868/how-to-use-tracert-to-troubleshoot-tcp-ip-problems-in-windows) - [Cómo usar TRACERT en Linux](https://www.lifewire.com/traceroute-linux-command-4092586)