---
title: Downloading Text Editors and Ides
localeTitle: تنزيل برامج تحرير النصوص و Ides
---
ناقشنا محرري النصوص المحترفين و IDEs وكيفية تثبيتها على Ubuntu.

## خيارات شعبية:

### المحررين النص

**تثبيت Atom:**

 `sudo add-apt-repository ppa:webupd8team/atom 
 sudo apt-get update 
 sudo apt-get install atom 
` 

**تثبيت نص Sublime 3:**

 `sudo add-apt-repository ppa:webupd8team/sublime-text-3 
 sudo apt-get update 
 sudo apt-get install sublime-text-installer 
` 

**تثبيت Visual Studio Code:**

قم بتنزيل أحدث حزمة Visual Studio Coder: [Visual Studio](https://code.visualstudio.com/Docs/?dv=linux64_deb)

 `sudo dpkg -i vscode-amd64.deb 
` 

### ايديس

**تثبيت الكسوف:**

 `sudo apt-get install openjdk-7-jdk 
` 

قم بتنزيل أحدث حزمة [Eclipse](http://www.eclipse.org/downloads/?osType=linux) : [Eclipse](http://www.eclipse.org/downloads/?osType=linux)

 `sudo mv eclipse-inst-linux64.tar.gz /opt/ && cd /opt 
 sudo tar -xvf eclipse-inst-linux64.tar.gz 
` 

أنشئ ملفًا جديدًا باسم `eclipse.desktop` في الدليل `/usr/share/applications/` وأضف الأسطر أدناه:

 `<a href='https://www.jetbrains.com/idea/download' target='_blank' rel='nofollow'>Desktop Entry] 
 Name=Eclipse 
 Type=Application 
 Exec=/opt/eclipse/eclipse 
 Terminal=false 
 Icon=/opt/eclipse/icon.xpm 
 Comment=Integrated Development Environment 
 NoDisplay=false 
 Categories=Development;IDE 
 Name[en]=eclipse.desktop 
` 

يمكنك الآن سحب هذا الملف إلى المشغل ، مما يتيح لك بدء Eclipse.

**تثبيت Intellij فكرة:**

قم بتنزيل أحدث إصدار من \[ **Intellij IDEA**

 `sudo mv idea-2016.1.1.tar.gz /opt/ && cd /opt 
 sudo tar -xvf idea-2016.1.1.tar.gz 
` 

![:point_left:](//forum.freecodecamp.com/images/emoji/emoji_one/point_left.png?v=2 ": point_left:") السابق ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") الصفحة الرئيسية ![:book:](//forum.freecodecamp.com/images/emoji/emoji_one/book.png?v=2 ":كتاب:") | التالى ![:point_right:](//forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=2 ": point_right:")  
[**تثبيت DevTools ومتصفحات الويب الحديثة**](//forum.freecodecamp.com/t/installing-devtools-and-modern-web-browsers/18385) | [**جدول المحتويات**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**بدائل لبرنامج Windows و Mac الشهير**](//forum.freecodecamp.com/t/alternatives-to-popular-windows-and-mac-software/18387)