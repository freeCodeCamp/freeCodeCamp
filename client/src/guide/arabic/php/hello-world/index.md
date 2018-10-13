---
title: PHP - Hello World
localeTitle: PHP - مرحبا العالم
---
## PHP - مرحبا العالم

يتم تنفيذ البرامج النصية PHP على الخادم.

قبل المتابعة ، يجب أن يكون لديك فهم أساسي لما يلي:

### HTML

### CSS

### جافا سكريبت

يمكن أن تحتوي ملفات PHP على نص و HTML و CSS وجافا سكريبت و PHP code. يتم تنفيذ نص PHP على الخادم ، ويتم إرسال نتيجة HTML العادية إلى المتصفح.

يبدأ البرنامج النصي لـ PHP `<?php` وينتهي بـ `?>` :

 `<?php 
 // PHP code goes here 
 ?> 
` 

أو يمكنك أيضًا كتابة برنامج نصي PHP يبدأ بـ `<?php` وينتهي بدون `?>` :

 `<?php 
 // PHP code goes here 
` 

أدناه ، لدينا مثال لملف PHP بسيط ، مع برنامج نصي PHP الذي يستخدم دالة PHP مدمجة "echo" لإخراج النص "Hello World!" على صفحة الويب:

 `<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 echo "My first PHP script!"; 
 ?> 
 
 </body> 
 </html> 
`