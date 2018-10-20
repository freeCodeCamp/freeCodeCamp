---
title: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
localeTitle: Integração do Firebase Cloud Messaging para aplicativos híbridos Cordova
---
## Integração do Firebase Cloud Messaging para aplicativos híbridos Cordova

Este é um passo básico básico sobre como implementar a notificação de envio no Android, bem como iOS usando o [plugin cordova para fcm](https://github.com/fechanique/cordova-plugin-fcm) e Google Firebase FCM a partir do zero. Eu vou estar usando o Ubuntu 16.04 LTS para isso, mas o sistema operacional usado para desenvolvimento não deve importar muito.

## Integração do FCM para aplicativos híbridos do Cordova

### Implementação Android

Criar uma pasta vazia pushSample
```
cd '/opt/lampp/htdocs' 
 mkdir pushSample 
 cd pushSample 
 cordova create pushSample 
 cd pushSample 
 cordova platform add android 
 cordova plugin add cordova-plugin-FCM 
```

Ao adicionar o plug-in cordova FCM, será exibido um erro:
```
Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder. 
```

Observação: isso acontece porque não adicionamos o arquivo google-services.json que precisa ser criado nas próximas etapas a seguir.

Em seguida, abra o [console](https://console.firebase.google.com/) do [Google Firebase](https://console.firebase.google.com/) e adicione o projeto (basicamente significa criar um novo projeto)

Uma vez que o projeto é criado, clique na seção Notificações no painel do lado esquerdo.

Agora clique no ícone do Android para adicionar suporte à plataforma **Android** ao nosso projeto.

No formulário seguinte, preencha os detalhes da seguinte forma: **Nome do pacote Android: o** nome ou o ID do pacote é o identificador exclusivo de um aplicativo na loja de jogos. Observe que é um valor muito importante que não pode ser alterado para um aplicativo depois que ele é enviado para a loja de jogos. Ele estará na sintaxe do nome de domínio reverso: por exemplo, hello.pushSample.com terá o ID do aplicativo: com.pushSample.hello. Também no arquivo **config.xml** no seu projeto cordova, defina o mesmo ID do aplicativo. Para o nosso projeto de amostra, estará em: pushSample / pushSample / config.xml por exemplo, para mim, o conteúdo deste arquivo é:

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

Observe a tag

```xml
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
```

Aqui, o atributo id é o **id** pacote que por padrão será **io.cordova.hellocordova** alterá-lo para o ID do aplicativo que você tenha especificado no console firebase. Eu estarei usando com.pushSample.hello

O próximo campo a ser preenchido no pop-up do console do Firebase é:

**Apelido App (opcional):** Este pode ser o mesmo nome do aplicativo que é exibido no menu para o aplicativo, isso também pode ser alterado no config.xml, por padrão, será HelloCordova, vou atualizá-lo para **PushSample**

**Certificado de assinatura de depuração SHA-1 (opcional):** Isto é opcional, por favor deixe em branco.

Em seguida, clique em **Registrar App**

O próximo passo é fazer o download do arquivo **json** do **google services** .

![baixar google services json](https://preview.ibb.co/nEjbwv/1_Wje_TClf8o9z_Dxw3_W_wkpw.png)

Clique no botão **Download google-services.json** , que deve baixar o arquivo para o seu PC.

Depois de obter o arquivo, cole-o na pasta raiz do seu projeto cordova, no meu caso:
```
/opt/lampp/htdocs/pushSample/pushSample 
```

Em seguida, construa o projeto
```
cordova build android 
```

Depois de adicionar o arquivo google-services.json, ele deve ser criado com sucesso.

Em seguida, temos que escrever o código do lado do cliente para lidar com notificações push:

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

O código basicamente chama a função **getToken** para obter um token FCM do Firebase e, em seguida, no retorno de chamada, registra outro retorno de chamada **onNotification** para lidar com o que acontece quando uma notificação por push é recebida.

a função **onNotification** possui um valor de dados que contém os dados de notificação. data.wasTapped indica se a notificação é enviada quando o aplicativo está em primeiro plano ou em segundo plano, para que possamos definir lógica separada para cada caso. Agora, para acionar uma notificação por push de amostra, clique na seção Notificação no painel do lado esquerdo. Agora, isso deve mostrar o compositor de notificação do Firebase, mostrando a lista de notificações enviadas anteriormente.

Caso você não tenha enviado nenhuma notificação push ainda. Você deve ver um botão **enviar sua primeira notificação** .

**Nota:** O Notification Composer ficará assim:

![envie sua primeira notificação](https://preview.ibb.co/b4qc3a/1_s_W2_Ad_QJz_JEFjto6rz1_8r_A.png)

Nota Ao enviar uma notificação por push usando o firebase console, é necessário selecionar o nome do aplicativo **com.pushSample.hello** no meu caso.

Para enviar os dados específicos do aplicativo personalizado, selecione as opções avançadas -> Pares de valores-chave.

![opções avançadas](https://preview.ibb.co/ensbUF/1_qp9_Mz_XBZvn_PYawyo0_TQBRA.png)

O objeto de dados no retorno de chamada onNotification terá a seguinte aparência

```js
{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false} 
```

Observe também ao enviar notificações por push usando APIs REST do seu servidor de aplicativos em vez do compositor de notificação do Firebase. É necessário usar a seguinte sintaxe:

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

**Observação: " _ação de_ clique _": campo "FCM_ PLUGIN\_ACTIVITY"** é muito importante, pois não mencionar que não executará o retorno de chamada onNotification no modo de primeiro plano.

![feito com implementação android](https://image.ibb.co/gRS1UF/0_QIzc_JZH9_Nqzpjygg.jpg)

### Implementação iOS

Para a implementação do iOS, precisaremos que as seguintes informações sejam geradas na [página do desenvolvedor](https://developer.apple.com/) da [Apple.](https://developer.apple.com/) Eu estou usando o XCODE 8.3

ID do aplicativo: com.example.app Chave de Autenticação de Notificação Push da Apple (Chave de Autenticação de APNs) Perfil de provisionamento de desenvolvimento com notificações push ativadas. Certificados de APNs

Além disso, os [documentos do Firebase para notificações push](https://firebase.google.com/docs/cloud-messaging/ios/client) são um excelente ponto de partida de profundidade.

Nota: Você não pode executar notificações push no simulador, você precisará de um dispositivo real.

Vamos começar.

Primeiro, faça login no console do desenvolvedor do Firebase e selecione um projeto existente ou crie um novo projeto. Usaremos o mesmo projeto pushSample. Na visão geral do projeto, adicione outro aplicativo com iOS como plataforma. No pop-up que aparece, insira os seguintes detalhes:

*   Passo 1 **ID do pacote:** este é o identificador exclusivo que é usado para identificar um aplicativo no appstore da Apple. Isso deve ser o mesmo que o ID do pacote que você especificar no arquivo config.xml do projeto cordova ou na seção ID do pacote no xCode. vamos usar **com.pushSample.hello** **Nome do aplicativo** : Este é o nome do apelido do identificador de opção. Usaremos o mesmo nome que será exibido no menu do aplicativo iOS, que é o PushSample. **ID da App Store** : deixe em branco.

Depois de clicar no aplicativo de registro, a etapa 2 do aplicativo para iOS é exibida.

*   Passo 2 Clique aqui no botão de download do **Googleservice-info.plist** para baixar o arquivo que usaremos nas etapas posteriores.

**Passo 3 e Passo 4** podemos pular como estes serão tratados internamente pelo plug-in cordova FCM.

Depois que o aplicativo para iOS for adicionado ao seu projeto, clique no ícone de roda dentada, além da etiqueta de visão geral, no painel do lado esquerdo, e selecione as configurações do projeto. (Consulte a imagem abaixo). Por padrão, isso deve abrir a guia Geral das configurações do seu projeto.

![Configurações do projeto](https://preview.ibb.co/ddcwwv/1_c_Pee_Xdmf76l_W0_YRr_I83_Log.png)

Em seguida, clique no seu aplicativo para iOS em Seus aplicativos -> Aplicativos para iOS. Nos detalhes do aplicativo iOS, atualize o **Prefixo de ID** do **aplicativo** , cujo valor você obterá no Apple Member Center, na guia de associação.

Agora mude para a guia **Cloud Messaging** -> seção de configuração do aplicativo iOS.

![mensagens em nuvem](https://preview.ibb.co/m2Ktbv/1_0p_Vvf_JGYb_TEUIhwr_DIek_Q.png)

Aqui, conforme discutido anteriormente, carregue a chave de autenticação de APNs gerada no centro de membros da Apple. Em seguida, fazemos a configuração do aplicativo no lado do cliente. Crie uma nova pasta sampleApp em sua pasta de desenvolvimento, para mim é
```
/Volumes/Development/ 
```

então a nova pasta será
```
/Volumes/Development/pushSample 
 cd /Volumes/Development/pushSample 
```

Crie um novo projeto cordova, **Nota: Use sudo se necessário**
```
cordova create pushSample 
 cd pushSample 
```

Agora adicione a última plataforma iOS
```
sudo cordova platform add ios 
```

Agora cole o arquivo **Googleservice-info.plist que baixamos** anteriormente na pasta raiz do projeto cordova, para mim é
```
/Volumes/Development/pushSample/pushSample 
```

adicione o plugin cordova fcm.
```
cordova plugin add cordova-plugin-fcm 
```

Atualize o ID do aplicativo padrão e o nome do aplicativo com o ID do pacote que decidimos anteriormente ao configurar o Firebase console e o nome do aplicativo.

```xml
<widget id="com.pushSample.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
    <name>PushSample</name> 
```

Neste ponto, o código de amostra terá um arquivo app.js, que você pode modificar e adicionar as funções getToken e onNotification da mesma forma que o Android. O código javascript é o mesmo para ambas as plataformas.

Próxima execução do comando cordova build
```
sudo cordova build ios 
```

Uma vez que o comando cordova build for bem sucedido, abra o aplicativo no xcode. Para fazer isso, abra o arquivo xcode.proj, que estará localizado em
```
your_cordova_project/platforms/ios/app_name.xcodeproj 
```

para mim é
```
/Volumes/Development/pushSample/pushSample/platforms/ios/PushSample.xcodeproj 
```

![Projeto Xcode](https://preview.ibb.co/hePLOa/1_Xe_Kh4_VXU_o_BQ05_UGRa_B6_A.png)

Em seguida, ative as notificações por push na guia Recursos do projeto.

Conecte um dispositivo real e execute o aplicativo.

Agora, acione a notificação por push do compositor de notificação do Firebase e tudo deve funcionar ... ![steve feliz](https://image.ibb.co/jz8VOa/1vnhjv.jpg)

[A postagem original no Medium](https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988) .