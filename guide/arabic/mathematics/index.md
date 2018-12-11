---
title: Mathematics
localeTitle: الرياضيات
---
## الرياضيات

في هذا القسم ، لدينا أدلة لمجموعة واسعة من المفاهيم الرياضية.

### الرياضيات في البرمجة

على الرغم من أنه من الممارسات الجيدة إنشاء وظائف رياضية بنفسك ، فهناك مكتبات رياضية متوفرة للاستخدام في العديد من لغات البرمجة. هذه لديك وظائف محددة سلفا يمكنك استخدامها لتنفيذ العمليات الحسابية. في البرمجة ، عادة ما تغطي موضوعات مثل هذه في دورات القسم العلوي نظرية الحساب ، وتصميم الخوارزميات ، وتصميم لغة الكمبيوتر.

#### تسلسل فيبوناتشي (وظائف توليد)

نحن نعلم جميعا أن التمرين العكسي يبدأ بحل تسلسل فيبوناتشي. وهو أيضًا المثال الأول الذي يوضح قوة البرمجة الديناميكية. لذا ، فإن الحالة الخاصة لفئة من الرياضيات تعرف باسم توليد الوظائف. إذن ، ما سنناقشه هنا ينطبق بشكل عام على جميع وظائف التوليد. هناك مفهوم في الرياضيات أن "كل دالة توليد لها تسلسل وكل تسلسل له وظيفة توليد". لكن المشكلة تكمن في الجزء الثاني. ليس من السهل دائمًا إيجاد المولدات بشكل عام. لكي نتذكر ذلك ، أرسم تناظرًا للرقم العقلاني غير المنتهي "إذا كنت تعرف الرقم بالشكل العشري ، فليس من السهل العثور على الشكل الكسري المقابل ، ولكن إذا عرفنا الكسر ، فمن السهل دائمًا العثور على الرقم العشري شكل". لذلك ، فإننا ندرس بشكل عام بعض وظائف التوليد الجميلة ، من حيث تسلسلها. لماذا ا؟ لأننا نعرف أن التسلسلات يمكن التعامل معها بسهولة من خلال الكثير من النماذج الخوارزمية. بعض التسلسلات الشهيرة المعروفة هي فيبوناتشي ، همامرد (على غرار الكاتالونية) ، إلخ.

### بما في ذلك مكتبات الرياضيات

سنوضح لك في هذا القسم كيفية تضمين مكتبة الرياضيات القياسية بلغات مختلفة ، بما في ذلك مثال قصير عن كيفية استخدامها.

#### C

\`\` \`ج باستخدام System.Math؛

حاسبة الطبقة العامة {

private int \[\] array = {1، 2، 3، 4، 5}؛

private int CalculatePoweredArray (int int، int \[\] arr) { var poweredArray = arr؛ foreach (int nmbr in poweredArray) { nmbr = Math.Pow (nmbr، power)؛ // الوسيطة الأولى هي الرقم المراد رفعه ، والوسيطة الثانية هي القوة } عودة PoweredArray؛ }

}

 `Calling the function with a power of 3 will give these results: 
 [1, 8, 27, 64, 125] 
 
 Documentation reference: <a href='https://msdn.microsoft.com/en-us/library/system.math(v=vs.110' target='_blank' rel='nofollow'>MSDN</a>.aspx) 
 
 #### JavaScript 
 With Node.js 
` 

جافا سكريبت var math = requires ('mathjs')؛

 `In the browser 
` 

أتش تي أم أل

// use the math.js libary math.sqrt(-4); // result: 2i

 `Documentation reference: <a href='http://mathjs.org/docs/index.html' target='_blank' rel='nofollow'>Math.js documentation</a> 
 
 #### C++ 
` 

حزب الشعب الكمبودي

# تتضمن

 `Documentation reference: <a href='http://www.cplusplus.com/reference/cmath/' target='_blank' rel='nofollow'>cplusplus reference</a> 
 
 #### Python 
` 

الثعبان

> > > استيراد الرياضيات math.sqrt (9) // يأخذ جذور إيجابية فقط في الاعتبار 3.0 math.pi // يمكنك أيضا استخدام الحروف الساكنة الرياضية مثل pi و e +3.141592653589793 math.radians (90) // يحول درجات إلى راديان +1.5707963267948966

 ``In addition to the standard `math` module, there are several other mathematical helper libraries available on [PyPI](https://pypi.org/). For example: 
`` 

الصدف $ pip تثبيت وعر الثعبان $

> > > استيراد numpy كما np np.zeros ((3،4))

 `This returns a 3x4 array populated with 0s. 
 
 #### Java 
` 

جافا استيراد java.lang.Math

 ``The `math` module can also be imported as follows, and the usage difference is illustrated: 
`` 

الثعبان

> > > من استيراد الرياضيات \* الجذر التربيعي (4) 2.0 متزمت +3.141592653589793

\`\` \`

مرجع التوثيق: [بايثون 2](https://docs.python.org/2/library/math.html) | [بايثون 3](https://docs.python.org/3/library/math.html)

### موارد إضافية

يمكن الاطلاع على تصورات متحركة للمفاهيم الرياضية في [3 Blue 1 Brown](http://www.3blue1brown.com/) و [Khan Academy](https://www.khanacademy.org/) .