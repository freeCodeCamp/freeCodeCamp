---
title: Java Swing
localeTitle: Java Swing
---
## Java Swing

Vamos explorar o tutorial de swing do Java. Antes de sujarmos as mãos com o Swing, é recomendável que você passe pelo [AWT (Abstract Window Toolkit). Mais](https://www.studytonight.com/java/java-awt.php) cedo, Swing foi adicionado como parte do [JFC (Java Foundation Classes)](https://en.wikipedia.org/wiki/Java_Foundation_Classes) . No entanto, ele foi totalmente mesclado no Java de Java. 1.2 em diante.

### Recursos impressionáveis

1.  Componentes leves - Como os componentes do Swing são escritos completamente em JAVA, eles não usam recursos específicos da plataforma como os componentes AWT.
    
2.  Olhar e sentir plugável (PLAF) - O aspecto visual e visual é inteiramente determinado pelo próprio Swing. Isso facilita a distinção entre aparência e lógica do componente.
    

Swing GUI consiste em dois pilares principais: -componentes e contêineres.A parte seguinte discute sobre os dois completamente.

### Componentes

Um Componente é simplesmente um controle visual independente. Os componentes de observação são derivados da classe JComponent. Além disso, o JComponent herda todas as suas características de Contêineres e Componentes do AWT. Para obter mais informações, consulte a hierarquia da classe [JComponent](https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html) .

### Recipientes

Todos os contêineres também são componentes. Recipientes podem incluir um ou mais componentes. Swing define dois tipos de contêineres

*   herda de JComponent - por exemplo, JFrame, JWindow, JApplet, JDialog
*   não herda de JComponent - por exemplo, JPanel

### Pacotes

O Swing é composto por um grande número de pacotes. Por favor, [leia a documentação oficial](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html) para mais informações.

#### Mais Informações:

*   [Docs do Oracle](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)
*   [Wikipedia](https://en.wikipedia.org/wiki/Swing_(Java)