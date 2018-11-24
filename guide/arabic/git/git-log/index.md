---
title: Git Log
localeTitle: سجل جيت
---
## سجل جيت

يعرض الأمر `git log` جميع الإلتزامات في سجل مستودع التخزين.

بشكل افتراضي ، يعرض الأمر كل التزام:

*   خوارزمية التجزئة الآمنة (SHA)
*   مؤلف
*   تاريخ
*   ارتكاب الرسالة

### تصفح بوابة جيت

يستخدم Git جهاز النداء الصغير أقل للصفحة خلال سجل الالتزام. يمكنك التنقل باستخدام الأوامر التالية:

*   للتمرير لأسفل بواسطة سطر واحد ، استخدم j أو ↓
*   للتمرير لأعلى باستخدام سطر واحد ، استخدم k أو ↑
*   بالتمرير لأسفل من صفحة واحدة ، استخدم مفتاح المسافة أو الزر Page Down
*   للتمرير لأعلى صفحة واحدة ، استخدم b أو الزر Page Up
*   لإنهاء السجل ، استخدم q

### git سجل الأعلام

يمكنك تخصيص المعلومات التي يقدمها `git log` باستخدام الأعلام.

#### \--خط واحد

`git log --oneline`

`--oneline` العلامة - - `--oneline` ظهور `git log`

*   ارتكبت واحد في كل سطر
*   أول سبعة أحرف من SHA
*   رسالة الالتزام

#### \--stat

`git log --stat`

`--stat` علامة `--stat` ظهور `git log`

*   الملفات التي تم تعديلها في كل التزام
*   عدد الخطوط المضافة أو إزالتها
*   خط ملخص مع العدد الإجمالي للملفات والخطوط التي تم تغييرها

#### \- نقطة أو -p

`git log --patch`

أو ، الإصدار الأقصر

`git log -p`

يؤدي علامة `--patch` إلى إظهار `git log`

*   الملفات التي قمت بتعديلها
*   موقع الخطوط التي أضفتها أو أزلتها
*   التغييرات المحددة التي قمت بها

### عرض العدد المحدد من الالتزام حسب المؤلف

لعرض عدد معين من الإلتزامات من قِبل مؤلف إلى repo الحالي (اختياريًا بتنسيق prettified) ، يمكن استخدام الأمر التالي

`git log --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" -n {NUMBER_OF_COMMITS} --author="{AUTHOR_NAME}" --all`

#### تبدأ في التزام معين

لبدء `git log` في التزام معين ، أضف SHA:

`git log 7752b22`

سيعرض هذا الالتزام بـ SHA 7752b22 وجميع الإلتزامات التي تم إجراؤها قبل الالتزام. يمكنك دمج هذا مع أي من العلامات الأخرى.

#### \--رسم بياني

`git log --graph`

تمكّنك العلامة - `--graph` من عرض `git log` `--graph` . لجعل الأشياء مثيرة للاهتمام ، يمكنك دمج هذا الأمر مع خيار `--oneline` الذي تعلمته من الأعلى.

`git log --graph --oneline`

سيكون الناتج مشابهًا ،

 `* 64e6db0 Update index.md 
 * b592012 Update Python articles (#5030) 
 * ecbf9d3 Add latest version and remove duplicate link (#8860) 
 * 7e3934b Add hint for Compose React Components (#8705) 
 * 99b7758 Added more frameworks (#8842) 
 * c4e6a84 Add hint for "Create a Component with Composition" (#8704) 
 *   907b004 Merge branch 'master' of github.com:freeCodeCamp/guide 
 |\ 
 | * 275b6d1 Update index.md 
 * |   cb74308 Merge branch 'dogb3rt-patch-3' 
 |\ \ 
 | |/ 
 |/| 
 | *   98015b6 fix merge conflicts after folder renaming 
 | |\ 
 |/ / 
 | * fa83460 Update index.md 
 * | 6afb3b5 rename illegally formatted folder name (#8762) 
 * | 64b1fe4 CSS3: border-radius property (#8803) 
` 

تتمثل إحدى فوائد استخدام هذا الأمر في أنه يمكنك من الحصول على نظرة عامة حول كيفية دمج عمليات الدم وكيفية إنشاء سجل git.

هناك خيارات أخرى يمكنك استخدامها بالاشتراك مع - `--graph` . زوجين منهم - `--decorate` `--all` . تأكد من تجربة ذلك أيضًا. وتشير إلى [التوثيق](https://git-scm.com/docs/git-log) للحصول على معلومات أكثر فائدة.

#### معلومات اكثر:

*   [أساسيات Git - عرض محفوظات الالتزام](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
*   [سجل جيت](https://git-scm.com/docs/git-log)

##### موارد أخرى على بوابة Git في guide.freecodecamp.org

*   [جيت ميرج](../git-merge/index.md)
*   [بوابة الخروج](../git-checkout/index.md)
*   [جايت كومت](../git-commit/index.md)
*   [جيت ستاش](../git-stash/index.md)
*   [بوابة فرع](../git-branch/index.md)