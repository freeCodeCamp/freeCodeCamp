---
title: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
---
## Firebase Cloud Messaging Integration for Cordova Hybrid Apps
This is a basic straight forward walk through regarding how to implement push notification in Android as well as iOS using the <a href='https://github.com/fechanique/cordova-plugin-fcm' target='_blank' rel='nofollow'> cordova plugin for fcm </a> and Google Firebase FCM from scratch. 
I will be using Ubuntu 16.04 LTS for this, but OS used for development should not matter much.

## FCM Integration for Cordova Hybrid Apps

### Android Implementation

Create an empty folder pushSample
```
cd '/opt/lampp/htdocs'
mkdir pushSample
cd pushSample
cordova create pushSample
cd pushSample
cordova platform add android
cordova plugin add cordova-plugin-FCM
```
While adding the cordova FCM plugin will show an error :
```
Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder.
```

Note : This is because we have not added the google-services.json file which has to be created in the next following steps.

Next open the <a href='https://console.firebase.google.com/' target='_blank' rel='nofollow'> google firebase console </a> and Add Project ( basically means create a new project )

Once the project is created click on the Notifications section in the left side panel.

Now click on the Android icon to add **Android** platform support to our project.

In the next popup form fill the details as follows :
**Android package name :** Package name or ID is the unique identifier for an app in the play store. 
Note that it is a very important value which cannot be changed for an app once it is uploaded to the play store. 
It will be in reverse domain name syntax : eg hello.pushSample.com will have app id : com.pushSample.hello.
Also in the **config.xml** file in your cordova project set the same app id.
For our sample project it will be in :
pushSample/pushSample/config.xml
eg for me the contents of this file are :

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
Note the tag
```xml
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

Here the attribute id is the package **id** which will by default be **io.cordova.hellocordova** change it to the app ID you have specified in the firebase console. I will be using com.pushSample.hello

Next field to be filled in the firebase console popup is :

**App nickname (optional) :** This can be the same app name which is displayed in the menu for the app, this can also be changed in the config.xml, by default it will be HelloCordova, i will update it to **PushSample**

**Debug signing certificate SHA-1 (optional) :** This is optional please leave it blank.

Next click on **Register App**

Next step is to download the **google services json** file.

<img src="https://preview.ibb.co/nEjbwv/1_Wje_TClf8o9z_Dxw3_W_wkpw.png" alt="download google services json" border="0">

Click on the **Download google-services.json** button, which should download the file to your PC.

Once you get the file paste it in the root folder of your cordova project, in my case :

```
/opt/lampp/htdocs/pushSample/pushSample
```

Next build the project

```
cordova build android
```

After adding the google-services.json file it should build successfully.

Next we have to write the client side code for handling push notifications :

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
The code basically first calls the **getToken** function to get an FCM token from firebase, then in the callback registers another callback **onNotification** to handle what happens when a push notification is received.

the **onNotification** function has a data value which contains the notification data. data.wasTapped indicates whether the notification is sent when the app is in foreground or background, so that we can define separate logic for each case.
Now to trigger a sample push notification click on the Notification section in the left side panel, this should now show you the firebase notification composer, showing the list of past notifications sent.

In case you have not sent any push notifications yet. You should see a **send your first notification** button.

**Note:** The Notification Composer will look like this :

<img src="https://preview.ibb.co/b4qc3a/1_s_W2_Ad_QJz_JEFjto6rz1_8r_A.png" alt="send your first notification" border="0">

Note While sending push notification using firebase console you need to select app name **com.pushSample.hello** in my case.

To send the custom application specific data select advance options -> Key value pairs.

<img src="https://preview.ibb.co/ensbUF/1_qp9_Mz_XBZvn_PYawyo0_TQBRA.png" alt="advanced options" border="0">

The data object in the onNotification callback will look as follows

```js
{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false}
```

Also note while sending push notifications using REST APIs from your app server instead of the firebase notification composer, you have to use the following syntax :

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
//restricted_package_name: optional field if you want to send only to a restricted app package (i.e: com.myapp.test)
```
**Note : “click_action”:”FCM_PLUGIN_ACTIVITY”** field is very important as not mentioning it will not execute the onNotification callback in foreground mode.

<img src="https://image.ibb.co/gRS1UF/0_QIzc_JZH9_Nqzpjygg.jpg" alt="done with android implementation" border="0">

### iOS Implementation

For the iOS implementation we will require the following things to be generated in the <a href='https://developer.apple.com/' target='_blank' rel='nofollow'> apple developer page.</a>
I am using XCODE 8.3

App ID : com.example.app
Apple Push Notification Authentication Key ( APNs Auth Key )
Development Provisioning Profile with Push Notifications Enabled.
APNs Certificates

Also <a href='https://firebase.google.com/docs/cloud-messaging/ios/client' target='_blank' rel='nofollow'> Firebase docs for push notifications </a> is an excellent in depth starting point.

Note: You cannot run push notifications in the simulator, you will need an actual device.

Lets begin.

Firstly login to firebase developer’s console, and select an existing project or create a new project, we will be using the same pushSample project.
In the project overview add another app with iOS as platform.
In the popup that comes up, enter the following details :
* Step 1
**Bundle id :** this is the unique identifier which is used to identify an app in the apple appstore, this should be same as the bundle id you will specify in the config.xml file of the cordova project or the Bundle Id section in xCode.
we will use **com.pushSample.hello**
**App Name** : This is the option identifier nick name, we will be using the same name which will display in the iOS app menu which is PushSample.
**App Store Id** : Leave this blank.

Once you click on register app the iOS app step 2 appears.

* Step 2
Here click on the download **Googleservice-info.plist** button to download the file which we will use in the later steps.

**Step3 and Step 4** we can skip as these will be handled internally by the cordova FCM plugin.

Once the iOS app is added to your project Click on the gear icon besides the overview label in the left side panel and select project settings. ( Refer below image. ) . This should by default open the General Tab of your project settings.

<img src="https://preview.ibb.co/ddcwwv/1_c_Pee_Xdmf76l_W0_YRr_I83_Log.png" alt="Project Settings" border="0">

Next click on your iOS app in Your Apps -> iOS Apps.
In the iOS app details update the **App ID Prefix**, the value for which you will get in the Apple Member Center under the membership tab.

Now switch to the **Cloud Messaging** tab -> iOS app configuration section.

<img src="https://preview.ibb.co/m2Ktbv/1_0p_Vvf_JGYb_TEUIhwr_DIek_Q.png" alt="cloud messaging" border="0">

Here as discussed earlier upload the APNs Auth Key you generated in the Apple member center.
Next we do the client side app setup.
Create a new folder sampleApp in your development folder, for me it is

```
/Volumes/Development/
```

so the new folder will be

```
/Volumes/Development/pushSample
cd /Volumes/Development/pushSample
```

Create a new cordova project, **Note : Use sudo if required**

```
cordova create pushSample
cd pushSample
```

Now add the latest iOS platform

```
sudo cordova platform add ios
```

Now paste the **Googleservice-info.plist** file we downloaded earlier in the cordova project root folder, for me it is
```
/Volumes/Development/pushSample/pushSample
```

add the cordova fcm plugin.
```
cordova plugin add cordova-plugin-fcm
```

Update the default app id and app name with the bundle id we decided earlier while configuring firebase console and the app name.

```xml
<widget id="com.pushSample.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>PushSample</name>
```

At this point the sample code will have an app.js file, which you can modify and add the getToken and onNotification functions same as android. The javascript code is same for both platforms.

Next run cordova build command

```
sudo cordova build ios
```

Once the cordova build command is successful, open the app in xcode. To do this open the xcode.proj file, which will be located in

```
your_cordova_project/platforms/ios/app_name.xcodeproj
```

for me it is

```
/Volumes/Development/pushSample/pushSample/platforms/ios/PushSample.xcodeproj
```

<img src="https://preview.ibb.co/hePLOa/1_Xe_Kh4_VXU_o_BQ05_UGRa_B6_A.png" alt="Xcode Project" border="0">

Next enable Push Notifications in the Capabilities Tab of the project.

Connect an actual device and run the app.

Now trigger the push notification from the firebase notification composer and everything should work…
<img src="https://image.ibb.co/jz8VOa/1vnhjv.jpg" alt="happy steve" border="0">

<a href='https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988' target='_blank' rel='nofollow'>The original post on Medium</a>.

