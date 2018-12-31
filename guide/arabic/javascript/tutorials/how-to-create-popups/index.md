---
title: How to Create Popups
localeTitle: كيفية إنشاء النوافذ المنبثقة
---
## كيفية إنشاء النوافذ المنبثقة

النافذة المنبثقة هي نافذة تنبثق (تظهر) عندما تحدد خيارًا باستخدام ماوس أو تضغط على مفتاح وظيفة خاصة.

في هذا المثال ، ستظهر النافذة المنبثقة عندما تضغط على زر وستبقى على الشاشة حتى تضغط على خيار X.

سنقوم بإنشاء النافذة المنبثقة باستخدام `HTML` و `CSS` و `JavaScript`

### الخطوة 1 HTML

يوفر HTML بنية الإطار المنبثق

\`\` \`أتش تي أم أل

افتح The PopUp

منبثق مع JavaScript

X

 `### Step 2 CSS 
 We will choose our own style for the popup window. Notice: the popup div should be hidden at first, so in the style I will select display: none; 
` 

المغلق .popup _main_ div { الموقع: ثابت العرض: 800 بكسل ؛ الارتفاع: 400 بكسل ؛ border: 2px solid black؛ border-radius: 5px؛ لون الخلفية: #fff؛ اليسار: 50 ٪. الهامش الأيسر: -400 بكسل ؛ أعلى: 50 ٪ ؛ الهامش العلوي: - 250 بكسل ؛ عرض لا شيء؛

} .close _popup { الموقع: مطلقة العرض: 25 بكسل الارتفاع: 25 بكسل border-radius: 25px؛ border: 2px solid black؛ محاذاة النص: مركز؛ right: 5px؛ العلوي: 5 بكسل ؛ المؤشر: المؤشر. } .close_ popup p { الهامش العلوي: 5 بكسل ؛ الخط الوزن: 400 ؛

} .نص{ محاذاة النص: مركز؛ حجم الخط: 30 بكسل الخط الوزن: 400 ؛ أعلى الهامش: 22٪ ؛ } #Btn { الموقع: مطلقة اليسار: 50 ٪. أفضل 20٪؛

}

 `### Step 3 JavaScript 
` 

شبيبة // بادئ ذي بدء ، سوف أقوم بتهيئة متغيراتي // اختر العناصر التي سنستخدمها من DOM // أقوم بإضافة حدث en في الزر الذي سيؤدي إلى تشغيل وظيفة من شأنها تغيير نمط العرض المنبثق من لا شيء إلى حظر

const Btn = document.getElementById ("Btn") const PopupDiv = document.querySelector (". divup _main_ div") const ClosePopup = document.querySelector (". close\_popup") Btn.addEventListener ( "فوق"، وظيفة () { PopupDiv.style.display = "كتلة" }) ClosePopup.addEventListener ( "فوق"، وظيفة () { PopupDiv.style.display = "لا شيء" })

\`\` \`

كود العيش في: [Codepen.io](https://codepen.io/voula12/pen/qyyNeK)