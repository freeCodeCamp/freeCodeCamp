---
title: How to authenticate with GitHub using SSH
localeTitle: Cómo autenticarse con GitHub usando SSH
---
# Cómo autenticarse con GitHub usando SSH

Verifique que no haya archivos `rsa` en esta ruta antes de continuar, usando:

```shell
ls -al ~/.ssh 
```

Si no hay nada que enumerar (es decir, no existe el directorio `: No such file or directory` ), use:

```shell
mkdir $HOME/.ssh 
```

Si no hay nada en este directorio entonces genere un nuevo keygen con:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com 
```

Ahora usando el comando `ls -al ~/.ssh` nos mostrará un nuevo archivo denominado `id_rsa.pub` .

Agregue la clave SSH al agente SSH:

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash 
```

```shell
eval `ssh-agent -s` 
 ssh-agent -s # for Windows 
```

Agregue la clave RSA a SHH con:

```shell
ssh-add ~/.ssh/id_rsa 
```

Copia tu llave al portapapeles

```shell
clip < ~/.ssh/id_rsa.pub # Windows 
```

```shell
cat ~/.ssh/id_rsa.pub # Linux 
```

Vaya a la página de [configuración](https://github.com/settings/keys) de GitHub y haga clic en el botón 'Nueva clave SSH' para pegar la clave generada anteriormente.

Luego autentíquese con:

```shell
ssh -T git@github.com 

```
