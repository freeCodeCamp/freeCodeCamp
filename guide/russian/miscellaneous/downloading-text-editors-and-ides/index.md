---
title: Downloading Text Editors and Ides
localeTitle: Загрузка текстовых редакторов и идов
---
Мы обсуждаем популярные текстовые редакторы и IDE и как их установить на Ubuntu.

## Популярный выбор:

### Текстовые редакторы

**Установка Atom:**
```
sudo add-apt-repository ppa:webupd8team/atom 
 sudo apt-get update 
 sudo apt-get install atom 
```

**Установка Sublime Text 3:**
```
sudo add-apt-repository ppa:webupd8team/sublime-text-3 
 sudo apt-get update 
 sudo apt-get install sublime-text-installer 
```

**Установка кода Visual Studio:**

Загрузите последний пакет Visual Studio Coder: [Visual Studio](https://code.visualstudio.com/Docs/?dv=linux64_deb)
```
sudo dpkg -i vscode-amd64.deb 
```

### Иды

**Установка Eclipse:**
```
sudo apt-get install openjdk-7-jdk 
```

Загрузите последний пакет [Eclipse](http://www.eclipse.org/downloads/?osType=linux) : [Eclipse](http://www.eclipse.org/downloads/?osType=linux)
```
sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt 
 sudo tar -xvf eclipse-inst-linux64.tar.gz 
```

Создайте новый файл с именем `eclipse.desktop` в каталоге `/usr/share/applications/` и добавьте следующие строки:
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

Теперь вы можете перетащить этот файл в панель запуска, чтобы вы могли запустить Eclipse.

**Установка Intellij IDEA:**

Загрузите последнюю версию \[ **Intellij IDEA**
```
sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt 
 sudo tar -xvf idea-2016.1.1.tar.gz 
```

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": Point_left:") Предыдущая | ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") Главная ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":книга:") | следующий ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": Point_right:")  
[**Установка DevTools и современных веб-браузеров**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385) | [**Содержание**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Альтернативы популярному программному обеспечению Windows и Mac**](//forum.freecodecamp.com/t/alternatives-to-popular-windows-and-mac-software/18387)