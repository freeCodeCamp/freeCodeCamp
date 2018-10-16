---
title: JavaFX
---
## Introduction 
JavaFX is a graphics framework created by Sun Microsystems used for developing rich desktop and Internet applications. JavaFX was created to replace the much older Swing and Abstract Window Toolkit (AWT) libraries and serve as the Java language's standard graphics API for Java Standard Edition.

As of JDK11, JavaFX won't be released as a part of the JDK package and will be availible as a seperate download. Oracle (the owner of Sun Microsystems) annonced it will support JavaFX (JDK8 release) until at least 2022.

JavaFX is currenly being developed as an open source project by the OpenJFX community as a part of the OpenJDK project.

## Development Tools

### Gulon SceneBuilder
Gulon Scene Builder is an application used for user interface (UI) design in JavaFX. The application uses drag-and-drop for rapid UI design that allows you to visualize the interface you are creating while designing it.

#### Screeenshots:
![Scene Builder UI](https://i.imgur.com/3d9SqBR.png)

### FXML
FXML is an XML-based markup language used for defining structures in JavaFX. The FXML document lays out the various objects in the class in a tree similar to tag nesting in XML documents.

#### Example:
```XML
<HBox spacing="10" alignment="bottom_right" > // Creates an HBox Object
        <Button text="Sign In"/> // Nested inside the HBox is a Button object with the text 'Sign In'
</HBox>
```
### Gulon Scenic View   
Scenic View is an application designed to show the current state of your JavaFX application. Scenic View enables you to debug the graphic elements in your application in real time, including changing various values.

### References:
[FXML Documentation](https://docs.oracle.com/javase/8/javafx/api/javafx/fxml/doc-files/introduction_to_fxml.html)

[Scene Builder Tutorial](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)

[Official JavaFX Documentation](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)

[Official OpenJFX Site](https://openjfx.io/)

[Official Scenic View Page](http://fxexperience.com/scenic-view/)
