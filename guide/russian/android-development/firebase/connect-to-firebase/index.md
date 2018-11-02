---
title: connecting-to-firebase
localeTitle: подключения к-firebase
---
# Предпосылки

1.  Последняя версия Android Studio

Самый простой способ подключения к firebase - использовать помощника firebase.

# 1\. Подключение с помощью Firebase Assistant

1.  Создайте учетную запись в [консоли Firebase](https://console.firebase.google.com) . Нажмите «Добавить проект», чтобы добавить к нему проект Android Studio.
    
2.  Установить Google Репозиторий Вы можете сделать это, добавив зависимость в свой файл build.gradle на уровне проекта следующим образом:
    

```java
allprojects{ 
  repositories { 
        maven { 
            url "https://maven.google.com" // Google's Maven repository 
        } 
    } 
 } 
```

В качестве альтернативы вы можете сделать это [с помощью графического интерфейса](https://developer.android.com/studio/write/firebase) .

3.  Откройте «Инструменты»> «Firebase» и выберите «Подключиться к Firebase».

Если вы хотите подключиться к firebase вручную, подробные инструкции доступны [здесь](https://firebase.google.com/docs/android/setup) . Подключив проект Android Studio к Firebase, вы можете

1.  щелкните по продукту в помощнике firebase и отправьтесь в документы Google, где вам будет рассказано, как действовать
2.  перейдите к нужному продукту в « **Обзор проекта»** в консоли и нажмите « **Начать»**
3.  перейдите в [документы Firebase,](https://www.firebase.com/docs/android/quickstart.html) чтобы узнать, как настроить отдельные продукты в вашем проекте

Чтение комбинации из всех трех позволит вам настроить продукт, который включает добавление соответствующих зависимостей в файл build.gradle.

**Если вы сталкиваетесь с синхронизацией с помощью Gradle Sync** Попробуйте изменить версию Firebase-core или версию базы данных Firebase