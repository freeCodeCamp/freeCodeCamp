# إنشاء FreCodeCamp على نظام ويندوز الفرعي للينوكس (WSL)

> [!ملاحظة] قبل أن تتبع هذه التعليمات تأكد من أن النظام الخاص بك يفي بالمتطلبات
> 
> **WSL 2**: Windows 10 64-bit (الإصدار 2004، البناء 19041 أو أعلى) - متاح لجميع التوزيعات بما في ذلك Windows 10 Home.
> 
> **Docker سطح المكتب للويندوز**: انظر المتطلبات ذات الصلة لـ [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) و [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

ويغطي هذا الدليل بعض الخطوات الشائعة مع إعداد WSL2. حالما تعالج بعض القضايا المشتركة مع مؤتمر القمة العالمي الثاني المعني بمجتمع المعلومات، يجب أن تكون قادراً على متابعة دليل الإعداد المحلي الخاص بنا للعمل مع FreCodeCamp على ويندوز الذي يقوم بتشغيل شريط WSL مثل Ubuntu.

## تمكين WSL

اتبع الإرشادات في [الوثائق الرسمية](https://docs.microsoft.com/en-us/windows/wsl/install-win10) لتثبيت WSL1 ثم الترقية إلى WSL2.

## Install Ubuntu

1. لقد أوصينا باستخدام Ubuntu-18.04 أو أكثر مع WSL2.

   > [!ملاحظة]
   > 
   > بينما يمكنك استخدام الأقراص الأخرى غير الديدية، كلها تأتي مع الغوغتشات الخاصة بها وهي خارج نطاق هذا الدليل.

2. تحديث الإعتمادات لنظام التشغيل

   ```console
   قم بتحديث sudo apt
   sudo apt upd-y

   # تنظيف
   sudo apt autoremove -y
   ```

## إعداد Git

يأتي Git مثبتًا مسبقًا مع Ubuntu 18.04، تحقق من أن إصدار Git الخاص بك مع `git --version`.

```output
~
<unk> git --version
git الإصدار 2.25.1
```

(اختياري ولكن مستحسن) يمكنك الآن المضي قدما [في إعداد مفاتيح ssh](https://help.github.com/articles/generating-an-ssh-key) مع GitHub.

## تثبيت محرر التعليمات البرمجية

نوصي بشدة بتثبيت [Visual Studio Code](https://code.visualstudio.com) على Windows 10. لديها دعم كبير لـ WSL وتثبيت تلقائياً جميع الإضافات الضرورية على ذاكرة WSL الخاص بك.

بشكل أساسي، سوف تقوم بتعديل وتخزين التعليمات البرمجية الخاصة بك على Ubuntu-18.04 مع تثبيت رمز VS على Windows.

## تثبيت دوكر سطح المكتب

**سطح المكتب الخاص بـ Docker Windows** يسمح لك بتثبيت وتشغيل قاعدة البيانات والخدمات مثل MongoDB, NGINX, الخ. وهذا مفيد لتجنب المآزق المشتركة مع تثبيت MongoDB أو خدمات أخرى مباشرة على Windows أو WSL2.

اتبع دورة التعليمات على [الوثائق الرسمية](https://docs.docker.com/docker-for-windows/install) وقم بتثبيت دوكر سطح المكتب لتوزيع ويندوز الخاص بك.

هناك بعض المتطلبات الدنيا من المعدات لأفضل التجربة.

## تكوين سطح المكتب الخاص بـ Docker لـ WSL

بمجرد تثبيت سطح المكتب Docker ، [اتبع هذه التعليمات](https://docs.docker.com/docker-for-windows/wsl) وتهيئته لاستخدام تثبيت Ubuntu-18.04 كخلفية للنظام.

وهذا يجعل من الممكن تشغيل الحاويات على جانب WSL بدلا من تشغيلها على Windows. ستتمكن من الوصول إلى الخدمات عبر `http://localhost` على كل من Windows و Ubuntu.

## تثبيت MongoDB من Docker Hub

بمجرد تكوين سطح المكتب الخاص بـ Docker للعمل مع WSL2، اتبع هذه الخطوات لبدء خدمة MongoDB:

1. تشغيل محطة Ubuntu-18.04 جديدة

2. سحب `MongoDB 3.6` من Dockerhub

   ```console
   docker pull mongo:3
   ```

3. بدء خدمة MongoDB في المنفذ `27017`، وتهيئتها لتشغيلها تلقائيا عند إعادة تشغيل النظام

   ```console
   docker تشغيل -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --إعادة تشغيل بدون توقف \
     -d Mongo:3
   ```

4. يمكنك الآن الوصول إلى الخدمة من Windows أو Ubuntu على `mongodb://localhost:27017`.

## تثبيت Node.js و npm

ننصحك بتثبيت إصدار LTS لـ Node.js مع مدير إصدار العقدة - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

بمجرد تثبيت هذه الأوامر لتثبيت واستخدام إصدار Node.js حسب الحاجة

```console
تثبيت nvm --lts

# OR
# nvm install <version>

nvm install 14

# Usage
# nvm use <version>

nvm يستخدم 12
```

Node.js تأتي مجمعة مع `npm`، يمكنك التحديث إلى أحدث إصدارات `npm` مع:

```console
npm تثبيت -g npm@latest
```

## إعداد FreCodeCamp محليا

الآن بعد أن قمت بتثبيت المتطلبات المسبقة، اتبع [دليل الإعداد المحلي الخاص بنا](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) لاستنساخ وتثبيت وإعداد FreCodeCamp محليا على جهازك.

> [تحذير]
> 
> يرجى ملاحظة أن الإعداد لاختبارات Cypress (وما يتصل بها من احتياجات واجهة المستخدمين) هو عمل جاري. يجب أن تكون قادراً على العمل في معظم الكود البرمجي.

## روابط مفيدة

- [إعداد WSL2 Dev مع Ubuntu 20.04, Node.js, MongoDB, VS Code و Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - مقال من Mrugesh Mohapatra (مطور تاف على freeCodeCamp.org)
- الأسئلة المتكررة عن:
  - [نظام Windows الفرعي لـ Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [دوكر سطح المكتب للويندوز](https://docs.docker.com/docker-for-windows/faqs)
