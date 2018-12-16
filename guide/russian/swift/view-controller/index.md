---
title: View Controllers
localeTitle: View Controllers
---
## View Controllers

Это пример того, как выглядит простой ViewController в Swift.


 ```Swift
  import UIKit

  class ViewController: UIViewController {
      // 1
      override func viewDidLoad() {
          // 2
          super.viewDidLoad()
          // 3
          view.backgroundColor = .white
      }  
  }
 ```

1.  Метод viewDidLoad вызывается после загрузки ViewController.
2.  Вызов метода viewDidLoad базового класса UIViewController. Это необходимый шаг для любого ViewController.

3.  Устанавливает цвет фона на белый.
