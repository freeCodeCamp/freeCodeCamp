---
title: Hello World Swift
---

 ## Hello World

We only have to add the method `print("Hello World")` (from the library UIKit) to the function `viewDidLoad()` of the class `ViewController:

 ```Swift
 import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        print("Hello World")
        
    }


}
 ```

 ## Output:
 ```
 >Hello World
 ```
