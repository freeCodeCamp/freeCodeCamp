---
title: Install and configure FTP server in Redhat/Centos Linux
localeTitle: Instalar y configurar el servidor FTP en Redhat / Centos Linux
---
## Instalar y configurar el servidor FTP en Redhat / Centos Linux

FTP significa protocolo de transferencia de archivos. Fue escrito por Abhay Bhushan y publicado como RFC 114 el 16 de abril de 1971. Es compatible con todos los sistemas operativos y navegadores. Está construido sobre una arquitectura cliente-servidor.

## Instalar y configurar el servidor FTP en Redhat / Centos Linux

Paso 1: utilizaremos localhost para que nuestra máquina configure el servidor ftp.

Paso 2: Instale el paquete vsftpd (demonio FTP muy seguro).

`yum install -y vsftpd`

Paso 3: Iniciar el servidor FTP cuando el sistema está encendido.

`systemctl enable vsftpd.service`

Paso 4: Verificando el estado del servidor ftp

`systemctl status vsftpd.service`

Paso 5: Configurar el paquete vsftpd. Nosotros editaremos `/etc/vsftpd/vsftpd.conf`

`Change the line which contain anonymous_enable=NO to anonymous_enable=YES` `This will give permit any one to access FTP server with authentication.` `Change the following to YES` `local_enable=YES` `write_enable=YES<br>`

Paso 6: Iniciar el servidor FTP `systemctl start vsftpd.service`

Paso 7: Instalar el cliente FTP `yum install -y lftpd`

Paso 8: Conecta ftp a localhost `lftp localhost`