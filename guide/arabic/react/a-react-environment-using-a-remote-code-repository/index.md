---
title: A React Environment Using a Remote Code Repository
localeTitle: بيئة تفاعلية باستخدام مستودع Code بعيد
---
هذا هو كيفية إنشاء بيئة React غير إنتاجية باستخدام مخزن رمز بعيد. سنستخدم تفاعل cdnjs.cloudflare.com 16.0.0 و react-dom و babel-standalone 6.26.0 لانجاز هذا. يستخدم babel-polyfill لتوافق المتصفحات القديمة.

\`\` \`أتش تي أم أل

   مرحباً

ReactDOM.render( <h1>Hello React</h1>, document.getElementById('helloreact'));

\`\` \` إذا تم حفظ هذا الرمز مع امتداد ملف html (helloReact.html) ، يمكن فتحه في متصفح ويب سيتم تشغيل React و Babel.