---
title: Hello World Swift
localeTitle: Hola mundo swift
---
## Hola Mundo

Solo tenemos que agregar el método `print("Hola Mundo")` (de la biblioteca UIKit) a la función `viewDidLoad()` de la clase `ViewController`:

```Swift 

import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() { 
        super.viewDidLoad() 
        // Do any additional setup after loading the view, typically from a nib.
        print("Hola Mundo")
    } 
} 
```

## Salida: 
```
> Hola Mundo 
```
