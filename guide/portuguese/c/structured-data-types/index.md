---
title: Structured data types
localeTitle: Tipos de dados estruturados
---
# Tipos de dados estruturados em C

Durante sua experiência de programação, você pode sentir a necessidade de definir seu próprio tipo de dados. Em C isso é feito usando duas palavras-chave: `struct` e `typedef` . Estruturas e sindicatos lhe darão a chance de armazenar tipos de dados não homogêneos em uma única coleção.

## Declarando um novo tipo de dados

```C
typedef struct student_structure{ 
    char* name; 
    char* surname; 
    int year_of_birth; 
 }student; 
```

Após este pequeno código o `student` será uma nova palavra reservada e você poderá criar variáveis ​​do tipo `student` . Por favor, lembre-se que este novo tipo de variável será estruturado, o que significa que define uma lista fisicamente agrupada de variáveis ​​a serem colocadas sob um nome em um bloco de memória.

## Novo uso de tipo de dados

Vamos agora criar uma nova variável de `student` e inicializar seus atributos:

```C
   student stu; 
 
   strcpy( stu.name, "John"); 
   strcpy( stu.surname, "Snow"); 
   stu.year_of_birth = 1990; 
 
   printf( "Student name : %s\n", stu.name); 
   printf( "Student surname : %s\n", stu.surname); 
   printf( "Student year of birth : %d\n", stu.year_of_birth); 
```

Como você pode ver neste exemplo, é necessário atribuir um valor a todas as variáveis ​​contidas em seu novo tipo de dados. Para acessar uma variável de estrutura, você pode usar o ponto como em `stu.name` . Há também uma maneira mais curta de atribuir valores a uma estrutura:

```C
typedef struct{ 
   int    x; 
   int    y; 
 }point; 
 
 point image_dimension = {640,480}; 
```

Ou se você preferir definir seus valores seguindo uma ordem diferente:

```C
point img_dim = { .y = 480, .x = 640 }; 
```

## Sindicatos vs Estruturas

As uniões são declaradas da mesma forma que as structs, mas são diferentes porque apenas um item dentro da união pode ser usado a qualquer momento.

```C
typedef union{ 
      int circle; 
      int triangle; 
      int ovel; 
 }shape; 
```

Você deve usar `union` em tal caso, onde apenas uma condição será aplicada e apenas uma variável será usada. Por favor, não esqueça que podemos usar nosso novo tipo de dados também:

```C
typedef struct{ 
      char* model; 
      int year; 
 }car_type; 
 
 typedef struct{ 
      char* owner; 
      int weight; 
 }truck_type; 
 
 typedef union{ 
  car_type car; 
  truck_type truck; 
 }vehicle; 
```

## Mais alguns truques

*   Quando você cria um ponteiro para uma estrutura usando o operador `&` , você pode usar o operador especial `->` infix para deferê-lo. Isso é muito usado, por exemplo, ao trabalhar com listas vinculadas em C
*   O novo tipo definido pode ser usado como outros tipos básicos para quase tudo. Tente, por exemplo, criar uma matriz do tipo `student` e ver como ela funciona.
*   As estruturas podem ser copiadas ou atribuídas, mas você não pode compará-las!