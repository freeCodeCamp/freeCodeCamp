---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
localeTitle: Configurando los repositorios de Yum en RedHat / CentOS Linux
---
Los repositorios de YUM son almacenes de software de Linux (archivos de paquetes RPM).

El archivo del paquete RPM es un archivo de Red Hat Package Manager y permite la instalación rápida y fácil del software en Red Hat / CentOS Linux.

## Configurando los repositorios de Yum en RedHat CentOS Linux

Paso 1: Compruebe si hay repositorios existentes o no.

```shell
#yum repolist 
```

Encontrarás que no hay repositorios.

Paso 2: Cambiar Directorio a

```shell
#cd /etc/yum.repos.d 
```

Paso 3: Crear nuevo archivo

```shell
#vim myrepo.repo 
```

Paso 4: Escribe las siguientes líneas en el archivo

```shell
[file-name] 
 name=filename 
 baseurl="location of yum repositories" 
 gpgcheck=0 
```

Paso 5: guardar y salir

Paso 6: Repita el paso 1

```shell
You Will find repositories 

```