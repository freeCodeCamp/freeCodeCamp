---
title: How to download files using the "wget" utility in Linux
localeTitle: Cómo descargar archivos usando la utilidad "wget" en Linux
---
## Cómo descargar archivos usando la utilidad "wget" en Linux

Este artículo es un tutorial rápido sobre el uso de la utilidad `wget` en sistemas operativos basados ​​en Unix. GNU Wget es una utilidad gratuita para la descarga no interactiva de archivos de la Web. Admite los protocolos HTTP, HTTPS y FTP, así como la recuperación a través de proxies HTTP.

### Instalando `wget`

La utilidad wget es un paquete disponible de forma gratuita y está licenciada bajo la licencia GNU GPL. Esta utilidad se puede instalar en cualquier sistema operativo similar a Unix, incluyendo Windows y MacOS.

### Sintaxis basica

La sintaxis básica del `wget` es ...
```
wget [option]... [URL]... 
```

### Detalles de wget
```
wget --version 
```

```
wget --help 
```

### Descargando un solo archivo
```
wget http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
```

### Descargando desde FTP
```
wget ftp://ftp.gnu.org/gnu/wget/wget-1.10.1.tar.gz.sig 
```

### Restringir los límites de velocidad de descarga
```
wget --limit-rate=100k http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
```

Puedes jugar con las características restantes de la utilidad `wget`