---
title: Generics
localeTitle: Genéricos
---
# Genéricos

Java Generics é uma forma de usar conviently coleções e classes para tipos de dados específicos sem ter que lançar dados de volta para o tipo de dados original. Isso evita muita dor de cabeça na forma de erros de tempo de compilação e tempo de execução.

Simplificando, o Generics permite dizer explicitamente que, por exemplo, um objeto ArrayList contém Integers, de modo que quando você chama o método get, não é necessário converter entre Object e Integer. Abaixo está um exemplo de como você teria usado um ArrayList antes de Generics.

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList classNames; 
 
  public Example() { 
    classNames = new ArrayList(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return (String) classNames.get(index); 
  } 
 } 
```

O principal problema com o acima é se de alguma forma um objeto não do tipo String foi adicionado ao ArrayList, em seguida, o `getNameAtIndex(int index)` resultaria em um erro de tempo de execução. Para resolver isso, usamos Generics.

A sintaxe para genéricos é muito simples. Abaixo está um exemplo de instanciar uma ArrayList.

```java
import java.util.ArrayList; 
 
 public class Example { 
  private ArrayList<String> classNames; 
 
  public Example() { 
    classNames = new ArrayList<String>(); 
  } 
 
  public void addName(String name) { 
    classNames.add(name); 
  } 
 
  public String getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

A sintaxe para criar sua própria classe genérica seria a seguinte.

```java
import java.util.ArrayList; 
 
 public class Example <T> { 
  private ArrayList<T> classNames; 
 
  public Example() { 
    classNames = new ArrayList<T>(); 
  } 
 
  public void addName(T name) { 
    classNames.add(name); 
  } 
 
  public T getNameAtIndex(int index) { 
    return classNames.get(index); 
  } 
 } 
```

Observe que dentro dos colchetes angulares ao nomear a classe, você pode garantir que o tipo genérico é algo que você quer. Por exemplo, se você quisesse ter certeza de que o tipo pudesse ser lido como uma forma de String, você iria `<T extends String>` .

Note que a letra `T` é um espaço reservado, você pode fazer o que quiser, contanto que use o mesmo em toda a aula.