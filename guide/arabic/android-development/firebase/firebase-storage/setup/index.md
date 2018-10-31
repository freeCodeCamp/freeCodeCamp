---
title: Setting up Firebase Storage
localeTitle: إعداد Firebase Storage
---
# إعداد Firebase Storage

## المتطلبات الأساسية

1.  أحدث إصدار من Android Studio
2.  لديك اتصال بـ Firebase يدويًا أو عبر مساعد Firebase (راجع [الاتصال بـ Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ).

من المستحسن أن تفعل هذا حتى لا يتم الخلط بينك وبين تعليمات جزئية متعلقة بهذا في المستندات المذكورة أدناه.

## إعداده مع Android Studio

بعد إضافة Firebase إلى مشروعك ، ستحتاج إلى إضافة تبعيات إضافية والقيام ببعض الأمور الأخرى من أجل الإعداد تخزين Firebase. هناك وثائق التالية عن هذا:

*   [Firebase](https://firebase.google.com/docs/storage/android/start)

قد تكون هناك احتمالية للارتباك في هذه الوثائق أو إذا كنت جديدًا في Firebase ، فقد تواجه صعوبة في فهمه. لذلك اتبع الخطوات belows بعناية:

**إضافة التبعيات Gradle**

في ملف build.gradle على مستوى التطبيق ، أضف ما يلي

 `dependencies { 
    implementation 'com.google.firebase:firebase-storage:16.0.2' 
 } 
` 

## تثبيت Firebase Android SDK والأذونات ورمز الإعداد

يمكن الاطلاع على تعليمات مفصلة عن هذه [هنا](https://firebase.google.com/docs/android/setup) .

## مصادر

للتعرف على كيفية القراءة من التخزين في تطبيق Android وكتابته ، راجع المستندات المُدرجة أدناه.

*   [تحميل الملفات من Android دليل Firebase](https://firebase.google.com/docs/storage/android/upload-files)
    
*   [قم بتنزيل الملفات على Android دليل Firebase](https://firebase.google.com/docs/storage/android/download-files)
    

## مشاريع نموذجية من مطوري Firebase

يمكنك متابعة هذه العينات من مطوري Firebase للبدء في تخزين Firebase Firebase Quickstart-Android [android-sample](https://github.com/firebase/quickstart-android/tree/master/storage)

## ملحوظة

لقد أوقفت Google الآن عملية "الترجمة" وبدلاً من ذلك تحتاج إلى استخدام "التنفيذ".