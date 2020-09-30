> **ملاحظة:** هذه خطوة **اختيارية** وهي مطلوبة فقط عند العمل مع مسار عمل البريد الإلكتروني

## مقدمة

بعض تدفقات عمل البريد الإلكتروني، مثل تحديث البريد الإلكتروني للمستخدم، يتطلب خادم api-end لإرسال رسائل البريد الإلكتروني الصادرة. بديل لاستخدام موفر خدمة البريد الإلكتروني لإرسال رسائل البريد الإلكتروني الفعلية، Mailhog هو أداة المطور لاختبار البريد الإلكتروني التي ستحصل على رسائل البريد الإلكتروني المرسلة من مثيل freeCodeCamp الخاص بك.

## تثبيت MailHog

يمكن تثبيت MailHog على macOS و Windows و Linux.

- [مقدمة](#introduction)
- [تثبيت MailHog](#installing-mailhog)
  - [تثبيت MailHog على macOS](#installing-mailhog-on-macos)
  - [تثبيت MailHog على Windows](#installing-mailhog-on-windows)
  - [تثبيت MailHog على Linux](#installing-mailhog-on-linux)
- [استخدام MailHog](#using-mailhog)
- [روابط مفيدة](#useful-links)

### تثبيت MailHog على macOS

تثبيت MailHog على macOS مع [Homebrew](https://brew.sh/):

```bash
قرع تثبيت mailhog
خدمات الخبز تبدأ في mailhog
```

الأوامر المذكورة أعلاه ستبدأ خدمة mailhog في الخلفية.

عند اكتمال التثبيت، يمكنك بدء [باستخدام MailHog](#using-mailhog).

### تثبيت MailHog على Windows

تحميل أحدث إصدار من MailHog من [المستودع الرسمي لـ MailHog](https://github.com/mailhog/MailHog/releases). حدد موقع وانقر على رابط إصدار Windows (32 أو 64 bit) و ملف .exe سيتم تنزيله إلى جهاز الكمبيوتر الخاص بك.

عند اكتمال التنزيل، انقر لفتح الملف. قد يظهر إشعار بجدار الحماية Windows ، لطلب إذن الوصول إلى MailHog. سيفتح موجه سطر الأوامر القياسي لنظام Windows حيث سيتم تشغيل MailHog بمجرد منح الوصول إلى جدار الحماية.

أغلق MailHog عن طريق إغلاق نافذة طلب الأوامر. لبدء تشغيل MailHog مرة أخرى، انقر على MailHog القابل للتنفيذ (. x) الملف الذي تم تنزيله في البداية - ليس من الضروري تنزيل ملف تثبيت MailHog جديد.

ابدأ [باستخدام MailHog](#using-mailhog).

### تثبيت MailHog على Linux

أولاً، قم بتثبيت [اذهب](https://golang.org).

تشغيل الأوامر التالية لتثبيت GO على الأنظمة القائمة على دبيان مثل أوبونتو و لينكس مينتنت.

```bash
sudo apt-get install golang
```

تشغيل الأوامر التالية لتثبيت GO على الأنظمة القائمة على RPM، مثل CentOS، فيدورا، Red Hat Linux، إلخ.

```bash
sudo dnf install golang
```

بدلاً من ذلك، قم بتشغيل الأوامر التالية لتثبيت GO.

```bash
sudo yum install golang
```

الآن قم بتعيين مسار الذهاب مع الأوامر التالية.

```bash
صدى "تصدير GOPATH=$HOME/go" >> ~/.prof
صدى 'تصدير PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.prof
مصدر ~/.profile
```

أخيرا، أدخل الأوامر أدناه لتثبيت وتشغيل MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

ابدأ [باستخدام MailHog](#using-mailhog).

## استخدام MailHog

افتح علامة تبويب أو نافذة جديدة للمتصفح وانتقل إلى [http://localhost:8025](http://localhost:8025) لفتح صندوق الوارد الخاص بك MailHog عند اكتمال تثبيت MailHog وتشغيل MailHog. سيظهر صندوق الوارد مشابه للشاشة التي تلصق أدناه.

![لقطة شاشة MailHog 1](images/mailhog/1.jpg)

رسائل البريد الإلكتروني المرسلة بواسطة تثبيت freeCodeCamp الخاص بك ستظهر كما يلي

![لقطة شاشة MailHog 2](images/mailhog/2.jpg)

ستتوفر علامة تبويب تسمح لك بعرض إما نص عادي أو مصدر المحتوى عند فتح بريد إلكتروني معين. تأكد من اختيار علامة التبويب للنص العادي على النحو التالي.

![لقطة شاشة MailHog 3](images/mailhog/3.jpg)

يجب أن تكون جميع الروابط في البريد الإلكتروني قابلة للنقر والعزم على عنوان URL الخاص بها.

## روابط مفيدة

- تحقق من [MailHog](https://github.com/mailhog/MailHog) مستودع لمزيد من المعلومات المتعلقة بـ MailHog. تتوفر أيضا معلومات إضافية عن تكوينات MailHog المخصصة.
