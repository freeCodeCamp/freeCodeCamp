---
title: View Controllers
localeTitle: عرض وحدات تحكم
---
## عرض وحدات تحكم

هذا مثال لما تبدو عليه النظرة الأساسية في سويفت.

\`\` \`سويفت استيراد UIKit

class ViewController: UIViewController { // 1 تجاوز func viewDidLoad () { // 2 super.viewDidLoad () // 3 view.backgroundColor = .white }  
} \`\` \`

1.  عرض الأحمال بعد تحميل وحدة التحكم.
2.  يتجاوز فئة UIViewController. هذه خطوة ضرورية لأي وحدة تحكم في طريقة العرض.
3.  لتعيين لون الخلفية إلى الأبيض.