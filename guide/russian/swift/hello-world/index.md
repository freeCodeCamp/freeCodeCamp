---
title: Hello World Swift
localeTitle: Привет, Мир! Swift
---
## Привет, мир

Нам нужно только добавить метод `print("Привет, мир!")` (из библиотеки UIKit) в функцию `viewDidLoad()` класса `ViewController`:

```Swift
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        print("Привет, мир!")
        
    }

}
```

## Вывод:
```
> Привет, мир!
```
