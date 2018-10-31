# Singletons
The singleton pattern guarantees that only one instance of a class is instantiated.

### Examples
If you've worked with Apple's frameworks, then chances are that you've already used the singleton pattern. Take a look at these examples. They probably look familiar.

```swift
// Shared URL Session
let sharedURLSession = URLSession.shared

// Default File Manager
let defaultFileManager = FileManager.default

// Standard User Defaults
let standardUserDefaults = UserDefaults.standard

// Default Payment Queue
let defaultPaymentQueue = SKPaymentQueue.default()
```
### Creating a Singleton using Static Property and Private Initialiser
```swift
class NetworkManager {

    // MARK: - Properties

    static let shared = NetworkManager(baseURL: API.baseURL)

    // MARK: -

    let baseURL: URL

    // Initialization

    private init(baseURL: URL) {
        self.baseURL = baseURL
    }

}
```

Accessing the singleton is intuitive and it clearly conveys that we're dealing with a singleton.

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    print(NetworkManager.shared)
    return true
}
```
