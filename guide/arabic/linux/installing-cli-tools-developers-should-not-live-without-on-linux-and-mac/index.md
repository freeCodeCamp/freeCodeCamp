---
title: Installing CLI Tools Developers Should not Live Without on Linux and Mac
localeTitle: تثبيت مطوري أدوات CLI يجب ألا يعيشوا بدون Linux و Mac
---
هذه المقالة وصف قصير حول كيفية تثبيت الأدوات المساعدة لسطر الأوامر الأساسية التي يستخدمها المطورون يوميًا في بيئات Macintosh و Linux. أدوات CLI الرئيسية التي سيتم عرضها هي: Homebrew (Mac) و Node و NPM و Bower و Gulp و Grunt و Tmux.

## تثبيت Homebrew (أنظمة Macintosh)

Homebrew هو "مدير الحزم المفقودة لنظام التشغيل OS X". إنها أداة رائعة لتنزيل وتثبيت الحزم مباشرة من سطر الأوامر الخاص بك. لا توجد حاجة لذلك في توزيعات لينكس لأن لديهم بالفعل مديري حزم مثبتين بشكل افتراضي مثل `apt-get` أو `pacman` . لتثبيت تطبيق Homebrew ، ما عليك سوى لصق الأمر التالي في جهازك الطرفي:

*   `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

في حالة تشغيل "Xcode Command Line Tools Missing" ، استخدم التالي لتثبيته:

*   `xcode-select --install`

## تثبيت الآلية الوقائية الوطنية

`NPM` ، أو Node Package Manager ، هو مدير حزم آخر مفيد لتحميل معظم أدوات الويب. يقوم تنزيل `NPM` أيضًا بتثبيت إطار عمل Node.js.

### ماك:

*   استخدام نوع `Homebrew` : يجب `brew install node` و `NPM` .

### لينكس:

*   باستخدام `apt-get` النوع الأول: `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -` ، ثم `sudo apt-get install nodejs`
*   باستخدام نوع `pacman` : `pacman -S nodejs npm`
*   استخدام نوع `yum` : `sudo yum install nodejs npm`
*   باستخدام `dnf` نوع: `sudo dnf install nodejs`
*   باستخدام نوع `zypper` : `sudo zypper install nodejs6`

## تثبيت Bower

Bower هو مدير حزم شائع يسمح لك بتثبيت مكتبات الواجهة الأمامية. يمكنك تثبيته على أنظمة Linux و Macintosh باستخدام `npm` باستخدام الأمر التالي:

*   `npm install -g bower` (الأمر نفسه لكل من Linux و OS X)

## تثبيت Gulp

`Gulp` هي عبارة عن إطار عمل و أداة CLI التي تجعل التطوير أسرع وأكثر إمتاعًا من خلال أتمتة المهام التي يجدها مطورو البرامج بأنفسهم ، ومرة ​​أخرى. أيضا، يمكنك تثبيت `Gulp` من خلال `npm` :

*   `npm install -g gulp-cli`

وفي مجلدات المشاريع الفردية:

*   `npm install --save-dev gulp`

## تثبيت النخير

`Grunt` هي أداة أتمتة شائعة أخرى مشابهة لـ `Gulp` . لتثبيته ، استخدم `npm` مرة أخرى:

*   `npm install -g grunt-cli`

## تثبيت Tmux

`Tmux` هو معدد محطة طرفية لـ Linux و Mac. فهو يمنحك القدرة على الحصول على جلسات ونوافذ متعددة في نفس نافذة Bash ، كما يتيح لك "فصل" الجلسات التي يمكنك الاتصال بها من خلال SSH ، مع ترك جميع البرامج التي كانت قيد التشغيل حاليًا.

للتثبيت على Linux:

*   `sudo apt install tmux`

وهذا هو الذي! مع هذه الأدوات ستكون عملية التطوير والمحتوى الخاص بك ممتعة وفعالة. كما ترى ، فإن الأداة الرئيسية التي يجب تثبيتها هي `npm` وهي تسمح لك بتثبيت العديد من أدوات CLI الرائعة الأخرى الموجهة نحو الويب.