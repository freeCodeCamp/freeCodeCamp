---
title: Comments in Java
localeTitle: Comentários em Java
---
## Comentários em Java

Comentários em java são como post-its da vida real usados ​​para exibir algumas informações, que outros programadores ou desenvolvedores podem ler e entender.

É recomendável adicionar comentários ao seu código, especialmente ao trabalhar com uma equipe ou empresa. Isso ajuda futuros desenvolvedores ou colegas de equipe a saberem o que está acontecendo com mais facilidade quando analisam seu código. Os comentários tornam seu código mais organizado e organizado.

Comentários Java não são executados pelo compilador e pelo interpretador.

### Tipos de comentários de Java

#### 1\. Single Line Comment

Para criar um comentário de linha única, basta adicionar duas barras `//` frente do texto.

```java
// This is how single line comment looks like 
```

#### 2\. Comentário de linha múltipla

Para criar um comentário de várias linhas, coloque as linhas entre `/*` linha vai aqui `*/`

```java
public class MyFirstJava { 
    public static void main(String[] args) { 
    /* This Java Code 
       Prints out "Hello world" 
       and you are looking at a multi line comment 
    */ 
        System.out.println("Hello World"); 
    } 
 } 
```

#### 3\. Documentação Comentário

O comentário da documentação é usado pela ferramenta Javadoc para criar documentação para o código. Comentários de documentação são usados ​​pelos desenvolvedores para documentar códigos, como o que uma classe faz ou o que um método faz. Isso é usado por uma ferramenta javadoc que irá compilar um conjunto pré-formatado de arquivos html contendo todas as informações disponíveis no comentário.

```java
/** 
 * The Following Java program displays a random between 0 - 50 
 * Most Developer dont document simple program like this 
 * 
 * @author      Quincy Larson 
 * @version     1.0 
 */ 
 
 public class RandomNumbers{ 
    public static void main(String[] args) { 
        int random = (int)(Math.random() * 50 + 1); 
        System.out.println("Hello World"); 
    } 
 } 
```

#### Mais Informações:

*   [Recursos Java](http://guide.freecodecamp.org/java/resources/)
    
*   [Exemplo de Javadoc Compilado](https://docs.oracle.com/javase/8/docs/api/)