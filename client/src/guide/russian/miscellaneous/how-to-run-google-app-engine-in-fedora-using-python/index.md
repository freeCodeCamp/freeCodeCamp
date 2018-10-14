---
title: How to Run Google App Engine in Fedora Using Python
localeTitle: Как запустить Google App Engine в Fedora с помощью Python
---
В этой статье описывается пошаговое руководство по установке Google App Engine в вашей операционной системе Fedora с использованием python.

*   Следуйте инструкциям в этой документации от [Google.](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

Тестирование приложения, как указано в приведенном выше документе, может не работать для многих.

Итак, попробуйте [это,](http://stackoverflow.com/a/16970921) как [это](http://stackoverflow.com/a/16970921) дает Брис Линь.

Кроме того, следуйте стратегии развертывания, предоставленной Брайсом Лином. Для этого откройте другой терминал (если хотите).

*   Перед развертыванием вам необходимо создать проект в Облачной платформе Google. Выполните шаги, [описанные в разделе «Загрузка приложения».](https://cloud.google.com/appengine/docs/python/#uploading_the_application)
    
*   Но все же выполнение вышеуказанной стратегии развертывания может не работать для многих. И может произойти следующее:
    
    `ERROR appcfg.py:2396 An error occurred processing file '': HTTP Error 400: Bad Request Unexpected HTTP status 400\. Aborting. Error 400: --- begin server output --- A version or backend parameter is required. --- end server output ---`
    

Эта ошибка возникает из-за отсутствующего оператора Version в файле **app.yaml** . Поэтому добавьте `version: 1` в файл **app.yaml** в репозитории приложений. Здесь `helloworld` - это хранилище. Теперь это сработает. Счастливое кодирование и приложение.

Не забудьте проверить эту ссылку: [Разработка и развертывание приложения в Google App Engine на Youtube.](https://www.youtube.com/watch?v=bfgO-LXGpTM)