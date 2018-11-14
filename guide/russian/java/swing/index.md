---
title: Java Swing
localeTitle: Java Swing
---
## Java Swing

Давайте рассмотрим учебник Java swing. Прежде чем сделать наши руки грязными с Swing, рекомендуется пройти через набор [абстрактных окон (AWT).](https://www.studytonight.com/java/java-awt.php) Ранее Swing был добавлен как часть [Java Foundation Classes (JFC).](https://en.wikipedia.org/wiki/Java_Foundation_Classes) Однако он полностью слился с Java из Java 1.2 и далее.

### Устойчивые функции

1.  Легкие компоненты. Поскольку компоненты Swing полностью записаны в JAVA, они не используют ресурсы платформы, как это делают компоненты AWT.
    
2.  Pluggable Look and Feel (PLAF) - внешний вид и чувство компонента полностью определяется самим Swing. Это облегчает различение внешнего вида и логики компонента.
    

Swing GUI состоит из двух основных столпов: -компонентов и контейнеров. В следующей части подробно обсуждается их оба.

### Компоненты

Компонент - это просто независимый визуальный контроль. Компоненты, связанные с компонентами, основаны на классе JComponent. Далее JComponent наследует все свои характеристики от контейнеров и компонентов AWT. Для получения дополнительной информации перейдите по иерархии класса [JComponent](https://docs.oracle.com/javase/tutorial/uiswing/components/jcomponent.html) .

### Контейнеры

Все контейнеры также являются компонентами. Контейнеры могут состоять из одного или нескольких компонентов. Swing определяет два типа контейнеров

*   наследует от JComponent - например, JFrame, JWindow, JApplet, JDialog
*   не наследуется от JComponent - например, JPanel

### пакеты

Swing состоит из большого количества пакетов. Пожалуйста, ознакомьтесь с [официальной документацией](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html) для получения дополнительной информации.

#### Дополнительная информация:

*   [Документация Oracle](https://docs.oracle.com/javase/7/docs/api/javax/swing/package-use.html)
*   [Википедия](https://en.wikipedia.org/wiki/Swing_(Java)