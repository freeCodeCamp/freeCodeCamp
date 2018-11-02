---
title: Java Swing
---
## Java Swing

Let's explore the Java swing tutorial. Before making our hands all dirty with the Swing, it is recommended that you go through the [Abstract Window Toolkit(AWT)](https://www.studytonight.com/java/java-awt.php).Earlier, Swing was added as a part of [Java Foundation Classes(JFC)](https://en.wikipedia.org/wiki/Java_Foundation_Classes).However it was fully merged into Java from Java 1.2 onwards.

### Strikable features
1. Lightweight components- Since the Swing components are completely written in JAVA,they don't use platform specific resources as like AWT components do.

2. Pluggable Look and Feel(PLAF)- The Look and Feel of component is entirely determined by Swing itself. That makes it easier to distinguish between look and feel and the logic of component.

Swing GUI consists of two main pillars:-components and containers.The following part discusses about both of them thoroughly.
### Components
An Component is simply an independent visual control.Swing components are derived from JComponent class. Further JComponent inherits all its characteristics from AWT Containers and Components.For more information, please go through the hierarchy of [JComponent](https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html) class.

### Containers
All containers are also components. Containers may comprise of one or more components. Swing defines two types of containers
- inherits from JComponent- e.g. JFrame, JWindow, JApplet, JDialog
- does not inherits from JComponent- e.g. JPanel

### Packages
Swing comprises of numerous number of packages.Please go through the [official documentation](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html) for more information.


#### More Information:

- [Oracle docs](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)
- [Wikipedia](https://en.wikipedia.org/wiki/Swing_(Java))
