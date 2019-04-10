---
title: JavaFX
localeTitle: JavaFX
---
## Introducción

JavaFX es un marco de gráficos creado por Sun Microsystems utilizado para desarrollar aplicaciones de escritorio e Internet enriquecidas. JavaFX fue creado para reemplazar las bibliotecas mucho más antiguas de Swing y Abstract Window Toolkit (AWT) y servir como la API de gráficos estándar del lenguaje Java para Java Standard Edition.

## Herramientas de desarrollo

### Gulon SceneBuilder

Gulon Scene Builder es una aplicación utilizada para el diseño de interfaz de usuario (UI) en JavaFX. La aplicación utiliza la función de arrastrar y soltar para un diseño rápido de la interfaz de usuario que le permite visualizar la interfaz que está creando mientras la diseña.

#### Screeenshots:

![Interfaz de usuario de escena](https://i.imgur.com/3d9SqBR.png)

### FXML

FXML es un lenguaje de marcado basado en XML que se utiliza para definir estructuras en JavaFX. El documento FXML presenta los diversos objetos de la clase en un árbol similar al anidamiento de etiquetas en documentos XML.

#### Ejemplo:

```XML
<HBox spacing="10" alignment="bottom_right" > // Creates an HBox Object 
        <Button text="Sign In"/> // Nested inside the HBox is a Button object with the text 'Sign In' 
 </HBox> 
```

### Referencias:

[Documentación FXML](https://docs.oracle.com/javase/8/javafx/api/javafx/fxml/doc-files/introduction_to_fxml.html)

[Tutorial de Scene Builder](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)

[Documentación oficial de JavaFX](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)