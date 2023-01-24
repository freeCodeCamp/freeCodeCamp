---
id: 587d7dbc367417b2b2512bae
title: أنشئ آلة الطبول
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**متطلبات:** أنشئ تطبيق يشبه وظيفيا إلي <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.

أكمل قصص المستخدم بالأسفل وأجتاز جميع الاختبارات للنجاح. استخدم أي libraries أو APIs تحتاج إليها. أعطيها أسلوبك الشخصي الخاص.

يمكنك استخدام أي مزيج من HTML و JavaScript و CSS و Bootstrap و SASS و React و Redux و jQuery لإكمال هذا المشروع. يجب عليك استخدام frontend framework (مثل React على سبيل المثال) لأن هذا القسم يدور حول تعلم frontend framework. لا ينصح باستخدام التكنولوجيات الإضافية غير المدرجة أعلاه و استخدامها على مسؤوليتك الخاصة. ونحن ننظر في دعم frontend frameworks أخرى، مثل Angular و Vue، ولكنها غير مدعومة حاليا. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم حُزْمَة التكنولوجيات المقترحة لهذا المشروع. برمجة سعيدة!

**قصة المستخدم #1:** يجب أن أكون قادرا على رؤية حاوية خارجية ذات `id="drum-machine"` تحتوي على جميع العناصر الأخرى.

**قصة المستخدم #2:** في `#drum-machine` يمكنني رؤية عنصر يحمل `id="display"`.

**قصة المستخدم #3:** في `#drum-machine` يمكنني أن أرى 9 عناصر لوحة الطبل القابلة للنقر، كل منها يحمل اسم فئة من `drum-pad`, معرف فريد يصف مقطع الصوت الذي سيتم إعداد لوحة الطبل للتشغيل، ونص داخلي يقابل أحد المفاتيح التالية على لوحة المفاتيح: `Q`، و`W`، و`E`، و`A`، و`S`، و`D`، و`Z`، و`X`، و`C`. لوحات الطبل (drum pads) تكن بهذا الترتيب.

**قصة المستخدم #4:** داخل كل `.drum-pad`، يجب أن يكون هناك عنصر HTML5 صوتي `audio` يحتوي على سمة `src` يشير إلى قالب صوتي، اسم فئة من `clip` ومعرف موافق النص الداخلي لأبيه `.drum-pad` (على سبيل المثال `id="Q"`، و`id="W"`، و`id="E"`، إلخ.

**قصة المستخدم #4:** عندما أضغت على عنصر `.drum-pad`, يشتغل الصوت المسجل في عنصر `audio` الإبن.

**قصة المستخدم #6:** عندما أضغط على مفتاح المشغل المرتبط بكل `.drum-pad`، يجب تشغيل المقطع الصوتي الموجود في عنصر صوت `audio` الأبن (مثلاً الضغط على مفتاح `Q` يجب أن يفعل لوحة الطبل الذي تحتوي على السلسلة `Q`، الضغط على مفتاح `W` يجب أن يطلق لوحة الطبل الذي تحتوي على السلسلة `W` وما إلى ذلك).

**قصة المستخدم #7:** عندما `.drum-pad`، يتم عرض سلسلة تصف مقطع الصوت المرتبط به كالنص الداخلي لعنصر `#display` (يجب أن تكون كل سلسلة فريدة من نوعها).

فيما يلي بعض العينات الصوتية التي يمكنك استخدامها لآلة الطبل الخاصة بك:

- [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
- [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
- [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
- [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
- [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
- [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
- [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
- [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
- [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)

يمكنك بناء مشروعك عن طريق <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel="noopener noreferrer nofollow">استخدام هذا نموذج CodePen</a> والنقر على `Save` لإنشاء طبقيك الخاص بك. أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

بمجرد أن تنتهي، ارسل عنوان URL لمشروع العمل الخاص بك مع اجتياز جميع الاختبارات.

# --solutions--

```js
// solution required
```
