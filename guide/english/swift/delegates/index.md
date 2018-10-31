# Delegates

Delegates are a design pattern that allows one object to send messages to another object when a specific event happens.

Imagine an object A calls an object B to perform an action. Once the action is complete, object A should know that B has completed the task and take necessary action, this can be achieved with the help of delegates!

## Implementation
#### Step 1
```Swift
    //MARK: step 1 Add Protocol here.  
    protocol ClassBVCDelegate: class {  
    func changeBackgroundColor(_ color: UIColor?)  
    }
```

The first step is to create a protocol, in this case, we will create the protocol in class B, inside the protocol you can create as many functions that you want based on the requirements of your implementation. In this case, we just have one simple function that accepts an optional UIColor as an argument.

_It is a good practice to name your protocols adding the word delegate at the end of the class name, in this case, ClassBVCDelegate._

#### Step 2
```Swift
   //MARK: step 2 Create a delegate property here.  
    weak var delegate: ClassBVCDelegate?
 ```

Here we just create a delegate property for the class, this property must adopt the protocol type, and it should be optional. Also, you should add the weak keyword before the property to avoid retain cycles and potential memory leaks, if you don’t know what that means don’t worry for now, just remember to add this keyword.


#### Step 3
Look for the pragma mark step 3 inside the handleTap method in ClassBVC and add this
```Swift
//MARK: step 3 Add the delegate method call here.
delegate?.changeBackgroundColor(tapGesture.view?.backgroundColor)
```

One thing that you should know, run the app and tap on any view, you won’t see any new behaviour and that’s correct but the thing that I want to point out is that the app it’s not crashing when the delegate is called, and it’s because we create it as an optional value and that’s why it won’t crash even the delegated doesn’t exist yet. Let’s now go to ClassAVC file and make it, the delegated.

#### Step 4
Look for the pragma mark step 4 inside the handleTap method in ClassAVC and add this next to your class type like this.
```Swift
//MARK: step 4 conform the protocol here.
class ClassAVC: UIViewController, ClassBVCDelegate {
```

Now ClassAVC adopted the ClassBVCDelegate protocol, you can see that your compiler is giving you an error that says “Type ‘ClassAVC does not conform to protocol ‘ClassBVCDelegate’ and this only means that you didn’t use the methods of the protocol yet, imagine that when class A adopts the protocol is like signing a contract with class B and this contract says “Any class adopting me MUST use my functions!”

#### Step 5
Look for the pragma mark inside the prepare for segue method and add this
```Swift
   //MARK: step 5 create a reference of Class B and bind them through the prepareforsegue method.  
    if let nav = segue.destination as? UINavigationController, let classBVC = nav.topViewController as? ClassBVC {  
    classBVC.delegate = self  
    }
 ```

Here we are just creating an instance of ClassBVC and assign its delegate to self, but what is self here? well, self is the ClassAVC which has been delegated!

#### Step 6
Finally, look for the pragma step 6 in ClassAVC and let’s use the functions of the protocol, start typing `func changeBackgroundColor` and you will see that it’s auto-completing it for you. You can add any implementation inside it, in this example, we will just change the background color, add this.
```Swift
//MARK: step 6 finally use the method of the contract  
func changeBackgroundColor(_ color: UIColor?) {  
view.backgroundColor = color  
}
```
