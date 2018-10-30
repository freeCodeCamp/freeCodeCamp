---
title: ICMP Header
localeTitle: Encabezado de ICMP
---
## Formato de encabezado ICMP

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/network-engineering/icmp-header/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Más información:
ICMP en ingles es el Internet Control Message Protocol o protocolo de mensajes de control de Internet, en espanol.  Es un protoclo que pertenece a la suite de protoclos, difinido en [RFC 792](https://tools.ietf.org/html/rfc792).  Tipicamente este protoclo no se utiliza las aplicaciones como TCP o UDP.  ICMP mayormente es usado en diagnostico o control de errores que se generan de operaciones IP.

### Estructura del encabezado ICMP
<pre>
  Bit 0-7    Bit 8-15            Bit 16-31
|---Tipo---|--Codigo--|-------Suma de verification------|
|---------------------(Datos)--------------------------|
</pre>
