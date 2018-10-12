---
title: nameof Expressions
localeTitle: nome de expressões
---
# nome de expressões

Às vezes, você precisa do nome da string de uma variável, tipo ou membro para coisas como levantar uma exceção, registrar ou disparar eventos alterados da propriedade. Antes do C # 6.0, você poderia usar uma string literal para tais finalidades.

# #
```
public void ProcessStudent(Student student) 
 { 
    if (student == null) throw new ArgumentNullException("student"); 
 } 
```

No entanto, se o parâmetro do aluno fosse renomeado, você teria que lembrar de modificar também o literal da string. Agora, com o nome de expressões, você não precisa usar literais de string e o compilador poderá avisá-lo se você estiver usando um nome incorreto.

# #
```
public void ProcessStudent(Student student) 
 { 
    if (student == null) throw new ArgumentNullException(nameof(student)); 
 } 
```

Alguns exemplos de onde o nome das expressões pode ser útil incluem:

*   Lançamento de exceções durante a validação de parâmetros
*   Passando um nome de ação ao configurar links de ação do MVC
*   Precisando passar o nome de uma propriedade ao disparar um evento de propriedade alterada em uma classe que implementa INotifyPropertyChanged
*   Passando o nome de uma propriedade ao registrar uma propriedade de dependência XAML
*   Incluindo uma variável, tipo ou nome de membro ao registrar

Deve-se notar que se você fornecer nameof com um nome qualificado, o compilador irá gerar uma string para o nome mais à direita.