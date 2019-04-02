---
title: Switch in Go
localeTitle: التبديل في الذهاب
---# التبديل في الذهاب

بيان التبديل العودة هو بديل ل `if` . يستخدم بناء الجملة التالي:

 `fruit := "apple" 
 switch fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
` 

سيكون إخراج هذا البرنامج `Red and round.` .

أولا ، نعلن `fruit` `apple` كما `apple` . ثم نستخدم متغير `fruit` كتعبير الشرط. يذهب Go يقارن قيمة `fruit` مع `cases` المقدمة مثل هذا:

*   الفاكهة == "الموز" (كاذبة)
*   الفاكهة == "التفاح" (صحيح)

لم يتم اختبار `lemon` . بعد عودة التقييم ، لا يتم محاكمة أي حالات أخرى.

كما في `if` ، يمكنك تعريف المتغيرات المؤقتة على تعبير حالة switch\`s:

 `switch fruit := "apple"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
` 

لن يمكن الوصول إلى `fruit` المتغيرة خارج بيان التبديل.

## الافتراضي وحالات أخرى

### افتراضي

الكلمة الأساسية `default` هي حالة الرجوع إلى الخلف عندما لا تعود أي حالات أخرى صحيحة:

 `switch fruit := "grape"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
    default: 
        fmt.Printf("New fruit: %s!", fruit) 
 } 
` 

سيكون إخراج هذا البرنامج `New fruit: grape!` .

### نفس الإجراء لقيم مختلفة

قائمة قيم مفصولة بفواصل لمقارنة قيمة تعبير الشرط مع نفس الإجراء.

 `switch fruit := "lemon"; fruit { 
    case "banana", "lemon": 
        fmt.Printf("Yellow fruit.") 
    default: 
        fmt.Printf("This fruit is a color different than yellow.") 
 } 
` 

الإخراج: `Yellow fruit.` .

### لا تعبير

التبديل بدون أي تعبير يعني `switch true` . هذه نسخة بديلة لسلسلة أخرى.

 `fruit := "banana" 
 switch { 
    case fruit == "banana": 
        fmt.Printf("Yellow and long.") 
    default: 
        fmt.Printf("This is not a banana.") 
 } 
` 

هذا تقييم `true == (fruit == "banana")` ، simpliefied إلى `true == true` ، والتي ترجع true.

### استراحة

يمكنك كسر التعليمات البرمجية في بيان تبديل لتخطي أي تعليمات برمجية أكثر.

 `appleColor := "green" 
 switch fruit := "apple"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
    case "apple": 
        if appleColor == "green" { 
            fmt.Printf("This apple is green!") 
            break 
        } 
        fmt.Printf("This apple is tasty!") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
` 

الإخراج: `This apple is green!` .

### وقع خلال

انتقل إلى الحالة التالية ، سواء تم تقييم حالته إلى true.

 `switch fruit := "banana"; fruit { 
    case "banana": 
        fmt.Printf("Yellow and long.") 
        fallthrough 
    case "apple": 
        fmt.Printf("Red and round.") 
    case "lemon": 
        fmt.Printf("Yellow and round.") 
 } 
` 

الإخراج: `Yellow and long.` `Red and round.` .