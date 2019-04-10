---
title: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
localeTitle: Интеграция облачных сообщений Firebase для гибридных приложений Cordova
---
## Интеграция облачных сообщений Firebase для гибридных приложений Cordova

Это простой прямой шаг вперед относительно того, как реализовать push-уведомление в Android, а также iOS, используя [плагин cordova для fcm](https://github.com/fechanique/cordova-plugin-fcm) и Google Firebase FCM с нуля. Я буду использовать Ubuntu 16.04 LTS для этого, но ОС, используемая для разработки, не должна иметь большого значения.

## Интеграция FCM для гибридных приложений Cordova

### Реализация Android

Создать пустую папку pushSample
```
cd '/opt/lampp/htdocs' 
 mkdir pushSample 
 cd pushSample 
 cordova create pushSample 
 cd pushSample 
 cordova platform add android 
 cordova plugin add cordova-plugin-FCM 
```

При добавлении плагина FCM Cordova появится сообщение об ошибке:
```
Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder. 
```

Примечание. Это связано с тем, что мы не добавили файл google-services.json, который должен быть создан в следующих следующих шагах.

Затем откройте [консоль google firebase](https://console.firebase.google.com/) и Add Project (в основном это означает создание нового проекта)

После создания проекта щелкните на разделе «Уведомления» на левой боковой панели.

Теперь нажмите на значок Android, чтобы добавить поддержку платформы **Android** в наш проект.

В следующей всплывающей форме заполните данные следующим образом: **Имя пакета Android: имя** пакета или идентификатор - уникальный идентификатор приложения в магазине воспроизведения. Обратите внимание, что это очень важное значение, которое нельзя изменить для приложения после его загрузки в магазин воспроизведения. Это будет синтаксис обратного имени домена: eg hello.pushSample.com будет иметь app id: com.pushSample.hello. Также в файле **config.xml** в вашем проекте cordova установлен одинаковый идентификатор приложения. Для нашего типового проекта это будет: pushSample / pushSample / config.xml например, для меня содержимое этого файла:

```xml
<?xml version='1.0' encoding='utf-8'?> 
 <widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
    <name>HelloCordova</name> 
    <description> 
        A sample Apache Cordova application that responds to the deviceready event. 
    </description> 
    <author email="dev@cordova.apache.org" href="http://cordova.io"> 
        Apache Cordova Team 
    </author> 
    <content src="index.html" /> 
    <plugin name="cordova-plugin-whitelist" spec="1" /> 
    <access origin="*" /> 
    <allow-intent href="http://*/*" /> 
    <allow-intent href="https://*/*" /> 
    <allow-intent href="tel:*" /> 
    <allow-intent href="sms:*" /> 
    <allow-intent href="mailto:*" /> 
    <allow-intent href="geo:*" /> 
    <platform name="android"> 
        <allow-intent href="market:*" /> 
    </platform> 
    <platform name="ios"> 
        <allow-intent href="itms:*" /> 
        <allow-intent href="itms-apps:*" /> 
    </platform> 
 </widget> 
```

Обратите внимание на тег

```xml
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
```

Здесь id атрибута - это **идентификатор** пакета, который по умолчанию будет **io.cordova.hellocordova** изменить его на идентификатор приложения, указанный вами в консоли firebase. Я буду использовать com.pushSample.hello

Следующее поле, которое должно быть заполнено во всплывающем окне панели firebase, следующее:

Имя приложения **(необязательно):** это может быть то же имя приложения, которое отображается в меню для приложения, это также можно изменить в файле config.xml, по умолчанию это будет HelloCordova, я **обнов** его до **PushSample**

**Сертификат подписи отладки SHA-1 (необязательно):** это необязательно, оставьте его пустым.

Затем нажмите « **Зарегистрировать приложение».**

Следующий шаг - загрузить **json-** файл **google services** .

![скачать google services json](https://preview.ibb.co/nEjbwv/1_Wje_TClf8o9z_Dxw3_W_wkpw.png)

Нажмите кнопку **Download google-services.json** , которая должна загрузить файл на ваш компьютер.

Как только вы получите файл, вставьте его в корневую папку вашего проекта cordova, в моем случае:
```
/opt/lampp/htdocs/pushSample/pushSample 
```

Затем постройте проект
```
cordova build android 
```

После добавления файла google-services.json он должен успешно сработать.

Затем мы должны написать код на стороне клиента для обработки push-уведомлений:

```js
FCMPlugin.getToken(function(token) { 
    //this is the FCM token which can be used 
    //to send notification to specific device 
    console.log(token); 
    //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) ) 
    //Here you define your application behaviour based on the notification data. 
    FCMPlugin.onNotification(function(data) { 
        console.log(data); 
        //data.wasTapped == true means in Background :  Notification was received on device tray and tapped by the user. 
        //data.wasTapped == false means in foreground :  Notification was received in foreground. Maybe the user needs to be notified. 
        // if (data.wasTapped) { 
        //     //Notification was received on device tray and tapped by the user. 
        //     alert(JSON.stringify(data)); 
        // } else { 
        //     //Notification was received in foreground. Maybe the user needs to be notified. 
        //     alert(JSON.stringify(data)); 
        // } 
    }); 
 }); 
```

В основном код сначала вызывает функцию **getToken,** чтобы получить токен FCM от firebase, а затем в **обратном вызове** регистрирует другой обратный вызов **onNotification** для обработки того, что происходит при получении push-уведомления.

функция **onNotification** имеет значение данных, которое содержит данные уведомления. data.wasTapped указывает, отправлено ли уведомление, когда приложение находится на переднем плане или в фоновом режиме, так что мы можем определить отдельную логику для каждого случая. Теперь, чтобы вызвать выборочное push-уведомление, нажмите на разделе «Уведомление» на левой боковой панели, теперь это должно показать вам композитор уведомлений firebase, содержащий список отправленных прошлых уведомлений.

Если вы еще не отправили никаких push-уведомлений. Вы должны увидеть **отправку своей первой** кнопки **уведомления** .

**Примечание.** Композитор уведомлений будет выглядеть так:

![отправьте свое первое уведомление](https://preview.ibb.co/b4qc3a/1_s_W2_Ad_QJz_JEFjto6rz1_8r_A.png)

Примечание. При отправке push-уведомлений с использованием консоли **firebase** вам нужно выбрать имя приложения **com.pushSample.hello** в моем случае.

Чтобы отправить специальные данные конкретного приложения, выберите опционные параметры -> Пара ключей.

![расширенные настройки](https://preview.ibb.co/ensbUF/1_qp9_Mz_XBZvn_PYawyo0_TQBRA.png)

Объект данных в обратном вызове onNotification будет выглядеть следующим образом

```js
{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false} 
```

Также обратите внимание, что при отправке push-уведомлений с использованием API REST с вашего сервера приложений вместо компоновщика уведомлений firebase вам необходимо использовать следующий синтаксис:

```js
//POST: https://fcm.googleapis.com/fcm/send 
 //HEADER: Content-Type: application/json 
 //HEADER: Authorization: key=AIzaSy******************* 
 { 
  "notification":{ 
    "title":"Notification title", 
    "body":"Notification body", 
    "sound":"default", 
    "click_action":"FCM_PLUGIN_ACTIVITY", 
    "icon":"fcm_push_icon" 
  }, 
  "data":{ 
    "param1":"value1", 
    "param2":"value2" 
  }, 
    "to":"/topics/topicExample", 
    "priority":"high", 
    "restricted_package_name":"" 
 } 
 //sound: optional field if you want sound with the notification 
 //click_action: must be present with the specified value for Android 
 //icon: white icon resource name for Android >5.0 
 //data: put any "param":"value" and retreive them in the JavaScript notification callback 
 //to: device token or /topic/topicExample 
 //priority: must be set to "high" for delivering notifications on closed iOS apps 
 //restricted_package_name: optional field if you want to send only to a restricted app package (ie: com.myapp.test) 
```

**Примечание: _действие_ «click _action»:_** поле **_«FCM_ PLUGIN\_ACTIVITY»** очень важно, так как не упоминает, что он не будет выполнять обратный вызов onNotification в режиме переднего плана.

![сделано с использованием android](https://image.ibb.co/gRS1UF/0_QIzc_JZH9_Nqzpjygg.jpg)

### Внедрение iOS

Для реализации iOS нам потребуются следующие вещи, которые будут созданы на [странице разработчика Apple.](https://developer.apple.com/) Я использую XCODE 8.3

Идентификатор приложения: com.example.app Ключ аутентификации Apple Push Notification (APNs Auth Key) Профиль разработки с поддержкой Push Notifications включен. Сертификаты APNs

Также [Firebase docs для push-уведомлений](https://firebase.google.com/docs/cloud-messaging/ios/client) является отличной отправной точкой в ​​глубину.

Примечание. Вы не можете запускать push-уведомления в симуляторе, вам понадобится фактическое устройство.

Давай начнем.

Сначала войдите в консоль разработчика firebase и выберите существующий проект или создайте новый проект, мы будем использовать тот же проект pushSample. В обзоре проекта добавьте еще одно приложение с iOS в качестве платформы. В появившемся всплывающем окне введите следующие данные:

*   Шаг 1 **Идентификатор пакета:** это уникальный идентификатор, который используется для идентификации приложения в Apple appstore, он должен быть таким же, как идентификатор пакета, который вы укажете в файле config.xml проекта cordova или в разделе идентификатора пакета в xCode. мы будем использовать **com.pushSample.hello** **Имя приложения** . Это имя псевдонима идентификатора опции, мы будем использовать то же имя, которое будет отображаться в меню приложения iOS, которое является PushSample. **Идентификатор магазина приложений** : оставьте это поле пустым.

Как только вы нажмете на приложение регистрации, появится шаг 2 приложения iOS.

*   Шаг 2 Здесь нажмите кнопку загрузки **Googleservice-info.plist** , чтобы загрузить файл, который мы будем использовать в последующих шагах.

**Шаг 3 и Шаг 4,** мы можем пропустить, поскольку они будут обрабатываться внутренне плагином FCM Cordova.

После добавления приложения iOS в ваш проект Нажмите значок шестеренки, кроме метки обзора на левой боковой панели, и выберите параметры проекта. (См. Рисунок ниже). Это должно по умолчанию открыть вкладку «Общие» в настройках вашего проекта.

![Настройки проекта](https://preview.ibb.co/ddcwwv/1_c_Pee_Xdmf76l_W0_YRr_I83_Log.png)

Затем нажмите на приложение iOS в приложениях -> Приложения iOS. В информации о приложении iOS обновите **префикс идентификатора приложения** , значение которого вы получите в Центре пользователей Apple на вкладке членства.

Теперь перейдите на вкладку « **Облачные сообщения** » -> Конфигурация приложения iOS.

![облачные сообщения](https://preview.ibb.co/m2Ktbv/1_0p_Vvf_JGYb_TEUIhwr_DIek_Q.png)

Здесь, как обсуждалось ранее, загрузите APNs Auth Key, который вы создали в центре участника Apple. Затем мы создадим настройку приложения на стороне клиента. Создайте новую папку sampleApp в папке разработки, для меня это
```
/Volumes/Development/ 
```

поэтому новая папка будет
```
/Volumes/Development/pushSample 
 cd /Volumes/Development/pushSample 
```

Создайте новый проект cordova, **Примечание. При необходимости используйте sudo**
```
cordova create pushSample 
 cd pushSample 
```

Теперь добавьте последнюю платформу iOS
```
sudo cordova platform add ios 
```

Теперь вставьте файл **Googleservice-info.plist,** который мы скачали ранее в корневой папке проекта кордовы, для меня это
```
/Volumes/Development/pushSample/pushSample 
```

добавьте плагин cordova fcm.
```
cordova plugin add cordova-plugin-fcm 
```

Обновите идентификатор приложения и имя приложения по умолчанию с идентификатором пакета, который мы решили ранее, при настройке консоли firebase и имени приложения.

```xml
<widget id="com.pushSample.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
    <name>PushSample</name> 
```

На этом этапе образец кода будет иметь файл app.js, который вы можете изменить и добавить функции getToken и onNotification, такие же, как android. Код javascript такой же для обеих платформ.

Следующая команда выполнения команды cordova
```
sudo cordova build ios 
```

Как только команда corova build будет успешной, откройте приложение в xcode. Для этого откройте файл xcode.proj, который будет расположен в
```
your_cordova_project/platforms/ios/app_name.xcodeproj 
```

для меня это
```
/Volumes/Development/pushSample/pushSample/platforms/ios/PushSample.xcodeproj 
```

![Проект Xcode](https://preview.ibb.co/hePLOa/1_Xe_Kh4_VXU_o_BQ05_UGRa_B6_A.png)

Затем включите Push-уведомления на вкладке «Возможности» проекта.

Подключите фактическое устройство и запустите приложение.

Теперь запустите push-уведомление от составителя уведомлений Firebase, и все должно работать ... ![счастливый steve](https://image.ibb.co/jz8VOa/1vnhjv.jpg)

[Оригинальный пост на Среднем](https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988) .