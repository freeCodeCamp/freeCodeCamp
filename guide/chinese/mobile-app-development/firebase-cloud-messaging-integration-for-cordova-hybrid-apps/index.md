---
title: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
localeTitle: 适用于Cordova混合应用程序的Firebase云消息传递集成
---
## 适用于Cordova混合应用程序的Firebase云消息传递集成

这是关于如何在Android和iOS中使用[适用于fcm](https://github.com/fechanique/cordova-plugin-fcm)和Google Firebase FCM的[cordova插件](https://github.com/fechanique/cordova-plugin-fcm)实现推送通知的基本直接演练。 我将使用Ubuntu 16.04 LTS，但用于开发的操作系统应该不重要。

## Cordova混合应用程序的FCM集成

### Android实施

创建一个空文件夹pushSample
```
cd '/opt/lampp/htdocs' 
 mkdir pushSample 
 cd pushSample 
 cordova create pushSample 
 cd pushSample 
 cordova platform add android 
 cordova plugin add cordova-plugin-FCM 
```

添加cordova FCM插件时会显示错误：
```
Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder. 
```

注意：这是因为我们尚未添加必须在接下来的步骤中创建的google-services.json文件。

接下来打开[google firebase控制台](https://console.firebase.google.com/)并添加项目（基本上意味着创建一个新项目）

创建项目后，单击左侧面板中的“通知”部分。

现在点击Android图标，为我们的项目添加**Android**平台支持。

在下一个弹出窗体中填写详细信息如下： **Android软件包名称：**软件包名称或ID是Play商店中应用程序的唯一标识符。 请注意，这是一个非常重要的值，一旦将应用程序上传到Play商店，就无法对其进行更改。 它将采用反向域名语法：例如，hello.pushSample.com将具有app id：com.pushSample.hello。 同样在cordova项目的**config.xml**文件中设置相同的应用程序ID。 对于我们的示例项目，它将在： pushSample / pushSample / config.xml中 例如对我来说这个文件的内容是：

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

注意标签

```xml
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
```

这里的属性id是包**ID** ，默认情况下是**io.cordova.hellocordova**将其更改为您在firebase控制台中指定的应用ID。我将使用com.pushSample.hello

要在firebase控制台弹出窗口中填充的下一个字段是：

**应用程序昵称（可选）：**这可以是应用程序菜单中显示的相同应用程序名称，也可以在config.xml中更改，默认情况下它将是HelloCordova，我会将其更新为**PushSample**

**调试签名证书SHA-1（可选）：**这是可选的，请留空。

然后单击**Register App**

下一步是下载**google服务json**文件。

![下载谷歌服务json](https://preview.ibb.co/nEjbwv/1_Wje_TClf8o9z_Dxw3_W_wkpw.png)

单击**下载google-services.json**按钮，该按钮应将文件下载到您的PC。

一旦你把文件粘贴到你的cordova项目的根文件夹中，在我的情况下：
```
/opt/lampp/htdocs/pushSample/pushSample 
```

接下来构建项目
```
cordova build android 
```

添加google-services.json文件后，它应该成功构建。

接下来，我们必须编写用于处理推送通知的客户端代码：

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

代码基本上首先调用**getToken**函数从**firebase**获取FCM令牌，然后在回调中调用另一个回调**onNotification**来处理收到推送通知时发生的事情。

**onNotification**函数具有包含通知数据的数据值。 data.wasTapped指示当应用程序处于前台或后台时是否发送通知，以便我们可以为每个案例定义单独的逻辑。 现在，要触发示例推送通知，请单击左侧面板中的“通知”部分，现在应该显示firebase通知编写器，显示已发送的过去通知的列表。

如果您尚未发送任何推送通知。您应该看到**发送第一个通知**按钮。

**注意：** Notification Composer将如下所示：

![发送您的第一个通知](https://preview.ibb.co/b4qc3a/1_s_W2_Ad_QJz_JEFjto6rz1_8r_A.png)

注意在使用firebase控制台发送推送通知时，您需要在我的案例中选择应用程序名称**com.pushSample.hello** 。

要发送自定义应用程序特定数据，请选择高级选项 - >键值对。

![高级选项](https://preview.ibb.co/ensbUF/1_qp9_Mz_XBZvn_PYawyo0_TQBRA.png)

onNotification回调中的数据对象如下所示

```js
{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false} 
```

另请注意，从应用服务器而不是firebase通知编写器使用REST API发送推送通知时，您必须使用以下语法：

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

**注意：“单击_操作”：“FCM_ PLUGIN\_ACTIVITY”**字段非常重要，因为没有提到它不会在前台模式下执行onNotification回调。

![用android实现完成](https://image.ibb.co/gRS1UF/0_QIzc_JZH9_Nqzpjygg.jpg)

### iOS实施

对于iOS实现，我们需要在[apple开发者页面中](https://developer.apple.com/)生成以下内容[。](https://developer.apple.com/) 我正在使用XCODE 8.3

应用ID：com.example.app Apple推送通知身份验证密钥（APNs身份验证密钥） 启用推送通知的开发配置文件。 APNs证书

此外， [针对推送通知的Firebase文档](https://firebase.google.com/docs/cloud-messaging/ios/client)也是一个非常好的深度起点。

注意：您无法在模拟器中运行推送通知，您将需要一个实际的设备。

让我们开始。

首先登录firebase开发人员的控制台，选择现有项目或创建一个新项目，我们将使用相同的pushSample项目。 在项目概述中添加另一个以iOS为平台的应用程序。 在弹出的弹出窗口中，输入以下详细信息：

*   步骤1 **Bundle id：**这是用于标识apple appstore中的应用程序的唯一标识符，这应该与您将在cordova项目的config.xml文件或xCode中的Bundle Id部分中指定的bundle id相同。 我们将使用**com.pushSample.hello** **应用程序名称** ：这是选项标识符昵称，我们将使用相同的名称，该名称将显示在iOS应用程序菜单中，即PushSample。 **App Store Id** ：留空。

单击注册应用程序后，将显示iOS应用程序步骤2。

*   第2步 点击下载**Googleservice-info.plist**按钮下载我们将在后面的步骤中使用的文件。

我们可以跳过**步骤3和步骤4，**因为这些将由cordova FCM插件在内部处理。

将iOS应用程序添加到项目后单击左侧面板中概述标签旁边的齿轮图标，然后选择项目设置。 （参见下图。）。默认情况下，这应该打开项目设置的“常规”选项卡。

![项目设置](https://preview.ibb.co/ddcwwv/1_c_Pee_Xdmf76l_W0_YRr_I83_Log.png)

然后单击您的应用程序中的iOS应用程序 - > iOS应用程序。 在iOS应用程序详细信息中，更新**App ID Prefix** ，您将在成员选项卡下的Apple Member Center中获得该值。

现在切换到**Cloud Messaging**选项卡 - > iOS app configuration部分。

![云消息](https://preview.ibb.co/m2Ktbv/1_0p_Vvf_JGYb_TEUIhwr_DIek_Q.png)

如前所述，上传您在Apple会员中心生成的APN Auth Key。 接下来我们进行客户端应用程序设置。 在我的开发文件夹中创建一个新的文件夹sampleApp，对我而言
```
/Volumes/Development/ 
```

所以新的文件夹将是
```
/Volumes/Development/pushSample 
 cd /Volumes/Development/pushSample 
```

创建一个新的cordova项目， **注意：如果需要** ， **请使用sudo**
```
cordova create pushSample 
 cd pushSample 
```

现在添加最新的iOS平台
```
sudo cordova platform add ios 
```

现在将我们之前下载的**Googleservice-info.plist**文件粘贴到cordova项目根文件夹中，对我来说就是这样
```
/Volumes/Development/pushSample/pushSample 
```

添加cordova fcm插件。
```
cordova plugin add cordova-plugin-fcm 
```

使用我们在配置firebase控制台和应用程序名称时先前确定的软件包ID更新默认应用程序ID和应用程序名称。

```xml
<widget id="com.pushSample.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
    <name>PushSample</name> 
```

此时示例代码将有一个app.js文件，您可以修改并添加与android相同的getToken和onNotification函数。两个平台的javascript代码相同。

接下来运行cordova build命令
```
sudo cordova build ios 
```

完成cordova构建命令后，在xcode中打开应用程序。要执行此操作，请打开位于的xcode.proj文件
```
your_cordova_project/platforms/ios/app_name.xcodeproj 
```

对我来说是
```
/Volumes/Development/pushSample/pushSample/platforms/ios/PushSample.xcodeproj 
```

![Xcode项目](https://preview.ibb.co/hePLOa/1_Xe_Kh4_VXU_o_BQ05_UGRa_B6_A.png)

接下来，在项目的“功能”选项卡中启用“推送通知”。

连接实际设备并运行应用程序。

现在从firebase通知编辑器触发推送通知，一切都应该工作...... ![快乐史蒂夫](https://image.ibb.co/jz8VOa/1vnhjv.jpg)

[中的原始帖子](https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988) 。