---
title: Getters & Setters
localeTitle: Getters & Setters
---
# Getters & Setters

Getters e Setters são usados ​​para proteger efetivamente seus dados, especialmente ao criar classes. Para cada variável de instância, um método getter retorna seu valor enquanto um método setter define ou atualiza seu valor. Getters e setters são também conhecidos como acessadores e mutadores, respectivamente.

Por convenção, getters começam com get, seguido pelo nome da variável, com a primeira letra do nome da variável em maiúscula. Os setters começam com set, seguido pelo nome da variável, com a primeira letra do nome da variável em maiúscula.

**_Exemplo:_**

```java
public class Vehicle { 
  private String color; 
 
  // Getter 
  public String getColor() { 
  return color; 
  } 
 
  // Setter 
  public void setColor(String c) { 
  this.color = c; 
  } 
 } 
```

O método getter retorna o valor do atributo. O método setter usa um parâmetro e o atribui ao atributo.

Uma vez que o getter e setter foram definidos, usamos em nosso main:

```java
public stativ void main(String[] args) { 
  Vehicle v1 = new Vehicle(); 
  v1.setColor("Red"); 
  System.out.println(v1.getColor()); 
 } 
 
 // Outputs "Red" 
```

* * *

Getters e setters permitem o controle sobre os valores. Você pode validar o valor dado no setter antes de realmente definir o valor.

## Por que getter e setter?

Usando getter e setter, o programador pode controlar como suas variáveis ​​importantes são acessadas e atualizadas, como a alteração do valor de uma variável dentro de um intervalo especificado. Considere o seguinte código de um método setter:

```java
public void setNumber(int num) { 
    if (num < 10 || num > 100) { 
        throw new IllegalArgumentException(); 
    } 
    this.number = num; 
 } 
```

Isso garante que o valor do número seja sempre definido entre 10 e 100. Se o programador permitir que o número da variável seja atualizado diretamente, o chamador poderá definir qualquer valor arbitrário para ele:

```java
obj.number = 3; 
```

Isso viola a restrição de valores que variam de 10 a 100 para essa variável. Como não esperamos que isso aconteça, ocultar o número da variável como particular e usar um setter o impede. Por outro lado, um método getter é o único caminho para o mundo exterior ler o valor da variável:

```java
public int getNumber() { 
    return this.number; 
 } 

```