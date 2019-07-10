---
title: npm Cheat Sheet
localeTitle: npm ورقة الغش
---
## npm ورقة الغش

قائمة بالأوامر الطرفية والأعلام للمساعدة في استخدام `npm`

## تثبيت التبعية `package.json`

```shell
npm install
``` 

**اختزال**

```shell
# install
npm i <package>
# uninstall
npm un <package>
# update
npm up <package>
``` 

## قائمة الحزم المثبتة عالميا.

```shell
npm list -g --depth=0
``` 

## إلغاء حزمة عالمية

```shell
npm -g uninstall <name>
``` 

## ترقية NPM على ويندوز

بعد محاولة عدة مرات لترقية npm على Windows وجدت هذا في حين بدس في مجلدات npm.

```shell
npm-windows-upgrade
``` 

## تحديث الحزم العالمية

لمعرفة الحزم التي تحتاج إلى تحديث ، استخدم:

```shell
npm outdated -g --depth=0
``` 

لتحديث الحزم العالمية بشكل فردي ، يمكنك استخدام:

```shell
npm update -g <package> <package> <package>
``` 

## قائمة البرامج النصية المتاحة لتشغيل

```shell
npm run
``` 

## تحديث npm

```shell
npm install -g npm@latest
# using windows? Then use
npm-windows-upgrade
``` 

## الأعلام

`-S` هو نفسه `--save` لا حاجة في npm 5+ `-D` هو نفسه `--save-dev`

## النسخة المثبتة

```shell
npm list # for local packages
``` 

## عقدة مدير الإصدار `nvm`

لنفترض أنك تريد تثبيت Node v6.9.1 الذي تكتبه على الجهاز:

```shell
nvm install 6
``` 

إذا كان لديك إصدارات متعددة من Node.js مثبتة على مساحة العمل الخاصة بك ، يمكنك التبديل إلى إصدار محدد بالكتابة:

```shell
nvm use 4.8.4
``` 

### جعل نسخة عقدة الافتراضي.

لتعيين إصدار افتراضي من العقدة لمساحة العمل الخاصة بك ، فقط اكتب:

```shell
nvm alias default 6
``` 

حيث كان الإصدار 6 هو الإصدار الذي تريد استخدامه كإعداد افتراضي.