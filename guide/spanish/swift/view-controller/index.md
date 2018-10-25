---
title: View Controllers
localeTitle: Controladores de vista
---
## Controladores de vista

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

1.  Carga la vista una vez el controlador se ha cargado.
2.  Anula la clase UIViewController. Este es un paso necesario para cualquier controlador de vista.
3.  Establece el color de fondo en blanco.
