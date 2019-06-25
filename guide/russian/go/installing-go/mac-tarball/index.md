---
title: Installing Go in Mac OS X using a tarball
localeTitle: Установка Go в Mac OS X с помощью tarball
---
### Установка Go в Mac OS X с помощью tarball

#### Ссылка на архив

Вы можете получить ссылку на архив архива Mac OS из раздела «Последние стабильные» [страницы загрузки golang](https://golang.org/dl/) .

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/mac_tarball.jpg "Ссылка на Mac tarball")

#### Процесс установки

> В этом процессе установки мы будем использовать последнюю стабильную версию на момент написания этой статьи (см. 1.9.1). Для более новой или более старой версии просто замените ссылку на первом шаге. Проверьте [страницу загрузки golang,](https://golang.org/dl/) чтобы узнать, какие версии доступны в настоящее время.

##### Установка Go 1.9.1
```
$ curl -O https://storage.googleapis.com/golang/go1.9.1.darwin-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.darwin-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### Проверьте установку и версию go

Чтобы проверить, успешно ли установлен go, используйте:

```shell
$ go version 
```

Это должно печатать на консоли версию go, и в то же время убедиться, что установка прошла гладко.