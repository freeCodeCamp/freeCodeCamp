---
title: Deploying to Openshift
localeTitle: Развертывание в Openshift
---
Если вы развертываете свои приложения в Heroku, вы можете загружать только 5 приложений, если вы хотите развернуть новую, вам необходимо подтвердить свою учетную запись на своей кредитной карте.

![Ошибка Heroku](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

Ниже приведены шаги, которые необходимо выполнить для развертывания в [OpenShift](https://www.openshift.com/app/account/new) .

## Требования

*   Учетная запись в [OpenShift](https://www.openshift.com/app/account/new)
*   Наше приложение в репозитории [Git](//forum.freecodecamp.com/t/wiki-git-resources/13136)

## Изменения в вашем коде

*   `app.listen` с `process.env.OPENSHIFT_NODEJS_PORT` и `process.env.OPENSHIFT_NODEJS_IP` , как требуется.
*   В вашем **пакете.json** задайте свой `"main": 'yourMainFile.js` и `"script": { "start": "node yourMainFile.js" }`

## Развертывание нашего приложения

*   [Добавить новое приложение](https://openshift.redhat.com/app/console/application_types)

![Выберите картридж для веб-программирования](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   Выберите имя (второй ввод будет таким же для всех ваших приложений)

\[ ![Заполните наше имя и наш домен](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg)

*   Заполните наш URL Git и название нашей ветки.

![Где вы можете найти свой Git URL-адрес и имя вашего филиала в Github](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg)

![Заполните URL-адрес Git и название вашего филиала.](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   «Создать приложение». Это займет некоторое время

![Вы будете перенаправлены сюда, когда закончите развертывание](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg)

*   Войдите в «Приложение», затем в свое приложение и проверьте, что он запущен.

![Список ваших приложений](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg)

![Подробная информация о вашей заявке](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg)

## Переменные окружения

В моем случае у меня есть моя база данных в mLab, поэтому мне нужно создать некоторые переменные окружения.

*   [Установите Ruby и rhc.](https://developers.openshift.com/getting-started/windows.html#client-tools)

**rhc** работает только с версиями 1.9.3 и 2.0.0 Ruby.

*   [Настройка устройства](https://developers.openshift.com/getting-started/windows.html#rhc-setup)

Если у вас возникли проблемы с настройкой `rhc` , попробуйте [этот](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import) ответ в StackOverflow.

*   [Пользовательские переменные среды](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name` .

Вам нужно перезагрузить приложение, чтобы загрузить переменные.

Если вы найдете лучший способ решить это ограничение. Не стесняйтесь вносить свой вклад в нашу Wiki и делиться ею с нами.

Вы можете проверить приложение, работающее по адресу [http://voting-pitazo.rhcloud.com/#/polls](http://voting-pitazo.rhcloud.com/#/polls)