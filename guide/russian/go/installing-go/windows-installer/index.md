---
title: Installing Go in Windows using the MSI Installer
localeTitle: Установка Go в Windows с помощью установщика MSI
---
### Установка Go в Windows с помощью установщика MSI

На [странице загрузки golang](https://golang.org/dl/) запустите программу установки MSI Windows и запустите ее. Вам придется выбирать между 64-битной и 32-битной версиями. Если вы не знаете, в какой архитектуре работает ваша версия Windows, просто выполните быстрый поиск Google, чтобы узнать.

> Большинство современных версий Windows - 64-битные, поэтому вы должны быть в порядке, чтобы получить 64-битную версию в разделе «Рекомендуемые загрузки», но если ваш компьютер довольно старый, 32-битная версия должна быть самой безопасной.

##### 64-битный установщик Windodows

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx64.jpg "x64 Установщик Windows msi")

##### 32-битный установщик Windodows

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx86.jpg "x86 Установщик Windows msi")

#### Проверьте установку и версию go

Чтобы проверить, успешно ли установлен go, откройте командную строку и используйте:
```
> go version 
```

Это должно печатать на консоли версию go, и в то же время убедиться, что установка прошла гладко.