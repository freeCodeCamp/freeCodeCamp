---
title: Gitignore
localeTitle: .gitignore
---
## Gitignore

Файл `.gitignore` - это текстовый файл, который сообщает Git, какие файлы или папки игнорировать в проекте.

`.gitignore` файл `.gitignore` обычно помещается в корневую директорию проекта. Вы также можете создать глобальный файл `.gitignore` и любые записи в этом файле будут игнорироваться во всех ваших репозиториях Git.

Для создания локального `.gitignore` файла, создайте текстовый файл и назовите его `.gitignore` ( не забудьте включить `.` В начале). Затем отредактируйте этот файл по мере необходимости. В каждой новой строке должен быть указан дополнительный файл или папка, которую вы хотите игнорировать Git.

Записи в этом файле также могут соответствовать шаблону соответствия.

*   `*` используется как подстановочный знак
*   `/` используется для игнорирования путей по отношению к файлу `.gitignore`
*   `#` используется для добавления комментариев в файл `.gitignore`

Это пример того, как мог выглядеть файл `.gitignore` :
```
# Ignore Mac system files 
 .DS_store 
 
 # Ignore node_modules folder 
 node_modules 
 
 # Ignore all text files 
 *.txt 
 
 # Ignore files related to API keys 
 .env 
 
 # Ignore SASS config files 
 .sass-cache 
```

Чтобы добавить или изменить свой глобальный файл .gitignore, выполните следующую команду:

```bash
git config --global core.excludesfile ~/.gitignore_global 
```

Это создаст файл `~/.gitignore_global` . Теперь вы можете редактировать этот файл так же, как локальный файл `.gitignore` . Все ваши репозитории Git будут игнорировать файлы и папки, перечисленные в глобальном файле `.gitignore` .

### Дополнительная информация:

*   Документация Git: [gitignore](https://git-scm.com/docs/gitignore)
*   Игнорирование файлов: [GitHub](https://help.github.com/articles/ignoring-files/)
*   Полезные шаблоны `.gitignore` : [GitHub](https://github.com/github/gitignore)