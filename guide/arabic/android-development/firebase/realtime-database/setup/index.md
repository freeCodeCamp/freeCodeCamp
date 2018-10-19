---
title: Setting up Firebase Realtime Database
localeTitle: إعداد قاعدة بيانات Firebase في الوقت الفعلي
---
# المتطلبات الأساسية

1.  أحدث إصدار من Android Studio
2.  لديك اتصال بـ Firebase يدويًا أو عبر مساعد Firebase (راجع [الاتصال بـ Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase) ). من المستحسن أن تفعل هذا حتى لا يتم الخلط بينك وبين تعليمات جزئية متعلقة بهذا في المستندات المذكورة أدناه.

# إعداده مع Android Studio

بعد إضافة Firebase إلى مشروعك ، ستحتاج إلى إضافة تبعيات إضافية والقيام ببعض الأمور الأخرى من أجل الإعداد قاعدة بيانات الوقت الفعلي. هناك نوعان من الوثائق حول هذا:

1.  Firebase quickstart [docs](https://www.firebase.com/docs/android/quickstart.html)
2.  [مستندات](https://firebase.google.com/docs/database/android/start/) جوجل

هناك بعض التناقضات بين الاثنين. للتعويض عنهم ، يمكنك متابعة مستندات Firebase ، ولكن بدلاً من استخدام تبعيات gradle المدرجة هناك ، استخدم القائمة التالية. بهذه الطريقة ، لن تفوتك أي خطوات من أي من الوثائق.

**إضافة التبعيات Gradle** 1 في ملف build.gradle على مستوى التطبيق ، أضف ما يلي

 `dependencies { 
    implementation 'com.firebase:firebase-client-android:2.5.2+' 
    implementation 'com.google.firebase:firebase-database:15.0.0' 
 } 
` 

# تثبيت Firebase Android SDK والأذونات ورمز الإعداد

يمكن الاطلاع على تعليمات مفصلة عن هذه [هنا](https://www.firebase.com/docs/android/quickstart.html) .

# مصادر

للتعرف على كيفية القراءة والكتابة إلى قاعدة البيانات في تطبيق Android ، راجع المستندين المدرجين في المراجع. يمكنك أيضًا معرفة كيفية استخدام منتجات Firebase في مستندات Google ، ولكن مرة أخرى ، قد يكون من المفيد أيضًا الاطلاع على مستندات Firebase أيضًا ، أو أي شيء قد يكون مفيدًا.

# المراجع

*   FIREBASE ، _Android Quickstart_ ، 17/04/2018 ، 07/05/2018 ، https://www.firebase.com/docs/android/quickstart.html
*   GOOGLE ، _إعداد قاعدة بيانات Firebase للوقت الفعلي للأندرويد_ ، 05/04/2018 ، 07/05/2018 ، https://firebase.google.com/docs/database/android/start/

# حاشية

يأتي السطر الأول من [مستندات](https://www.firebase.com/docs/android/quickstart.html) Firebase لإعداد إعداد الوقت الحقيقي في Android Studio. في المستندات ، يتم استخدام "الترجمة" ولكن تم إيقافها واستبدالها بـ "تنفيذ". يأتي السطر الثاني من [مستندات](https://firebase.google.com/docs/database/android/start/) Google حول إعداد حساب الوقت الحقيقي في Android Studio. إذا كان في الواقع زائدة عن الحاجة لإضافة كليهما ، فيرجى تصحيح هذه المقالة.