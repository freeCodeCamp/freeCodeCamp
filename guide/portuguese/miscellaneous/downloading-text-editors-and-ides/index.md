---
title: Downloading Text Editors and Ides
localeTitle: Baixando Editores de Texto e Ides
---
Discutimos editores de texto e IDEs populares e como instalá-los no Ubuntu.

## Escolhas populares:

### Editores de texto

**Instalando o Atom:**
```
sudo add-apt-repository ppa:webupd8team/atom 
 sudo apt-get update 
 sudo apt-get install atom 
```

**Instalando o texto sublime 3:**
```
sudo add-apt-repository ppa:webupd8team/sublime-text-3 
 sudo apt-get update 
 sudo apt-get install sublime-text-installer 
```

**Instalando o código do Visual Studio:**

Baixe o pacote mais recente do Visual Studio Coder: [Visual Studio](https://code.visualstudio.com/Docs/?dv=linux64_deb)
```
sudo dpkg -i vscode-amd64.deb 
```

### IDEs

**Instalando o Eclipse:**
```
sudo apt-get install openjdk-7-jdk 
```

Faça o download do pacote mais recente do Eclipse: [Eclipse](http://www.eclipse.org/downloads/?osType=linux)
```
sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt 
 sudo tar -xvf eclipse-inst-linux64.tar.gz 
```

Crie um novo arquivo chamado `eclipse.desktop` no `/usr/share/applications/` e adicione as linhas abaixo:
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

Agora você pode arrastar esse arquivo para o ativador, permitindo iniciar o Eclipse.

**Instalando o Intellij IDEA:**

Faça o download da versão mais recente do \[ **Intellij IDEA**
```
sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt 
 sudo tar -xvf idea-2016.1.1.tar.gz 
```

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") Anterior | ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") Casa ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":livro:") | Próximo ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")  
[**Instalando DevTools e navegadores da web modernos**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385) | [**Índice**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Alternativas para o popular software Windows e Mac**](//forum.freecodecamp.com/t/alternatives-to-popular-windows-and-mac-software/18387)