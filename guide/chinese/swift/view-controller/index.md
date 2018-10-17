---
title: View Controllers
localeTitle: 查看控制器
---
## 查看控制器

这是Swift中基本视图的示例。

\`\`\`斯威夫特 导入UIKit

class ViewController：UIViewController { // 1 override func viewDidLoad（）{ // 2 super.viewDidLoad（） // 3 view.backgroundColor = .white }  
} \`\`\`

1.  控制器加载后加载视图。
2.  覆盖UIViewController类。这是任何视图控制器的必要步骤。
3.  将背景颜色设置为白色。