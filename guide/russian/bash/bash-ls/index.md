---
title: Bash ls
localeTitle: Bash ls
---
## Bash ls

`ls` - это команда в Unix-подобных операционных системах для отображения содержимого каталога, например имен папок и файлов.

### использование

```bash
ls [опция/фильтр] [имя_файла] 
```

Команда ls предоставляет также возможность определить фильтр в командной строке. 
В этой команде фильтр используется для определения того, какие файлы или каталоги должны быть отображены в выводе.
Фильтр работает как простая строка сопоставления с текстом. Для этого достаточно включить фильтр после любых параметров командной строки, к которым он должен быть применен.


Наиболее часто используемые фильтры(опции):

*   `-a` , все файлы и папки, в том числе скрытые и начинающиеся с `.`
*   `-l` , Список в длинном формате
*   `--color` , включить цветной вывод.

### Примеры:

* Вывод списка файлов в `freeCodeCamp` папке без фильтра: 

```bash
$ ls freeCodeCamp 
api-server          config           docker-compose-shared.yml  guide       netlify.toml  package-lock.json  tools
client              CONTRIBUTING.md  docker-compose.yml         lerna.json  news          README.md
CODE_OF_CONDUCT.md  curriculum       docs                       LICENSE.md  package.json  sample.env
```
Если в качестве фильтра указано имя конкретного файла, то команда ls отображает информацию только об этом файле (папке).

* Вывод списка файлов в `freeCodeCamp` папке с применением фильтра `l`:

```bash
$ ls -l freeCodeCamp 
total 432
drwxrwxr-x 5 fuser fuser   4096 Oct 18 23:01 api-server
drwxrwxr-x 7 fuser fuser   4096 Oct 18 23:01 client
-rw-rw-r-- 1 fuser fuser     86 Oct 18 23:01 CODE_OF_CONDUCT.md
drwxrwxr-x 2 fuser fuser   4096 Oct 18 23:01 config
-rw-rw-r-- 1 fuser fuser   8965 Oct 18 23:01 CONTRIBUTING.md
drwxrwxr-x 7 fuser fuser   4096 Oct 18 23:01 curriculum
-rwxrwxr-x 1 fuser fuser    405 Oct 18 23:01 docker-compose-shared.yml
-rw-rw-r-- 1 fuser fuser    826 Oct 18 23:01 docker-compose.yml
drwxrwxr-x 9 fuser fuser   4096 Oct 18 23:01 docs
drwxrwxr-x 8 fuser fuser   4096 Oct 18 23:01 guide
-rw-rw-r-- 1 fuser fuser    160 Oct 18 23:01 lerna.json
-rw-rw-r-- 1 fuser fuser   1513 Oct 18 23:01 LICENSE.md
-rw-rw-r-- 1 fuser fuser    583 Oct 18 23:01 netlify.toml
drwxrwxr-x 5 fuser fuser   4096 Oct 18 23:01 news
-rw-rw-r-- 1 fuser fuser   1122 Oct 18 23:01 package.json
-rw-rw-r-- 1 fuser fuser 354303 Oct 18 23:01 package-lock.json
-rw-rw-r-- 1 fuser fuser   7010 Oct 18 23:01 README.md
-rw-rw-r-- 1 fuser fuser    643 Oct 18 23:01 sample.env
drwxrwxr-x 4 fuser fuser   4096 Oct 18 23:01 tools
```

В каждой строке листинга в длинном формате содержатся сведения о различных файлах и каталогах, имеющихся в данном каталоге. Такой листинг, кроме имени файла, показывает другую полезную информацию. В <strong>первой</strong> строке вывода содержатся сведения об общем количестве блоков данных, относящихся к текущему каталогу. Вслед за этим происходит вывод отдельных строк, каждая из которых включает следующую информацию о каждом файле (или каталоге):

&mdash; Тип файла, такой как каталог `(d)`, файл `(-)`, символьное устройство `(c)` или блочное устройство `(b)`; <br>
&mdash; Разрешения для файла;<br>
&mdash; Количество жестких ссылок на файл;<br>
&mdash; Имя пользователя владельца файла;<br>
&mdash; Имя группы файлов, к которой принадлежит этот файл;<br>
&mdash; Размер файла в байтах;<br>
&mdash; Время последнего изменения файла;<br>
&mdash; Имя файла или каталога.<br>

#### Дополнительная информация:

*   [Википедия](https://ru.wikipedia.org/wiki/Ls)
