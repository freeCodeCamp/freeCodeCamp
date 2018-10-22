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


---
title: View - subView- superView
---

## Views

This is an example of what a basic view hierarchyin Swift looks like:

```
import UIKit

let firstFrame = CGRect(x: 0, y: 0, width: 600, height: 500)
        let firstView = UIView(frame: firstFrame)
        firstView.backgroundColor = .white
//1        view.addSubview(firstView)
        
 let secondFrame = CGRect(x: 40, y: 200, width: 250, height: 250)
        let secondView = UIView(frame: secondFrame)
        secondView.backgroundColor = .red
//2        firstView.addSubview(secondView)       
        
1) Adds firstView to the view(represents the root view for the view controller's view hierarchy)'s subview
2) Adds secondView to the firstview's subview
```
Conclusion above example like so -> floor of apartment is view:UIView -> first floor of apartment is firstView -> second floor of the apartment is secondView
