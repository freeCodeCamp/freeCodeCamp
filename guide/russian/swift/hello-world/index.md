---
title: Hello World Swift
localeTitle: Hello World Swift
---
\## Привет, мир

Только нам нужно добавить метод `print("Hello World")` (из библиотеки UIKit) в функцию `viewDidLoad()` класса \`ViewController:

\`\` \`Swift импортировать UIKit

class ViewController: UIViewController {
```
override func viewDidLoad() { 
    super.viewDidLoad() 
    // Do any additional setup after loading the view, typically from a nib. 
 
    print("Hello World") 
 
 } 
```

} \`\` \`

\## Выход: \`\` \`

> Привет мир \`\` \`