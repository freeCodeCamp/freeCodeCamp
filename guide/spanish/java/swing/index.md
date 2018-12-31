---
title: Java Swing
localeTitle: Java Swing
---
## Java Swing

Vamos a explorar el tutorial de Java swing. Antes de ensuciarnos las manos con el Swing, se recomienda ir a través del [Abstract Window Toolkit (AWT). Más](https://www.studytonight.com/java/java-awt.php) adelante, Swing se agregó como parte de [Java Foundation Classes (JFC).](https://en.wikipedia.org/wiki/Java_Foundation_Classes) Sin embargo, se integró completamente en Java desde Java 1.2 en adelante.

### Características en huelga

1.  Componentes ligeros: ya que los componentes Swing están completamente escritos en JAVA, no usan recursos específicos de la plataforma como lo hacen los componentes AWT.
    
2.  Mirada y sensación conectables (PLAF) - La apariencia y sensación del componente está completamente determinada por el propio Swing. Eso hace que sea más fácil distinguir entre la apariencia y la lógica del componente.
    

Swing GUI consta de dos pilares principales: -componentes y contenedores. La siguiente parte trata a fondo sobre ambos.

### Componentes

Un componente es simplemente un control visual independiente. Los componentes de ala se derivan de la clase JComponent. Además, JComponent hereda todas sus características de los Contenedores y Componentes de AWT. Para obtener más información, pase por la jerarquía de la clase [JComponent](https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html) .

### Contenedores

Todos los contenedores son también componentes. Los contenedores pueden comprender uno o más componentes. Swing define dos tipos de contenedores.

*   hereda de JComponent, por ejemplo, JFrame, JWindow, JApplet, JDialog
*   no hereda de JComponent, por ejemplo, JPanel

### Paquetes

Swing se compone de numerosos paquetes. Consulte la [documentación oficial](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html) para obtener más información.

#### Más información:

*   [Documentos de Oracle](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)
*   [Wikipedia](https://en.wikipedia.org/wiki/Swing_(Java)