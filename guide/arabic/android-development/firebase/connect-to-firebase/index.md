---
title: connecting-to-firebase
localeTitle: التي تربط إلى firebase
---
# المتطلبات الأساسية

1.  أحدث إصدار من Android Studio

أسهل طريقة للاتصال بـ firebase هي استخدام مساعد firebase.

# 1\. الاتصال باستخدام مساعد Firebase

1.  أنشئ حسابًا في [وحدة تحكم Firebase](https://console.firebase.google.com) . انقر على إضافة مشروع لإضافة مشروع Android Studio إليه.
    
2.  قم بتثبيت Google Repository يمكنك القيام بذلك عن طريق إضافة التبعية إلى ملف build.gradle على مستوى المشروع كما يلي:
    

 `allprojects{ 
  repositories { 
        maven { 
            url "https://maven.google.com" // Google's Maven repository 
        } 
    } 
 } 
` 

بدلا من ذلك ، يمكنك القيام بذلك [باستخدام واجهة المستخدم الرسومية](https://developer.android.com/studio/write/firebase) .

3.  انتقل إلى أدوات> Firebase وحدد الاتصال بـ Firebase

إذا كنت ترغب في الاتصال بـ firebase يدويًا ، تتوفر [هنا](https://firebase.google.com/docs/android/setup) تعليمات مفصلة. بعد ربط مشروع Android Studio بـ Firebase ، يمكنك ذلك أيضًا

1.  انقر على أحد المنتجات في مساعد firebase ، ثم انتقل إلى مستندات Google حيث سيتم إبلاغك بكيفية المتابعة
2.  انتقل إلى المنتج المطلوب في **"نظرة عامة على المشروع"** في "وحدة التحكم" وانقر فوق " **البدء"**
3.  انتقل إلى [مستندات Firebase](https://www.firebase.com/docs/android/quickstart.html) للاطلاع على كيفية إعداد المنتجات الفردية في مشروعك

ستتيح لك قراءة مجموعة من الثلاثة إعداد المنتج ، والذي يتضمن إضافة تبعيات مناسبة لملف build.gradle الخاص بك.

**إذا كنت تواجه Retdle Gradle** حاول تغيير إصدار Firebase-core أو إصدار قاعدة بيانات Firebase