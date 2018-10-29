---
title: How to Fork and Maintain a Local Instance of Free Code Camp on Mac and Linux
localeTitle: Как создавать и поддерживать локальный экземпляр Free Code Camp на Mac и Linux
---
Если вы планируете написать Pull Request for Free Code Camp , вам почти наверняка понадобится местная копия сайта. Наличие локальной копии сайта даст вам дополнительные возможности с Git, которые недоступны с помощью интерфейса браузера GitHub, включая обновление ваших вилок и переполнение / раздачу.

В этом руководстве рассказывается, как развернуть проект FCC, клонировать локальную копию и как поддерживать свою вилку. Все команды Git будут предоставлены для командной строки, которые мы настоятельно рекомендуем использовать, но большинство команд могут быть выполнены в графической среде Git.

Если вы используете Windows, [используйте это руководство](https://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366) .

## Нужна помощь?

Free Code Camp Issue Моды и персонал всегда готовы помочь с Pull Request, связанные с этим вопросом в нашем [чате Help Chat Chat](https://gitter.im/FreeCodeCamp/HelpContributors)

## Настройка вашей системы

1.  Установите [Git](https://git-scm.com/) или ваш любимый клиент Git
2.  (Необязательно) [Установите SSH-ключ](https://help.github.com/articles/generating-ssh-keys/) для Github.  
    Использование SSH может значительно ускорить ваши взаимодействия с GitHub, поскольку вам не будет предложено ввести пароль.
3.  Создайте каталог родительских проектов в вашей системе. Для целей этого документа мы будем предполагать, что это `/mean/`

## Викинг свободного кодового лагеря

1.  Перейдите в верхний уровень хранилища свободного кода Camp Camp: `https://github.com/FreeCodeCamp/freecodecamp`
2.  Нажмите кнопку «Вилка» в правом верхнем углу интерфейса. [Подробнее здесь](https://help.github.com/articles/fork-a-repo/) .
3.  После того, как проект будет разветвлен, вы попадете на свою копию `username/freecodecamp` FCC по `username/freecodecamp`

## Клонирование вашей вилки

1.  Из вашей вилки FCC скопируйте HTTPS или SSH (если вы установили SSH-ключи) клон-URL
2.  Откройте Bash Shell / Командная строка / Терминал в каталог ваших проектов (IE: `/mean/` )
3.  Клонировать вилку git:

`git clone https://github.com/yourUserName/FreeCodeCamp.git`

Это загрузит весь репозиторий FCC в каталог ваших проектов.

`bash $ git clone https://github.com/yourUserName/FreeCodeCamp.git Cloning into 'FreeCodeCamp'... remote: Counting objects: 37294, done. remote: Compressing objects: 100% (13/13), done. remote: Total 37294 (delta 5), reused 0 (delta 0), pack-reused 37281 Receiving objects: 100% (37294/37294), 18.69 MiB | 3.99 MiB/s, done. Resolving deltas: 100% (26053/26053), done. Checking connectivity... done. Checking out files: 100% (573/573), done.`

### Настройка восходящего потока

1.  Измените каталог на новый каталог `FreeCodeCamp`
2.  Добавить удаленный доступ к официальному репозиторию FCC:

`git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git`

Поздравляем, теперь у вас есть локальная копия репозитория FCC!

## Поддержание вилки

Теперь, когда у вас есть копия вашей вилки, есть работа, которую вам нужно будет сделать, чтобы она продолжалась.

## Снятие с восходящего потока

Делайте это каждый раз, прежде чем создавать ветку для PR:

1.  Убедитесь, что вы находитесь в `staging` ветке

`bash $ git status On branch staging Your branch is up-to-date with 'origin/staging'.`

1.  Если вы не участвуете в постановке, разрешите любые выдающиеся файлы / фиксации и выездную постановку  
    `git checkout staging`
2.  Сделайте попытку с перестановкой `upstream` :

`git pull --rebase upstream staging`

Это приведет к потере всех изменений на официальной стадии, не делая дополнительной фиксации в вашем местном репо.  
4\. (Необязательно) Принудительно добавьте свою обновленную постановку к вилке GitHub

`git push origin staging --force`

Это приведет к перезаписи промежуточной ветви на вилке.

`bash $ git push origin staging --force Counting objects: 99, done. Delta compression using up to 12 threads. Compressing objects: 100% (38/38), done. Writing objects: 100% (38/38), 16.14 KiB | 0 bytes/s, done. Total 38 (delta 25), reused 0 (delta 0) To git@github.com:yourUserName/FreeCodeCamp.git f7a525c..8a2271d staging -> staging`