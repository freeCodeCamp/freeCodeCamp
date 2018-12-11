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

## Extending View Controllers

Extensions can help keep your code clean when conforming to multiple protocols.

This is an example of how you can add a TableView to a Basic View Controller.

```Swift
  import UIKit

  class ViewController: UIViewController {
      // 1
      @IBOutlet weak var tableView: UITableView!
      
      // 2
      let data = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX",
        "Philadelphia, PA", "Phoenix, AZ", "San Diego, CA", "San Antonio, TX",
        "Dallas, TX", "Detroit, MI", "San Jose, CA", "Indianapolis, IN",
        "Jacksonville, FL", "San Francisco, CA", "Columbus, OH", "Austin, TX",
        "Memphis, TN", "Baltimore, MD", "Charlotte, ND", "Fort Worth, TX"]
      
      override func viewDidLoad() {
          super.viewDidLoad()
          
          // 10
          tableView.dataSource = self
          // 11
          tableView.register(UITableViewCell.self, forCellReuseIdentifier: "myCellIdentifier")
      }  
  }
  
  // 3
  extension ViewController: UITableViewDataSource {
  
      // 4
      func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
          // 5
          let cell = tableView.dequeueReusableCell(withIdentifier: "myCellIdentifier", for: indexPath)
          // 6
          cell.textLabel?.text = data[indexPath.row]
          // 7
          return cell
      }
      
      // 8
      func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
          // 9
          return data.count
      }
  }
```
1. Define the outlet for our tableView
2. Define the data that we'll be loading into our tableView
3. Adds extension to ViewController class that conforms to UITableViewDataSource
4. Implement the UITableViewDataSource stubs for required methods - cellForRowAt (defines what goes in a specific cell)
5. Define a cell as a resuable element with the identifier "myCellIdentifier"
6. Provide our cell's textLabel with the referenced data
7. Return that cell
8. Implement the UITableViewDataSource stubs for required methods - numberOfRowsInSection (defines how many rows will be in your tableView)
9. Return the size of our data array
10. Set the tableView's dataSource to self when the view loads
11. register the tableView's cell
