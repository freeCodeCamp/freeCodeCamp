---
title: View Controllers
localeTitle: Visualizar controladores
---
## Visualizar controladores

Este é um exemplo de como é uma visão básica no Swift.

\`\` \`Swift importar UIKit

classe ViewController: UIViewController { // 1 override func viewDidLoad () { // 2 super.viewDidLoad () // 3 view.backgroundColor = .white }  
} \`\` \`

1.  Carrega a exibição após o carregamento do controlador.
2.  Substitui a classe UIViewController. Este é um passo necessário para qualquer controlador de visualização.
3.  Define a cor de fundo para branco.