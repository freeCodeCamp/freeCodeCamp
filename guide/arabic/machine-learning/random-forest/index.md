---
title: Random Forest
localeTitle: غابة عشوائية
---
## غابة عشوائية

غابة عشوائية هي مجموعة من أشجار القرار التي تتخذ قرارات أفضل ككل من كل على حدة.

### مشكلة

أشجار القرار في حد ذاتها عرضة **للتركيب** . هذا يعني أن الشجرة أصبحت معتادة على بيانات التدريب لدرجة أنها تجد صعوبة في اتخاذ القرارات بشأن البيانات التي لم ترها من قبل.

### الحل مع الغابات العشوائية

تنتمي الغابات العشوائية في فئة خوارزميات **تعلم المجموعة** . تستخدم هذه الفئة من الخوارزميات العديد من المقدرات لتحقيق نتائج أفضل. وهذا يجعل Random Forest عادة **أكثر دقة** من أشجار القرار العادي. في الغابات العشوائية ، يتم إنشاء مجموعة من أشجار القرار. يتم **تدريب** كل شجرة **على مجموعة فرعية عشوائية من البيانات ومجموعة فرعية عشوائية من ميزات تلك البيانات** . وبهذه الطريقة ، يتم تقليل إمكانية استخدام المقدرين في استخدام البيانات (التجهيز) بشكل كبير ، لأن **كل واحد منهم يعمل على البيانات والميزات المختلفة** عن الآخرين. هذه الطريقة في إنشاء مجموعة من المقدرات وتدريبهم على مجموعات فرعية عشوائية من البيانات هي تقنية في _تعلم مجموعة_ تسمى **التعبئة** أو _Bootstrap AGGregatING_ . للحصول على التنبؤ ، يصوت كل من أشجار القرار على التنبؤ الصحيح (التصنيف) أو يحصلون على متوسط ​​نتائجهم (الانحدار).

### مثال على تعزيز في بيثون

في هذه المسابقة ، يتم منحنا قائمة بأحداث التصادم وخصائصها. سوف نتوقع بعد ذلك ما إذا كان هناك إنحلال τ → 3μ حدث في هذا التصادم. هذا τ → 3μ يفترض في الوقت الحاضر من قبل العلماء ألا يحدث ، وكان الهدف من هذه المسابقة هو اكتشاف τ → 3μ يحدث بشكل متكرر أكثر مما يستطيع العلماء فهمه. كان التحدي هنا هو تصميم مشكلة تعلم آلي لشيء لم يلاحظه أحد من قبل. طور العلماء في CERN التصاميم التالية لتحقيق الهدف. https://www.kaggle.com/c/flavours-of-physics/data

 `#Data Cleaning 
 import pandas as pd 
 data_test = pd.read_csv("test.csv") 
 data_train = pd.read_csv("training.csv") 
 data_train = data_train.drop('min_ANNmuon',1) 
 data_train = data_train.drop('production',1) 
 data_train = data_train.drop('mass',1) 
 
 #Cleaned data 
 Y = data_train['signal'] 
 X = data_train.drop('signal',1) 
 
 #adaboost 
 from sklearn.ensemble import AdaBoostClassifier 
 from sklearn.tree import DecisionTreeClassifier 
 seed = 9001 #this ones over 9000!!! 
 boosted_tree = AdaBoostClassifier(DecisionTreeClassifier(max_depth=1), algorithm="SAMME", 
                                  n_estimators=50, random_state = seed) 
 model = boosted_tree.fit(X, Y) 
 
 predictions = model.predict(data_test) 
 print(predictions) 
 #Note we can't really validate this data since we don't have an array of "right answers" 
 
 #stochastic gradient boosting 
 from sklearn.ensemble import GradientBoostingClassifier 
 gradient_boosted_tree = GradientBoostingClassifier(n_estimators=50, random_state=seed) 
 model2 = gradient_boosted_tree.fit(X,Y) 
 
 predictions2 = model2.predict(data_test) 
 print(predictions2) 
` 

#### معلومات اكثر:

*   [الغابات العشوائية (ويكيبيديا)](https://www.wikiwand.com/en/Random_forest)
*   [مقدمة للغابات العشوائية - المبسطة](https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/)
*   [كيف تعمل خوارزمية غابة عشوائية (فيديو)](https://www.youtube.com/watch?v=loNcrMjYh64)