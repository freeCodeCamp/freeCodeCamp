---
title: Customizing Ubuntu
localeTitle: Personalizando Ubuntu
---
Este tutorial le muestra cómo agregar alias al terminal, ajustar la unidad y eliminar el bloatware preinstalado.

## Pasos:

### Eliminando Bloatware

Para eliminar todo el bloatware preinstalado debido a problemas de privacidad o para mantener el mínimo de su sistema operativo, consulte [esta información](https://gist.github.com/ansell/61313400e26cd42289f8) .

### Alias

Puedes crear un alias temporal como este:
```
alias alias_name="command_to_run" 
```

Sin embargo, cuando cierre su sesión de shell, este alias dejará de existir.

Para crear un alias permanente, deberá crear el archivo `~/.bash_aliases` con el comando `touch ~/.bash_aliases` . Una vez que haya abierto este archivo con el editor de texto de su elección, agregue una línea en la parte inferior del documento, similar al ejemplo anterior.

Para obtener más información, DigitalOcean tiene un excelente tutorial que se puede encontrar [aquí](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions) .

### Herramienta Unity Tweak

La herramienta Unity Tweak proporciona a los usuarios un montón de opciones de configuración para ajustar el Unity Desktop.

Para instalar la herramienta Unity Tweak tipo `sudo apt install unity-tweak-tool` , y lanzarlo, `unity-tweak-tool` .

[Aquí](http://www.techrepublic.com/blog/linux-and-open-source/six-must-have-ubuntu-unity-tweaks/) hay una lista de los seis ajustes obligatorios que debe tener Ubuntu.

[**Descargar e instalar Ubuntu Desktop**](//forum.freecodecamp.com/t/download-and-install-ubuntu-desktop/18383) | [**Tabla de Contenidos**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Jazzing hasta la terminal**](//forum.freecodecamp.com/t/jazzing-up-the-terminal/18386)