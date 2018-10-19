---
title: How to Install the Mean Stack on Mac Osx
localeTitle: Как установить средний стек на Mac Osx
---
Чтобы установить MongoDB, вы должны иметь Mac OS X 10.6 (Snow Leopard) или выше. Чтобы узнать, какая версия ОС X у вас есть, щелкните значок  в левом верхнем углу экрана и выберите « `About This Mac` .

![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":предупреждение:") **ПРЕДУПРЕЖДЕНИЕ:** выполните резервное копирование Time Machine перед выполнением любого из следующих шагов!

## Шаг 1: установка MongoDB

Самый простой способ установки MongoDB на OS X - использовать [HomeBrew](http://brew.sh/) . Если вы раньше не использовали HomeBrew, просто выполните следующую команду в окне терминала:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
```

После того, как HomeBrew успешно установлен, выполните следующую команду:
```
brew update && brew install mongodb 
```

HomeBrew автоматически установит все зависимости для вас.

## Шаг 2: установка Node.js

Опять же, мы позволим HomeBrew сделать тяжелый подъем:
```
brew install node 
```

Исполняемый файл npm уже включен в пакет Node.js.

Прежде чем продолжить, давайте проверим, что модули Node.js могут быть найдены другими пользователями ( ![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":предупреждение:") **ВНИМАНИЕ** : лучше всего скопировать и вставить эти команды, так как вы потеряете исходное содержимое своего `.bashrc` файла, если вы введете `>` вместо `>>` ):
```
echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc 
```

Чтобы проверить, действует ли конфигурация, выполните:
```
echo $NODE_PATH 
```

Вы должны увидеть `./node_modules:/usr/local/lib/node_modules` напечатанный ниже вашей команды.

Если вы используете другую оболочку, чем Bash, просто замените `~/.bashrc` файлом конфигурации оболочки.

## Шаг 3: установка инструментов fullstack
```
npm install -g express yo grunt grunt-cli generator-angular-fullstack bower 
```

## Шаг 4: создание приложения fullstack

Создайте каталог для проектов Back End Project. Предполагая, что ваш рабочий стол - ваше рабочее пространство де-факто:
```
mkdir ~/Desktop/Back End Projects && cd ~/Desktop/Back End Projects 
```

Теперь, когда все приготовления на месте, пришло время для главного события:
```
yo angular-fullstack 
```

Ответьте на вопросы в соответствии с элементами контрольного списка \# 13-23 [Challenge: Get Set for Back End Projects](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) . Проконсультируйтесь с № 24-27, если вы столкнулись с ошибками. Это будет загружать файлы размером ~ 350 МБ в ваш текущий каталог.

Прежде чем идти дальше, нам нужно исправить [известную проблему](https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate) в некоторых сгенерированных файлах:
```
echo "sed -i '' -e 's/_.merge/_.extend/' server/api/*/*.controller.js" > \ 
 fix-exports-update.sh && chmod +x fix-exports-update.sh && \ 
 ./fix-exports-update.sh 
```

Вам нужно запустить `./fix-exports-update.sh` каждый раз, когда вы создаете новую конечную точку API (до тех пор, пока они не исправят этот восходящий `./fix-exports-update.sh` , то есть).

## Шаг 5: инициализация локального репозитория Git

Скажите Git, чтобы не отслеживать вашу базу данных:
```
echo "data" >> .gitignore 
```

Поверните каталог, в котором ваше приложение находится в репозитории Git, выполнив следующие команды:
```
git init && git add . && git commit -am 'initial commit' 
```

## Шаг 6: запуск MongoDB

Чтобы запустить MongoDB в первый раз в каталоге вашего приложения, выполните следующие команды в своем терминале:
```
mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface' > mongod.sh && chmod a+x mongod.sh && ./mongod.sh 
```

С этого момента вы можете просто запустить MongoDB, выполнив `./mongod.sh` . Несколько замечаний:

*   Файл `.conf` направляет `mongod` для записи сообщений в файл журнала вместо stdout. Чтобы просмотреть журнал, выполните следующую команду на отдельной вкладке терминала: `less /usr/local/var/log/mongodb/mongo.log` .
*   Поскольку мы не на Cloud9, нам не нужен параметр `--nojournal` . Журналирование позволяет восстановить базу данных в случае `mongod` .
*   Вы должны создать чистую базу данных для каждого проекта. Если вы скопировали каталог `data` из более раннего проекта, `mongod` не запустится. Если это так, просто `rm -rf data && mkdir data && ./mongod.sh` .

## Шаг 7: запуск Grunt

Откройте новую вкладку терминала, нажав `⌘T` , и выполните следующую команду:
```
grunt serve 
```

Grunt автоматически откроет новую страницу индекса Angular Site, как только она закончит запуск.

Теперь вы должны быть в состоянии следовать остальным инструкциям Challenge, чтобы нажать на GitHub и Heroku. Просто проигнорируйте часть ключа SSH (# 33-36) и замените `~/workspace` на путь вашего каталога приложения.

## сноска

Вышеуказанные этапы были протестированы в следующей конфигурации:

*   OS X 10.10.5
*   zsh 5.0.8 (x86\_64-apple-darwin14.3.0)
*   узел v0.12.7
*   npm 2.11.3