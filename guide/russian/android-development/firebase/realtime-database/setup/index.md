---
title: Setting up Firebase Realtime Database
localeTitle: Настройка базы данных Firebase Realtime
---
# Предпосылки

1.  Последняя версия Android Studio
2.  Связать с Firebase вручную или с помощью Firebase Assistant (см. [Подключение к Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ). Рекомендуется, чтобы вы сделали это, чтобы не путать частичные инструкции, связанные с этим, в документах, упомянутых ниже.

# Настройка его с помощью Android Studio

После добавления Firebase в ваш проект вам нужно будет добавить дополнительные зависимости и сделать некоторые другие вещи, чтобы настроить база данных реального времени. Есть две документации об этом:

1.  Firestase quickstart [docs](https://www.firebase.com/docs/android/quickstart.html)
2.  [Документы](https://firebase.google.com/docs/database/android/start/) Google

Между ними существуют некоторые расхождения. Чтобы восполнить их, вы можете следить за документами Firebase, но вместо того, чтобы просто использовать перечисленные там зависимости, используйте следующий список. Таким образом, вы не пропустите никаких шагов из документации.

**Добавить коэффициенты заграждения** 1 В файле build.gradle на уровне приложения добавьте следующее

```java
dependencies { 
    implementation 'com.firebase:firebase-client-android:2.5.2+' 
    implementation 'com.google.firebase:firebase-database:15.0.0' 
 } 
```

# Установка Firebase Android SDK, разрешений и кода установки

Подробные инструкции для них можно найти [здесь](https://www.firebase.com/docs/android/quickstart.html) .

# Ресурсы

Чтобы узнать, как читать и записывать в базу данных в приложении Android, обратитесь к двум документам, перечисленным в разделе «Ссылки». Вы также можете узнать, как использовать продукты Firebase в документации Google, но опять же, вероятно, неплохо также взглянуть на документы Firebase или на что-нибудь полезное.

# Рекомендации

*   FIREBASE, _Android_ Quickstart, 17/04/2018, 07/05/2018, https://www.firebase.com/docs/android/quickstart.html
*   GOOGLE, _настроить базу данных Firebase Realtime для Android_ , 05/04/2018, 07/05/2018, https://firebase.google.com/docs/database/android/start/

# сноска

Первая строка - из [документации](https://www.firebase.com/docs/android/quickstart.html) Firebase по настройке в реальном времени db в Android Studio. В документах используется «компиляция», но это устарело и заменяется «реализацией». Вторая строка взята из [документов](https://firebase.google.com/docs/database/android/start/) Google по настройке реального времени в Android Studio. Если на самом деле избыточно добавить оба, исправьте эту статью.