---
title: Guide for Using MongoDB and Deploying to Heroku
localeTitle: Руководство по использованию MongoDB и развертыванию в Heroku
---
В этом руководстве давайте посмотрим, как работать с MongoDB локально и с `mLab` для его развертывания в Heroku. В качестве альтернативы вы также можете использовать надстройку `mLab` в Heroku, бесплатно, но для этого вам могут потребоваться детали вашей кредитной карты. Итак, если вас не [интересуют](https://mlab.com) данные вашей кредитной карты, вы можете пойти с [веб-](https://mlab.com) сайтом [mLab](https://mlab.com) .

## Настройка бесплатной учетной записи на Heroku и `mLab` :

Подпишитесь на [Heroku](https://signup.heroku.com/) и [mLab](https://mlab.com/signup/)

## Запуск вашего Mongodb (локально):

Чтобы запустить свою БД в своей собственной системе, выполните следующую команду:
```
# Create a directory named 'data' if it doesn't exist 
 $ mongod --port 27017 --dbpath=./data 
```

Теперь ваш Db работает,

`mongodb://localhost:27017/my_database_name`

Если вы используете c9, и если у вас возникли проблемы с запуском вашей БД в C9, обратитесь к этой [странице](https://community.c9.io/t/setting-up-mongodb/1717)

## Запуск вашего Mongodb ( `mLab` ):

1.  После создания вашей `mLab` записи `mLab` нажмите кнопку « **Создать новую»** и выберите «Single-node» -> «Песочница», чтобы получить бесплатную Db и дать вашей базе данных имя (в качестве примера я создал db с именем «food»).
2.  Теперь создается база данных с названием «еда», вы можете создать свою собственную коллекцию.
3.  Наконец, добавьте пользователя / пользователей, которые могут получить доступ к этой базе данных. Добавляя пользователя, он запрашивает имя пользователя и пароль, которые используются для доступа к базе данных.

Теперь ваша БД работает по url что-то вроде этого -

`mongodb://username:password@ds01316.mlab.com:1316/food`

где имя пользователя и пароль - это данные, которые вы указали при добавлении пользователя.

Вы можете найти свой DB-адрес в [https://mlab.com/databases/имя имени _базы данных_](https://mlab.com/databases/your_database_name)

## Создание соединения с MongoDB в Node.js (хотя DB работает в вашей локальной системе):

Чтобы работать с базой данных, сначала вам нужно создать соединение. В этом разделе мы будем использовать собственный драйвер Node.js от MongoDB для создания соединения с сервером MongoDB. Чтобы установить собственные драйверы mongodb, используйте команду npm для установки модуля mongodb. После этого запустите следующую команду в каталоге проекта.

`npm install mongodb`

Базовый код для подключения к MongoDB
```
//lets require/import the mongodb native drivers. 
 var mongodb = require('mongodb'); 
 
 //We need to work with "MongoClient" interface in order to connect to a mongodb server. 
 var MongoClient = mongodb.MongoClient; 
 
 // Connection URL. This is where your mongodb server is running. 
 
 //(Focus on This Variable) 
 var url = 'mongodb://localhost:27017/my_database_name'; 
 //(Focus on This Variable) 
 
 // Use connect method to connect to the Server 
  MongoClient.connect(url, function (err, db) { 
  if (err) { 
    console.log('Unable to connect to the mongoDB server. Error:', err); 
  } else { 
    console.log('Connection established to', url); 
 
    // do some work here with the database. 
 
    //Close connection 
    db.close(); 
  } 
 }); 
```

Для получения дополнительных примеров работы с MongoDB вы можете ссылаться на этот [блог](http://blog.modulus.io/mongodb-tutorial)

Нам нужно знать, где работает наш сервер mongodb. URL-адрес представляет местоположение, в котором работает экземпляр сервера mongodb, с которым мы можем подключиться. URL-адрес содержит имя базы данных, к которому мы хотим подключиться.

Предполагая, что ваша база данных работает по указанному выше URL, давайте теперь сосредоточимся на URL-адресе, соединяющем базу данных (локальную)

`var url = 'mongodb://localhost:27017/my_database_name';`

### Создание соединения с MongoDB в Node.js (хотя DB работает в вашем `mLab` ):

URL-адрес для подключения к `mLab` DB выглядит следующим образом:

`var url = 'mongodb://username:password@ds01316.mlab.com:1316/food';`

Вы можете заменить переменную url этим, и все будет работать точно так, как должно быть, и, наконец, ваша база данных безопасна и безопасна в `mLab` где вы можете просматривать свои коллекции, пользователей, резервные копии и т. Д.

### Важная заметка:

Но Commiting your username и password для вашего публичного репо иногда бывает очень опасным, поэтому никогда не передавайте их в публичные репозитории. Вместо этого вы можете использовать переменные среды для хранения URL-адреса (с именем пользователя и паролем), чтобы сделать это в вашей **локальной** системе

Для пользователей Mac / Linux вы можете просто ввести:

`export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

Для пользователей Windows:

`SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

После установки переменных среды вам нужно вызвать переменную окружения в ваш код. Вы можете сделать это, набрав эту

`var url = process.env.MONGOLAB_URI;`

Теперь ваш URL-адрес MongoDb вставляется в ваш код безопасно. Теперь вы можете зафиксировать его и развернуть на свой герою.

Если вам нужна дополнительная помощь в развертывании в Heroku, вы можете сослаться на эту [Wiki](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Heroku-Deployment-Guide)

## Заключительные шаги:

После развертывания вашего кода в вашем приложении Heroku вам необходимо установить переменную окружения для кода в heroku.

Для этого вам нужно запустить следующую команду с вашего пульта героя,

`heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

Thats it, ваше приложение теперь успешно развернуто в heroku с `mLab` DB