---
title: How to Clone and Setup the Free Code Camp Website on a Windows Pc
localeTitle: Как клонировать и настраивать бесплатный сайт Camp Camp на ПК Windows
---
Этот список работает со сайтом freeCodeCamp и также был протестирован в этом [уклонном учебнике](https://docs.angularjs.org/tutorial) . Настроить среду разработки на ПК с Windows легко, хотя в этом процессе, вероятно, будет много ошибок. Важная часть - исправить эти ошибки.

## Предпосылки

1.  [Git bash](https://msysgit.github.io/)
2.  [Node.js](https://nodejs.org/)
3.  [MongoDB](https://www.mongodb.org/downloads)
4.  [Python 2.7.10](https://www.python.org/downloads/release/python-2710/)

Загрузите и установите 4 предварительных условия. При установке Python и Node важно проверить добавление опции к переменной пути. Установщик Node делает это по умолчанию. Необязательно добавлять Mongo к пути. Python должен быть установлен в подпапку в% programfiles%

1.  Откройте командную строку с правами администратора.
    
2.  Убедитесь, что узел находится в пути, запустив `node -v`
    
3.  Убедитесь, что npm находится в пути, запустив `npm -v`
    
4.  Выполните следующие команды:
    
    ```
    npm install gulp -g 
     npm install node-gyp -g 
    
    ```
    
5.  Если вы хотите сэкономить время в поисковом поиске Mongo, когда он должен быть запущен, создайте файл `.cmd` на рабочем столе и напишите путь к Mongo. Вероятно, `%programfiles%\MongoDB\Server\3.0\bin\mongod.exe` .
    
6.  Создайте папку по умолчанию для Mongo для хранения баз данных: `C:\data\db`
    

**Следующие команды _должны_ быть выполнены в Git Bash**

1.  Следуйте инструкциям здесь [**freeCodeCamp на Github**](https://github.com/FreeCodeCamp/freecodecamp) и [**клонируйте**](https://github.com/FreeCodeCamp/freecodecamp) проект.
2.  Убедитесь, что вы находитесь в каталоге, который вы клонировали с помощью GitHub (по умолчанию это freecodecamp).
3.  Запустить `cp sample.env .env`
4.  Запустить `npm install`
5.  Начните Mongo с ярлыка на рабочем столе и запустите `npm run only-once` . Теперь вы должны увидеть много активности в окне, где вы начали Mongo.
6.  Запустите `gulp` . Через некоторое время ваша локальная версия freeCodeCamp должна быть запущена. Вы можете посетить его в своем браузере по адресу `http://localhost:3000`

Поздравляю, все готово! Если у вас возникнут какие-либо проблемы при настройке локальной версии freeCodeCamp, не стесняйтесь обращаться к [нашему](https://gitter.im/FreeCodeCamp/Contributors) чату [Contributors](https://gitter.im/FreeCodeCamp/Contributors) .