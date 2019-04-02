---
title: Positive and Negative Lookahead
localeTitle: الإيجابية و السلبية Lookahead
---
## الإيجابية و السلبية Lookahead

*   تذكر استخدام 2 `lookaheads` للتحقق من الأنماط في السلسلة. أول `lookahead` مشابه جدا لتلك الواردة في المثال - '(؟ = \\ w {3،6}) - فقط `lower-number` 3 منخفض جدا بالنسبة لحالات الاختبار لدينا ، `upper-number` هو unnecessarry تماما. يستخدم هذا `lookahead` الأول فقط لإيجاد سلسلة تتكون من كمية معينة من الأحرف. يجب استخدام `lookahead` الثاني للتحقق من القيم الرقمية المتتالية في نهاية السلسلة.
    
*   `lookahead` الثاني أيضاً مع ذلك في المثال - `(?=\D*\d)` - ومع ذلك ، يجب تعديل هذا التعبير أيضًا لتمرير جميع حالات الاختبار. تذكر أن تحدد مقدار الأرقام الذي تريده بالضبط في نهاية السلسلة.
    

## حل :

 `let sampleWord = "astronaut"; 
 let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
 let result = pwRegex.test(sampleWord); 
`