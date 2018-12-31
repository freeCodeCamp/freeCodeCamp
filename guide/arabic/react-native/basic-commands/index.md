---
title: Basic Commands
localeTitle: الأوامر الأساسية
---
## الأوامر الأساسية

ستجد هنا قائمة بالأوامر الأساسية لبدء تطوير تطبيقات iOS و Android باستخدام React Native. إذا لم تكن قد قمت بتثبيته بعد ، يوصى بشدة أن تتبع [الدليل الرسمي](https://facebook.github.io/react-native/docs/getting-started.html) .

### بدء مشروع جديد

هناك طرق مختلفة يمكنك بها تشغيل تطبيق أصلي متفاعل. يمكنك استخدام **Expo** أو `create-react-native-app` (والذي يستخدم بدوره Expo-Cli) لبدء مشروعك الجديد ، ولكن مع هذا الأسلوب فإنك تكون في سيطرة أكبر على ما حدث في مشروعك ويمكنه التواصل والتأقلم والكتابة وحدات خاصة بها مع المكتبات الأصلية لنظامي تشغيل iOS و Android.

 `react-native init [PROJECT-NAME] 
 cd [PROJECT-NAME] 
` 

**تشغيل التطبيق في محاكي الأندرويد**

هذا الأمر توضيحي ذاتي ، كما يقول أنه سيبدأ محاكي Android ويثبّت التطبيق الذي أنشأته للتو. يجب أن تكون في جذر المشروع لتشغيل هذا الأمر.

 `react-native run-android 
` 

**تشغيل التطبيق في محاكي iOS**

يعمل هذا الأمر تمامًا مثل `react-native run-android` ولكن بدلاً من محاكي Android ، فإنه يفتح محاكي iPhone.

 `react-native run-ios 
` 

**ربط التبعيات بالمشروعات المحلية**

تحتوي بعض المكتبات على تبعيات يلزم ربطها في الشفرة الأصلية التي تم إنشاؤها لـ React Native. إذا لم ينجح شيء ما بعد تثبيت مكتبة جديدة ، فربما يرجع السبب في ذلك إلى تخطي هذه الخطوة.

 `react-native link [LIBRARY-NAME] 
` 

**مسح الحزمة**

إذا لم يتم تشغيل شيء كما هو متوقع ، فربما تحتاج إلى مسح وإنشاء حزمة جديدة باستخدام هذا الأمر.

 `watchman watch-del-all 
` 

**دعم الديكور**

لا تدعم JSX الديكورات بشكل افتراضي حتى تحتاج إلى تثبيت المكوِّن الإضافي **Babel** لجعله يعمل.

 `npm install babel-plugin-transform-decorators-legacy --save 
 npm install babel-plugin-transform-class-properties --save 
` 

### تصدير APK للتشغيل في الجهاز

باستخدام الأوامر التالية ، سيكون لديك ملف apk أو غير موقوف بحيث يمكنك التثبيت والمشاركة مع زملائك لأغراض الاختبار. فقط تذكر أن ملف apk هذا غير جاهز للتحميل إلى متجر التطبيقات أو الإنتاج. سوف تجد APK الخاص بك جديدة في _الروبوت / التطبيق / البناء / النواتج / apk / التطبيق debug.apk_

**1\. بناء التصحيح التصحيح**

 `react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug 
` 

**2\. إنشاء بناء التصحيح**

 `cd android 
 ./gradlew assembleDebug 
`