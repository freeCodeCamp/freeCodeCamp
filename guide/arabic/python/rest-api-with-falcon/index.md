---
title: REST APIs with Falcon
localeTitle: واجهات برمجة التطبيقات REST مع Falcon
---
## المقدمة

واجهات برمجة التطبيقات (REST) ​​هي مكوّن رئيسي لأي رصة متقنة الصنع ، ويصادف أن بيثون تمتلك بعض أطر العمل اللامعة لتكوين واجهات برمجة التطبيقات بسرعة. واحد من هذه الأطر يسمى [الصقر](https://falconframework.org) - وهو رائع! إنه في الأساس عبارة عن هيكل مجهري ، وهو مزود بعدد كبير من المزايا:

1.  إنه سريع سريع حقا. تحقق من المعايير [هنا](https://falconframework.org/#sectionBenchmarks) .
    
2.  يتم تعريف موارد HTTP على أنها فئات ، مع استخدام أساليب الفئات لعمليات REST المختلفة على هذه الموارد. هذا يساعد على الحفاظ على مصدر برنامج نظيف.
    
3.  انها قابلة للتوسع جدا - تحقق من [هذا القسم](https://github.com/falconry/falcon/wiki/Complementary-Packages) على الويكي الخاص بهم ، للحصول على الشعور به.
    
4.  يعتمد على WSGI - المعيار البايثوني لتطبيقات الويب - لذا فهو يعمل مع Python 2.6 و 2.7 و 3.3+. وإذا كنت بحاجة إلى المزيد من الأداء ، فقم بتشغيله باستخدام PyPy!
    

## ابدء

أولا ، دعونا نعد بيئتنا. شخصيا، وانها دائما كبيرة للعمل في البيئات الافتراضية - يمكنك استخدام `virtualenv` ، `virtualenvwrapper` أو `venv` . بعد ذلك ، قم بتثبيت Falcon باستخدام `pip` : `pip install falcon` .

سنقوم بتطوير نموذج صغير لواجهة برمجة التطبيقات (API) والذي يقوم بالتلاعب في المناطق الزمنية الأساسية بالنسبة لنا. سيعرض الوقت الحالي بالتوقيت العالمي المنسق (UTC) ، بالإضافة إلى وقت الحقن المقابل. ولتحقيق هذه الغاية ، سنقوم بالاستيلاء على مكتبة أنيقة تسمى `arrow` : `pip install arrow` .

يمكنك العثور على العينة النهائية على [https://github.com/rudimk/freecodecamp-guides-rest-api-falcon](https://github.com/rudimk/freecodecamp-guides-rest-api-falcon) .

## مصادر

فكر في مورد ككيان تحتاج إليه واجهة برمجة التطبيقات. في حالتنا ، سيكون أفضل مورد هو `Timestamp` . عادةً ما يكون توجيهنا شيئًا كالتالي:

 `GET /timestamp 
` 

هنا ، `GET` هو فعل HTTP المستخدم لاستدعاء نقطة النهاية هذه ، و `/timestamp` هو عنوان URL نفسه. الآن بعد أن حصلنا على هذا الجزء من الطريق ، دعنا ننشئ وحدة نمطية!

`$ touch timestamp.py`

الوقت لاستيراد مكتبة الصقر:

 `import json 
 
 import falcon 
 
 import arrow 
` 

لاحظ أننا قمنا أيضًا باستيراد حزمة `json` ومكتبة `arrow` . الآن ، دعنا نحدد فئة لموردنا:

 `class Timestamp(object): 
 
    def on_get(self, req, resp): 
        payload = {} 
        payload['utc'] = arrow.utcnow().format('YYYY-MM-DD HH:mm:SS') 
        payload['unix'] = arrow.utcnow().timestamp 
 
        resp.body = json.dumps(payload) 
        resp.status = falcon.HTTP_200 
` 

دعنا نذهب من خلال هذا المقتطف. لقد قمنا بتعريف فئة `Timestamp` ، `on_get` أسلوب فئة يسمى `on_get` - تخبر هذه الدالة Falcon أنه عندما يتم إصدار طلب `GET` لنقطة نهاية لهذا المورد ، قم بتشغيل الوظيفة `on_get` وقم بتوفير كائنات الطلب والاستجابة كمعلمات. بعد ذلك ، إنه الإبحار السلس - نقوم بإنشاء قاموس فارغ ، ونملأه بالطوابع الزمنية UTC و UNIX الحالية ، وتحويله إلى JSON وإرفاقه بكائن الاستجابة.

بسيطة جدا ، أليس كذلك؟ لكن للأسف ، هذا ليس كل شيء. نحتاج الآن إلى إنشاء خادم Falcon وربط فئة الموارد التي قمنا بتعريفها للتو إلى نقطة نهاية فعلية.

`$ touch app.py`

الآن ، أضف الرمز أدناه:

 `import falcon 
 
 from timestamp import Timestamp 
 
 api = application = falcon.API() 
 
 timestamp = Timestamp() 
 
 api.add_route('/timestamp', timestamp) 
` 

هنا ، قمنا بتعريف واجهة برمجة تطبيقات Falcon ، وقمنا بتهيئة مثيل لفئة الموارد التي أنشأناها في وقت سابق. بعد ذلك ، قمنا `/timestamp` نقطة النهاية `/timestamp` مع مثيل الفصل - والآن نحن جاهزون للنجاح! لاختبار هذا API تثبيت `gunicorn` ( `pip install gunicorn` ) ، وتشغيل `gunicorn app` . استخدم Postman أو `cURL` بسيط لاختبار ذلك:

 `$ curl http://localhost:8000/timestamp 
 {"utc": "2017-10-20 06:03:14", "unix": 1508479437} 
` 

وهذا يفعل ذلك!

## المضي قدما

وبمجرد حصولك على تعليق Falcon ، فإن إنشاء RESTful APIs القوية التي تتفاعل مع قواعد البيانات أو طوابير الرسائل سهل للغاية. تحقق من [مستندات Falcon](https://falcon.readthedocs.io/en/stable/index.html) ، بالإضافة إلى PyPI للتعرف على وحدات Falcon المثيرة التي تستمر في الظهور.