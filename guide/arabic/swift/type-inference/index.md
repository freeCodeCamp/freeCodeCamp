---
title: Type Inference
localeTitle: اكتب الاستدلال
---
## اكتب الاستدلال

يستخدم Swift استنتاج نوع. لذا ، إذا كتبت بعض الرموز مثل الكود في المثال أدناه ، فسيكون من الواضح نوع كل نوع.

#### مثال:

 `    let iPhone: String = “iPhone” 
    let yearIntroduced: Int = 2007 
    let isAwesome: Bool = true 
` 

حتى نتمكن من تنظيف الشفرة لتبدو مثل المثال أدناه ، ويمكن لـ Swift أن يستنتج نوع الاستخدام.

#### مثال:

 `    let iPhone = “iPhone”       // Inferred as String 
    let yearIntroduced = 2007   // Inferred as Int 
    let isAwesome = true        // Inferred as Bool 
` 

#### معلومات اكثر:

*   [لغة البرمجة سويفت](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID322)