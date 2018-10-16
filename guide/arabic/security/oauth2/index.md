---
title: OAuth2 Protocol
localeTitle: بروتوكول OAuth2
---
## OAuth 2.0

[بروتوكول OAuth 2.0](https://tools.ietf.org/html/rfc6749) عبارة عن بروتوكول تفويض قياسي في الصناعة ، والذي يمكّن تطبيق الجهة الخارجية من الوصول المحدود إلى الموارد نيابةً عن مالك الموارد (مستخدمو النظام)

يتم استخدام OAuth على نطاق واسع في العديد من شركات الإنترنت الكبرى مثل Google و Facebook و Slack وغيرها

**جدول المحتويات**

*   معرفة أساسية
*   بروتوكول التدفق
*   أنواع منح التخويل
*   المراجع

### معرفة أساسية

#### [الأدوار](https://tools.ietf.org/html/rfc6749#section-1.1)

*   **مالك الموارد** : الشخص الذي يستخدم المنتج أو الخدمة (على سبيل المثال: أنت مالك الموارد في حساب Google الخاص بك)
*   **خادم الموارد** : استضافة عملاء الخادم للبيانات المحمية (على سبيل المثال: Gmail لاستضافة رسائل البريد الإلكتروني الخاصة بك)
*   **العميل** : تطبيق طلب الوصول إلى البيانات في خادم الموارد
*   **خادم التفويض** : الخادم الذي يتعامل مع طلب التفويض ، يصدر رمز وصول إلى العميل الذي يطلبها. يمكن أن يكون هذا الخادم نفس خادم المصدر أو يمكن أن يكون خادمًا منفصلاً

#### الرموز

هناك نوعان من الرموز المميزة المحددة في OAuth 2.0

*   **[رمز الدخول](https://tools.ietf.org/html/rfc6749#section-1.4)** : تُعد رموز الوصول جزءًا أساسيًا من OAuth حيث إنها تمكّن الوصول إلى بيانات المستخدم من أي تطبيق يحمل هذا الرمز. يحتوي هذا الرمز المميز على مدة محدودة يحددها خادم التفويض.
*   **[تحديث الرمز المميز](https://tools.ietf.org/html/rfc6749#section-1.5)** : يتم إصدار هذا الرمز المميز كجزء من رمز الدخول ، نظرًا لأن رمز الدخول المميز محدود المدة ، وفي بعض الأحيان يحتاج تطبيق العميل إلى الوصول إلى بيانات المستخدم لفترة أطول (مثل: خدمات التكامل) ، وفي هذه الحالة ، يمكن أن يطلب تطبيق العميل رمزًا مميزًا للتحديث ، والذي يسمح لهم لتجديد رمز الدخول للحصول على رمز أحدث يحتاج إلى إعادة تفويض المستخدم.

#### [Access Token Scope](https://tools.ietf.org/html/rfc6749#section-3.3)

تسمح معلمة النطاق في طلب التفويض من قِبل العميل ، تطبيق العميل بتحديد نوع الموارد أو البيانات التي يريد الوصول إليها ، يتم تحديد النطاقات المتاحة بواسطة خادم التفويض ، وبمجرد اعتماده ، يتم إرفاق النطاقات المطلوبة برمز الوصول ، الرمز المميز للوصول إلى وصول محدود إلى بيانات المستخدم بدلاً من الوصول الكامل.

### [بروتوكول التدفق](https://tools.ietf.org/html/rfc6749#section-1.2)

![تدفق بروتوكول OAuth2](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)

### أنواع منح التخويل

حدد OAuth2 4 أنواع من المنح للحصول على رموز الوصول استنادًا إلى طبيعة العميل.

*   قانون التفويض
*   التدفق الضمني
*   بيانات اعتماد مالك المورد
*   بيانات اعتماد العميل

#### كود منح الترخيص

طبيعة العميل:

يمكن للعميل القادر على تخزين سر العميل بأمان (عادةً خادم ويب) ، استخدام هذه المنحة للحصول على إذن. يسمح هذا أيضًا بالحصول على رمز دخول طويل العمر مع المساعدة على تحديث الرمز المميز.

على سبيل المثال: يطلب تطبيق الويب الوصول إلى معلومات مستخدم حساب Google

تدفق مجردة

![كود التفويض التدفق](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/authorization-code-flow.png)

مثال الكود:

طلب تفويض

 `GET /oauth2/authorize?response_type=code 
 &client_id=client123&scope=profile 
 &redirect_uri=https://client.com/callback HTTP/1.1 
 Host: auth.server.com 
` 

 `HTTP/1.1 302 Found 
 Location: https://client.com/callback#code=sb8s6doy9bsd9sd&state=abcde 
` 

بعد تلقي رمز التفويض ، تقديم طلب خادم التفويض مع رمز ،

 `POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=authorization_code 
 &code=sb8s6doy9bsd9sd 
 &redirect_uri=https://client.com/callback 
 &client_id=client123 
 &client_secret=secret 
 &scope=profile 
` 

استجابة

 `HTTP/1.1 200 OK 
 Content-Type: application/json;charset=UTF-8 
 Cache-Control: no-store 
 Pragma: no-cache 
 { 
  "access_token":"gsi8d6fosb9d6fos6df", 
  "token_type":"bearer", 
  "expires_in":3600 
 } 
` 

#### التدفق الضمني

طبيعة العميل:

تطبيق العميل الجاري تشغيله في المستعرض ، عادةً ما يتم تطبيق الواجهة الأمامية (مثل: SPA). لا يصدر هذا المنحة رمزًا مميزًا للتحديث.

على سبيل المثال: تطبيق جافا سكريبت أمامي يعمل في المستعرض

مجردة التدفق:

![كود التفويض التدفق](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/implicit-flow.png)

نموذج الكود:

 `GET /oauth2/authorize?response_type=token 
 &client_id=client123 
 &redirect_uri=https://client.com/callback HTTP/1.1 
 Host: auth.server.com 
` 

 `HTTP/1.1 302 Found 
 Location: https://client.com/callback#access_token=98y2b38&token_type=bearer&expires_in=3600&state=abcde 
` 

#### بيانات اعتماد مالك المورد

طبيعة العميل:

في هذا التدفق ، يشارك مالك المورد بيانات الاعتماد الخاصة بهم (كلمة المرور) مع العميل ثم إلى خادم التفويض ، بحيث يتم استخدام هذه المنحة عندما تكون ثقتك المطلقة بين تطبيق العميل وخادم التخويل. وبالتالي ، فإن هذا التدفق غير مسموح به في الغالب لتطبيقات العميل الخارجية.

على سبيل المثال: تطبيقات الهاتف المحمول Facebook باستخدام هذا التدفق للتفويض باستخدام Facebook Server

مجردة التدفق:

![بيانات اعتماد مالك المورد](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/resource-owner-password-flow.png)

نموذج الكود:

 `POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=password 
 &username=john 
 &password=abcde 
` 

#### بيانات اعتماد العميل التدفق

طبيعة العميل:

يتم استخدام هذا النوع من التفويض عندما يكون العميل نفسه مالك مورد (أي يريد العميل الوصول إلى حد الاستخدام أو المعلومات المتعلقة به). لا يوجد تفويض للمستخدم النهائي في هذا التدفق.

على سبيل المثال: تطبيق العميل يطلب بيانات غير مستخدم من خوادم google (مثل: المناطق الزمنية والخرائط وغيرها)

مجردة التدفق:

![بيانات اعتماد العميل](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/client-credentials-flow.png)

نموذج الكود:

 `POST /oauth2/token HTTP/1.1 
 Host: auth.server.com 
 Content-Type: application/x-www-form-urlencoded 
 
 grant_type=client_credentials 
 &client_id=client123 
 &client_secret=xyz123 
` 

### المراجع

لمزيد من القراءة ، راجع

*   [مسودة OAuth2](https://tools.ietf.org/html/rfc6749)
*   [فهم OAuth2](http://www.bubblecode.net/en/2016/01/22/understanding-oauth2/)
*   [إنشاء خادم اتصال openId الخاص بك](http://kevinchalet.com/2016/07/13/creating-your-own-openid-connect-server-with-asos-choosing-the-right-flows/)