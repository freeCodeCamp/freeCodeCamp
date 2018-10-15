---
title: Use the align-self Property
localeTitle: Использовать свойство align-self
---
## Использовать свойство align-self

Основной отрыв от этого challege должен быть тот факт, что `float` , `clear` и `vertical-align` не работают на гибких элементах. Вот почему мы имеем свойство flex `align-self` которое принимает те же значения, что и `align-items` и будет иметь приоритет над любыми значениями, установленными более поздним.

Это означает `align-self: center;` будет работать при `align-items: center;` не будет.