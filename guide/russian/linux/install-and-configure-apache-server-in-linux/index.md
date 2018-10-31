---
title: Install and Configure Apache Server in Linux
localeTitle: Установка и настройка Apache Server в Linux
---
Apache HTTP-сервер, который в обычном порядке называется Apache, является бесплатным и открытым исходным кодом кросс-платформенное программное обеспечение веб-сервера. Apache разрабатывается и поддерживается открытое сообщество разработчиков под эгидой Apache Software Foundation.

## Установка и настройка Apache Server в Linux

Шаг 1: Установите Apache Server `yum install httpd`

Шаг 2. Настройка http web sever `cd /etc/httpd/conf.d`

Шаг 3. Создайте собственный файл конфигурации с расширением .conf. `vim *.conf`

Шаг 4: Запуск Apache Server `systemctl start httpd.service`

Шаг 5: Автоматический запуск Apache Server при запуске операционной системы. `systemctl enable httpd.service`

Шаг 6: добавьте разрешение брандмауэра. `firewall-cmd --add-service=http --permanent`