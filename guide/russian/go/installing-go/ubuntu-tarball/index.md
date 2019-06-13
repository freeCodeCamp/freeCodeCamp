---
title: Installing Go in Ubuntu using a tarball
localeTitle: Установка Go в Ubuntu с помощью tarball
---
### Установка Go в Ubuntu с помощью tarball

> Это рекомендуемый способ установки go, если вы хотите получить последнюю стабильную версию, доступную на веб-сайте golang.

#### Проверьте свою систему.

Прежде чем продолжить, убедитесь, что знаете, ваша система 32 или 64 бит. Если вы не знаете, выполните следующую команду, чтобы узнать:

```shell
$ lscpu | grep Architecture 
```

Если вы видите `Architecture: x86_64` ваша система будет 64-битной, в противном случае, если вы получите `Architecture: i686` , то ваша система будет 32-битной. Теперь, когда вы знаете свою системную архитектуру, давайте продолжим.

#### Выбор правильного архива

На [странице загрузки golang](https://golang.org/dl/) вам нужно будет получить ссылку на нужный файл tarball (.tar.gz) для вашей системы.

Если ваша система имеет 64 бит, скопируйте ссылку на файл .tar.gz для Linux-систем с архитектурой x86\_64. Например, последняя стабильная версия для 64-битных систем на момент написания этой статьи - `go1.9.1.linux-amd64.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux64.jpg "x64 ссылка на архив")

Если ваша система 32 бит, скопируйте ссылку на файл .tar.gz для Linux-систем с архитектурой x86. На момент написания последнего файла файл `go1.9.1.linux-386.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux86.jpg "Ссылка на архив x86")

После копирования ссылки просто замените ссылку в процессе установки, найденном ниже, на ссылку, полученную на странице загрузки.

#### Процесс установки

> В этом процессе установки мы будем использовать ссылки на tar 1.9.1 tarballs. Для более новой или более старой версии просто замените ссылку на первом шаге. Проверьте [страницу загрузки golang,](https://golang.org/dl/) чтобы узнать, какие версии доступны в настоящее время.

##### Go 1.9.1 для 64-битных систем:
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

##### Go 1.9.1 для 32-битных систем:
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-386.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-386.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### Проверьте установку и версию go

Чтобы проверить, успешно ли установлен go, используйте:

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

Это выведет на консоль версию go, и в то же время убедитесь, что установка прошла гладко.