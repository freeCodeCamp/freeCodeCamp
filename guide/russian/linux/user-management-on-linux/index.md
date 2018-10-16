---
title: User management on Linux
localeTitle: Управление пользователями в Linux
---
#### Примечание. Чтобы выполнить команду как `sudo` вы должны иметь учетную запись пользователя sudo (Administrator)

## Как создать пользователя

#### Используйте команду `adduser` или `useradd` чтобы добавить нового пользователя в вашу систему.
```
$ sudo adduser username 
```

Обязательно замените `username` на пользователь, который вы хотите создать.

#### Используйте команду `passwd` для обновления пароля нового пользователя.
```
$ sudo passwd username 
```

Настоятельно рекомендуется надежный пароль!

## Как создать пользователя Sudo

Чтобы создать пользователя `sudo` , сначала необходимо создать обычного пользователя, используя `usermod` выше команду, а затем добавить этого пользователя в группу `sudoers` используя команду `usermod` .

##### В системах Debian (Ubuntu / LinuxMint / ElementryOS) члены `sudo` группы имеют привилегии sudo.
```
$ sudo usermod -aG sudo username 
```

##### На основе RHEL syatems (Fedora / CentOs) члены группы `wheel` имеют права sudo.
```
$ sudo usermod -aG wheel username 
```

## Как удалить пользователя

##### Для Debian (Ubuntu)
```
$ sudo deluser username 
```

##### Для RHEL (Fedora / CentOS)
```
$ sudo userdel username 
```

##### Создание групп и добавление пользователей
```
$ sudo groupadd editorial 
 $ sudo usermod -a -G editorial username 
```

#### Примечание. Все вышеприведенные команды могут выполняться без sudo в `root` режиме

Чтобы переключиться на root на ubuntu, запустите команду `su -i` за которой следует пароль пользователя, входящего в систему. Запросить изменения в `#` insted из `$`

##### В системах Debian (Ubuntu / LinuxMint / ElementryOS) члены `sudo` группы имеют привилегии sudo.
```
$ sudo usermod -aG sudo username 
```

## Как создать группу

Чтобы создать группу, используйте команду `groupadd`
```
$ sudo groupadd groupname 
```

## Как удалить группу

Чтобы удалить группу, используйте команду 'groupdel'

`` ` $ sudo groupdel grouname``

#### Рекомендации

[Debian (Ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04)

[RHEL (CentOS / Fedora)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-a-centos-7-server)