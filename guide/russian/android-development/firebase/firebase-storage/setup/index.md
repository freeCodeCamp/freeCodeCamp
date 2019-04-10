---
title: Setting up Firebase Storage
localeTitle: Настройка хранилища Firebase
---
# Настройка хранилища Firebase

## Предпосылки

1.  Последняя версия Android Studio
2.  Связать с Firebase вручную или с помощью Firebase Assistant (см. [Подключение к Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ).

Рекомендуется, чтобы вы сделали это, чтобы не путать частичные инструкции, связанные с этим, в документах, упомянутых ниже.

## Настройка его с помощью Android Studio

После добавления Firebase в ваш проект вам нужно будет добавить дополнительные зависимости и сделать некоторые другие вещи, чтобы настроить хранилище Firebase. Ниже приведена следующая документация:

*   [Firebase](https://firebase.google.com/docs/storage/android/start)

В этой документации может возникнуть путаница или если вы новичок в firebase, тогда вам может быть немного сложно понять ее. Итак, внимательно следуйте шагам:

**Добавить коэффициенты заграждения**

В файле build.gradle на уровне приложения добавьте следующее

```java
dependencies { 
    implementation 'com.google.firebase:firebase-storage:16.0.2' 
 } 
```

## Установка Firebase Android SDK, разрешений и кода установки

Подробные инструкции для них можно найти [здесь](https://firebase.google.com/docs/android/setup) .

## Ресурсы

Чтобы узнать о том, как читать и записывать на хранение в приложении для Android, см. Документы, перечисленные ниже.

*   [Загрузка файлов с Android Руководство Firebase](https://firebase.google.com/docs/storage/android/upload-files)
    
*   [Загрузка файлов на Android Руководство Firebase](https://firebase.google.com/docs/storage/android/download-files)
    

## Примеры проектов от разработчиков Firebase

Вы можете следить за этими образцами от разработчиков Firebase, чтобы начать работу с хранилищем Firebase Firebase Quickstart-Android [android-sample](https://github.com/firebase/quickstart-android/tree/master/storage)

## Заметка

Google теперь устарел «компилировать», а вместо этого вам нужно использовать «реализацию».