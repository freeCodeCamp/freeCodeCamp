---
title: Downloading Text Editors and Ides
---
We discuss popular Text Editors and IDEs and how to install them on Ubuntu.

## Popular choices:

### Text Editors

**Installing Atom:**

    sudo add-apt-repository ppa:webupd8team/atom
    sudo apt-get update
    sudo apt-get install atom

**Installing Sublime Text 3:**

    sudo add-apt-repository ppa:webupd8team/sublime-text-3
    sudo apt-get update
    sudo apt-get install sublime-text-installer

**Installing Visual Studio Code:**

Download the latest Visual Studio Coder package: <a href='https://code.visualstudio.com/Docs/?dv=linux64_deb' target='_blank' rel='nofollow'>Visual Studio</a>

    sudo dpkg -i vscode-amd64.deb

### IDEs

**Installing Eclipse:**

    sudo apt-get install openjdk-7-jdk

Download the latest Eclipse package: <a href='http://www.eclipse.org/downloads/?osType=linux' target='_blank' rel='nofollow'>Eclipse</a>

    sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt
    sudo tar -xvf eclipse-inst-linux64.tar.gz

Create a new file called `eclipse.desktop` in the `/usr/share/applications/` directory and add the lines below:

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

You can now drag this file to the launcher, enabling you to start Eclipse.

**Installing Intellij IDEA:**

Download the latest version of [**Intellij IDEA**</a>

    sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt
    sudo tar -xvf idea-2016.1.1.tar.gz

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ":point_left:") Previous | ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") Home ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":book:") | Next ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ":point_right:")  
[**Installing DevTools and modern web browsers**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385) | [**Table of Contents**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Alternatives to popular Windows and Mac software**](//forum.freecodecamp.com/t/alternatives-to-popular-windows-and-mac-software/18387)