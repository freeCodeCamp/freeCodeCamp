---
title: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
localeTitle: Integración de mensajería en la nube de Firebase para aplicaciones híbridas Cordova
---
## Integración de mensajería en la nube de Firebase para aplicaciones híbridas Cordova

Este es un recorrido sencillo y directo sobre cómo implementar la notificación de inserción en Android así como en iOS utilizando el [complemento de cordova para fcm](https://github.com/fechanique/cordova-plugin-fcm) y Google Firebase FCM desde cero. Usaré Ubuntu 16.04 LTS para esto, pero el sistema operativo usado para el desarrollo no debería importar mucho.

## Integración FCM para aplicaciones híbridas Cordova

### Implementación de Android

Crear una carpeta vacía pushSample
```
cd '/opt/lampp/htdocs' 
 mkdir pushSample 
 cd pushSample 
 cordova create pushSample 
 cd pushSample 
 cordova platform add android 
 cordova plugin add cordova-plugin-FCM 
```

Al agregar el complemento FCM de Córdova se mostrará un error:
```
Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder. 
```

Nota: Esto se debe a que no hemos agregado el archivo google-services.json que se debe crear en los siguientes pasos.

A continuación, abra la [consola de Google Firebase](https://console.firebase.google.com/) y agregue el proyecto (básicamente significa crear un nuevo proyecto)

Una vez creado el proyecto, haga clic en la sección Notificaciones en el panel lateral izquierdo.

Ahora haga clic en el ícono de Android para agregar soporte de plataforma **Android** a nuestro proyecto.

En el siguiente formulario emergente complete los detalles de la siguiente manera: **Nombre del paquete de Android: el nombre del** paquete o ID es el identificador único de una aplicación en la tienda de juegos. Tenga en cuenta que es un valor muy importante que no se puede cambiar para una aplicación una vez que se carga en la Play Store. Estará en la sintaxis inversa del nombre de dominio: por ejemplo, hello.pushSample.com tendrá un ID de aplicación: com.pushSample.hello. También en el archivo **config.xml** en su proyecto de cordova configure el mismo id de aplicación. Para nuestro proyecto de muestra será en: pushSample / pushSample / config.xml Por ejemplo, para mí los contenidos de este archivo son:

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

Nota la etiqueta

```xml
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
```

Aquí el atributo id es el **identificador de** paquete que se emitirá por defecto **io.cordova.hellocordova** cambiarlo por el ID de aplicación que ha especificado en la consola de base de fuego. Estaré usando com.pushSample.hello

El siguiente campo a completar en la ventana emergente de la consola firebase es:

**Apodo de la aplicación (opcional):** este puede ser el mismo nombre de aplicación que se muestra en el menú de la aplicación, esto también se puede cambiar en el config.xml, de forma predeterminada será HelloCordova, lo actualizaré a **PushSample**

**Certificado de firma de depuración SHA-1 (opcional):** esto es opcional, déjelo en blanco.

A continuación, haga clic en **Registrar aplicación**

El siguiente paso es descargar el archivo **json de google services** .

![descargar google services json](https://preview.ibb.co/nEjbwv/1_Wje_TClf8o9z_Dxw3_W_wkpw.png)

Haga clic en el botón **Descargar google-services.json** , que debería descargar el archivo a su PC.

Una vez que obtenga el archivo, péguelo en la carpeta raíz de su proyecto de cordova, en mi caso:
```
/opt/lampp/htdocs/pushSample/pushSample 
```

Siguiente construir el proyecto
```
cordova build android 
```

Después de agregar el archivo google-services.json, debe compilarse correctamente.

A continuación, tenemos que escribir el código del lado del cliente para manejar las notificaciones push:

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

Básicamente, el código primero llama a la función **getToken** para obtener un token FCM de base de fuego, luego en la devolución de llamada se registra otra **notificación de** devolución de llamada para controlar lo que sucede cuando se recibe una notificación de inserción.

La función **onNotification** tiene un valor de datos que contiene los datos de notificación. data.wasTapped indica si la notificación se envía cuando la aplicación está en primer plano o en segundo plano, para que podamos definir la lógica separada para cada caso. Ahora, para activar una muestra de notificación de inserción, haga clic en la sección de Notificación en el panel del lado izquierdo, esto ahora debería mostrarle el editor de notificaciones de base de fuego, mostrando la lista de notificaciones pasadas enviadas.

En caso de que aún no hayas enviado notificaciones push. Deberías ver un botón de **enviar tu primera notificación** .

**Nota:** El compositor de notificaciones se verá así:

![envía tu primera notificación](https://preview.ibb.co/b4qc3a/1_s_W2_Ad_QJz_JEFjto6rz1_8r_A.png)

Nota Al enviar una notificación push utilizando la consola firebase, debe seleccionar el nombre de la aplicación **com.pushSample.hello** en mi caso.

Para enviar los datos específicos de la aplicación personalizada, seleccione las opciones avanzadas -> Pares de valores clave.

![opciones avanzadas](https://preview.ibb.co/ensbUF/1_qp9_Mz_XBZvn_PYawyo0_TQBRA.png)

El objeto de datos en la devolución de llamada onNotification se verá como sigue

```js
{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false} 
```

También tenga en cuenta que al enviar notificaciones push utilizando las API REST de su servidor de aplicaciones en lugar del compositor de notificaciones de base de fuego, debe usar la siguiente sintaxis:

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

**Nota: el campo " _acción de_ clic _": "FCM_ PLUGIN\_ACTIVITY"** es muy importante ya que no mencionar que no ejecutará la devolución de llamada onNotification en modo de primer plano.

![hecho con la implementación de Android](https://image.ibb.co/gRS1UF/0_QIzc_JZH9_Nqzpjygg.jpg)

### Implementación de iOS

Para la implementación de iOS, requerimos que se generen las siguientes cosas en la [página de desarrolladores de Apple.](https://developer.apple.com/) Estoy usando XCODE 8.3

ID de aplicación: com.example.app Clave de autenticación de notificaciones push de Apple (clave de autenticación APNs) Perfil de aprovisionamiento de desarrollo con notificaciones push habilitadas. Certificados APNs

También los [documentos de Firebase para notificaciones push](https://firebase.google.com/docs/cloud-messaging/ios/client) son un excelente punto de partida en profundidad.

Nota: No puede ejecutar notificaciones push en el simulador, necesitará un dispositivo real.

Vamos a empezar.

Primero, inicie sesión en la consola del desarrollador de firebase y seleccione un proyecto existente o cree un nuevo proyecto, usaremos el mismo proyecto pushSample. En el resumen del proyecto agregue otra aplicación con iOS como plataforma. En la ventana emergente que aparece, ingrese los siguientes detalles:

*   Paso 1 **Id. De paquete:** este es el identificador único que se usa para identificar una aplicación en la tienda de aplicaciones de Apple, debe ser el mismo que el identificador de paquete que especificará en el archivo config.xml del proyecto cordova o la sección de Id. De paquete en xCode. Vamos a utilizar **com.pushSample.hello** **Nombre de la aplicación** : este es el identificador de la opción de nick, usaremos el mismo nombre que se mostrará en el menú de la aplicación de iOS, que es PushSample. **Identificación de la App Store** : deje esto en blanco.

Una vez que haga clic en registrarse, aparecerá el paso 2 de la aplicación iOS.

*   Paso 2 Aquí, haga clic en el botón descargar **Googleservice-info.plist** para descargar el archivo que utilizaremos en los pasos posteriores.

**Paso 3 y Paso 4** podemos omitir ya que estos serán manejados internamente por el complemento FCM de cordova.

Una vez que la aplicación iOS se agregue a su proyecto, haga clic en el ícono de engranaje junto a la etiqueta de resumen en el panel lateral izquierdo y seleccione la configuración del proyecto. (Consulte la imagen de abajo.). Esto debería, por defecto, abrir la pestaña General de la configuración de su proyecto.

![Ajustes del proyecto](https://preview.ibb.co/ddcwwv/1_c_Pee_Xdmf76l_W0_YRr_I83_Log.png)

Luego haga clic en su aplicación iOS en Sus aplicaciones -> Aplicaciones iOS. En los detalles de la aplicación de iOS, actualice el **Prefijo de ID de** la **aplicación** , el valor que obtendrá en el Centro de Miembros de Apple en la pestaña de membresía.

Ahora cambie a la pestaña **Mensajería** en la **nube** -> sección de configuración de la aplicación iOS.

![mensajes en la nube](https://preview.ibb.co/m2Ktbv/1_0p_Vvf_JGYb_TEUIhwr_DIek_Q.png)

Aquí, como se mencionó anteriormente, cargue la clave de autenticación APN que generó en el centro de miembros de Apple. A continuación hacemos la configuración de la aplicación del lado del cliente. Cree una nueva carpeta sampleApp en su carpeta de desarrollo, para mí es
```
/Volumes/Development/ 
```

por lo que la nueva carpeta será
```
/Volumes/Development/pushSample 
 cd /Volumes/Development/pushSample 
```

Cree un nuevo proyecto de cordova, **Nota: use sudo si es necesario**
```
cordova create pushSample 
 cd pushSample 
```

Ahora agregue la última plataforma iOS
```
sudo cordova platform add ios 
```

Ahora pegue el archivo **Googleservice-info.plist** que descargamos anteriormente en la carpeta raíz del proyecto cordova, para mí es
```
/Volumes/Development/pushSample/pushSample 
```

Agregue el plugin de cmc de cordova.
```
cordova plugin add cordova-plugin-fcm 
```

Actualice la ID de aplicación y el nombre de aplicación predeterminados con la ID de paquete que decidimos anteriormente al configurar la consola de base de fuego y el nombre de la aplicación.

```xml
<widget id="com.pushSample.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
    <name>PushSample</name> 
```

En este punto, el código de ejemplo tendrá un archivo app.js, que puede modificar y agregar las funciones getToken y onNotification igual que Android. El código javascript es el mismo para ambas plataformas.

Siguiente ejecutar cordova comando de compilación
```
sudo cordova build ios 
```

Una vez que el comando de compilación de cordova sea exitoso, abra la aplicación en xcode. Para hacer esto, abra el archivo xcode.proj, que se ubicará en
```
your_cordova_project/platforms/ios/app_name.xcodeproj 
```

para mi es
```
/Volumes/Development/pushSample/pushSample/platforms/ios/PushSample.xcodeproj 
```

![Proyecto Xcode](https://preview.ibb.co/hePLOa/1_Xe_Kh4_VXU_o_BQ05_UGRa_B6_A.png)

A continuación, habilite Notificaciones Push en la pestaña de Capacidades del proyecto.

Conecta un dispositivo real y ejecuta la aplicación.

Ahora active la notificación de inserción desde el editor de notificaciones de base de fuego y todo debería funcionar ... ![feliz Steve](https://image.ibb.co/jz8VOa/1vnhjv.jpg)

[El post original en medio](https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988) .