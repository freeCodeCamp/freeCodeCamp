---
title: JavaFX
localeTitle: JavaFX
---
## Введение

JavaFX - это графическая среда, созданная Sun Microsystems, используемая для разработки богатых настольных и интернет-приложений. JavaFX был создан для замены значительно более старых библиотек Swing and Abstract Window Toolkit (AWT) и служит стандартным графическим API-интерфейсом Java для Java Standard Edition.

## Инструменты разработки

### Gulon SceneBuilder

Gulon Scene Builder - это приложение, используемое для интерфейса пользовательского интерфейса (UI) в JavaFX. Приложение использует drag-and-drop для быстрого дизайна пользовательского интерфейса, что позволяет визуализировать интерфейс, который вы создаете при его разработке.

#### Screeenshots:

![Пользовательский интерфейс Scene Builder](https://cdn-media-1.freecodecamp.org/imgr/3d9SqBR.png)

### FXML

FXML - это язык разметки на основе XML, используемый для определения структур в JavaFX. Документ FXML излагает различные объекты в классе в дереве, аналогичном размещению тегов в документах XML.

#### Пример:

```XML
<HBox spacing="10" alignment="bottom_right" > // Creates an HBox Object 
        <Button text="Sign In"/> // Nested inside the HBox is a Button object with the text 'Sign In' 
 </HBox> 
```

### Рекомендации:

[Документация FXML](https://docs.oracle.com/javase/8/javafx/api/javafx/fxml/doc-files/introduction_to_fxml.html)

[Учебник по созданию сцен](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)

[Официальная документация по JavaFX](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)