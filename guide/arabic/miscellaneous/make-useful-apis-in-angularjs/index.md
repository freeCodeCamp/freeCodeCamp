---
title: Make Useful APIs in Angularjs
localeTitle: جعل أبيس مفيدة في Angularjs
---
هناك نوعان من الأشياء التي عليك القيام بها قبل أن تكون مفيدة لك. لنفترض أنك تريد عرض جميع _الأشياء_ المرتبطة باسم المستخدم المطلوب مع هذه الصفحة: يجب عليك أولاً

1.  أن يكون لديك حقل "اسم مستخدم" أو "مالك" في مخطط _شيء ما_ على `/server/api/thing/thing.model.js`
    
2.  اكتب `/server/api/thing/index.js` في `/server/api/thing/index.js` لالتقاط طلب للحصول على اسم مستخدم معين. قد يبدو الطلب من واجهتك الأمامية كالتالي:
    
    $ http.get ('/ api / things /' + اسم المستخدم) .success (…)
    

لذلك عليك إضافة سطر إلى `index.js` مثل:

 `router.get('/:user', controller.indexUser); 
` 

ثم في `thing.controller.js` سوف تكتب وظيفة _exports.indexUser_ مثل ذلك:

 `exports.indexUser = function(req, res) { 
    Thing.find({owner:req.params.user}, function (err, things) { 
        if(err) return res.send(500, err); 
        res.json(200, things); 
    }); 
 }; 
` 

تحذير!!! هذه الطريقة لا تعمل إلا إذا كانت أسماء المستخدمين فريدة تمامًا بين المستخدمين. لا يحتوي نظام المصادقة الافتراضي الذي يأتي مع المولد الزاوي - fullstack على أسماء مستخدمين فريدة ، لذا ربما يكون من الأفضل استخدام _المستخدم._ حقل id\_ لتحديد المستخدمين الفريدين في قاعدة البيانات الخاصة بك الآن ، إلا إذا كنت تريد تطبيق أسماء مستخدمين فريدة بنفسك عن طريق تغيير `/api/user/user.model.js` و `/api/user/user.controller.js` و `/app/client/account/signup/signup.controller.js` الخاص بك `/app/client/account/signup/signup.controller.js` . لحسن الحظ ، يجب أن تعرف كيفية القيام بكل ذلك بعد قراءة هذا الدليل!