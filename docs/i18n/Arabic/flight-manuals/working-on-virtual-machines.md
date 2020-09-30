# دليل الطيران للعمل على الآلات الافتراضية

وبصفتها عضوا في الموظف أو في فريق التفويض، قد يكون تم منحك حق الوصول إلى موفري خدمات السحابة مثل أزور، ديغيرونس، إلخ.

إليك بعض الأوامر المفيدة التي يمكنك استخدامها للعمل على الآلات الظاهرية (VM)، على سبيل المثال القيام بتحديثات الصيانة أو القيام بحفظ المنازل بشكل عام.

# احصل على قائمة من الVM

> [!ملاحظة] بينما قد يكون لديك بالفعل وصول SSH إلى VM، ذلك وحده لن يسمح لك بقائمة الرسائل الشخصية ما لم يتم منحك حق الوصول إلى بوابات السحابة كذلك.

## Azure

تثبيت Azure CLI `az`: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

> **(مرة واحدة) تثبيت على macOS مع [`homebrew`](https://brew.sh):**

```
إنتاج zure-cli
```

> **(مرة واحدة) تسجيل الدخول:**

```
az login
```

> **احصل على قائمة أسماء VM وعناوين P:**

```
az vm قائمةip-عناوين --جدول الإخراج
```

## المحيط الرقمي

تثبيت Digital Ocean CLI `doctl`: https://github.com/digitalocean/doctl#installing-doctl

> **(مرة واحدة) تثبيت على macOS مع [`homebrew`](https://brew.sh):**

```
تثبيت Dtl
```

> **(مرة واحدة) تسجيل الدخول:**

تبديل المصادقة والسياق: https://github.com/digitalocean/doctl#authenticating-with-digitalocean

```
مصادقة Dtl في
```

> **احصل على قائمة أسماء VM وعناوين IP:**

```
قائمة الروبوت المحوسبة - تنسيق "ID,Name,PublicIPv4"
```

# تدوير VM (أو مجموعة مقياس VM)

> مهمة: إضافة تعليمات لتشغيل VM(ات)


<!--

The below instructions are stale.

### 0. Prerequisites (workspace Setup) for Staff

Get a login session on `azure cli`, and clone the
[`infra`](https://github.com/freeCodeCamp/infra) for setting up template
workspace.

```console
az login
git clone https://github.com/freeCodeCamp/infra
cd infra
```

Use the Scratchpad subdirectory for temporary files, and making one-off edits.
The contents in this subdirectory are intentionally ignored from source control.

### 1. Provision VMs on Azure.

List all Resource Groups

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
```

Create a Resource Group

```
az group create --location eastus --name stg-rg
```

```console
az group list --output table
```

```console
Name                               Location       Status
---------------------------------  -------------  ---------
tools-rg                           eastus         Succeeded
stg-rg                             eastus         Succeeded
```

Next per the need, provision a single VM or a scaleset.

#### A. provision single instances

```console
az vm create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

#### B. provision scaleset instance

```console
az vmss create \
  --resource-group stg-rg-eastus \
  --name <VIRTUAL_MACHINE_SCALESET_NAME> \
  --image UbuntuLTS \
  --size <VIRTUAL_MACHINE_SKU>
  --upgrade-policy-mode automatic \
  --custom-data cloud-init/nginx-cloud-init.yaml \
  --admin-username <USERNAME> \
  --ssh-key-values <SSH_KEYS>.pub
```

> [!NOTE]
>
> - The custom-data config should allow you to configure and add SSH keys,
>   install packages etc. via the `cloud-init` templates in your local
>   workspace. Tweak the files in your local workspace as needed. The cloud-init
>   config is optional and you can omit it completely to do setups manually as
>   well.
>
> - The virtual machine SKU is something like: **Standard_B2s** which can be
>   retrived by executing something like
>   `az vm list-sizes -l eastus --output table` or checking the Azure portal
>   pricing.

-->

# إبقاء VMs محدثة

يجب عليك أن تحافظ على تحديث رسائل VM عن طريق إجراء التحديثات والتحديثات. سيؤدي هذا إلى التأكد من أن الآلة الافتراضية قد تم تصويبها مع أحدث إصلاحات الأمان.

> [تحذير] قبل تشغيل هذه الأوامر:
> 
> - تأكد من أنه تم توفير VM بالكامل ولا يوجد خطوات ما بعد التثبيت قيد التشغيل.
> - إذا كنت تقوم بتحديث الحزم على VM التي تقدم بالفعل تطبيقا، تأكد من إيقاف التطبيق / حفظه. ستسبب تحديثات الحزمة عرض النطاق الترددي للشبكة، الذاكرة و/أو استخدام المعالج مما يؤدي إلى حالات انقطاع في تشغيل التطبيقات.

تحديث معلومات الحزمة

```console
تحديث sudo apt
```

ترقية الحزم المثبتة

```console
sodo apt ترقية - y
```

تنظيف الحزم غير المستخدمة

```console
sudo apt Autoremove -y
```

# العمل على خوادم الويب (بروكسي)

نقوم بتشغيل مثيلات التحميل المتوازنة (Azure Load Balancer) لخوادمنا على الويب. تقوم هذه الخوادم بتشغيل NGINX التي تعكس مسار كل حركة المرور إلى freeCodeCamp.org من تطبيقات مختلفة تعمل على بنيات تحتية خاصة بها.

إعدادات NGINX متاحة على [هذا المستودع](https://github.com/freeCodeCamp/nginx-config).

## أول تثبيت

توفير وحدات VM مع المدونة

### 1. (اختياري) تثبيت NGINX والتكوين من المستودع.

يجب أن يكون الإعداد الأساسي جاهزاً OOTB من خلال تكوين السحابة. يقوم SSH و بالتغييرات حسب الاقتضاء للحالة (الحالات) الخاصة.

إذا لم تستخدم إعدادات Cloud init سابقا استخدم أدناه للإعداد اليدوي ل NGINX وصفحات الخطأ:

```console
sudo su

cd /var/www/html
git clone https://github.com/freeCodeCamp/error-page

cd /etc/
rm -rf nginx
git clone https://github.com/freeCodeCamp/nginx-config nginx

cd /etc/nginx
```

### 2. تثبيت شهادات منشأ Cloudflare وتكوين التطبيق العلوي.

احصل على شهادات منشأ Cloudflare من التخزين الآمن والتثبيت في المواقع المطلوبة.

**أو**

الانتقال إلى الشهادات الموجودة:

```console
# المحلية
scp -r username@source-server-public ip:/etc/nginx/ssl ./
scp -pr ./ssl username@target-server-public ip:/tmp/

# بعد
rm -rf ./ssl
mv /tmp/ssl ./ /
```

تحديث الإعدادات العلوية:

```console
vi configs/upstreams.conf
```

إضافة/تحديث مصدر/مصدر التطبيق عناوين IP التطبيق.

### 3. إعداد الشبكات وحواجز الحماية.

تكوين جدران الحماية Azure و `ufw` حسب الحاجة لعناوين منشأ المنشأ.

### 4. أضف VM إلى مجمع تحميل متوازن الخلفية.

تكوين وإضافة قواعد لتحميل الموازنة إذا لزم الأمر. قد تحتاج أيضًا إلى إضافة VMs لتحميل مخزن خلفية الموازنة إذا لزم الأمر.

## 1 - قطع الأشجار والرصد

1. تحقق من حالة خدمة NGINX باستخدام الأمر أدناه:

```console
sudo systemctl status nginx
```

2. التسجيل والرصد لخوادم الخدمة متاحة على:

> <h3 align="center"><a href='https://amplify.nginx.com' _target='blank'>https://amplify.nginx.com</a></h3>
## تحديث الأمثلة (النفوذ)

يتم الحفاظ على تغييرات التكوين إلى مثيلاتنا NGINX على GitHub، يجب أن يكون نشر في كل حالة مثل هذا:

1. SSH في المثيل و أدخل sudo

```console
sudo su
```

2. احصل على أحدث رمز للتكوين.

```console
cd /etc/nginx
git fetch --كل --prune
git إعادة تعيين - الأصل الصلب / سيد
```

3. اختبار وإعادة تحميل الإعدادات [مع الإشارات](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/#controlling-nginx).

```console
nginx -t
nginx -s reload
```

# العمل في أمثلة API

1. تثبيت أدوات إنشاء لثنائيات العقدة (`عقدة`) إلخ.

```console
تثبيت البناء - أساسي لـ sudo apt
```

## أول تثبيت

توفير وحدات VM مع المدونة

1. تثبيت العقدة LTS.

2. قم بتحديث `npm` وقم بتثبيت PM2 وإعداد التراكيب والبدء عند التمهيد

   ```console
   npm i -g npm
   npm i -g pm2
   pm2 install pm2-logrotate
   pm2 startup
   ```

3. استنساخ المعسكر الحر، إعداد env والمفاتيح.

   ```console
   استنساخ git https://github.com/freeCodeCamp/freeCodeCamp.git
   cd freeCodeCamp
   git Checout production-Current # أو أي فرع آخر سيتم نشره
   ```

4. إنشاء `env` من وحدة تخزين بيانات الاعتماد الآمنة.

5. إنشاء `google-credentials.json` من وحدة تخزين بيانات الاعتماد الآمنة.

6. تثبيت الإعتمادات

   ```console
   npm ci
   ```

7. بناء الخادم

   ```console
   npm تشغيل ensure-env && npm تشغيل الإنشاء:server
   ```

8. بداية الحالات

   ```console
   cd api-server
   pm2 بدء الإنتاج -start.js -i الحد الأقصى --max-memory-Restart 600M --اسم org
   ```

## 1 - قطع الأشجار والرصد

```console
سجلات pm2
```

```console
pm2 monit
```

## تحديث الأمثلة (النفوذ)

يجب نشر التغييرات البرمجية إلى مثيلات API من وقت لآخر. يمكن أن يكون تحديث متجدد أو تحديث يدوي. الأخير ضروري عند تغيير الإعتمادات أو إضافة متغيرات الإنفيرون.

> [!DANGER] خطوط الأنابيب الآلية لا تتعامل مع تحديثات الإعتمادات في دقيقة. نحن بحاجة إلى القيام بتحديث يدوي قبل تشغيل أي خط أنابيب للنشر.

### 1. التحديثات اليدوية - تستخدم لتحديث الإعتمادات، متغيرات env

1. إيقاف جميع الحالات

```console
pm2 إيقاف الكل
```

2. تثبيت الإعتمادات

```console
npm ci
```

3. بناء الخادم

```console
npm تشغيل ensure-env && npm تشغيل الإنشاء:server
```

4. بداية الحالات

```console
pm2 بدء جميع سجلات التحديث-env && pm2
```

### 2. التحديثات الدوارة - تستخدم للتغييرات المنطقية للبرمجة.

```console
pm2 إعادة تحميل جميع -تحديث - env && pm2 السجلات
```

> [!ملحوظة] نحن نتعامل مع التحديثات الدارجة إلى التعليمات البرمجية، المنطق، عبر خطوط الأنابيب. يجب ألا تحتاج إلى تشغيل هذه الأوامر وهذه الوثائق هنا للوثائق.

# العمل في حالات العميل

1. تثبيت أدوات إنشاء لثنائيات العقدة (`عقدة`) إلخ.

```console
تثبيت البناء - أساسي لـ sudo apt
```

## أول تثبيت

توفير وحدات VM مع المدونة

1. تثبيت العقدة LTS.

2. قم بتحديث `npm` وقم بتثبيت PM2 وإعداد التراكيب والبدء عند التمهيد

   ```console
   npm i -g npm
   npm i -g pm2
   npm تثبيت -g يخدم
   pm2 تثبيت pm2 logrotate
   pm2 بدء التشغيل
   ```

3. استنساخ تكوين العميل وإعداد env والمفاتيح.

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ```console
   git clone https://github.com/freeCodeCamp/client-config.git client
   cd client
   ```

   ابدأ مثيلات العنصر النائب لعميل الويب، سيتم تحديثها مع مصنوعات من أنبوب ازور.

   > مهمة: يحتاج هذا الإعداد إلى الانتقال إلى وحدة تخزين كتل S3 أو Azure 
   > 
   > ```console
   صدى "serve -c ../../serve.json www -p 50505" >> client-start-Preary.sh
   chmod +x client-start-بداية. (ح)
   pm2 حذف العميل الأساسي-
   pm2. عملاء-start-Preary.sh --name client-primary
   صدى "serve -c . /../serve.json www -p 52525" >> client-start-secondary.sh
   chmod +x client-start-secondary. (ح)
   pm2 حذف العميل الثانوي
   pm2 بدء./client-start-secondary.sh --name client-secondary
```

## 1 - قطع الأشجار والرصد

```console
سجلات pm2
```

```console
pm2 monit
```

## تحديث الأمثلة (النفوذ)

يجب نشر التغييرات البرمجية إلى مثيلات API من وقت لآخر. يمكن أن يكون تحديث متجدد أو تحديث يدوي. الأخير ضروري عند تغيير الإعتمادات أو إضافة متغيرات الإنفيرون.

> [!DANGER] خطوط الأنابيب الآلية لا تتعامل مع تحديثات الإعتمادات في دقيقة. نحن بحاجة إلى القيام بتحديث يدوي قبل تشغيل أي خط أنابيب للنشر.

### 1. التحديثات اليدوية - تستخدم لتحديث الإعتمادات، متغيرات env

1. إيقاف جميع الحالات

   ```console
   pm2 إيقاف الكل
   ```

2. تثبيت أو تحديث الإعتمادات

3. بداية الحالات

   ```console
   pm2 بدء جميع سجلات التحديث-env && pm2
   ```

### 2. التحديثات الدوارة - تستخدم للتغييرات المنطقية للبرمجة.

```console
pm2 إعادة تحميل جميع -تحديث - env && pm2 السجلات
```

> [!ملحوظة] نحن نتعامل مع التحديثات الدارجة إلى التعليمات البرمجية، المنطق، عبر خطوط الأنابيب. يجب ألا تحتاج إلى تشغيل هذه الأوامر وهذه الوثائق هنا للوثائق.
