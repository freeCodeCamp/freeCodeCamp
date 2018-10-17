---
title: Install and configure FTP server in Redhat/Centos Linux
localeTitle: Установка и настройка FTP-сервера в Redhat / Centos Linux
---
## Установка и настройка FTP-сервера в Redhat / Centos Linux

FTP обозначает протокол передачи файлов. Это было написано Абхаем Бхушаном и опубликовано как RFC 114 16 апреля 1971 года. Он поддерживается всеми операционными системами и браузерами. Он построен на архитектуре клиент-сервер.

## Установка и настройка FTP-сервера в Redhat / Centos Linux

Шаг 1. Мы будем использовать localhost для нашей машины для установки ftp-сервера.

Шаг 2. Установите пакет vsftpd (очень безопасный FTP-демон).

`yum install -y vsftpd`

Шаг 3. Запустите FTP-сервер, когда система включена.

`systemctl enable vsftpd.service`

Шаг 4. Проверка состояния ftp-сервера.

`systemctl status vsftpd.service`

Шаг 5: Настройте пакет vsftpd. Мы отредактируем `/etc/vsftpd/vsftpd.conf`

`Change the line which contain anonymous_enable=NO to anonymous_enable=YES` `This will give permit any one to access FTP server with authentication.` `Change the following to YES` `local_enable=YES` `write_enable=YES<br>`

Шаг 6: Запустите FTP-сервер `systemctl start vsftpd.service`

Шаг 7. Установка FTP-клиента `yum install -y lftpd`

Шаг 8: Подключите ftp к localhost `lftp localhost`