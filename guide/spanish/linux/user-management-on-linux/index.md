---
title: User management on Linux
localeTitle: Gestión de usuarios en Linux
---
#### Nota: Para ejecutar un comando como `sudo` , debe tener una cuenta de usuario sudo (Administrador)

## Cómo crear un usuario

#### Use el comando `adduser` o `useradd` para agregar un nuevo usuario a su sistema.
```
$ sudo adduser username 
```

Asegúrese de reemplazar el `username` con el usuario que desea crear.

#### Utilice el comando `passwd` para actualizar la contraseña del nuevo usuario.
```
$ sudo passwd username 
```

Una contraseña segura es altamente recomendable!

## Cómo crear un usuario sudo

Para crear un usuario `sudo` , primero debe crear un usuario regular usando el comando anterior, luego agregar este usuario al grupo de `sudoers` usando el comando `usermod` .

##### En los sistemas Debian (Ubuntu / LinuxMint / ElementryOS), miembros de la `sudo` grupo tienen privilegios sudo.
```
$ sudo usermod -aG sudo username 
```

##### En los sistemas basados ​​en RHEL (Fedora / CentOs), los miembros del grupo `wheel` tienen privilegios de sudo.
```
$ sudo usermod -aG wheel username 
```

## Cómo eliminar un usuario

##### Para Debian (Ubuntu)
```
$ sudo deluser username 
```

##### Para RHEL (Fedora / CentOS)
```
$ sudo userdel username 
```

##### Creando grupos y agregando usuarios.
```
$ sudo groupadd editorial 
 $ sudo usermod -a -G editorial username 
```

#### Nota: todos los comandos anteriores se pueden ejecutar sin sudo en modo `root`

Para cambiar a root en Ubuntu, ejecute `su -i` comando seguido de la contraseña del usuario conectado. Cambia a `#` insted de `$`

##### En los sistemas Debian (Ubuntu / LinuxMint / ElementryOS), miembros de la `sudo` grupo tienen privilegios sudo.
```
$ sudo usermod -aG sudo username 
```

## Cómo crear un grupo

Para crear un grupo, usa el comando `groupadd`
```
$ sudo groupadd groupname 
```

## Cómo borrar grupo

Para borrar un grupo, usa el comando 'groupdel'

`` ` $ sudo groupdel grouname``

#### Referencias

[Debian (Ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04)

[RHEL (CentOS / Fedora)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-a-centos-7-server)