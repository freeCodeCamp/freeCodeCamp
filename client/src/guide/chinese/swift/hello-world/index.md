---
title: Hello World Swift
localeTitle: Hello World Swift
---
＃＃ 你好，世界

只有我们必须将方法`print("Hello World")` （从库UIKit）添加到类ViewController的函数`viewDidLoad()`中：

\`\`\`斯威夫特 导入UIKit

class ViewController：UIViewController {
```
override func viewDidLoad() { 
    super.viewDidLoad() 
    // Do any additional setup after loading the view, typically from a nib. 
 
    print("Hello World") 
 
 } 
```

} \`\`\`

##输出： \`\`\`

> 你好，世界 \`\`\`