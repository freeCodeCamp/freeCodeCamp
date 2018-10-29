---
title: Guidelines for Translating Free Code Camp to Any Language
localeTitle: Руководство по переводу свободного кодового лагеря на любой язык
---
Большое вам спасибо за ваш интерес к переводу FreeCodeCamp. Чтение этого документа рекомендуется для участия в коллективных усилиях по привлечению FreeCodeCamp к большему количеству людей по всему миру.

## Как внести вклад в перевод?

Существуют различные способы совместной работы с переводами. Каждое действие по переводу обычно следует за рабочим процессом ниже.

> _Pro tip: вы можете вносить вклад в любые или все нижеперечисленные фазы рабочего потока в соответствии с вашими интересами._

*   [Просмотрите работу другого переводчика](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/3) .
*   [Создавайте проблемы `Translation` чтобы отслеживать прогресс](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/4) .
*   [Внедрить переводы](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/5) .
*   [Создание запросов Pull для добавления перевода в базу кода](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/6)

## Руководства и ресурсы

### Общие рекомендации

*   Старайтесь не быть слишком формальным, но не слишком случайным, просто чтобы сохранить дружеские отношения.
*   Чтобы сделать содержание более понятным для носителей вашего целевого языка (подумайте о тех, кто не говорит по-английски), переведите столько, сколько сможете, попробуйте использовать слово на английском языке, только если оно уже широко используется в странах где говорится о вашем целевом языке.

### глоссарий

Эффективно, если все переводчики, работающие на одном языке, создают глоссарий, показывающий перевод слов на английском языке, используемых в задачах FreeCodeCamp. Иногда существует несколько способов перевода некоторых терминов, а региональные различия могут создавать путаницу (например, некоторые термины могут отличаться между испанским и испанским, а также из Латинской Америки или между французским языком, используемым в Канаде и во Франции). Будьте демократичны! Выберите наиболее подходящий перевод путем голосования и сохраните отчет о результатах. Один пример такой записи можно найти здесь: [Глоссарий FreeCodeCamp (с английского на испанский)](https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0) Используйте чат для обсуждения глоссария, поэтому никто ничего не пропустит.

### Если вам нужна помощь в Инструменте Google Translator Toolkit

Вы можете найти помощь в автоматизации процесса перевода, используя Инструмент Google Translator Toolkit, см.: [Испанский гид](https://github.com/vtamara/fcc_trad)

### Создание тестового экземпляра FreeCodeCamp

Увидеть конечный продукт по мере продвижения с переводом может помочь вам оставаться мотивированным. Вот почему хорошая идея создать тестовый экземпляр FreeCodeCamp, где вы можете включить самые последние изменения в переводе языка, на котором вы работаете, и использовать FreeCodeCamp, включая эти изменения. Следующий тестовый экземпляр был создан для испанской версии FreeCodeCamp: [Начало работы](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json) . Чтобы создать тестовый экземпляр, выполните следующие действия:

1.  Следуйте инструкциям на [странице Contributing,](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) убедитесь, что вы видите исполняемый экземпляр на английском языке
2.  Откройте [Поддерживаемые Языки.js](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/common/utils/supported-languages.js) и добавьте язык вашего экземпляра (например, `es: 'Spanish'` ), перезапустите свой экземпляр.
3.  Измените URL-адрес с префиксом вашего языка (например, для испанского языка `/en/challenges/` to `/es/challenges/` ), если страница была переведена, вы должны уметь ее видеть.
4.  Посмотрите файл языка, попробуйте найти ключевые слова в своем репозитории, вы можете найти все проблемы в разделе `/seed/challenges/` `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json` например, страница « _[Начало работы»](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ находится по адресу `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json`
5.  Счастливый перевод!
6.  Прежде чем отправлять PR, пожалуйста, **не** включайте `supported-lamguages.js` в свой `supported-lamguages.js` , ( `$ git reset -- common/utils/supported-languages.js` )
7.  Последнее, но не менее важное, убедитесь, что вы следуете всем правилам в [Руководстве для авторов](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md) .
8.  Спасибо за ваш вклад!

### Рекомендации

*   [Документация исходного кода FreeCodeCamp.](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
*   [Отправить запрос](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
*   [Файлы справки для перевода проблем и указаний FreeCodeCamp с помощью инструментария Google Translator Toolkit.](https://github.com/vtamara/fcc_trad/blob/master/README.md)
*   [Руководство пользователя](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)

Если вы сочтете это полезным, вы можете перевести эти инструкции на свой язык и адаптировать их для своей команды перевода (см., Например, [оригинал на испанском языке](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md) ).

_Это руководство основано на [этой записи](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md) ._