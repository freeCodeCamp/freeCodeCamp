---
title: Installing Go in Arch Linux using pacman
localeTitle: Установка Go в Arch Linux с помощью pacman
---
### Установка Go в Arch Linux с помощью pacman

Использование Arch Linux Package Manager (pacman) - это самый простой способ установки Go. Основываясь на философии Arch Linux по предоставлению новых версий программного обеспечения очень быстро, вы получите очень актуальную версию go. Прежде чем вы сможете установить пакет go, вам необходимо обновить систему.

```shell
$ sudo pacman -Syu 
 $ sudo pacman -S go 
```

#### Проверьте установку и версию go

Чтобы проверить, успешно ли установлен go, используйте:

```shell
$ go version 
 > go version go2.11.1 linux/amd64 
```

Это выведет на консоль версию go, и в то же время убедитесь, что установка прошла гладко.