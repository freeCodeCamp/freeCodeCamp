---
title: View Controllers
localeTitle: Controladores de vista
---
## Controladores de vista

Este es un ejemplo de cómo se ve una vista básica en Swift.

\`\` \`Swift importar UIKit

clase ViewController: UIViewController { // 1 anular func viewDidLoad () { // 2 super.viewDidLoad () // 3 view.backgroundColor = .white }  
} \`\` \`

1.  Carga la vista después de que se carga el controlador.
2.  Anula la clase UIViewController. Este es un paso necesario para cualquier controlador de vista.
3.  Establece el color de fondo en blanco.