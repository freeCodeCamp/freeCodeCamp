---
title: Scanning
localeTitle: Exploración
---
# Exploración

## Introducción

El escaneo en red se refiere a un conjunto de procedimientos para identificar hosts, publicaciones y servicios en una red.

Las actividades de escaneo pueden incluir la comprobación de puertos abiertos en una red, la captura de banners y la creación de diagramas de red.

## Técnicas de escaneo

Una de las formas más comunes de escanear una red es una técnica llamada Ping Sweep. Esto puede determinar los hosts en vivo en un rango de direcciones IP. Un ejemplo realmente simple de esto es ir a la línea de comandos y escribir `ping 8.8.8.8` . Esto enviará una solicitud de ECHO de [ICMP](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) a un host, en este caso será el DNS público de Google.

Diferentes protocolos de Internet requieren diferentes métodos de escaneo; por ejemplo, escanear una red [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) sería diferente a escanear una red [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) .

Las exploraciones TCP generalmente aprovechan la forma en que TCP funciona y cómo TCP pasa por un "protocolo de enlace" para iniciar la comunicación en una red:

1.  Un dispositivo (Host A) enviará un mensaje `SYN` en un intento de comunicarse a través de una red a otro dispositivo (Servidor B)
2.  B necesita responder a A con un `SYN` y un `ACK` para confirmar la solicitud de A para iniciar la comunicación
3.  A necesita devolver un mensaje `ACK` para reconocer la respuesta de B
4.  La comunicación puede comenzar

A lo largo de esta comunicación, hay bits de información que cada participante envía en un intento de iniciar la conversación.

Tenga en cuenta que también puede escanear redes IPv6 (IPv6 aumenta el tamaño de la dirección IP para que haya muchas más direcciones disponibles).

Hay muchos más tipos de [análisis](https://nmap.org/bennieston-tutorial/) que abusan aún más del proceso de TCP Handshake. Estos incluyen exploraciones IDLE, exploraciones de árbol de Navidad, exploraciones TCP inversas y exploraciones completas.

## Escaneo en pruebas de penetración

La exploración es la segunda fase de las cinco fases típicas de las pruebas de penetración. La fase de escaneo requiere la aplicación de herramientas técnicas para reunir más información sobre su objetivo, pero en este caso, la información que se busca es más común sobre los sistemas que tienen instalados. 1

Hay tres objetivos principales:

1.  Determinar si un sistema está vivo
2.  Puerto escaneando el sistema
3.  Escaneando el sistema en busca de vulnerabilidades 2

### Determinar si el sistema está vivo

Una forma de determinar si el sistema de destino está activo es mediante el comando **ping** , como se menciona en la técnica de barrido de ping anterior.

Por ejemplo:
```
ping <target_ip_address> -c <number_of_packets_to_send> 
 ping 10.10.0.1 -c 4 
```

Si el sistema de destino está activo, debería obtener una respuesta que se vea similar a la de abajo.
```
Pinging 10.10.0.1 with 32 bytes of data: 
 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Reply from 10.0.0.1: bytes=32 time=26ms TTL=240 
 Ping statistics for 10.10.0.1: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milliseconds: 
    Minimum = 26ms, Maximum = 26ms, Average = 26ms 
```

*   **La respuesta de** indica que nuestro paquete de solicitud de eco de ICMP se recibió un paquete de respuesta de eco de ICMP que se devolvió.
*   **Bytes = 32** nos dice que el tamaño del paquete que se envió.
*   **time = 26ms** nos permite saber el tiempo combinado que tomó el paquete de solicitud de eco de ICMP para llegar al objetivo y para que el paquete de respuesta de eco de ICMP regrese a nuestra máquina.
*   **TTL = 240** es un valor de Tiempo de vida que nos dice el número máximo de saltos que el paquete tomaría antes de que se cayera.

## Herramientas de escaneo

Hay muchas herramientas disponibles para escanear, pero una de las más comunes es `nmap` . Es una herramienta útil con funciones como obtener información sobre hosts en vivo en una red, servicios que se ejecutan y los tipos y versiones del sistema operativo que se está utilizando.

## Más información:

*   Cómo hacer ping en Linux https://www.wikihow.com/Ping-in-Linux
*   [Video de Gordon Lyon alias Fydor, el creador de la herramienta nmap](https://www.youtube.com/watch?v=Hk-21p2m8YY)

## Fuentes

1.  Resumiendo las cinco fases de la prueba de penetración. (2015, 06 de mayo). Consultado el 26 de octubre de 2017, de https://www.cybrary.it/2015/05/summarizing-the-five-phases-of-penetration-testing/

3.  Engebretson, P. (2013). Los fundamentos de las pruebas de piratería y penetración: las pruebas de piratería y penetración éticas son fáciles de realizar. 2. Syngress.