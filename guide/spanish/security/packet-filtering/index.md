---
title: Packet Filtering
localeTitle: Filtrado de paquetes
---
## Filtrado de paquetes

El filtrado de paquetes es el proceso de pasar o bloquear paquetes en una interfaz de red basada en direcciones de origen y destino, puertos o protocolos. El proceso se utiliza junto con la gestión de paquetes y la traducción de direcciones de red (NAT). El filtrado de paquetes a menudo forma parte de un programa de firewall para proteger una red local de intrusiones no deseadas.

### Cómo lograr el filtrado de paquetes

Los cortafuegos de la capa de red definen conjuntos de reglas de filtrado de paquetes, que proporcionan mecanismos de seguridad altamente eficientes. En un firewall de software, el filtrado de paquetes se realiza mediante un programa llamado filtro de paquetes. El filtro de paquetes examina el encabezado de cada paquete en función de un conjunto específico de reglas y, sobre esa base, decide evitar que pase (llamado DROP) o permitir que pase (llamado ACEPTAR).

### Métodos de filtrado

Hay tres formas en que se puede configurar un filtro de paquetes, una vez que se ha definido el conjunto de reglas de filtrado. En el primer método, el filtro acepta solo aquellos paquetes que está seguro que son seguros, eliminando todos los demás. Este es el modo más seguro, pero puede causar inconvenientes si se caen inadvertidamente paquetes legítimos. En el segundo método, el filtro solo descarta los paquetes que está seguro de que no son seguros, aceptando todos los demás. Este modo es el menos seguro, pero causa menos inconvenientes, especialmente en la navegación casual por Internet. En el tercer método, si el filtro encuentra un paquete para el cual sus reglas no proporcionan instrucciones, ese paquete puede ponerse en cuarentena, o se puede consultar específicamente al usuario sobre qué se debe hacer con él. Esto puede ser inconveniente si hace que aparezcan numerosos cuadros de diálogo, por ejemplo, durante la navegación web.