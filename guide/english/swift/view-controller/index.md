---
title: View Controllers
---
## View Controllers

This is an example of what a basic view in Swift looks like. 

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
1. Loads view after the controller loads.
2. Overrides the UIViewController class. This is a necessary step for any view controller.
3. Sets background color to white.