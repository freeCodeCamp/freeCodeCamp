---
title: View Controllers
localeTitle: Контроллеры просмотра
---
## Контроллеры просмотра

Это пример того, как выглядит основной вид в Swift.

\`\` \`Swift импортировать UIKit

class ViewController: UIViewController { // 1 override func viewDidLoad () { // 2 super.viewDidLoad () // 3 view.backgroundColor = .white }  
} \`\` \`

1.  Просмотр нагрузки после загрузки контроллера.
2.  Переопределяет класс UIViewController. Это необходимый шаг для любого контроллера вида.
3.  Устанавливает цвет фона на белый.