---
id: 587d7fb1367417b2b2512bf2
title: Use the .env File
challengeType: 2
forumTopicId: 301521
localeTitle: Используйте файл .env
---

## Description
<section id='description'>
Файл <code>.env</code> - это скрытый файл, который используется для передачи переменных среды вашему приложению. Этот файл является секретным, никто, кроме вас, не может получить к нему доступ, и его можно использовать для хранения данных, которые вы хотите сохранить в секрете или скрыть. Например, вы можете хранить ключи API от внешних служб или URI вашей базы данных. Вы также можете использовать его для хранения параметров конфигурации. Установив параметры конфигурации, вы можете изменить поведение вашего приложения без необходимости переписывать некоторый код. 
Переменные среды доступны из приложения как <code>process.env.VAR_NAME</code> . Объект <code>process.env</code> является глобальным объектом Node, а переменные передаются в виде строк. По соглашению имена переменных должны быть в верхнем регистре, а слова разделены подчеркиванием. <code>.env</code> - это файл оболочки, поэтому вам не нужно заключать <code>.env</code> в кавычки имена или значения. Также важно отметить, что не должно быть пробела вокруг знака равенства, когда вы присваиваете значения своим переменным, например, <code>VAR_NAME=value</code> . Обычно помещают каждое определение переменной в отдельную строку. 
</section>

## Задание
<section id='instructions'>
  
Добавьте переменную окружения в качестве опции конфигурации. Сохраните переменную <code>MESSAGE_STYLE=uppercase</code> <code>.env</code> файле <code>.env</code> . Затем сообщите обработчику маршрута GET <code>/json</code> который вы создали в последнем вызове, чтобы преобразовать сообщение объекта ответа в верхний регистр, если <code>process.env.MESSAGE_STYLE</code> равен <code>process.env.MESSAGE_STYLE</code> <code>uppercase</code> . Объектом ответа должно стать <code>{"message": "HELLO JSON"}</code> .
</section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: The response of the endpoint <code>/json</code> should change according to the environment variable <code>MESSAGE_STYLE</code>
    testString: getUserInput => $.get(getUserInput('url') + '/_api/use-env-vars').then(data => { assert.isTrue(data.passed, 'The response of "/json" does not change according to MESSAGE_STYLE'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
