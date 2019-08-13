---
title: View Controllers
localeTitle: View Controllers
---
## View Controllers

Este es un ejemplo de cómo se ve una vista básica en Swift.

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

1.  Carga la vista después de que se cargue el controlador.
2.  Sobreescribe la función `viewDidLoad()` de la clase UIViewController. Este es un paso necesario para cualquier view controller.
3.  Establece el color de fondo de la vista en blanco.
