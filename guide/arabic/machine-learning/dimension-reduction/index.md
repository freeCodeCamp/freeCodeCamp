---
title: Dimension Reduction
localeTitle: خفض البعد
---
## خفض البعد

يمكن أن يكون التعامل مع الكثير من الأبعاد مؤلمًا لخوارزميات التعلم الآلي. سيزيد البعد العالي من التعقيد الحسابي ، ويزيد من خطر الإطعام (حيث أن الخوارزمية لديك أكثر درجات الحرية) وسيزداد تفاوت البيانات. ومن ثم ، فإن تقليل الأبعاد سيعرض البيانات في فضاء ذي بعد أقل للحد من هذه الظواهر.

## لماذا يعتبر تقليل الأبعاد مفيدًا؟

*   وكثيرا ما يستخدم الإسقاط في بعدين لتسهيل تصور مجموعات البيانات عالية الأبعاد.
    
*   عندما يمكن إعطاء الأبعاد لتفسير ذي مغزى ، يمكن استخدام الإسقاط على هذا البعد لشرح بعض السلوكيات.
    
*   في حالة التعلم تحت الإشراف ، يمكن استخدام تقليل الأبعاد لتقليل بُعد الميزات ، مما قد يؤدي إلى أداء أفضل لخوارزمية التعلم.
    

## تقنيات تقليل الأبعاد

*   تحليل التمييز الخطي [LDA](http://scikit-learn.org/stable/modules/lda_qda.html)
*   تحليل المكونات الرئيسية [PCA](http://setosa.io/ev/principal-component-analysis/)
*   نواة PCA
*   النواة القائمة على الرسوم البيانية PCA
*   t-Distributed Stochastic neighbourhood Embedding [t-SNE](https://lvdmaaten.github.io/tsne/)
*   [الترميز السيارات](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
*   تحليل التمييز العام (GDA)
*   autoencoders

#### معلومات اكثر:

*   [خطوة بخطوة تعليمي لتحليل المكونات الرئيسية](https://plot.ly/ipython-notebooks/principal-component-analysis/#introduction)
*   [تقنيات تقليل الأبعاد](https://medium.com/towards-data-science/reducing-dimensionality-from-dimensionality-reduction-techniques-f658aec24dfe)
*   [تقنيات الحد من أبعاد: أين تبدأ](https://blog.treasuredata.com/blog/2016/03/25/dimensionality-reduction-techniques-where-to-begin)