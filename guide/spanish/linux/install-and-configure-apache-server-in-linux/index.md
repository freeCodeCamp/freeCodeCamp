---
title: Install and Configure Apache Server in Linux
localeTitle: Instalar y configurar el servidor Apache en Linux
---
El servidor HTTP Apache, coloquialmente llamado Apache, es gratuito y de código abierto software de servidor web multiplataforma. Apache es desarrollado y mantenido por un Comunidad abierta de desarrolladores bajo los auspicios de la Apache Software Foundation.

## Instalar y configurar el servidor Apache en Linux

Paso 1: Instalar el servidor Apache `yum install httpd`

Paso 2: Configuración del servidor web http `cd /etc/httpd/conf.d`

Paso 3: Crea un archivo de configuración personalizado con la extensión .conf. `vim *.conf`

Paso 4: Iniciar Apache Server `systemctl start httpd.service`

Paso 5: Iniciar automáticamente el servidor Apache cuando se inicie el sistema operativo. `systemctl enable httpd.service`

Paso 6: Añadir permiso de firewall. `firewall-cmd --add-service=http --permanent`