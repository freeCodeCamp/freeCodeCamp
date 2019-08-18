---
title: JavaFX
localeTitle: JavaFX
---
## Introdução

JavaFX é uma estrutura gráfica criada pela Sun Microsystems usada para o desenvolvimento de aplicativos avançados de desktop e Internet. O JavaFX foi criado para substituir as mais antigas bibliotecas do Swing e do Abstract Window Toolkit (AWT) e servir como API gráfica padrão da linguagem Java para o Java Standard Edition.

## Ferramentas de desenvolvimento

### Gulon SceneBuilder

Gulon Scene Builder é um aplicativo usado para design de interface do usuário (UI) no JavaFX. O aplicativo usa o recurso de arrastar e soltar para um rápido design da interface do usuário que permite visualizar a interface que você está criando durante a criação.

#### Screeenshots:

![IU do Construtor de Cena](https://cdn-media-1.freecodecamp.org/imgr/3d9SqBR.png)

### FXML

FXML é uma linguagem de marcação baseada em XML usada para definir estruturas no JavaFX. O documento FXML apresenta os vários objetos da classe em uma árvore semelhante ao aninhamento de tags em documentos XML.

#### Exemplo:

```XML
<HBox spacing="10" alignment="bottom_right" > // Creates an HBox Object 
        <Button text="Sign In"/> // Nested inside the HBox is a Button object with the text 'Sign In' 
 </HBox> 
```

### Referências:

[Documentação FXML](https://docs.oracle.com/javase/8/javafx/api/javafx/fxml/doc-files/introduction_to_fxml.html)

[Tutorial do Construtor de Cena](https://docs.oracle.com/javase/8/scene-builder-2/get-started-tutorial/overview.htm#JSBGS164)

[Documentação oficial do JavaFX](https://docs.oracle.com/javase/8/javase-clienttechnologies.htm)