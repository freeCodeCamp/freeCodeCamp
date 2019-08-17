---
title: Ethernet Header
localeTitle: Encabezado Ethernet
---
## Formato de encabezado de Ethernet

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/network-engineering/ethernet-header/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Más información:

Ethernet es un protocolo que vive en la capa dos.  En este nivel, los "paquetes" se llaman tramas.  Hay varias tipas de tramsas Ethernet pero el principal es el estandar de Ethernet de la organazacion IEEE y es difinido en 802.3.

El formato de la trama de Ethernet empieza con una cabecera que mayormente contiene el MAC de destino y el MAC de orgin. El medio contiene los datos. Y termina con una verificación por redundancia cíclica (CRC).

### Estructura de la trama de 802.3 Ethernet

![trama 802.3](https://wizbyte.files.wordpress.com/2014/07/tramas.jpg)

#### Descripcion de los campos:
