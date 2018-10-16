---
title: Voice
localeTitle: صوت
---
## صوت

يتيح التعرف على الكلام للمستخدمين المتأثرين بصعوبات الوصول (مثل ضعف البصر الدائم أو ضعف مؤقت أثناء القيادة) القدرة على تصفح المحتوى على موقع الويب أو إدخال بيانات النص (مثل نموذج).

يوفر تركيب الكلام مواقع الويب القدرة على توفير المعلومات للمستخدمين من خلال قراءة النص.

### واجهة برمجة تطبيقات Javascript Web Speech

تمكّنك [واجهة برمجة تطبيقات Web Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) من دمج البيانات الصوتية في تطبيقات الويب باستخدام كل من التعرّف على الكلام وتوليف الكلام.

#### كيف تعمل واجهة برمجة تطبيقات Web Speech

يستخدم API WebSpeech نظام الميكروفون الأصلي للجهاز. عندما يتم التعرف على الكلام من قواعد محددة مسبقا (انظر أدناه) ، فإنه يتم إرجاعها كنتيجة (أو قائمة النتائج) كسلسلة نصية ، ويمكن توفير وظائف رد الاتصال لتنفيذ مزيد من الإجراءات.

#### كيفية استخدام SpeechRecognition API

هنا مثال بسيط على استخدام SpeechRecognition API. لاحظ أنه يتم بدء API مع `new SpeechRecognition()` ، ويبدأ عند `recognition.start();` يسمى. يقوم بإنشاء نص من ما يتم تلقيه ثم يتم إلحاقه بالعنصر `<p class="transcript">` . [انقر هنا للحصول على عرض تجريبي لهذا الرمز](https://codepen.io/ashwoodall/pen/MPeyRm) .

هذا هو HTML الذي يتم إلحاق النص بـ:

 `
<main class="main"> 
  <span class="loader"></span> 
  <p class="description">What I think you said: <p class="transcript" data-js="varValue"></p></p> 
 
 </main> 
` 

وها هو JavaScript:

 `window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
 
 const span = document.querySelector('[data-js="varValue"]'); 
 const main = document.querySelector('.main'); 
 const loader = document.querySelector('.loader'); 
 
 const recognition = new SpeechRecognition(); 
 recognition.lang = 'en-US'; 
 
 recognition.addEventListener('result', e => { 
    const transcript = Array.from(e.results) 
        .map(result => result[0].transcript) 
 
    span.textContent = transcript; 
    loader.textContent = ''; 
 }); 
 
 recognition.addEventListener('start', () => loader.textContent = 'Listening (enable your microphone)...'); 
 
 recognition.addEventListener('end', recognition.start); 
 recognition.start(); 
` 

### اليكسا

اليكسا هي خدمة صوتية تعتمد على السحابة في الأمازون متوفرة على عشرات الملايين من الأجهزة من شركة الأمازون ومصنعي الأجهزة الخارجيين. مع اليكسا ، يمكنك بناء تجارب صوتية طبيعية توفر للعملاء طريقة أكثر سهولة للتفاعل مع التكنولوجيا التي يستخدمونها كل يوم. إنها قادرة على التفاعل الصوتي ، تشغيل الموسيقى ، عمل قوائم المهام ، إعداد الإنذارات ، بث البودكاست ، تشغيل الكاسيت ، وتوفير الطقس ، وحركة المرور ، والرياضة ، وغيرها من المعلومات في الوقت الحقيقي ، مثل الأخبار.

# الأمازون صدى جهاز المدى

*   الأمازون صدى
*   الأمازون صدى بلس
*   الأمازون صدى نقطة
*   الأمازون صدى نظرة
*   عرض الأمازون الصدى
*   الأمازون صدى بقعة

# ميكروفونات الحقل البعيد

تستخدم أنظمة التعرف على الكلام غالبًا عدة ميكروفونات لتقليل تأثير الارتداد والضوضاء. يتم ترتيب الميكروفونات صدى في تخطيط سداسية ، مع ميكروفون واحد في كل قمة الرأس وواحدة في المركز. إن التأخير بين كل ميكروفون يستقبل الإشارة يمكّن الجهاز من التعرف على مصدر الصوت وإلغاء الضوضاء القادمة من اتجاهات أخرى. هذه هي ظاهرة تعرف باسم beamforming.

في حين تعمل أنظمة التعرف على الكلام الحديثة بشكل جيد في ظروف الميكروفون المتقاربة ، فإن الأداء يتحلل في الظروف التي يكون فيها الميكروفون بعيدًا عن المستخدم.

سوف يتأثر الصوت الذي تم التقاطه بواسطة الصدى بما يلي: 1) صوت المتحدث على جدار الغرفة ، 2) ضوضاء الخلفية من الخارج ، 3) الصدى الصوتي يأتي من مكبر الصوت للجهاز 4) إخراج الصوت ضد جدار الغرفة.

# البرمجيات

تتضمن مكونات البرنامج داخل المنصة كلاً من فهم اللغة الطبيعية (NLU) بالإضافة إلى التعرف الآلي على الكلام (ASR). يمكن الاستفادة من مكونات البرامج هذه من خلال "مهارات" مكتوبة بواسطة مطوري برامج مستقلين يتم اعتمادهم بعد ذلك إلى مجموعة من المعايير من قبل Amazon. هناك بالفعل أكثر من 20k من هذه المهارات المخصصة المتاحة من خلال متجر التطبيقات.

### IBM Watson Speech-to-Text API

يستخدم IBM Watson Speech-to-Text التعلم الآلي للتنبؤ بدقة بالكلام في الوقت الحقيقي. يتم حاليًا دعم سبع لغات مختلفة ، بالإضافة إلى الصوت الحي والصوت المسجل مسبقًا. يمكن استخدام واجهة برمجة التطبيقات مجانًا ، أو تتوفر الإصدارات المدفوعة للتطبيقات ذات النطاق الأكبر.

### معلومات اكثر

[واجهة برمجة تطبيقات Web Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) [Alexa API](https://developer.amazon.com/docs/alexa-voice-service/api-overview.html) [IBM Watson API](https://www.ibm.com/watson/services/speech-to-text/)