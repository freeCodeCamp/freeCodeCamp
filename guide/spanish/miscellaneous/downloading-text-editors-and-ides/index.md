---
title: Downloading Text Editors and Ides
localeTitle: Descargando editores de texto e idas
---
Discutimos los editores de texto e IDE populares y cómo instalarlos en Ubuntu.

## Opciones populares:

### Editores de texto

**Instalación de Atom:**
```
sudo add-apt-repository ppa:webupd8team/atom 
 sudo apt-get update 
 sudo apt-get install atom 
```

**Instalación de Sublime Text 3:**
```
sudo add-apt-repository ppa:webupd8team/sublime-text-3 
 sudo apt-get update 
 sudo apt-get install sublime-text-installer 
```

**Instalación de Visual Studio Code:**

Descargue el último paquete de Visual Studio Coder: [Visual Studio](https://code.visualstudio.com/Docs/?dv=linux64_deb)
```
sudo dpkg -i vscode-amd64.deb 
```

### IDEs

**Instalando Eclipse:**
```
sudo apt-get install openjdk-7-jdk 
```

Descarga el último paquete de [Eclipse](http://www.eclipse.org/downloads/?osType=linux) : [Eclipse](http://www.eclipse.org/downloads/?osType=linux)
```
sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt 
 sudo tar -xvf eclipse-inst-linux64.tar.gz 
```

Cree un nuevo archivo llamado `eclipse.desktop` en el directorio `/usr/share/applications/` y agregue las siguientes líneas:
```
<a href='https://www.jetbrains.com/idea/download' target='_blank' rel='nofollow'>Desktop Entry] 
 Name=Eclipse 
 Type=Application 
 Exec=/opt/eclipse/eclipse 
 Terminal=false 
 Icon=/opt/eclipse/icon.xpm 
 Comment=Integrated Development Environment 
 NoDisplay=false 
 Categories=Development;IDE 
 Name[en]=eclipse.desktop 
```

Ahora puede arrastrar este archivo al iniciador, lo que le permite iniciar Eclipse.

**Instalación de Intellij IDEA:**

Descarga la última versión de \[ **Intellij IDEA**
```
sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt 
 sudo tar -xvf idea-2016.1.1.tar.gz 
```

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior | ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":libro:") | Siguiente ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")  
[**Instalación de DevTools y navegadores web modernos**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385) | [**Tabla de Contenidos**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Alternativas al popular software de Windows y Mac**](//forum.freecodecamp.com/t/alternatives-to-popular-windows-and-mac-software/18387)