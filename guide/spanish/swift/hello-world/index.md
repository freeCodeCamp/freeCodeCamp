---
title: Hello World Swift
localeTitle: Hola mundo swift
---
\## Hola Mundo

Para escribir el famoso `Hola Mundo` tenemos que agregar el método `print("Hello World")` (de la biblioteca UIKit) a la función `viewDidLoad()` de la clase \`ViewController:

\`\` \`Swift import UIKit

class ViewController: UIViewController {
```
override func viewDidLoad() { 
    super.viewDidLoad() 
    // Do any additional setup after loading the view, typically from a nib. 
 
    print("Hello World") 
 
 } 
```

} \`\` \`

\## Salida: \`\` \`

> Hola Mundo \`\` \`
