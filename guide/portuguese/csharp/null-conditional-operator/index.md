---
title: Null-conditional Operator
localeTitle: Operador Nulo-Condicional
---
# Operador Nulo-Condicional

Operadores condicionais nulos permitem a verificação nula com uma quantidade mínima de código. Por exemplo, se você tivesse uma variável de funcionário do tipo Funcionário com uma propriedade do tipo Endereço, você pode fazer a verificação nula da seguinte forma:

```csharp
Address address = null; 
 if (employee != null) 
 { 
    address = employee.Address; 
 } 
```

Você poderia usar um operador condicional padrão para tornar essa verificação mais concisa:

```csharp
Address address = employee != null ? employee.Address : null; 
```

No entanto, em C # 6.0 operadores condicionais nulos foram introduzidos, então agora a linha acima pode simplesmente ser representado da seguinte forma:

```csharp
Address address = student?.Address; 
```

Se employee for null, o endereço será simplesmente atribuído como null e não ocorrerá NullReferenceExeception. Isso se torna mais útil com gráficos de objeto mais profundos, já que você pode manipular uma cadeia de acesso a membros condicionais.

Por exemplo:

```csharp
string city = student?.Address?.City; 
```

Operadores condicionais nulos estão em curto-circuito, assim que uma verificação do acesso de membros condicionais retorna null, o resto não ocorre.

# Operador de coalescência nula

Outra opção útil de verificação de nulos é o operador de coalescência nula. Retorna o operando da esquerda se o operando não for nulo; caso contrário, retorna o operando direito.

Por exemplo:

```csharp
public string GetStringValue() 
 { 
    return null; 
 } 
 
 // Display the value of s if s is NOT null. If x IS null, display the string "It was null." 
 
 string x = GetStringValue(); 
 
 Console.WriteLine(x ?? "It was null."); 
 
 // Result: 
 
 "It was null." 

```