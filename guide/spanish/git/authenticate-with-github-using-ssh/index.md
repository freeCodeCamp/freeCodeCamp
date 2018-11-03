---
title: How to authenticate with GitHub using SSH
localeTitle: Cómo autenticar con GitHub usando SSH
---
# Cómo autenticar con GitHub usando SSH

Verifique que no haya archivos `rsa` aquí antes de continuar, use:

```shell
ls -al ~/.ssh 
```

Si no hay nada que enumerar (es decir, no existe `: No such file or directory` ), use:

```shell
mkdir $HOME/.ssh 
```

Si no hay nada allí entonces genere un nuevo keygen con:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com 
```

Ahora usando `ls -al ~/.ssh` mostrará nuestro archivo `id_rsa.pub` .

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

Vaya a la página de [configuración de](https://github.com/settings/keys) GitHub y haga clic en el botón 'Nueva clave SSH' para pegar en su clave generada.

Luego autentíquese con:

```shell
ssh -T git@github.com 

```