---
title: Go
localeTitle: اذهب
---
## اذهب

![اذهب الوفير](https://golang.org/doc/gopher/bumper320x180.png)

**Go** (أو **golang** ) هي لغة برمجة تم إنشاؤها في Google عام 2007 بواسطة Robert Griesemer و Rob Pike و Ken Thompson. هي عبارة عن لغة مجمعة ومكتوبة بشكل ثابت في تقليد Algol و C. وهي تحتوي على جمع القمامة ، والكتابة الهيكلية المحدودة ، وسلامة الذاكرة ، وميزات البرمجة المتزامنة على غرار CSP. المترجم وأدوات اللغة الأخرى التي طورتها Google أصلاً جميعها مجانية ومفتوحة المصدر. شعبيتها تتزايد بسرعة. إنه خيار رائع لبناء تطبيقات الويب.

لمزيد من المعلومات ، توجه إلى صفحة [Go's Home](https://golang.org/)

تريد [جولة](https://tour.golang.org/welcome/1) سريعة [من الذهاب؟](https://tour.golang.org/welcome/1)

## \## ما قبل التركيب:

#### تثبيت Golang مع البيرة:

 `$ brew update 
 $ brew install golang 
` 

#### عند التثبيت ، حاول تشغيل إصدار go لمشاهدة الإصدار المثبت من Go.

## \### إعداد مساحة العمل:

##### إضافة متغيرات البيئة:

أولاً ، ستحتاج إلى معرفة انتقال موقع مساحة العمل الخاصة بك.

سنقوم بإضافة بعض متغيرات البيئة إلى تهيئة shell. واحد من الملفات الموجودة في bash\_profile دليل المنزل الخاص بك ، bashrc أو. zshrc (للوه يا جيش Zsh)

 `$ vi .bashrc 
` 

\`

ثم أضف تلك الخطوط لتصدير المتغيرات المطلوبة

#### هذا هو في الواقع ملف .bashrc الخاص بك

 `export GOPATH=$HOME/go-workspace # don't forget to change your path correctly! 
 export GOROOT=/usr/local/opt/go/libexec 
 export PATH=$PATH:$GOPATH/bin 
 export PATH=$PATH:$GOROOT/bin 
` 

## \#### إنشاء مساحة العمل الخاصة بك:

##### قم بإنشاء شجرة أدلة مساحة العمل:

 `$ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin 
 $GOPATH/src : Where your Go projects / programs are located 
 $GOPATH/pkg : contains every package objects 
 $GOPATH/bin : The compiled binaries home 
` 

### بداية سريعة

في مشروع Go السريع والنهائي ، جرّب [سبائك](https://www.growthmetrics.io/open-source/alloy)

1.  مستودع استنساخ سبائك

 `git clone https://github.com/olliecoleman/alloy 
 cd alloy 
` 

2.  تثبيت التبعيات

 `glide install 
 npm install 
` 

3.  ابدأ خادم التطوير

 `go install 
 alloy dev 
` 

4.  زيارة الموقع على `http://localhost:1212`

_تستخدم سبائك Node و NPM و Webpack_

### اذهب الملعب

[اذهب الملعب](https://play.golang.org/)

إن تعلم كيفية التثبيت على جهازك المحلي أمر مهم ، ولكن إذا كنت تريد بدء اللعب مع الانتقال مباشرة إلى متصفحك ، فإن Go Playground هو وضع الحماية الأمثل لبدء العمل على الفور! لمعرفة المزيد عن Go Playground راجع مقالتهم بعنوان [Inside the Go Playground](https://blog.golang.org/playground)