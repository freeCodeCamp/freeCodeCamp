---
title: JavaFX
localeTitle: سكريبت
---
## المقدمة

JavaFX عبارة عن إطار عمل رسومات تم إنشاؤه بواسطة Sun Microsystems والذي يستخدم لتطوير تطبيقات سطح المكتب والإنترنت الغنية. تم إنشاء JavaFX ليحل محل المكتبات القديمة (Swing and Abstract Window Toolkit (AWT)) ، ويعمل كواجهة برمجة تطبيقات رسومية قياسية في لغة جافا لـ Java Standard Edition.

## ادوات التطوير

### جولون SceneBuilder

Gulon Scene Builder هو تطبيق يستخدم لتصميم واجهة المستخدم (UI) في JavaFX. يستخدم التطبيق خاصية السحب والإفلات لتصميم واجهة المستخدم السريع الذي يسمح لك بتصوير الواجهة التي تقوم بإنشائها أثناء تصميمها.

#### Screeenshots:

![المشهد باني واجهة المستخدم](https://cdn-media-1.freecodecamp.org/imgr/3d9SqBR.png)

### FXML

FXML هي لغة ترميز مبنية على XML تستخدم لتعريف البنى في JavaFX. يحدد مستند FXML الكائنات المختلفة في الصف في شجرة شبيهة بعلامة التعشيش في مستندات XML.

#### مثال:

 `<HBox spacing="10" alignment="bottom_right" > // Creates an HBox Object 
        <Button text="Sign In"/> // Nested inside the HBox is a Button object with the text 'Sign In' 
 </HBox> 
` 

### المراجع:

[مستندات FXML](https://docs.oracle.com/javase/8/javafx/api/javafx/fxml/doc-files/introduction_to_fxml.html)

[المشهد منشئ تعليمي](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)

[وثائق JavaFX الرسمية](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)