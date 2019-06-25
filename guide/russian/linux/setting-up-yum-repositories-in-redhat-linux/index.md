---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
localeTitle: Настройка репозиториев Yum в RedHat / CentOS Linux
---
Репозитории YUM представляют собой хранилища программного обеспечения Linux (файлы пакета RPM).

Файл пакета RPM является файлом диспетчера пакетов Red Hat и обеспечивает быструю и легкую установку программного обеспечения на Red Hat / CentOS Linux.

## Настройка репозиториев Yum в RedHat CentOS Linux

Шаг 1: Проверьте, существуют ли существующие хранилища или нет.

```shell
#yum repolist 
```

Вы не найдете репозиториев.

Шаг 2: измените каталог на

```shell
#cd /etc/yum.repos.d 
```

Шаг 3: Создайте новый файл

```shell
#vim myrepo.repo 
```

Шаг 4: Введите следующие строки в файле

```shell
[file-name] 
 name=filename 
 baseurl="location of yum repositories" 
 gpgcheck=0 
```

Шаг 5: Сохранить и выйти

Шаг 6: Повторите шаг 1

```shell
You Will find repositories 

```