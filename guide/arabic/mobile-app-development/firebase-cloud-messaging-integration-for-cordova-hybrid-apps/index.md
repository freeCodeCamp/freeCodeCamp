---
title: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
localeTitle: Firebase Cloud Messaging Integration for Cordova Hybrid Apps
---
## Firebase Cloud Messaging Integration for Cordova Hybrid Apps

هذه خطوة أساسية إلى الأمام مباشرة من خلال كيفية تنفيذ إشعار الدفع في Android وكذلك iOS باستخدام [المكوّن الإضافي cordova لـ fcm](https://github.com/fechanique/cordova-plugin-fcm) و Google Firebase FCM من البداية. سأستخدم Ubuntu 16.04 LTS لهذا ، ولكن نظام التشغيل المستخدم في التطوير لا ينبغي أن يكون له أهمية كبيرة.

## دمج FCM لتطبيقات كوردوفا الهجينة

### تنفيذ Android

قم بإنشاء مجلد فارغ pushSample

 `cd '/opt/lampp/htdocs' 
 mkdir pushSample 
 cd pushSample 
 cordova create pushSample 
 cd pushSample 
 cordova platform add android 
 cordova plugin add cordova-plugin-FCM 
` 

أثناء إضافة المكوّن الإضافي Cordova FCM ، سيظهر خطأ:

 `Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder. 
` 

ملاحظة: يرجع ذلك إلى أننا لم نضف ملف google-services.json الذي يجب إنشاؤه في الخطوات التالية.

بعد ذلك افتح [وحدة التحكم](https://console.firebase.google.com/) في [google firebase وأضف](https://console.firebase.google.com/) مشروعًا (يعني أساسًا إنشاء مشروع جديد)

بمجرد إنشاء المشروع ، انقر على قسم الإشعارات في اللوحة الجانبية اليسرى.

انقر الآن على رمز **Android** لإضافة دعم **نظام Android** إلى مشروعنا.

في النموذج المنبثق التالي ، املأ التفاصيل كما يلي: **اسم حزمة Android: اسم** الحزمة أو معرفها هو المعرف الفريد لأحد التطبيقات في متجر Play. لاحظ أنها قيمة مهمة جدًا لا يمكن تغييرها لأحد التطبيقات بمجرد تحميلها إلى متجر Play. سيكون في بناء جملة اسم النطاق العكسي: على سبيل المثال ، سيكون لدى hello.pushSample.com معرف التطبيق: com.pushSample.hello. أيضا في ملف **config.xml** في مشروع كوردوفا الخاص بك تعيين معرف التطبيق نفسه. لمشروع العينة لدينا سيكون في: pushSample / pushSample / config.xml على سبيل المثال بالنسبة لي محتويات هذا الملف هي:

 `<?xml version='1.0' encoding='utf-8'?> 
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
` 

لاحظ العلامة

 `<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
` 

هنا هوية السمة هو **معرف** حزمة والتي سوف يكون افتراضيا **io.cordova.hellocordova** تغييره إلى معرف التطبيق الذي قمت بتحديده في وحدة تحكم firebase. سوف أستخدم com.pushSample.hello

الحقل التالي المراد ملؤه في النافذة المنبثقة لوحدة التحكم في firebase هو:

**لقب التطبيق (اختياري):** يمكن أن يكون هذا هو نفس اسم التطبيق الذي يتم عرضه في قائمة التطبيق ، ويمكن أيضًا تغيير هذا في config.xml ، بشكل افتراضي سيكون HelloCordova ، سأقوم بتحديثه إلى **PushSample**

**شهادة توقيع Debug SHA-1 (اختياري):** هذا اختياري ، يرجى تركه فارغًا.

انقر بعد ذلك على **تطبيق التسجيل**

الخطوة التالية هي تنزيل ملف **google services json** .

![تنزيل خدمات جوجل](https://preview.ibb.co/nEjbwv/1_Wje_TClf8o9z_Dxw3_W_wkpw.png)

انقر فوق الزر **تنزيل google-services.json** ، والذي يجب أن يقوم بتنزيل الملف على جهاز الكمبيوتر الخاص بك.

بمجرد حصولك على الملف ، الصقه في المجلد الجذر لمشروع Cordova الخاص بك ، في حالتي:

 `/opt/lampp/htdocs/pushSample/pushSample 
` 

المقبل بناء المشروع

 `cordova build android 
` 

بعد إضافة ملف google-services.json ، يجب أن يتم إنشاؤه بنجاح.

بعد ذلك ، يتعين علينا كتابة رمز جانب العميل للتعامل مع إشعارات الدفع:

 `FCMPlugin.getToken(function(token) { 
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
` 

يقوم الرمز أولاً باستدعاء الدالة **getToken** للحصول على رمز FCM المميز من firebase ، ثم في معاودة الاتصال يقوم بتسجيل رد **اتصال** آخر على **Notification** لمعالجة ما يحدث عند تلقي إعلام الدفع.

**تحتوي** الدالة **onNotification** على قيمة بيانات تحتوي على بيانات الإشعار. data.wasTapped يشير إلى ما إذا كان يتم إرسال الإشعار عندما يكون التطبيق في المقدمة أو الخلفية ، بحيث يمكننا تحديد منطق منفصل لكل حالة. الآن لإطلاق نموذج إخطار الدفع ، انقر على قسم الإشعارات في اللوحة الجانبية اليسرى ، يجب أن يعرض عليك الآن ملحن إخطار Firebase ، ويعرض قائمة بالإعلامات السابقة المرسلة.

في حال لم ترسل أي إشعارات دفع بعد. سترى زر **إرسال إشعارك الأول** .

**ملاحظة:** سيبدو ملحن الإشعار بالشكل التالي:

![أرسل إشعارك الأول](https://preview.ibb.co/b4qc3a/1_s_W2_Ad_QJz_JEFjto6rz1_8r_A.png)

ملاحظة أثناء إرسال إعلام الدفع باستخدام وحدة التحكم في **firebase ،** يجب تحديد اسم التطبيق **com.pushSample.hello** في حالتي.

لإرسال بيانات مخصصة للتطبيق المخصص ، حدد خيارات التقدم -> أزواج القيم الرئيسية.

![خيارات متقدمة](https://preview.ibb.co/ensbUF/1_qp9_Mz_XBZvn_PYawyo0_TQBRA.png)

سيظهر كائن البيانات في رد الاتصال onNotification على النحو التالي

 `{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false} 
` 

لاحظ أيضًا أنه عند إرسال إشعارات الدفع باستخدام واجهات برمجة تطبيقات REST من خادم تطبيقاتك بدلاً من ملحن إخطار Firebase ، يجب عليك استخدام البنية التالية:

 `//POST: https://fcm.googleapis.com/fcm/send 
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
` 

**ملاحظة: " _إجراء_ النقر _":_ يُعد** حقل **_"FCM_ PLUGIN\_ACTIVITY"** مهمًا جدًا لأن عدم الإشارة إليه لن يؤدي إلى تنفيذ معاودة onNotification في وضع المقدمة.

![مع تنفيذ الروبوت](https://image.ibb.co/gRS1UF/0_QIzc_JZH9_Nqzpjygg.jpg)

### تطبيق iOS

بالنسبة إلى تطبيق iOS ، سنحتاج إلى إنشاء الأشياء التالية في [صفحة مطور Apple.](https://developer.apple.com/) أنا أستخدم XCODE 8.3

معرف التطبيق: com.example.app مفتاح مصادقة إخطار الدفع من Apple (مفتاح مصادقة APN) تم توفير ملف تخصيص التزويد مع إعلامات الدفع. شهادات APNs

كما تعد [مستندات Firebase لإشعارات الدفع](https://firebase.google.com/docs/cloud-messaging/ios/client) نقطة بداية ممتازة في العمق.

ملاحظة: لا يمكنك تشغيل إشعارات الدفع في المحاكي ، ستحتاج إلى جهاز فعلي.

هيا نبدأ.

أولاً ، سجّل الدخول إلى وحدة تحكم مطور البرامج ، وحدد مشروعًا حاليًا أو أنشئ مشروعًا جديدًا ، وسنستخدم نفس مشروع pushSample. في نظرة عامة على المشروع ، أضف تطبيقًا آخر باستخدام نظام التشغيل iOS كنظام أساسي. في النافذة المنبثقة التي تظهر ، أدخل التفاصيل التالية:

*   الخطوة 1 **معرِّف الحزمة:** هذا هو المعرِّف الفريد الذي يتم استخدامه لتحديد تطبيق في متجر apple ، يجب أن يكون هذا هو نفس معرف الحزمة الذي ستحدده في ملف config.xml لملف Cordova أو قسم Bundle Id في xCode. سنستخدم **com.pushSample.hello** **اسم التطبيق** : هذا هو اسم معرف معرف الخيار ، سنستخدم نفس الاسم الذي سيتم عرضه في قائمة تطبيق iOS وهو PushSample. **رقم تعريف متجر التطبيقات** : اترك هذا فارغًا.

بمجرد النقر على تطبيق السجل ، تظهر خطوة تطبيق iOS 2.

*   الخطوة 2 انقر هنا على زر تنزيل **Googleservice-info.plist** لتنزيل الملف الذي **سنستخدمه** في الخطوات التالية.

**الخطوة 3 والخطوة 4** يمكننا التخطي حيث سيتم التعامل مع هذه داخليا بواسطة البرنامج المساعد Cordova FCM.

بمجرد إضافة تطبيق iOS إلى مشروعك ، انقر فوق رمز الترس إلى جانب الملصقة العامة في اللوحة الجانبية اليسرى وحدد إعدادات المشروع. (راجع الصورة أدناه.). يجب أن يتم فتح علامة التبويب "عام" الخاصة بإعدادات المشروع بشكل افتراضي.

![إعدادات المشروع](https://preview.ibb.co/ddcwwv/1_c_Pee_Xdmf76l_W0_YRr_I83_Log.png)

انقر بعد ذلك على تطبيق iOS الخاص بك في تطبيقاتك -> تطبيقات iOS. في تفاصيل تطبيق iOS ، قم بتحديث **بادئة معرف التطبيق** ، وهي القيمة التي ستحصل عليها في مركز أعضاء Apple ضمن علامة التبويب العضوية.

انتقل الآن إلى علامة التبويب **Cloud Messaging** -> قسم تهيئة تطبيق iOS.

![الرسائل السحابية](https://preview.ibb.co/m2Ktbv/1_0p_Vvf_JGYb_TEUIhwr_DIek_Q.png)

هنا ، كما ناقشنا سابقًا ، قم بتحميل مفتاح APNs Auth الذي أنشأته في مركز عضو Apple. بعد ذلك نقوم بإعداد تطبيق جانب العميل. إنشاء مجلد جديد sampleApp في مجلد التطوير الخاص بك ، بالنسبة لي هو

 `/Volumes/Development/ 
` 

لذلك سيكون المجلد الجديد

 `/Volumes/Development/pushSample 
 cd /Volumes/Development/pushSample 
` 

إنشاء مشروع جديد Cordova ، **ملاحظة: استخدم sudo إذا لزم الأمر**

 `cordova create pushSample 
 cd pushSample 
` 

أضف الآن أحدث نظام iOS

 `sudo cordova platform add ios 
` 

الآن قم بلصق ملف **Googleservice-info.plist** الذي تم تنزيله مسبقًا في المجلد الجذر لمشروع Cordova ، وهو كذلك

 `/Volumes/Development/pushSample/pushSample 
` 

إضافة البرنامج المساعد Cordova FCM.

 `cordova plugin add cordova-plugin-fcm 
` 

حدِّث معرف التطبيق الافتراضي واسم التطبيق بمعرف الحزمة الذي قررناه سابقًا أثناء تهيئة وحدة التحكم في Firebase واسم التطبيق.

 `<widget id="com.pushSample.hello" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0"> 
    <name>PushSample</name> 
` 

في هذه المرحلة ، سيحتوي نموذج التعليمة البرمجية على ملف app.js ، والذي يمكنك تعديله وإضافة وظائف getToken و onNotification مثل android. شفرة javascript هي نفسها لكلا المنصتين.

التالي تشغيل الأمر بناء cordova

 `sudo cordova build ios 
` 

بمجرد نجاح أمر بناء cordova ، افتح التطبيق في xcode. للقيام بذلك ، افتح الملف xcode.proj الذي سيكون موجودًا في

 `your_cordova_project/platforms/ios/app_name.xcodeproj 
` 

بالنسبة لي هو

 `/Volumes/Development/pushSample/pushSample/platforms/ios/PushSample.xcodeproj 
` 

![مشروع Xcode](https://preview.ibb.co/hePLOa/1_Xe_Kh4_VXU_o_BQ05_UGRa_B6_A.png)

التالي تمكين إعلامات الدفع في علامة التبويب قدرات المشروع.

قم بتوصيل جهاز فعلي وتشغيل التطبيق.

الآن إطلاق إشعار الدفع من الملحن الإخطار firebase وكل شيء يجب أن تعمل ... ![سعيد سعيد](https://image.ibb.co/jz8VOa/1vnhjv.jpg)

[المشاركة الأصلية على Medium](https://medium.com/@t1tan1um/fcm-integration-for-cordova-hybrid-apps-c679f5fc1988) .